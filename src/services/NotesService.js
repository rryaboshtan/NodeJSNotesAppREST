const Repository = require('../repositories/NotesRepository.js');
const { object, string, number, date } = require('yup');
const uuid = require('uuid');

const repository = new Repository();

class NotesService {
   constructor() {
      this.validationSchema = object({
         name: string().required(),
         age: number().required().positive().integer(),
         created: date(),
         category: string(),
         content: string().required(),
         dates: string(),
      });
   }
   async create(note) {
      // YUP implementation
      this.validationSchema.validate(note);
      const createdNote = await repository.append({ ...note, id: uuid.v4() });
      return createdNote;
   }
   async getAll() {
      const notes = repository.getNotes();

      const categories = notes.map(note => note.category);
      const categoriesMap = {};
      for (let i = 0; i < categories.length; i++) {
         const category = categories[i];
         categoriesMap[category] = categoriesMap[category] ? categoriesMap[category] + 1 : 1;
      }
    
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

      const note = repository.getByIndex(findedIndex);
      return note;
   }
   async getStats() {
      const notes = repository.getNotes();
      const archivedNotes = repository.getArchivedNotes();

      let categories = notes.map(note => note.category);
      let archivedCategories = archivedNotes.map(note => note.category);

      const categoriesMap = {};
      const archivedCategoriesMap = {};
      for (let category of categories) {
         categoriesMap[category] = categoriesMap[category] ? categoriesMap[category] + 1 : 1;
      }
      for (let category of archivedCategories) {
         archivedCategoriesMap[category] = archivedCategoriesMap[category] ? archivedCategoriesMap[category] + 1 : 1;
      }

      const categoriesNames = Object.keys(categoriesMap);
      for (let category of categoriesNames) {
         categoriesMap[category] = { active: categoriesMap[category], archived: archivedCategoriesMap[category] || 0};
      }

      return categoriesMap;
   }
   async edit(note, id) {
      if (!id) {
         throw new Error('Id не указан');
      }

      // YUP implementation
      this.validationSchema.validate(note);

      const notes = repository.getNotes();
      const findedIndex = notes.findIndex(noteItem => noteItem.id === id);
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
      return deletedNote;
   }
   async archiveNote(id) {
      if (!id) {
         throw new Error('Id не указан');
      }
      const notes = repository.getNotes();

      const archivedIndex = notes.findIndex(note => note.id === id);
      if (archivedIndex < 0) {
         throw new Error(`Запись с id = ${id} не найдена`);
      }
      const deletedNote = repository.delete(archivedIndex);
      repository.appendArchive(deletedNote);
      return deletedNote;
   }
   async getArchivedNotes() {
      const archivedNotes = repository.getArchivedNotes();

      return archivedNotes;
   }
}

module.exports = NotesService;
