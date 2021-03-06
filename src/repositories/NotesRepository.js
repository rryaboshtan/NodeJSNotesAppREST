const uuid = require('uuid');
const options = { month: 'long', day: 'numeric', year: 'numeric' };

class Repository {
   constructor() {
      this.notes = [
         {
            id: uuid.v4(),
            name: 'Shopping list',
            age: 21,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: 'tomatoes, bread',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'The theory of evolution',
            age: 22,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Random Thought',
            content: 'The evolution...',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'New feature',
            age: 23,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Idea',
            content: 'Implement new...',
            dates: '3/5/2021, 5/5/2021',
         },
         {
            id: uuid.v4(),
            name: 'William Gaddis',
            age: 24,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: "Power doesn't co",
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'Books',
            age: 24,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: 'The Lean Startup',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'Other Books',
            age: 25,
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Idea',
            content: 'English learning',
            dates: '3/1/2022, 5/3/2022',
         },
      ];

      this.archivedNotes = []
   }
   append(note) {
      if (!note) {
         throw new Error('Note must not to be null or undefined value')
      }
      this.notes.push(note);
      return note;
   }
   getNotes() {
      return this.notes;
   }
   edit(note, index) {
      this.notes[index] = { ...note };
   }
   getByIndex(index) {
      return this.notes[index];
   }
   delete(index) {
      return (this.notes.splice(index, 1))[0];
   }
   appendArchive(archiveNote) {
      this.archivedNotes.push(archiveNote);
   }
   getArchivedNotes() {
      return this.archivedNotes;
   }
}

module.exports = Repository;
