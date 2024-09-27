const  fs = require('fs');

let content = `
=====================
let add this senteces
=====================
`;

fs.writeFileSync('text-1.txt', content, {flag: "a"});