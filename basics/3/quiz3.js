const fs = require("fs");
const path = require("path");

fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        let i = 0;
        files.forEach(file => {
            if (path.extname(file) === '.txt') {
                i++;
            }
        });
        console.log(`number of .txt files: ${i}`);
    }
});


