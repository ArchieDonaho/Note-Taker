const fs = require('fs');
const path = require('path');

function validateNote(body){
    if(!body.title && !body.text){
        return false;
    } 
    return true;
}

function postNote(body, notes){

    notes.push(body)

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),JSON.stringify({ notes }, null, 2)
    )

    return notes;
}

module.exports = { 
    validateNote, 
    postNote 
};