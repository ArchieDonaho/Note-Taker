const router = require('express').Router();
const { validateNote, postNote } = require('../../lib/api')
const notes = require('../../db/db.json')

//get request
router.get('/notes', (req, res) => {
    res.json(notes);
})

//post request
router.post('/notes', (req, res) => {

    if(!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted!')
    } else {
        newNotes = postNote(req.body, notes)
        res.json(newNotes)
    }
})

module.exports = router;