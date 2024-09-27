const path = require("path")


// 경로 파싱해 분리하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);