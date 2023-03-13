var fs = require('fs');

fs.unlink('fener.js', function(err){
    if(err) throw err;
    console.log("Silindi");
}
);