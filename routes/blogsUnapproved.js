module.exports = function (app) {
    app.route('/blogsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/blogsUnapproved')
        })
}