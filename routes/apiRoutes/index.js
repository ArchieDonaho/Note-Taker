const router = require('express').Router();
const { validateNote, postNote } = require('../../lib/api')
const notes = require('../../db/db.json')

//get request
router.get('/notes', (req, res) => {
    res.json(notes);
})

//post request
router.post('/notes', (req, res) => {

    validateNote(req.body)

    postNote(req.body, notes)

    res.json(notes)
})

module.exports = router;