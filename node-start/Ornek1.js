var http = require('http');
var x = require('./ilkmodule');

http.createServer(function(req, res){

    res.writeHead(200, {'ContentType': 'text/html'}); //dosyanın tipini belirliyoruz res.write  içerisine o tipe ait kod yazıyoruz. 

    res.write("<h1>Hello World </h1>");
    res.write("<p>Evet node js giris yaptik </p>");
 
    res.write("<p id='saat'> </p>");
    setInterval(function(){
        res.write("<script> document.getElementById('saat').innerHTML ='" +x.Zaman() +" '; </script>");  //fonskiyonu daha sonrasında stringe çeviriyorum.
    },1000);


    // res.end();

}).listen(8080);