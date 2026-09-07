const express = require('express')
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post("/create", (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message:"token is invalid"
        })
    }

    res.send("Post created successfully");
});

module.exports =router;