module.exports = function (app) {
    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            res.render('templates/complaintsRejected')
        })
}