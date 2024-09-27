const path = require("path"); // Path 모듈 가져오기

//경로 연결
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath); //some/work/ex.txt

console.log(`파일 절대 경로: ${__filename}`);


// 경로 추출하기 
const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

