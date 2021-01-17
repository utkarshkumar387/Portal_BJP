module.exports = function (app) {
    app.route('/blogsView')
        .get(function (req, res, next) {
            res.render('templates/blogsView')
        })
}