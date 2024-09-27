const fs = require('fs');

// 리더블 스트림에서 사용하는 이벤트
// Data 데이터를 읽을 수 있을 대마다 발생하는 이벤트, 스트림에서 읽은 데이터를 처리할 때 사용
// end 스트림에서 데이터를 모두 읽었을 때 발생하는 이벤트, 데이터를 모두 읽었다는 사실을 인지하고 이후 작업이 필요할 때 사용
// erro 스트림에서 오류가 생겼을 때 발생하는 이벤트

const readStream = fs.createReadStream('./readMe.txt');

readStream.on('data', (chunk) => {
    console.log('new chunk received:');
    console.log(chunk);
});
readStream.on('end', () => {
    console.log('finished reading data');
});
readStream.on('error', (err) => {
    console.log(`Error reding the file: ${err}`);
})