const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');
const config = require('../.env.json');

const PORT = process.env.PORT || 3000;
const app = express();

async function start() {
  try {
    await mongoose.connect(config.db.uri.toString(), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      // reconnectTries: 30,
      // reconnectInterval: 500, // in ms
    })
      .then(() => console.log('DB Connected!'));

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(`${__dirname}/App/App.jsx`));
    // });

    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

app.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent list of items');
});
