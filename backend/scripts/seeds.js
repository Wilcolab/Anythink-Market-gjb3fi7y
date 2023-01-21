//TODO: seeds script should come here, so we'll be able to put some data in our local env

let mongoose =require("mongoose");

let UserModel = require("../models/User");
let ItemModel = require("../models/Item");
let CommentModel = require("../models/Comment");
let User = mongoose.model("User");
let Item = mongoose.model("Item");
let Comment = mongoose.model("Comment");

const { faker } = require('@faker-js/faker');

mongoose.connect(process.env.MONGODB_URI);

async function insertFakeRecords(){
    const name = faker.random.alphaNumeric(7);
    const email = faker.internet.email();

    let newUser = new User({
        username: name,
        email: email
    });

    await newUser.save().then(console.log).catch(console.error);

    let newItem = new Item({
        title: faker.random.word()
    });
    await newItem.save().then(console.log).catch(console.error);

    let newComment = new Comment({
        body: faker.random.words()
    });

    await newComment.save().then(console.log).catch(console.error);
}

let promises = []

for(let i=0; i<100; i++){
    promises.push(insertFakeRecords());
}

Promise.all(promises).then(()=>mongoose.disconnect());