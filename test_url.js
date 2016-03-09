console.log('test url connection');
var https = require('https');
var fs = require('fs');

var url = 'https://issue.xadm.tw/issues.xml'

var username = 'ywhuang';
var password = '104.12@yw';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
var header = {'Host': 'issue.xadm.tw','Authorization': auth};

var options = {
    hostname : 'issue.xadm.tw',
    port: 443,
    path : '/issues.xml',
    method : 'GET',
    auth : auth,
    headers : header
};

var req = https.request(options, (res) => {
    console.log('status : ', res.statusCode);
    console.log('headers : ', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.end();

req.on('error', (e) => {
    console.log(e);
})
