const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method); 

  res.setHeader("Content-Type", "text/plain");
  res.write("node http practice!"); 
  res.end(); 
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
