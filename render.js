const ejs = require('ejs');
const fs = require('fs');

// Read EJS file
const template = fs.readFileSync('hello.ejs', 'utf8');

// Render it
const html = ejs.render(template, { name: 'Star the Coder 🌟' });

console.log(html); // Print rendered HTML
