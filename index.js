// jshint esversion:6

const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry."],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
}, { versionKey: '_somethingElse' });

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Appel",
    rating: 5,
    review: "bad!!!"
});

fruit.save();

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Erna",
    age: "34",
    favouriteFruit: fruit.name
});

person.save().then(() => console.log('1'));


// 2 finding ways in database 

//1

Fruit.find({ name: "Appel" }).then((res) => {

    console.log(res);
    setTimeout(() => {
        fs.writeFileSync('./db.json', JSON.stringify(res));
    }, 3000);
});

//2
Fruit.find((err) => {
    if (err)
        console.log(err);
    else {

        mongoose.connection.close();
        fruits.foreach((fruit) => {
            console.log(fruit.name);

        });
    }
});

// update

Fruit.updateOne({ _id: "55453535" }, { name: "Peach" }, (err) => {
    if (err)
        console.log(err);
    else
        console.log("succes!!");
});

// delete

Fruit.deleteOne({ name: "Peach" }, (err) => {
    if (err)
        console.log(err);
    else
        console.log("succes!!");
});

