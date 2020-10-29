
//Concept got from Video1:Node,Express,Mongodb

const mongoose = require('mongoose');

//Describe your data
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    } ,
    date: {
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('posts', PostSchema);