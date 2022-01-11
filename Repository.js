// const mongoose = require('mongoose');
const uuid = require('uuid');
const options = { month: 'long', day: 'numeric', year: 'numeric' };
// const Post = new mongoose.Schema({
//    author: { type: String, required: true },
//    title: { type: String, required: true },
//    content: { type: String, required: true },
//    picture: { type: String },
// });
// module.exports = mongoose.model('Post', Post);

class Repository {
   constructor() {
      this.notes = [
         {
            id: uuid.v4(),
            name: 'Shopping list',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: 'tomatoes, bread',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'The theory of evolution',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Random Thought',
            content: 'The evolution...',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'New feature',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Idea',
            content: 'Implement new...',
            dates: '3/5/2021, 5/5/2021',
         },
         {
            id: uuid.v4(),
            name: 'William Gaddis',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: "Power doesn't co",
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'Books',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Task',
            content: 'The Lean Startup',
            dates: '',
         },
         {
            id: uuid.v4(),
            name: 'Other Books',
            created: new Date().toLocaleDateString('en-US', options),
            category: 'Idea',
            content: 'English learning',
            dates: '3/1/2022, 5/3/2022',
         },
      ];
   }
   getNotes() {
      return this.notes;
   }
   getById(id) {
      // if (!id) {
      //    throw new Error()
      // }
      // console.log('id =', this.notes);
      const index = this.notes.findIndex(note => {
         console.log(note.id);
         return note.id === id;
      });
      console.log('index = ', index);
      console.log('index = ', this.notes[index]);
      return this.notes[index];
   }
}

module.exports = Repository;
