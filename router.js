const Router = require('express');
const notesController = require('./NotesController.js')

const router = new Router();

router.post('/notes', notesController.create);
router.get('/notes/stats', notesController.getStats);
router.get('/notes', notesController.getAll);
router.get('/notes/:id', notesController.getOne);
router.put('/notes/:id', notesController.edit);
router.delete('/notes/:id', notesController.delete);

module.exports = router;