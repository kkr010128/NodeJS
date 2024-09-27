const fs = require('fs');

if (fs.existsSync('test')) { // if remove target is exists
    fs.rmdir('test', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('folder deleted');
        }
    });
} else { // if remove target directory not exists
    console.log('folder does not exists!');
}