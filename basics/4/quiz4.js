const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader("Content-Type", "text/html");

    if (method === "GET" && url === "/index") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
        readStream.pipe(res);
    }else if (method === "GET" && url === "/contact") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/contact.html", "utf8");
        readStream.pipe(res);
    } else if (method === "GET" && url === "/about") {
        res.statusCode = 200;
        const readStream = fs.createReadStream(__dirname + "/about.html", "utf8");
        readStream.pipe(res);
        
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});