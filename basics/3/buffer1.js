const fs = require('fs');

fs.readFile('some/work/ex.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);  // print binary data
        console.log('\n');
        console.log(data.toString()); // convert data to string type
    }
});