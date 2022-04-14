const fs = require('fs');
const path = require('path');

function validateNote(body){
    console.log('inside validateNote')
}

function postNote(body, notes){
    console.log('inside postNote')
}

module.exports = { 
    validateNote, 
    postNote 
};