const express = require('express');
const authControlller = require('../controllers/auth.controller')
const router = express.Router();

// post /api/auth/register
router.post("/register",authControlller.registerUser)
module.exports = router;