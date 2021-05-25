module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.clearCookie("privilege");
        if (req.cookies.token) {
            res.render('templates/index')
        } else {
            res.render('/templates/authentication/login')
        }
    })

    app.route('/profileEdit')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profile/profileEdit')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/profileEdit/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/profile/profileEdit')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/profile/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/profile/profile')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    // app.route('/privileges')
    //     .get(function (req, res, next) {
    //         if (req.cookies.token) {
    //             res.render('templates/privileges')
    //         } else {
    //             res.render('/templates/authentication/login')
    //         }
    //     })
    app.route('/eventsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/eventsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/eventsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsPending')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/eventsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsRejected')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/eventsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsApproved')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/eventsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/eventsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/events/eventsForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/editorCustom')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editor/editorCustom')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/editorNormal')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/editor/editorNormal')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/complaintsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsPending')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/complaintsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsRejected')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/complaintsForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/complaintsForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogForm/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/blogForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogForm')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/complaintsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsApproved')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/complaintsView/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/conplaintsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/complaintsView/:id/:str')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/complaints/complaintsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/committeeMy')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committee/committeeMy')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/committeeMy/:id')
        .get(function (req, res, next) {
            res.clearCookie("member_profile");
            if (req.cookies.token) {
                res.render('templates/committee/committeeMy')
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/committeeClicked/:id')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committeeClicked')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/committees')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committees')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogsView/:id')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogs/blogsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogsView/:id/:str')
        .get(function (req, res, next) {
            res.clearCookie("privilege");
            if (req.cookies.token) {
                res.render('templates/blogs/blogsView')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogsPending')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsPending')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogsRejected')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsRejected')
            } else {
                res.render('/templates/authentication/login')
            }
        })

    app.route('/blogsApproved')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/blogs/blogsApproved')
            } else {
                res.render('/templates/authentication/login')
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
                res.render('/templates/authentication/login')
            }
        })
    app.route('/manageAdmins')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageAdmins')
                } else {
                    res.render('templates/error_pages/accessDenied')
                }
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/manageCommittee')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageCommittee')
                } else {
                    res.render('templates/error_pages/accessDenied')
                }
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/manageCommitteeSpecific')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.clearCookie("privilege");
                if (JSON.parse(req.cookies.privilege).admin_privilege != null) {
                    res.render('templates/privileges/manageCommitteeSpecific')
                } else {
                    res.render('templates/error_pages/accessDenied')
                }
            } else {
                res.render('/templates/authentication/login')
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
                    res.render('templates/error_pages/accessDenied')
                }
            } else {
                res.render('/templates/authentication/login')
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
                    res.render('templates/error_pages/accessDenied')
                }
            } else {
                res.render('/templates/authentication/login')
            }
        })
    app.route('/committeeForm')
        .get(function (req, res, next) {
            if (req.cookies.token) {
                res.render('templates/committee/committeeForm')
            } else {
                res.render('/templates/authentication/login')
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
            res.render('/templates/authentication/login')
        })
    app.route('/IDcard')
        .get(function (req, res, next) {
            res.render('templates/IDcard/IDcard')
        })
}

