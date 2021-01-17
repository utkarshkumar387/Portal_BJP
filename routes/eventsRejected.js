module.exports = function (app) {
    app.route('/eventsRejected')
        .get(function (req, res, next) {
            res.render('templates/eventsRejected')
        })
}