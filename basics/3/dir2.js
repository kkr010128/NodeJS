const fs = require('fs');
if (fs.existsSync('./test2/test3/test4')) { // if dir is exists
    console.log('folder already exists');
} else {
    fs.mkdir('./test2/test3/test3', { recursive: true}, (err) => { // recursion folder
        if(err) {
            console.error(err);
        }
        console.log('folder created!');
    });
}