
const fs = require('fs');
const path = require("path");

let notes = ["Node server", "Window", 'File System', 'Http']

// create and write to file
fs.writeFile('notes.txt', notes, (err) => {
      if (err) throw err;
    console.log('Note saved!');
});

// update a file
fs.appendFile('notes.txt', 'github submission', notes, (err) => {
    if (err) throw err;
    console.log(' Note Updated!');
  });

//   rename a file
fs.renameSync('notes.txt', './note.txt');

// rename directory
fs.renameSync('./NotesApp', './NoteApp');



// const pathToDir = path.join(__dirname, "NotesApp")

// fs.rmdir(pathToDir, (err) => {
//   if (err) {
//     throw err
//   } else {
//     console.log("Successfully removed the empty directory!")
//   }
// });

// append to array of notes
let stream = fs.createWriteStream("note.txt", {flags:'a'});
[...Array(10000)].forEach((item, index) => {
    stream.write(index + "\n");
});
stream.end();