// models/image.js
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    // imageUrl: DataTypes.STRING, // Store the image URL
  });

  return Image;
};