const fs = require("fs");

fs.appendFile('text-2.txt', '\n\n add new content', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('appending to file');
});