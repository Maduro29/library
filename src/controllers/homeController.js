import CRUDservice from '../services/CRUDservice'

const getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

const getBooksPage = async (req, res) => {
    let listBooks = await CRUDservice.getAllBooks();
    return res.render('routepage/books.ejs', {
        data: listBooks
    });
}

const getAddBook = (req, res) => {
    return res.render('routepage/addbook.ejs');
}

const postBook = async (req, res) => {
    await CRUDservice.addBook(req.body);
    return res.send(req.body);
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
    return res.send('put');
}

const getSearchPage = (req, res) => {
    return res.render('routepage/search.ejs');
}

const getResult = async (req, res) => {
    let books = await CRUDservice.searchBook(req.query);
    return res.render('routepage/books', {
        data: books
    });
}

const getOrder = async (req, res) => {
    let books = await CRUDservice.orderred(req.query);
    return res.render('routepage/orderred.ejs', {
        data: books
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
    getOrder: getOrder
}