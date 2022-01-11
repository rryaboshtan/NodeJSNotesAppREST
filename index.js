const express = require('express');
// const mongoose = require('mongoose');
const router = require('./router.js');
// const fileUpload = require('express-fileupload');

// const DB_URL = 'mongodb+srv://Roman:jjAAFPnZ46bgbbN@cluster0.w21j6.mongodb.net/Cluster0?retryWrites=true&w=majority';

const PORT = 5000;
const app = express();

app.use(express.json());
// app.use(fileUpload({}));
app.use('', router);
app.use(express.static('static'));

async function startApp() {
   try {
      // await mongoose.connect(DB_URL, {
      //    useUnifiedTopology: true,
      //    useNewUrlParser: true,
      // });

      app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
   } catch (e) {
      console.log(e);
   }
}

startApp();
