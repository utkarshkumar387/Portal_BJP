module.exports = function (app) {
    app.route('/complaints')
        .get(function (req, res, next) {
            res.render('templates/complaints')
        })
}