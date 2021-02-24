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
    app.route('/eventsView/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/eventsView')
        })

    app.route('/eventsPending')
        .get(function (req, res, next) {
            res.render('templates/eventsPending')
        })

    app.route('/eventsRejected')
        .get(function (req, res, next) {
            res.render('templates/eventsRejected')
        })

    app.route('/eventsApproved')
        .get(function (req, res, next) {
            res.render('templates/eventsApproved')
        })
    app.route('/eventsForm')
        .get(function (req, res, next) {
            res.render('templates/eventsForm')
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

    app.route('/complaintsPending')
        .get(function (req, res, next) {
            res.render('templates/complaintsPending')
        })

    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            res.render('templates/complaintsRejected')
        })

    app.route('/complaintsForm')
        .get(function (req, res, next) {
            res.render('templates/complaintsForm')
        })
    app.route('/complaintsForm/:id/:str')
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

    app.route('/complaintsApproved')
        .get(function (req, res, next) {
            res.render('templates/complaintsApproved')
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            res.render('templates/conplaintsView')
        })
    app.route('/complaintsView/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/complaintsView')
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

    app.route('/blogsPending')
        .get(function (req, res, next) {
            res.render('templates/blogsPending')
        })

    app.route('/blogsRejected')
        .get(function (req, res, next) {
            res.render('templates/blogsRejected')
        })

    app.route('/blogsApproved')
        .get(function (req, res, next) {
            res.render('templates/blogsApproved')
        })
}