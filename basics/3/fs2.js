const fs = require('fs');


// 콜백 메소드 - 파라미터의 인수 값으로 함수 이름을 주는 것(err, files)
fs.readdir('./', (err, files) =>{
    if (err){
        console.log(err);
    }
    console.log(files);
});