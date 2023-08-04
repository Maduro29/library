import db from '../models';

const getAllBooks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listBooks = await db.books.findAll({
                raw: true
            });
            resolve(listBooks);
        } catch (e) {
            reject(e);
        }
    })
}

const addBook = (book) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.books.create({
                bookId: book.bookId,
                title: book.title,
                publisher: book.publisher,
                year: book.year,
                isbn: book.isbn
            })
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook
}