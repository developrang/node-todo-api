// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ){
    return console.log('Unable to connect toMongo server.');
  }
  console.log('Connected to Mongo Server.');

  db.collection('Users').find().toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
    console.log('----------------------------------------------')
  }, (err) => {
    console.log('Unable to fetch users ', err);
  });


  db.collection('Users').find({name:'Nalini Nanaware'}).toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
    console.log('----------------------------------------------')
  }, (err) => {
    console.log('Unable to fetch users ', err);
  });


  db.collection('Users').find({_id:new ObjectID("5ba334c0735703037c2eeb51")}).toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
    console.log('----------------------------------------------')
  }, (err) => {
    console.log('Unable to fetch users ', err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users ', err)
  });


  // console.log('Closing Mongo Server.');
  // db.close();
});
