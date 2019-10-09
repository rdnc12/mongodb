// jshint esversion:6 

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'homework';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server

function methodForm(methodName) {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        methodName(db, function () {
            client.close();
        });
    });
}
// insert section

const insertDocuments = function (db, callback) {

    const collection = db.collection('location');
    const collection1 = db.collection('title');
    const collection2 = db.collection('album');
    const collection3 = db.collection('member');

    collection.insertMany([
        {
            name: 'sfdgvf',
            shortName: 'vvv',
            city: 'arfar',
            country: 'afds',
            coordinates: 5675445
        }, {
            name: 'erer',
            shortName: 'fsgbdb',
            city: 'vfdsvg',
            country: 'yuiu',
            coordinates: 'khh'
        }, {
            name: 'eretg',
            shortName: 'bnn',
            city: 'jjui',
            country: 'wtgt',
            coordinates: 'rtrt'
        }, {
            name: 'erter',
            shortName: 'mmkkmkm',
            city: 'yyykyky',
            country: 'gghhg',
            coordinates: 'ttyyyg'
        }, {
            name: 'rtyy',
            shortName: 'rrere',
            city: 'yyyggg',
            country: 'ooppttt',
            coordinates: 'tttgg'
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(5, result.result.n);
        assert.equal(5, result.ops.length);
        console.log("Inserted 5 documents into the location collection");
        callback(result);
    });

    collection1.insertMany([
        {
            album: 'sgtb',
            location: 'sdfbvg',
            member: 'fdhnh',
            viewcount: 'dsgt',
            uploaddate: 'erteg',
            privacytype: 'sbtgb'
        },
        {
            album: 'sbxb',
            location: 'ndn',
            member: 'rtyt',
            viewcount: 'kjj',
            uploaddate: 'sfxs',
            privacytype: 'ewew'
        },
        {
            album: 'reaa',
            location: 'aga',
            member: 'gaaaa',
            viewcount: 'gggg',
            uploaddate: 'rty',
            privacytype: 'kjh'
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the title collection");
        callback(result);
    });

    collection2.insertMany([
        {
            title: 'teer',
            description: 'fgbb',
            viewcount: 'sdf'
        },
        {
            title: 'etgrg',
            description: 'xfdsgvgb',
            viewcount: 'qqwewe'
        },
        {
            title: 'sgb',
            description: 'vvbb',
            viewcount: 'ere'
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the album collection");
        callback(result);
    });

};

//methodForm(insertDocuments);

// update

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('album');
    // Update document where a is 2, set b equal to 1
    collection.updateOne(
        {
            title: 'sgb',
            description: 'vvbb',
            viewcount: 'ere'
        },
        {
            $set: {
                title: 12324,
                description: 234,
                viewcount: 444
            }
        }, function (err, result) {
            assert.equal(err, null);
            assert.equal(0, result.result.n);
            console.log("Updated the document with your wishes");
            callback(result);
        });
};
//methodForm(updateDocument);
// remove

const removeDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('location');
    // Delete document where a is 3
    collection.deleteOne({ name: 'sfdgvf' }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with your wishes");
        callback(result);
    });
};

methodForm(removeDocument);
