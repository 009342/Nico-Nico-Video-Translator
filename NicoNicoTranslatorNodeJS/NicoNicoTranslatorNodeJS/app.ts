import { stringify } from "querystring";

var https = require('https');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
app.use(bodyParser.text());
if (!(fs.existsSync("./cert/private.key") && fs.existsSync("./cert/cert.crt"))) {
    console.error('인증서가 존재하지 않습니다.');
}
else {
    https.createServer({ key: fs.readFileSync("./cert/private.key"), cert: fs.readFileSync("./cert/cert.crt") }, app).listen(443, function () {
        console.log("HTTPS 서버가 작동 중 입니다.");
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
            url: 'http://202.248.252.234/api.json',
            body: reqbody
        }, function (error, response, nmsgbody) {
            var jsonbody = JSON.parse(nmsgbody);
            var chats = [];
            var page = [[]];
            for (var i in jsonbody) {
                if (jsonbody[i].chat && jsonbody[i].chat.content) {
                    chats.push(jsonbody[i].chat.content);
                }
            }
            var count = 0;
            var pagecount = 0;

            while (true) {

                for (var strlength = 0; strlength < 5000 && count != chats.length;) {
                    strlength += (chats[count] + "\r\n").length;
                    page[pagecount].push(chats[count++]);
                }
                if (count == chats.length) {
                    break;
                }
                else {
                    page[pagecount + 1].push(page[pagecount].pop());
                    page.push([]);
                    pagecount++;
                }
            }

            res.write(JSON.stringify(jsonbody));
            res.end();
        });
    });
}

