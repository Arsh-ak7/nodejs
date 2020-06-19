const http = require('http');
//Making a static http page
//req= request and res = response
const server = http.createServer((req,res)=>{
    if(req.url==='/'){ //Means if we are in root domain
    res.write('Hello World');
    res.end();
    }
    else{
        res.write('Not in root domain');
        res.end();
    }
})

server.listen('3000');




