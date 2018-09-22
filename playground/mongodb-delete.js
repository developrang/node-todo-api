// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ){
    return console.log('Unable to connect toMongo server.');
  }
  console.log('Connected to Mongo Server.');

  // Delete Many
  //  db.collection('Users').deleteMany({'name':'Pandurang Nanaware'}).then(result => console.log(result));

  // deleteOne
  //db.collection('Users').deleteOne({name:'Keshav Nanaware'});

  // findoneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ba334b0562a0f0d1cb04a1a")});
  // db.collection('Users').findoneAndDelete({_id:new ObjectID('5ba334b0562a0f0d1cb04a1a')});

  // console.log('Closing Mongo Server.');
  // db.close();
});
