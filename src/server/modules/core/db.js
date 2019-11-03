const mongoose = require('mongoose');
const config = require('../../../../.env.json');

const db = async function mongoConnection() {
  try {
    await
    mongoose.set('useCreateIndex', true);
    mongoose.set('debug', true);
    mongoose.connect(config.db.uri.toString(), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      reconnectTries: 30,
      reconnectInterval: 500, // in ms
    })
      .then(() => console.log('- db connected -'));
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.on('disconnected', () => {
    console.log('- Mongoose default connection disconnected -');
  });
};


module.exports = db;
