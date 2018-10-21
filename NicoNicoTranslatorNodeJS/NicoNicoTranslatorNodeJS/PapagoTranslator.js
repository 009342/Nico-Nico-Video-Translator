var request = require('request');
var uuid = require('uuid');
function GenerateDataParam(query) {
    var base64encoded = Buffer.from(query).toString('base64');
    for (var i = 0; i < 16; i++) {
        var t = base64encoded.charCodeAt(i);
        if ((t >= 'a'.charCodeAt(0) && t <= 'm'.charCodeAt(0)) ||
            (t >= 'A'.charCodeAt(0) && t <= 'M'.charCodeAt(0))) {
            base64encoded = base64encoded.substr(0, i) + String.fromCharCode(t + 13) + base64encoded.substr(i + 1, base64encoded.length - i - 1);
        }
        else if ((t >= 'n'.charCodeAt(0) && t <= 'z'.charCodeAt(0)) ||
            (t >= 'N'.charCodeAt(0) && t <= 'Z'.charCodeAt(0))) {
            base64encoded = base64encoded.substr(0, i) + String.fromCharCode(t - 13) + base64encoded.substr(i + 1, base64encoded.length - i - 1);
        }
    }
    return base64encoded;
}
function GenerateJSON(source, target, text) {
    var dvId = uuid.v1();
    var JSONParam = {
        dict: false,
        dictDisplay: 0,
        source: source,
        target: target,
        text: text,
        deviceId: dvId
    };
    return JSON.stringify(JSONParam);
}
function Translate(source, target, text, mode = 'n2mt') {
    return new Promise(function (resolve, reject) {
        request.post({
            headers: {
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'origin': 'https://papago.naver.com/',
                'referer': 'https://papago.naver.com/'
            },
            url: 'https://papago.naver.com/apis/' + mode + '/translate',
            body: 'data=' + encodeURIComponent(GenerateDataParam(GenerateJSON(source, target, text)))
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body).translatedText);
            }
            else {
                reject(body);
            }
        });
    });
}
module.exports = Translate;
//# sourceMappingURL=PapagoTranslator.js.map