import db from '../models';
import { Op } from 'sequelize';

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

const searchByBookId = async (bookid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                where: { bookId: bookid },
                raw: true
            })
            resolve(books);
        } catch (e) {
            reject(e)
        }
    })
}

const searchByBookTitle = async (title) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                where: {
                    title: {
                        [Op.like]: "%" + title + "%"
                    }
                },
                raw: true
            })
            resolve(books)
        } catch (e) {
            reject(e)
        }
    })
}

const searchByBookISBN = async (isbn) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                where: {
                    isbn: {
                        [Op.like]: "%" + isbn + "%"
                    }
                },
                raw: true
            })
            resolve(books);
        } catch (e) {
            reject(e)
        }
    })
}

const searchBook = async (data) => {
    let books = {};
    if (data.type == '1') {
        books = await searchByBookId(data.value);
    } else if (data.type == '2') {
        books = await searchByBookTitle(data.value);
    } else {
        books = await searchByBookISBN(data.value);
    }
    return books;
}

const orderredId = async (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                order: [
                    ['bookId', type],
                ],
                raw: true
            });
            console.log(books);
            resolve(books);
        } catch (e) {
            reject(e);
        }
    })
}

const orderredPub = async (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                order: [
                    ['publisher', type],
                ],
                raw: true
            });
            console.log(books);
            resolve(books);
        } catch (e) {
            reject(e);
        }
    })
}

const orderred = async (data) => {
    let books = {}
    if (data.aspect == '1') {
        books = await orderredId(data.type);
    } else {
        books = await orderredPub(data.type);
    }
    return data;
}

module.exports = {
    getAllBooks: getAllBooks,
    addBook: addBook,
    getBookById: getBookById,
    editBook: editBook,
    modifyBook: modifyBook,
    searchBook: searchBook,
    orderred: orderred
}