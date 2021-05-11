const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.bgGreen("New note added...!"));
  } else {
    console.log(chalk.bgRed("Note title taken!"));
  }
  saveNotes(notes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const rNote = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > rNote.length) {
    console.log(chalk.bgGreen("Note Removed..."));
    saveNotes(rNote);
  } else {
    console.log(chalk.bgRed("Note not found..."));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgRed("Your Notes..."));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.bgGreen(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("Note not found!"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
