// controllers/imageController.js
const { Image } = require('../models');

// ... other imports ...

// Route to upload an image and save the image URL in the database
const uploadImage = async (req, res) => {
  try {
    const { title, description } = req.body;
  //  const imageUrl = req.file.path; // This is an example; you can generate a URL here

    const image = await Image.create({ title, description });

    res.status(201).json(image);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
};

module.exports = {
    uploadImage
}
// ... other image-related routes ...

