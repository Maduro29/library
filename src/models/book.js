'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    //khong can khai bao id
    book.init({
        bookId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        publisher: DataTypes.STRING,
        year: DataTypes.STRING,
        isbn: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'books',
    });
    return book;
};