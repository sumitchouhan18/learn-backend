const express = require("express");

const app = express();
app.use(express.json());

const notes = [];
//crud operation
// api - post/notes
app.post('/notes',(req,res)=>{
    notes.push(req.body);

    res.status(201).json({
        message:"note created successfully"
    })
    
})

// api ->get/notes
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fatched successfully",
        notes:notes
    })
})

// api ->delete /notes/:1
app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message:"note deleted successfully",
    })
})
// api ->update /notes/:1
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index

    const discription = req.body.discription
    notes[index].discription = discription

    res.status(200).json({
        message:"note updated successfully",
    })
})
module.exports = app;