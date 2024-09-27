const fs = require("fs");

function writeData(filePath, data) {
    fs.writeFile(filePath, data, "utf8", (err) => {
        if (err) {
            console.log(`error to write file : ${err}`);
        } else {
            console.log('file write successed');
        }
    })
}

module.exports = writeData;