const Repository = require('./Repository.js');
const repository = new Repository();
const uuid = require('uuid');

class NotesService {
   async create(note) {
      const createdNote = await repository.append({ ...note, id: uuid.v4() });
      return createdNote;
   }
   async getAll() {
      const posts = repository.getNotes();
      return posts;
   }
   async getOne(id) {
      if (!id) {
         throw new Error('не указан ID');
      }
      const notes = repository.getNotes();
      const findedIndex = notes.findIndex(note => note.id === id);
      if (findedIndex < 0) {
         throw new Error(`Запись с id = ${id} не найдена`);
      }

      const note = await repository.getByIndex(findedIndex);
      return note;
   }
   async edit(note, id) {
      if (!id) {
         throw new Error('Id не указан');
      }
      const notes = await repository.getNotes();
      const findedIndex = notes.findIndex(noteItem => {
         console.log('noteItem.id = ', noteItem.id);
         console.log('id = ', id);
         return noteItem.id === id;
      });
      console.log('findedIndex = ', findedIndex);
      repository.edit({ ...note, id }, findedIndex);
      // const updatedNote = await repository.edit(note);
      return { ...note, id };
   }
   async delete(id) {
      if (!id) {
         throw new Error('Id не указан');
      }
      const notes = repository.getNotes();

      const deletedIndex = notes.findIndex(note => note.id === id);
      if (deletedIndex < 0) {
         throw new Error(`Запись с id = ${id} не найдена`);
      }
      const deletedNote = repository.delete(deletedIndex);
      // const post = await repository.delete(id);
      return deletedNote;
   }
}

module.exports = NotesService;
