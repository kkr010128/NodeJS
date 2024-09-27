const fs = require('fs');

const data = fs.readFileSync('some/work/ex.txt', 'utf8');
fs.writeFileSync('text-1.txt', data);
