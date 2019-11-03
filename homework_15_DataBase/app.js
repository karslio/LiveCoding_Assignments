const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "oguzDB";

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  insertDocuments(db, function() {
    updateDocument(db, function() {
      removeDocument(db, function() {
        client.close();
      });
    });
  });
});

// Location (Name, ShortName, City, Country, Coordinates)
// Title (Album, Location, Member, ViewCount, UploadDate, PrivacyType)
// Album (Title, Description, ViewCount)
// Member (ID, Name, PhoneNumber, Email, Adress)
// The app.js shoudl also contain:
// • 5 distinct Members • 3 different Albums • 3 distinguished Locations • 5 non-identical Photos
// Then
// • Update one of the already created Album • Delete one of the already created Photo • Add 2 more Locations.

// const insertDocuments = function(db, callback) {
//   // • 5 distinct Members
//   // Get the documents collection
//   const collection1 = db.collection("Members");
//   // Insert some documents
//   collection1.insertMany(
//     [
//       {
//         ID: 27291873,
//         Name: "oguz",
//         PhoneNumber: 69023830,
//         Email: "blabla@gmail.com",
//         Adress: "blablabla"
//       },
//       {
//         ID: 20938240,
//         Name: "sevilay",
//         PhoneNumber: 983094280,
//         Email: "blabla@gmail.com",
//         Adress: "blablabla"
//       },
//       {
//         ID: 834098432,
//         Name: "ali",
//         PhoneNumber: 8979238098,
//         Email: "blabla@gmail.com",
//         Adress: "blablabla"
//       },
//       {
//         ID: 9842709480239,
//         Name: "omer",
//         PhoneNumber: 83442094802,
//         Email: "blabla@gmail.com",
//         Adress: "blablabla"
//       },
//       {
//         ID: 3298794380,
//         Name: "ahmet",
//         PhoneNumber: 932840982,
//         Email: "blabla@gmail.com",
//         Adress: "blablabla"
//       }
//     ],
//     function(err, result) {
//       assert.equal(err, null);
//       assert.equal(5, result.result.n);
//       assert.equal(5, result.ops.length);
//       console.log("Inserted 5 members into the Members");
//       callback(result);
//     }
//   );

//   //   3 different Albums
//   //   Album (Title, Description, ViewCount)

//   // Get the documents collection
//   const collection2 = db.collection("Albums");
//   // Insert some documents
//   collection2.insertMany(
//     [
//       {
//         Title: "sindrella",
//         Description: "for kids",
//         ViewCount: 7821387
//       },
//       {
//         Title: "harry",
//         Description: "fantastic",
//         ViewCount: 83742948
//       },
//       {
//         Title: "hero",
//         Description: "dengerous",
//         ViewCount: 928490328
//       }
//     ],
//     function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 albums into the Albums");
//       callback(result);
//     }
//   );
//   //3 distinguished Locations
//   // Get the documents collection
//   const collection3 = db.collection("Locations");
//   // Insert some documents
//   collection3.insertMany(
//     [
//       {
//         Name: "location1",
//         ShortName: "loc1",
//         City: "hardenberg",
//         Country: "nederland",
//         Coordinates: 52.292398
//       },
//       {
//         Name: "location2",
//         ShortName: "loc2",
//         City: "apeldorn",
//         Country: "nederland",
//         Coordinates: 52.938203
//       },
//       {
//         Name: "location3",
//         ShortName: "loc3",
//         City: "delfzijl",
//         Country: "nederland",
//         Coordinates: 52.8737239
//       }
//     ],
//     function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 locations into the Locations");
//       callback(result);
//     }
//   );

//   // Title (Album, Location, Member, ViewCount, UploadDate, PrivacyType)
//   // Get the documents collection
//   const collection4 = db.collection("Photos");
//   // Insert some documents
//   collection4.insertMany(
//     [
//       {
//         Album: "photo1",
//         Location: "england",
//         Member: "yes",
//         ViewCount: 34983742,
//         UploadDate: 2007,
//         PrivacyType: "yes"
//       },
//       {
//         Album: "photo2",
//         Location: "turkey",
//         Member: "no",
//         ViewCount: 29039320,
//         UploadDate: 2008,
//         PrivacyType: "yes"
//       },
//       {
//         Album: "photo3",
//         Location: "germany",
//         Member: "yes",
//         ViewCount: 230993290,
//         UploadDate: 2009,
//         PrivacyType: "no"
//       },
//       {
//         Album: "photo4",
//         Location: "usa",
//         Member: "yes",
//         ViewCount: 230993290,
//         UploadDate: 2010,
//         PrivacyType: "no"
//       },
//       {
//         Album: "photo5",
//         Location: "norvey",
//         Member: "yes",
//         ViewCount: 230993290,
//         UploadDate: 2011,
//         PrivacyType: "no"
//       }
//     ],
//     function(err, result) {
//       assert.equal(err, null);
//       assert.equal(5, result.result.n);
//       assert.equal(5, result.ops.length);
//       console.log("Inserted 5 photos into the Photos");
//       callback(result);
//     }
//   );
// };

// Update one of the already created Album
const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("Albums");
  // Update document where Title is harry, set b equal to 1
  collection.updateOne(
    { title: "hary" },
    { $set: { title: "harrychangedtobarry" } },
    function(err, result) {
      assert.equal(err, null);
      // assert.equal(0, result.result.n);
      console.log("Updated in Album");
      callback(result);
    }
  );
};
