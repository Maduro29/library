import db from '../models';

const getAllBooks = async () => {
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

const addBook = async (book) => {
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

const getBookById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: { id: id },
                raw: true
            })
            resolve(book);
        } catch (e) {
            reject(e)
        }
    })
}

const editBook = async (id) => {
    let book = await getBookById(id);
    console.log(book);
    return;
}

const modifyBook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: { id: data.id },
            });
            book.bookId = data.bookId;
            book.title = data.title;
            book.publisher = data.publisher;
            book.year = data.year;
            book.isbn = data.isbn;
            await book.save();
            resolve();
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    getBookById: getBookById,
    editBook: editBook,
    modifyBook: modifyBook
}