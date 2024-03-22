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
example: 
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

//  Read document
Example:
db.inventory.find({status: "D"})

// Update Document
db.collection_name.updateOne({filter}, {$set: {}})
db.collection_name.updateMany()
Example:
db.inventory.updateOne(
    { item: "paper" }, // filter
    // update
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )

 Example:
 db.inventory.updateMany(
    { "qty": { $lt: 50 } }, // filter
    // update
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )
Example: // For replace
db.inventory.replaceOne(
    { item: "paper" },
    { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
 )

// Delete document
Example:
db.inventory.deleteOne({ status : "A" }) // delete first document
db.inventory.deleteMany({ status : "A" })