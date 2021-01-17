module.exports = function (app) {
    app.route('/eventsView')
        .get(function (req, res, next) {
            res.render('templates/eventsView')
        })
}