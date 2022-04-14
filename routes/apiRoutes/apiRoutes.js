const router = require('express').Router();
const { validateNote, postNote, deleteNote } = require('../../lib/api')
const { notes } = require('../../db/db.json')

//get request
router.get('/notes', (req, res) => {
    res.json(notes);
})

//post request
router.post('/notes', (req, res) => {
    //add an id to the current note based on the length of the array
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted!')
    } else {
        newNotes = postNote(req.body, notes)
        res.json(newNotes)
    }
})

//delete request
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes)
    
})

module.exports = router;