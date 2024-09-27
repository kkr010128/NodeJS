const fs = require('fs');


if (!fs.existsSync('text-2.txt')) { // 파일이 존재하지 않을 경우
    console.log('file does not exist!');
} else {
    fs.unlinkSync('text-1.txt', () => {
        console.log('file deleted');
    });
}