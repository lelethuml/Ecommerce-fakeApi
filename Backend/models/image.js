module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  });
  

  return Image;
};


// const Image = sequelize.define('Image', {
//   title: DataTypes.STRING,
//   description: DataTypes.STRING,
//   imageUrl: DataTypes.STRING,
// });
