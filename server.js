const { readFile } = require("fs");
const { createServer } = require("http");

const server = createServer();
server.on('request',(req,res) =>{
    res.writeHead(200,{"useless-message":"Howdy"})
    res.write("<h1>Hello, World! ! ! ! </h1>");


readFile('./index.html',(err,file)=>{
    if (err){
        res.statusCode = 404; res.end()
    }
    res.end(file);
    
})
});

server.listen(8080, ()=>{
    console.log('listening on port 8080');
});