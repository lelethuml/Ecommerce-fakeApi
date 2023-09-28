const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');

// Create a new image
router.post('/', imageController.createImage);

// Get a list of all images
router.get('/', imageController.getAllImages);

module.exports = router;
