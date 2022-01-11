const NotesService = require('./NotesService.js');
const notesService = new NotesService();

class NotesController {
   async create(req, res) {
      try {
         // console.log(req.files);
         const note = await notesService.create(req.body);
         res.json(note);
      } catch (error) {
         res.status(500).json(error);
      }
   }
   async getAll(req, res) {
      try {
         const notes = await notesService.getAll();
         return res.json(notes);
      } catch (error) {
         res.status(500).json(error);
      }
   }
   async getOne(req, res) {
      try {
         const note = await notesService.getOne(req.params.id);
         console.log('Controller', note);
         return res.json(note);
      } catch (error) {
         res.status(500).json(error);
      }
   }
   async getStats(req, res) {
      try {
         const stats = await notesService.getStats();
         return res.json(stats);
      } catch (error) {
         res.status(500).json(error.message);
      }
   }
   async edit(req, res) {
      try {
         const updatedNote = await notesService.edit(req.body, req.params.id);
         console.log('req.body = ', req.body);
         console.log('req.params.id = ', req.params.id);
         return res.json(updatedNote);
      } catch (error) {
         res.status(500).json(error.message);
      }
   }
   async delete(req, res) {
      try {
         const note = await notesService.delete(req.params.id);
         return res.json(note);
      } catch (error) {
         res.status(500).json(error.message);
      }
   }
   async archiveNote(req, res) {
      try {
         const note = await notesService.archiveNote(req.params.id);
         return res.json(note);
      } catch (error) {
         res.status(500).json(error.message);
      }
   }
   async getArchivedNotes(req, res) {
      try {
         const archivedNotes = await notesService.getArchivedNotes();
         return res.json(archivedNotes);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}

module.exports = new NotesController();
