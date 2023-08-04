'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class book_author extends Model {
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
    book_author.init({
        bookId: DataTypes.STRING,
        authorId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'book_author',
    });
    return book_author;
};