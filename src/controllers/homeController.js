import CRUDservice from '../services/CRUDservice'

const getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

const getBooksPage = async (req, res) => {
    let listBooks = await CRUDservice.getAllBooks();
    console.log(listBooks);
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

module.exports = {
    getHomePage: getHomePage,
    getBooksPage: getBooksPage,
    getAddBook: getAddBook,
    postBook: postBook
}