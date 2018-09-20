const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if( err ){
    return console.log('Unable to connect toMongo server.');
  }
  console.log('Connected to Mongo Server.');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name:'Keshav Nanaware',
    age:36,
    location:'India'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })



  console.log('Closing Mongo Server.');
  db.close();
});
