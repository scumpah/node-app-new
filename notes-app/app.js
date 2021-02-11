const notesUtil = require('./notes.js');
const yargs = require('yargs');


//customize yargs version
yargs.version('1.1.0');

//add,remove,read,list notes

//create add command
yargs.command({
    command:'add', 
    describe: 'add a new note', 
    builder: {
        title: {
            describe: 'Note title!',
            // which means title is a required argument aka mandatory
            demandOption: true,
            // type given so that invalid type of argument is not sent
            type: 'string'
        },
        body: {
            describe: 'Body Description!',
            // which means body is a required argument aka mandatory
            demandOption: true,
            // type given so that invalid type of argument is not sent
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.addNote(argv.title, argv.body);
    }});

//remove command

yargs.command({
    command:'remove', 
    describe: 'removing a new note', 
    builder: {
        title: {
            describe: 'Note title!',
            // which means title is a required argument aka mandatory
            demandOption: true,
            // type given so that invalid type of argument is not sent
            type: 'string'
        }
    },
    handler(argv){
       notesUtil.removeNote(argv.title)
    }});


//list command

yargs.command({
    command:'list', 
    describe: 'listing all notes', 
    handler(){
        notesUtil.listNotes()
    }});

//read command

yargs.command({
    command:'read', 
    describe: 'Reading note by title', 
    builder: {
        title: {
            describe: 'Note title!',
            // which means title is a required argument aka mandatory
            demandOption: true,
            // type given so that invalid type of argument is not sent
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.readNote(argv.title)
    }});


yargs.parse();
// console.log(yargs.argv);
