// routes/imageRoutes.js
const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');

router.post('/', imageController.uploadImage)

// ... other image-related routes ...

module.exports = router;
