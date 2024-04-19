const http = require("http");

const server = http.createServer((req,res) => {
    let count = 0;
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.write("hello\n");
    setTimeout(() => {
        res.end("Node js");
    },2000);

});
const log = (count) => {
    count += 1;
    console.log(count);
}
server.listen(8000,() => console.log("hello.js 시작"));