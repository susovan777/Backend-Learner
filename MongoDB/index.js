// Learning mongodb

// >> to show all db
show dbs

// >> to enter to a database or to create db
use database_name

// >> to create collection in a db
db.createCollection("collection_name")

// >> to show all collections in a db
show collections

// >> find all documents in a collection
db.collection_name.find().pretty()
db.collection_name.find({filter}).pretty()

// CRUD operation - Create Read Update Delete

// Create Document
db.collection_name.insertOne({})
db.collection_name.insertMany([{}, {},...])




