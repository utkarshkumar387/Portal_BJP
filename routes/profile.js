module.exports = function (app) {
    app.route('/profile')
        .get(function (req, res, next) {
            res.render('templates/profile')
        })
}