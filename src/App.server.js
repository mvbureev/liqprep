const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');
const config = require('../.env.json');

const app = express();

async function start() {
  try {
    await mongoose.connect(config.db.uri.toString(), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      reconnectTries: 30,
      reconnectInterval: 500, // in ms
    })
      .then(() => console.log('DB Connected!'));

    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('/api/getList', (req, res) => {
      const list = ['item1', 'item2', 'item3'];
      res.json(list);
      console.log('Sent list of items');
    });

    app.get('*', (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`));
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (error) {
    console.log(error);
  }
}

start();
