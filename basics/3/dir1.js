const fs = require('fs');

if (fs.existsSync('./test')) {
    // if test dir is exists
    console.log('folder already exists');
} else {
    fs.mkdir('./test', (err) => {
        if (err) {
            console.error(err);
        }
        console.log('folder created');
    });
}