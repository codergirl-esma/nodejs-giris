var http = require('http');
var url = require('url');

http.createServer(function(req, res){

    var bilgi = url.parse(req.url, true).query; //bilgileri çekiyoruz

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("Kullanici adi :"+bilgi.username +"<br> Kullanici Sifresi :" + bilgi.password);
   
    var isim = "esmanur";
    var sifre = 123;

    if(isim == bilgi.username && sifre === bilgi.password){
        res.write("<br>Ekranda gonderilen bilgiler dogrudur.");
    }
    else{
        res.write("<br>Ekranda gonderilen bilgiler hatalidir.");
    }
  
   
    res.end();


}).listen(8080);