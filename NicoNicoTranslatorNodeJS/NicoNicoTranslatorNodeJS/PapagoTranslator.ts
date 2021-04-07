var request = require('request');
var uuid = require('uuid');
var crypto = require('crypto');
var querystring = require('querystring');
var dvId = uuid.v1();

function GenerateBody(source, target, text) {
    var body = {
        'deviceId': dvId,
        'locale': 'ko',
        'dict': false,
        'dictDisplay': 0,
        'honorific': false,
        'instant': false,
        'paging': false,
        'source': source,
        'target': target,
        'text': text
    };
    return body;
}
function GetAuthoriziation(deviceId, url, timestamp) {
    var hmac = crypto.createHmac('md5', 'v1.' + '5.6' + '_9' + '7f' + '69' + '18' + '302');
    var data = hmac.update(deviceId + '\n' + url + '\n' + timestamp);
    var result = data.digest('base64');
    return result;
}
function Translate(source, target, text, mode = 'n2mt') {
    var timestamp = (new Date).getTime();

    return new Promise(function (resolve, reject) {
        request.post({
            headers: {
                'Accept': 'application/json',
                'Accept-Language': 'ko',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://papago.naver.com/',
                'Referer': 'https://papago.naver.com/',
                'Timestamp': timestamp,
                'Authorization': "PPG " + dvId + ":" + GetAuthoriziation(dvId, 'https://papago.naver.com/apis/' + mode + '/translate', timestamp)
            },
            url: 'https://papago.naver.com/apis/' + mode + '/translate',
            body: querystring.stringify(GenerateBody(source, target, text))
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body).translatedText);
            }
            else {
                reject(body);
            }
        }
        );
    })

}

module.exports = Translate;