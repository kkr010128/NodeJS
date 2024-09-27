const fs = require("fs");

fs.readFile("some/work/ex.txt", (err, data) => {
    let files = fs.readdirSync('./');
    console.log(files);
});



// 동기 처리 - 절차지향
// 콜백 메소드 설명  A작업 도중 B작업이 완료되기 전까지 A 작업 중단
// 프로미스 설명 // 비동기 처리하기 위해 사용

// readdir 비동기 처리로 디렉토리 읽기
// 디렉토리를 읽는 동안 시간이 걸리므로 빠르게 처리할 수 있는 다른 일부터 처리하는 것