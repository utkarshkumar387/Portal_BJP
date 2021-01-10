module.exports = function (app) {
    app.route('/blogsRejected')
        .get(function (req, res, next) {
            res.render('templates/blogsRejected')
        })
}