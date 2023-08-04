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
    return res.render('routepage/editbook.ejs', {
        data: data
    });
}

const putBook = async (req, res) => {
    await CRUDservice.modifyBook(req.query)
    return res.send('put');
}

module.exports = {
    getHomePage: getHomePage,
    getBooksPage: getBooksPage,
    getAddBook: getAddBook,
    postBook: postBook,
    editBook: editBook,
    putBook: putBook
}