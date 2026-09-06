const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({

    title: {
        type: String,
    },

    discription: {
        type: String,
    },

});

const noteModel = mongoose.model("note",noteSchema)
module.exports = noteModel;