module.exports = function (app) {
    app.route('/complaintsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/complaintsUnapproved')
        })
}