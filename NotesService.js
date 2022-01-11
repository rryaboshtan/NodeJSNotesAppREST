const Repository = require('./Repository/NotesRepository.js');
const repository = new Repository();
const uuid = require('uuid');

class NotesService {
   async create(note) {
      const createdNote = await repository.append({ ...note, id: uuid.v4() });
      return createdNote;
   }
   async getAll() {
      const notes = repository.getNotes();

      //  const notes = repository.getNotes();
      const categories = notes.map(note => note.category);
      const categoriesMap = {};
      for (let i = 0; i < categories.length; i++) {
         const category = categories[i];
         categoriesMap[category] = categoriesMap[category] ? categoriesMap[category] + 1 : 1;
      }
      // console.log(categoriesMap);
      // const set = new Set(categories);
      // console.log('set = ', set);
      return notes;
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
   async getStats() {
      const notes = repository.getNotes();

      let categories = notes.map(note => note.category);
      
      const categoriesMap = {};
      for (let category of categories) {
         categoriesMap[category] =  categoriesMap[category] ? categoriesMap[category] + 1 : 1;
      }
      const categoriesNames = Object.keys(categoriesMap);
      for (let category of categoriesNames) {
         categoriesMap[category] = { active: categoriesMap[category] };
      }

      return categoriesMap;
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
