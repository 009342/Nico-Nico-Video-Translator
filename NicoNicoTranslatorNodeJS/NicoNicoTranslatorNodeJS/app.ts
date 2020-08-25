import { stringify } from "querystring";

const dns = require('dns');
var https = require('https');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var PapagoTranslator = require('./PapagoTranslator');
var version = '1.3';
var ip = '255.255.255.255';
app.use(bodyParser.text());
console.log('');
console.log('NicoNicoTranslator (' + version + '-nodejs)');
console.log('오류 제보 : https://github.com/009342/Nico-Nico-Video-Translator/issues');
console.log('제작자 블로그 : http://sshbrain.tistory.com');
console.log('');

dns.resolve('nmsg.nicovideo.jp', (err, result) => {

    if (err) {
        console.log('nmsg.nicovideo.jp의 IP주소를 가져오는데 실패하였습니다.');
        console.error(`에러: ${err}`)
    } else {
        console.log('nmsg.nicovideo.jp : ' + result)
        ip = result;
    }
})

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

if (!(fs.existsSync("./cert/private.key") && fs.existsSync("./cert/cert.crt"))) {
    console.error('인증서가 존재하지 않습니다.');
}
else {
    https.createServer({ key: fs.readFileSync("./cert/private.key"), cert: fs.readFileSync("./cert/cert.crt") }, app).listen(443, function () {
        console.log("HTTPS 서버가 작동 중입니다.");
    });
    app.post('/api.json', function (req, res) {
        res.writeHead(200,
            {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,HEAD',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/json; charset=UTF-8'
            });
        var reqbody = req.body;
        request.post({
            headers: { 'content-type': 'text/plain' },
            url: 'http://' + ip + '/api.json',
            body: reqbody
        }, async function (error, response, nmsgbody) {
            var jsonbody = JSON.parse(nmsgbody);
            var chats = [];
            var page = [[]];
            for (var i in jsonbody) {
                if (jsonbody[i].chat && jsonbody[i].chat.content) {
                    var str = jsonbody[i].chat.content.replace(/\n/g, "\u21B5"); //최대한 안 쓰일 것 같은 문자(↵)로 배정, 나중에 문제생기면 누가 고쳐주시면 감사하겠습니다.
                    chats.push(str);
                }
            }
            var count = 0;
            var pagecount = 0;

            while (true) {

                for (var strlength = 0; strlength < 4000 && count != chats.length;) {
                    strlength += (chats[count] + "\r\n").length;
                    page[pagecount].push(chats[count++]);
                }
                if (count == chats.length) {
                    break;
                }
                else {
                    page.push([]);
                    page[pagecount + 1].push(page[pagecount].pop());
                    pagecount++;
                }
            }
            var result = "";
            count = 0;
            for (var c = 0; c < page.length; c++) {
                var temp = "";

                for (var k = 0; k < page[c].length; k++) {
                    temp += page[c][k] += "\r\n";
                    count++;
                }
                if (c != 0) await sleep(2000);
                result += await PapagoTranslator('ja', 'ko', temp, 'n2mt') + "\r\n";
                console.log(count + "/" + chats.length + "완료");
            }
            var results = result.split(/\r?\n/);
            c = 0;
            for (var i in jsonbody) {
                if (jsonbody[i].chat && jsonbody[i].chat.content) {
                    jsonbody[i].chat.content = results[c++].replace(/\u21B5/g, "\n");
                }
            }
            res.write(JSON.stringify(jsonbody));
            res.end();
        });
    });
}

