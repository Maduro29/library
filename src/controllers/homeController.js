import CRUDservice from '../services/CRUDservice'

const getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

const getBooksPage = async (req, res) => {
    let listBooks = await CRUDservice.getAllBooks();
    return res.render('routepage/books.ejs', {
        data: listBooks,
        isSearch: 0
    });
}

const getAddBook = (req, res) => {
    return res.render('routepage/addbook.ejs');
}

const postBook = async (req, res) => {
    await CRUDservice.addBook(req.body);
    return res.render('routepage/afterpost.ejs');
}

const editBook = async (req, res) => {
    const data = await CRUDservice.getBookById(req.query.id);
    console.log(data);
    return res.render('routepage/editbook.ejs', {
        data: data
    });
}

const putBook = async (req, res) => {
    await CRUDservice.modifyBook(req.query)
    return res.render('routepage/afterpost.ejs');
}

const getSearchPage = (req, res) => {
    return res.render('routepage/search.ejs');
}

const getResult = async (req, res) => {
    let books = await CRUDservice.searchBook(req.query);
    return res.render('routepage/books.ejs', {
        data: books,
        isSearch: 1
    });
}

const getOrder = async (req, res) => {
    let books = await CRUDservice.orderred(req.query);
    return res.render('routepage/orderred.ejs', {
        data: books
    });
}

const exportData = async (req, res) => {
    return res.render('routepage/export.ejs');
}

const doneExport = async (req, res) => {
    await CRUDservice.exportXLSX(req.query);
    return res.render('routepage/afterpost.ejs');
}

const importData = (req, res) => {
    return res.render('routepage/import.ejs');
}

const doneImport = (req, res) => {
    const data = CRUDservice.importXLSX(req);
    console.log(data);
    return res.render('routepage/afterimport', {
        message: data.message,
        code: data.code
    })
}

const getAuthors = async (req, res) => {
    let listAuthors = await CRUDservice.getAllAuthors();
    return res.render('routepage/authors.ejs', {
        data: listAuthors,
    });
}

module.exports = {
    getHomePage: getHomePage,
    getBooksPage: getBooksPage,
    getAddBook: getAddBook,
    postBook: postBook,
    editBook: editBook,
    putBook: putBook,
    getSearchPage: getSearchPage,
    getResult: getResult,
    getOrder: getOrder,
    exportData: exportData,
    doneExport: doneExport,
    importData: importData,
    doneImport: doneImport,
    getAuthors: getAuthors
}