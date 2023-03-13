var http = require('http'); //require: hazır olan kütüphaneyi çağırır.
var x = require('./ilkmodule'); //modulu anasayfada çağırdık

http.createServer(function(req ,res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //text/html yazımına dikkat et.
    res.write('<h1> Hello World </h1>');
    res.write('<b>Suan ki tarih ve zaman :'+ x.Zaman() + '</b>')
    res.end(); //her zaman serveri çağırdıktan sonra sonlandırmak gerekir.

}).listen(8080); //8080 > http port numarası


