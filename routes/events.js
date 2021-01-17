module.exports = function (app) {
    app.route('/events')
        .get(function (req, res, next) {
            res.render('templates/events')
        })
}