module.exports = function (app) {
    app.route('/editor')
        .get(function (req, res, next) {
            res.render('templates/editor')
        })
}