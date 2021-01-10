module.exports = function (app) {
    app.route('/privileges')
        .get(function (req, res, next) {
            res.render('templates/privileges')
        })
}