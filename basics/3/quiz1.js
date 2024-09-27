const fs = require('fs');
if (fs.existsSync('./mine')) { // if mine dir is exists
    console.log('folder already exists');
} else {
    fs.mkdir('./mine', (err) => { 
        if(err) {
            console.error(err);
        }
        console.log('folder created!');
    });
}