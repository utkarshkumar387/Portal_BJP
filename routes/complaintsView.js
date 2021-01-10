module.exports = function (app) {
    app.route('/complaintsView')
        .get(function (req, res, next) {
            res.render('templates/complaintsView')
        })
}