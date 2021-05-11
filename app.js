const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// isEmail method of validator npm package
console.log(validator.isEmail("jyotikm1801@gmail.com"));

// isURL method of validator npm package
console.log(validator.isURL("linktr.ee/jyotikm1801"));

// Print "SUCCESS..." in green color
console.log(chalk.green("SUCCESS..."));
console.log(chalk.red.bold("SUCCESS...!!!"));
console.log(chalk.green.bgRed.bold("Jyoti Kumari"));
console.log(chalk.green.bold("Jyoti Guria"));
console.log(process.argv);
console.log(process.argv[2]);
const command = process.argv[2];
if (command === "add") {
  console.log("Adding Note...");
} else if (command === "remove") {
  console.log("Removing Note...");
}
//Customize yargs version
yargs.version("1.1.0");

// yargs command

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function (argv) {
    notes.listNotes(argv.title);
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title);
  },
});
//
console.log(yargs.argv);
