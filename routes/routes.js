module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.clearCookie("privilege");
        if (req.cookies.token) {
            res.render('templates/homepage/index')
        } else {
            res.render('templates/authentication/logIn')
        }
    })
    app.route('/profileEdit')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profile/profileEdit')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/profileEdit/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profile/profileEdit')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/profile/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/profile/profile')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    // app.route('/privileges')
    //     .get(function (req, res, next) {
    //         if (req.cookies.token) {
    //             res.render('templates/privileges')
    //         } else {
    //             res.render('authentication/logIn')
    //         }
    //     })
    app.route('/eventsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsPending')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsRejected')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsApproved')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/eventsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/editorCustom')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editor/editorCustom')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/editorNormal')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editor/editorNormal')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/complaintsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsPending')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsRejected')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/complaintsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/complaintsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/blogForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/complaintsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsApproved')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/conplaintsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/complaintsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/committeeMy')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committee/committeeMy')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/committeeMy/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committee/committeeMy')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/committeeClicked/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committeeClicked')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/committees')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committees')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogsView/:id')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogs/blogsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogsView/:id/:str')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogs/blogsView')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsPending')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsRejected')
            } else {
                res.render('templates/authentication/logIn')
            }
        })

    app.route('/blogsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsApproved')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    // app.route('/test')
    //     .get(function (req, res, next) {
    //         if (req.cookies.token) {
    //             res.render('templates/events/eventsPending')
    //         } else {
    //             res.render('templates/notlogIned');
    //         }
    //         res.render('templates/test')
    //     })
    app.route('/members/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/members')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/manageAdmins')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageAdmins')
                } else {
                    res.render('templates/accessDenied/accessDenied')
                }
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/manageCommittee')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageCommittee')
                } else {
                    res.render('templates/accessDenied/accessDenied')
                }
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/manageCommitteeSpecific')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageCommitteeSpecific')
                } else {
                    res.render('templates/accessDenied/accessDenied')
                }
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/manageMembers')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageMembers')
                } else {
                    // res.clearCookie("privilege");
                    res.render('templates/accessDenied/accessDenied')
                }
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/manageVerificationTeam')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageVerificationTeam')
                }
                else {
                    // res.clearCookie("privilege");
                    res.render('templates/accessDenied/accessDenied')
                }
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    app.route('/committeeForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committeeForm')
            } else {
                res.render('templates/authentication/logIn')
            }
        })
    // app.route('/signUp')
    //     .get(function (req, res, next) {
    //         res.render('templates/signUp')
    //     })

    app.route('/logIn')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            res.clearCookie("member_profile");
            res.clearCookie("token");
            res.render('templates/authentication/logIn')
        })
    app.route('/IDcard')
        .get(function (req, res, next) {
            res.render('templates/IDcard/IDcard')
        })
}

