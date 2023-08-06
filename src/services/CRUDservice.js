import db from '../models';
import { Op } from 'sequelize';
import XLSX from 'xlsx';

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
                authors: book.authors,
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
            book.authors = data.authors;
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

const searchByBookAuthors = async (authors) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.books.findAll({
                where: {
                    authors: {
                        [Op.like]: "%" + authors + "%"
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
    } else if (data.type == '3') {
        books = await searchByBookISBN(data.value);
    } else {
        books = await searchByBookAuthors(data.value);
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
    return books;
}

const exportXLSX = async (data) => {
    const books = await db.books.findAll({
        raw: true
    });

    let worksheet = XLSX.utils.json_to_sheet(books);

    var workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, data.fileName ? data.fileName + '.xlsx' : 'data_export.xlsx');

    return;
}

const checkImport = (fileName) => {
    const fileExt = fileName.split('.').pop();
    return fileExt === 'xlsx';
}

const checkDataImport = (data) => {
    if (data && Object.keys(data[0]).length === 6) {
        const keys = Object.keys(data[0]);
        if (keys[0] === 'bookId' &&
            keys[1] === 'title' &&
            keys[2] === 'authors' &&
            keys[3] === 'publisher' &&
            keys[4] === 'year' &&
            keys[5] === 'isbn') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const importXLSX = (data) => {
    const result = {}
    const checkExt = checkImport(data.query.fileName);
    if (!checkExt) {
        result.message = "Wrong format file";
        result.code = 1;
        return result;
    } else {
        const workbook = XLSX.readFile(data.query.fileName);
        const sheet_name_list = workbook.SheetNames;
        const books = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        if (!checkDataImport(books)) {
            result.message = "Wrong data in file";
            result.code = 1;
            return result;
        } else {
            for (let i = 0; i < books.length; i++) {
                addBook(books[i]);
            }
            result.message = "Import done";
            result.code = 0;
            return result;
        }
    }
}

const getAllAuthors = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listAuthors = await db.authors.findAll({
                raw: true
            });
            resolve(listAuthors);
        } catch (e) {
            reject(e);
        }
    })
}

const deleteBook = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.books.destroy({
                where: { id: data.id },
            });
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
    modifyBook: modifyBook,
    searchBook: searchBook,
    orderred: orderred,
    exportXLSX: exportXLSX,
    importXLSX: importXLSX,
    getAllAuthors: getAllAuthors,
    deleteBook: deleteBook
}