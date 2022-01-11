// const repository = require('./Repository.js');
const notesService = require('./NotesService.js');

class NotesController {
   async create(req, res) {
      // try {
      //    console.log(req.files);
      //    const post = await postService.create(req.body, req.files.picture);
      //    res.json(post);
      // } catch (error) {
      //    res.status(500).json(error);
      // }
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
   async edit(req, res) {
      // try {
      //    const updatedPost = await postService.edit(req.body);
      //    return res.json(updatedPost);
      // } catch (error) {
      //    res.status(500).json(error.message);
      // }
   }
   async delete(req, res) {
      // try {
      //    const post = await postService.delete(req.params.id);
      //    return res.json(post);
      // } catch (error) {
      //    res.status(500).json(error);
      // }
   }
}

module.exports = new NotesController();
