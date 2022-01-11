const Router = require('express');
const notesController = require('../controllers/NotesController')

const router = new Router();

router.post('/notes', notesController.create);
router.get('/notes/stats', notesController.getStats);
router.get('/notes', notesController.getAll);
router.get('/notes/:id', notesController.getOne);
router.put('/notes/:id', notesController.edit);
router.delete('/notes/:id', notesController.delete);
router.delete('/archivenote/:id', notesController.archiveNote);
router.get('/archivednotes', notesController.getArchivedNotes);

module.exports = router;