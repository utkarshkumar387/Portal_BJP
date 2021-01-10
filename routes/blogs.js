module.exports = function (app) {
    app.route('/blogs')
        .get(function (req, res, next) {
            res.render('templates/blogs')
        })
}