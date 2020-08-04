
const fs = require('fs');

let notes = ["Node server", "Window", 'File System', 'Http']


fs.writeFile('notes.txt', notes, (err) => {
      if (err) throw err;
    console.log('Note saved!');
});