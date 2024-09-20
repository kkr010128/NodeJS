const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 사용자가 남은 시간을 입력받는 부분
rd.question('타이머 시간 설정(ms): ', (input) => {
    let remainingTime = parseInt(input, 10); // 입력된 값을 숫자로 변환

    if (isNaN(remainingTime) || remainingTime <= 0) {
        console.log('유효하지 않은 시간입니다');
        rd.close();
        return;
    }

    const waitingInterval = 1000; // 대기 시간 간격을 1초로 설정

    // 타이머 시작
    const timer = setInterval(() => {
        console.log(`${remainingTime / 1000}초 남았습니다.`);
        remainingTime -= waitingInterval;

        if (remainingTime <= 0) {
            console.log(`00초가 되었습니다`);
            clearInterval(timer);
            rd.close(); // 타이머가 종료시 readline 인터페이스 종료
        }
    }, waitingInterval);
});