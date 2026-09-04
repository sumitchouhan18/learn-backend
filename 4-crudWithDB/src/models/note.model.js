const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:String,
    discription:string,
})

const noteModel = mongoose.model("note",noteSchema)
module.exports = noteModel;