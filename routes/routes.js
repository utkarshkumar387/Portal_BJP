module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.render('templates/index');
    })

    app.route('/profileEdit')
        .get(function (req, res, next) {
            res.render('templates/profileEdit')
        })
    app.route('/profileEdit/:id')
        .get(function (req, res, next) {
            res.render('templates/profileEdit')
        })

    app.route('/profile/:id')
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
    app.route('/eventsForm/:id/:str')
        .get(function (req, res, next) {
            res.render('templates/eventsForm')
        })
    app.route('/editorCustom')
        .get(function (req, res, next) {
            res.render('templates/editorCustom')
        })
    app.route('/editorNormal')
        .get(function (req, res, next) {
            res.render('templates/editorNormal')
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

    app.route('/committeeClicked/:id')
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
    app.route('/test')
        .get(function (req, res, next) {
            res.render('templates/test')
        })
    app.route('/members/:str')
        .get(function (req, res, next) {
            res.render('templates/members')
        })
    app.route('/manageAdmins')
        .get(function (req, res, next) {
            res.render('templates/manageAdmins')
        })
    app.route('/manageCommittee')
        .get(function (req, res, next) {
            res.render('templates/manageCommittee')
        })
    app.route('/manageCommitteeSpecific')
        .get(function (req, res, next) {
            res.render('templates/manageCommitteeSpecific')
        })
    app.route('/manageMembers')
        .get(function (req, res, next) {
            if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                res.render('templates/manageMembers')
            } else {
                res.render('templates/accessDenied')
            }
        })
    app.route('/manageVerificationTeam')
        .get(function (req, res, next) {
            res.render('templates/manageVerificationTeam')
        })
    app.route('/committeeForm')
        .get(function (req, res, next) {
            res.render('templates/committeeForm')
        })
    app.route('/signUp')
        .get(function (req, res, next) {
            res.render('templates/signUp')
        })
    app.route('/logIn')
        .get(function (req, res, next) {
            res.render('templates/logIn')
        })
}

