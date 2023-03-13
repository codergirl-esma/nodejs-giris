var http = require('http');
var fs = require('fs');
//write file:içeriğini değiştiriyor.
http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    fs.readFile('yazi.html', function(err,data){
        if(err) throw err;
        res.write(data);

        fs.writeFile('yazi.html','<h1>Bu degistirilmis yazidir.</h1>',function(err){
            if(err) throw err;
            console.log("Degistirildi.");
        })


    })
    //writeFile : İÇERİSİNDEKİ YAZIYI SİLİP YAZIYI GÜNCELLER.
              //BÜTÜN DOSYAYI SİLİP BAŞTAN YAZİYOOOR!!
}).listen(8080);