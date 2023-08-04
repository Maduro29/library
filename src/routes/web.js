import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/books', homeController.getBooksPage);
    router.get('/addbook', homeController.getAddBook);


    return app.use('/', router);
}

module.exports = initWebRoutes