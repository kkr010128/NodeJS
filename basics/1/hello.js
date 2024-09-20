const c = require('ansi-colors'); // 상수 선언

function hello(name){ // 함수 선언과 파라미터(매개변수)
    console.log(c.cyanBright(name)+c.bgBlue("님, 안녕하세요")+c.italic("?")); // 출력
}

hello("김광래") // 함수 호출
