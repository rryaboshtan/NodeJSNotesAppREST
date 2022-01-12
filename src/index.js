const express = require('express');
const router = require('./routes/router');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use('', router);
app.use(express.static('static'));

async function startApp() {
   try {
      app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
   } catch (e) {
      console.log(e);
   }
}

startApp();
