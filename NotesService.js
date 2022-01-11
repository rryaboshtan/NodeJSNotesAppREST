const Repository = require('./Repository.js');
// const fileService = require('./FileService.js')
const repository = new Repository();

class NotesService {
   async create(post, picture) {
      //  const fileName = fileService.saveFile(picture);
      //  const createdPost = await Post.create({...post, picture: fileName});
      // return createdPost;
   }
   async getAll() {
      const posts = repository.getNotes();
      return posts;
   }
   async getOne(id) {
      if (!id) {
         throw new Error('не указан ID');
      }
      const note = await repository.getById(id);
      console.log('Service', note);
      return note;
   }
   async edit(post) {
      if (!post._id) {
         throw new Error('Id не указан');
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      return updatedPost;
   }
   async delete(id) {
      if (!id) {
         throw new Error('Id не указан');
      }
      const post = await Post.findByIdAndDelete(id);
      return post;
   }
}

module.exports = new NotesService();
