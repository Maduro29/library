const getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

const getAboutPage = (req, res) => {
    return res.render('routepage/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}