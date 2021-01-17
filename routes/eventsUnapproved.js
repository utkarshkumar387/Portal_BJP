module.exports = function (app) {
    app.route('/eventsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/eventsUnapproved')
        })
}