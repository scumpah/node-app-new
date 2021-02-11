const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    // avoid duplicate titles
    // const duplicateNotes = notes.filter(note => 
    //     note.title === title
    // );
    const duplicateNote = notes.find(note => note.title === title);
    if(duplicateNote) {
        console.log(chalk.red.inverse('Invalid title! Duplicate found already!!'));
    } else {
    const newNote = {
        title: title,
        body: body
    };
    notes.push(newNote);
    console.log(chalk.green.inverse('Note added successfully!!'));
    saveNotes(notes);
}
}

const removeNote = (title) => {
    var notes = loadNotes();
    const originalLength = notes.length;
    notes.forEach(note => {
        if(note.title == title) {
            const i = notes.indexOf(note);
            console.log(i);
            notes.splice(i,1);
        }
    });
    if(originalLength === notes.length) {
        console.log(chalk.red.inverse('Title not found!!'));
    } else {
        console.log(chalk.green.inverse('Title removed successfully'));
        saveNotes(notes);
}
}


const readNote = (title) => {
    var notes = loadNotes();
    const nodeData = notes.find(note => note.title === title);
    if(!nodeData) {
        console.log(chalk.red.inverse('Note not found!!'));
    } else {
        console.log('Title: ' + chalk.green.inverse(nodeData.title) + '  Body: ' + nodeData.body);
}
}


const listNotes = () => {
    const notes = loadNotes();
    if(notes.length === 0) {
        console.log(chalk.red.inverse('No notes found'));
    } else {
        console.log(chalk.green.inverse('Notes found!!'));
        console.log(JSON.stringify(notes));
    }
}

const loadNotes = () => {
    //create an empty array if notes.json doesn't exist
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const result = JSON.stringify(notes);
    fs.writeFileSync('notes.json',result);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes,
};