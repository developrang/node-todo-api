// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ){
    return console.log('Unable to connect toMongo server.');
  }
  console.log('Connected to Mongo Server.');

    db.collection('Users').findOneAndUpdate({
      _id:new ObjectID("5ba631183f23891254cdab4c")
    }, {
      $set : {
        name: 'Pandurang Nanaware',
      },
      $inc: {
        age:1
      }
    }, {
      returnOriginal:false
    })

  // console.log('Closing Mongo Server.');
  // db.close();
});
