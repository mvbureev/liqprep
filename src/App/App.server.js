const express = require('express');
const mongoose = require('mongoose');
const config = require('../../.env.json');

const PORT = process.env.PORT || 3001;
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
    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (error) {
    console.log(error);
  }
}

start();
