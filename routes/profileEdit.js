module.exports = function (app) {
    app.route('/profileEdit')
        .get(function (req, res, next) {
            res.render('templates/profileEdit')
        })
}