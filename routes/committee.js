module.exports = function (app) {
    app.route('/committees')
        .get(function (req, res, next) {
            res.render('templates/committees')
        })
}