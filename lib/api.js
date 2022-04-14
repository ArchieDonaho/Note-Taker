const fs = require('fs');
const path = require('path');

//even though the front wont show the save button unless there's content, we have this here jsut in case
function validateNote(body){
    if(!body.title && !body.text){
        return false;
    } 
    return true;
}

//handles posting the new note
function postNote(body, notes){
    notes.push(body)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),JSON.stringify({ notes }, null, 2)
    )
    return notes;
}

//handles deletion of the selected note
function deleteNote(id, notes){
    console.log(`deleting id: ${id}`)
    notes = notes.splice(id, 1)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),JSON.stringify({ notes }, null, 2)
    )
    return notes;
}

module.exports = { 
    validateNote, 
    postNote,
    deleteNote 
};