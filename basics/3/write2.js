const fs = require('fs');

const data = fs.readFileSync('some/work/ex.txt', 'utf8');
if (fs.existsSync('text-1.txt')){ // text-1.txt 파일이 없다면
    console.log("file already exist");
} else {
    fs.writeFileSync('text-1.txt', data);
}