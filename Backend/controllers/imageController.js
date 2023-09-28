// const { Image } = require('../models');

const db = require("../models");


const Image = db.image;

// Create a new image and save it in the database
const createImage = async (req, res) => {

    const {data} = req.body;

    console.log(data, " images from the database")
  try {
    

    const image = await Image.create(data);

    res.status(201).json(image);
  } catch (error) {
    console.error('Error creating image:', error);
    res.status(500).json({ error: 'Image creation failed' });
  }
};

// Retrieve a list of all images from the database
const getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();

    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Image retrieval failed' });
  }
};

module.exports = {
  createImage,
  getAllImages,
};
