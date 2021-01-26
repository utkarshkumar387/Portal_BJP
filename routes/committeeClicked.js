module.exports = function (app) {
    app.route('/committeeClicked')
        .get(function (req, res, next) {
            res.render('templates/committeeClicked')
        })
}