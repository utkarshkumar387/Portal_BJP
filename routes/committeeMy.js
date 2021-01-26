module.exports = function (app) {
    app.route('/committeeMy')
        .get(function (req, res, next) {
            res.render('templates/committeeMy')
        })
}