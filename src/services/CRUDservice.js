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

module.exports = {
    getAllBooks: getAllBooks
}