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
    return res.send('okeoke');
}

module.exports = {
    getHomePage: getHomePage,
    getBooksPage: getBooksPage,
    getAddBook: getAddBook
}