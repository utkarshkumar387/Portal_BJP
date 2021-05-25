module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.clearCookie("privilege");
        if (req.cookies.token) {
            res.render('templates/index')
        } else {
            res.render('templates/login')
        }
    })

    app.route('/profileEdit')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profileEdit')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/profileEdit/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profileEdit')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/profile/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/profile')
            } else {
                res.render('templates/login')
            }
        })

    // app.route('/privileges')
    //     .get(function (req, res, next) {
    //         if (req.cookies.token) {
    //             res.render('templates/privileges')
    //         } else {
    //             res.render('authentication/login')
    //         }
    //     })
    app.route('/eventsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsView')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/eventsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsView')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/eventsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsPending')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/eventsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsRejected')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/eventsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsApproved')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/eventsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsForm')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/eventsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/eventsForm')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/editorCustom')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editorCustom')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/editorNormal')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editorNormal')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsView')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/complaintsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsPending')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsRejected')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/complaintsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsForm')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/complaintsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsForm')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogForm')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/blogForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogForm')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/complaintsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsApproved')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/conplaintsView')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/complaintsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaintsView')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/committeeMy')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committeeMy')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/committeeMy/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committeeMy')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/committeeClicked/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committeeClicked')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/committees')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committees')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogsView/:id')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogsView')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogsView/:id/:str')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogsView')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogsPending')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogsRejected')
            } else {
                res.render('templates/login')
            }
        })

    app.route('/blogsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogsApproved')
            } else {
                res.render('templates/login')
            }
        })
    // app.route('/test')
    //     .get(function (req, res, next) {
    //         if (req.cookies.token) {
    //             res.render('templates/eventsPending')
    //         } else {
    //             res.render('templates/notlogined');
    //         }
    //         res.render('templates/test')
    //     })
    app.route('/members/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/members')
            } else {
                res.render('templates/login')
            }
        })
    app.route('/manageAdmins')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/manageAdmins')
                } else {
                    res.render('templates/accessDenied')
                }
            } else {
                res.render('templates/login')
            }
        })
    app.route('/manageCommittee')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/manageCommittee')
                } else {
                    res.render('templates/accessDenied')
                }
            } else {
                res.render('templates/login')
            }
        })
    app.route('/manageCommitteeSpecific')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/manageCommitteeSpecific')
                } else {
                    res.render('templates/accessDenied')
                }
            } else {
                res.render('templates/login')
            }
        })
    app.route('/manageMembers')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/manageMembers')
                } else {
                    // res.clearCookie("privilege");
                    res.render('templates/accessDenied')
                }
            } else {
                res.render('templates/login')
            }
        })
    app.route('/manageVerificationTeam')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/manageVerificationTeam')
                }
                else {
                    // res.clearCookie("privilege");
                    res.render('templates/accessDenied')
                }
            } else {
                res.render('templates/login')
            }
        })
    app.route('/committeeForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committeeForm')
            } else {
                res.render('templates/login')
            }
        })
    // app.route('/signUp')
    //     .get(function (req, res, next) {
    //         res.render('templates/signUp')
    //     })

    app.route('/login')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            res.clearCookie("member_profile");
            res.clearCookie("token");
            res.render('templates/login')
        })
    app.route('/IDcard')
        .get(function (req, res, next) {
            res.render('templates/IDcard')
        })
}

