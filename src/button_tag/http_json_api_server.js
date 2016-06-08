
var http=require('http');
var url=require('url');
var path=require('path');

var server=http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'application/json' });


    var url_parese=url.parse(req.url,true);
    var path_basename=path.basename(url_parese.pathname);

    var iso = new Date();
    var hour = iso.getHours();
    var minute = iso.getMinutes();
    var second = iso.getSeconds();
    var unixtime=iso.getTime();

    var result_parse = {
        "hour": hour,
        "minute": minute,
        "second": second
    };
    var result_unix={
        "unixtime":unixtime
    }

    if(path_basename=='parsetime') {
        res.write(JSON.stringify(result_parse));
    }
    if(path_basename=='unixtime'){
        res.write(JSON.stringify(result_unix));


    }
    res.end();

});

server.listen(8080)