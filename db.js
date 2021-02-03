const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pupan:pupan1er@cluster0.v4fge.mongodb.net/PUPANLAB1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});