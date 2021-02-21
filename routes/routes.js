module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.render('templates/index');
    })

    app.route('/profileEdit')
        .get(function (req, res, next) {
            res.render('templates/profileEdit')
        })

    app.route('/profile')
        .get(function (req, res, next) {
            res.render('templates/profile')
        })

    app.route('/privileges')
        .get(function (req, res, next) {
            res.render('templates/privileges')
        })

    app.route('/eventsView/:id')
        .get(function (req, res, next) {
            res.render('templates/eventsView')
        })

    app.route('/eventsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/eventsUnapproved')
        })

    app.route('/eventsRejected')
        .get(function (req, res, next) {
            res.render('templates/eventsRejected')
        })

    app.route('/events')
        .get(function (req, res, next) {
            res.render('templates/events')
        })

    app.route('/editor')
        .get(function (req, res, next) {
            res.render('templates/editor')
        })

    app.route('/blogsView/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/blogsView')
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            res.render('templates/complaintsView')
        })

    app.route('/complaintsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/complaintsUnapproved')
        })

    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            res.render('templates/complaintsRejected')
        })

    app.route('/complaintsForm')
        .get(function (req, res, next) {
            res.render('templates/complaintsForm')
        })

    app.route('/blogForm/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/blogForm')
        })
    app.route('/blogForm')
        .get(function (req, res, next) {
            res.render('templates/blogForm')
        })

    app.route('/complaints')
        .get(function (req, res, next) {
            res.render('templates/complaints')
        })

    app.route('/committeeMy')
        .get(function (req, res, next) {
            res.render('templates/committeeMy')
        })

    app.route('/committeeClicked')
        .get(function (req, res, next) {
            res.render('templates/committeeClicked')
        })

    app.route('/committees')
        .get(function (req, res, next) {
            res.render('templates/committees')
        })

    app.route('/blogsView/:id')
        .get(function (req, res, next) {
            res.render('templates/blogsView')
        })

    app.route('/blogsView/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/blogsView')
        })

    app.route('/blogsUnapproved')
        .get(function (req, res, next) {
            res.render('templates/blogsUnapproved')
        })

    app.route('/blogsRejected')
        .get(function (req, res, next) {
            res.render('templates/blogsRejected')
        })

    app.route('/blogs')
        .get(function (req, res, next) {
            res.render('templates/blogs')
        })
}