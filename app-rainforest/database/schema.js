module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true
    },
    name: DataTypes.STRING,
    image_1_url: {
      type: DataTypes.STRING
    },
    image_2_url: {
      type: DataTypes.STRING
    },
    image_3_url: {
      type: DataTypes.STRING
    },
    image_4_url: {
      type: DataTypes.STRING
    },
    image_5_url: {
      type: DataTypes.STRING
    },
    image_6_url: {
      type: DataTypes.STRING
    },
    video_url: {
      type: DataTypes.STRING
    },
    categories: {
      type: DataTypes.STRING
    }
  });
}

// module.exports = (sequelize, DataTypes) => {
//   return sequelize.define('product', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       unique: true
//     },
//     name: DataTypes.STRING,
//     image_1_url: DataTypes.STRING,
//     image_2_url: DataTypes.STRING,
//     image_3_url: DataTypes.STRING,
//     image_4_url: DataTypes.STRING,
//     image_5_url: DataTypes.STRING,
//     image_6_url: DataTypes.STRING,
//     video_url: DataTypes.STRING,
//   });
// }