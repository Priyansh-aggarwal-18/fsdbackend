const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="background: green; color: white">HELLO WORLD!</h1>')

});

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log('Server is running on port 9000');

});