const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello, World!");
    res.end();
});

server.listen(8080, () => {
    console.log("server is running on port:8080");
});
