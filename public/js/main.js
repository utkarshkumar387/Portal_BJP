var main_url = "https://bjpbarmer.herokuapp.com/";
// var main_url = "http://192.168.1.3:8002/";
// let headerParams = { 'Authorization': 'Token 45097245b8db006c8a069cf0f7fe89e83a5d1671' };
//Ajax Request
let loggedInUserId = null;
function ajaxRequest(type, url, data, status) {
    if (typeof (data) == typeof ({})) {
        data = JSON.stringify(data);
    }
    // console.log(data);
    let error = true;
    let message = "";
    console.log('data is', data)
    console.log("calling for : " + url + " " + type);
    // console.log(getCookie('token'));
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        // headers: headerParams,
        contentType: "application/json; charset=utf-8",
        headers: {
            Accept: "application/json; charset=utf-8",
            'Authorization': getCookie('token'),
            'Content-Type': 'application/json; charset=utf-8'
        },
        crossDomain: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            if (jqXHR.status == status) {
                error = false;
                message = data;
                console.log('message recieved during ajax call ', message);
            }
            console.log('my status code is ', status);
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
            // console.log('error', JSON.parse(message).detail);
            if (JSON.parse(message).detail == 'Invalid token.') {
                console.log('inside error');
                location.replace('/login');
            }
        }
    });
    return { "error": error, "message": message };
}

//homepage
//get home page data
//in use
function fetchHomepageData(sub_url) {
    return getHomePageData(sub_url, "get", {}, 200);
}
//profile
//post profile data
function addProfileData(sub_url, data) {
    return getProfileData(sub_url, "post", data, 201)
}
//post for member login
function logInMemberData(sub_url, data) {
    let url = main_url + sub_url + '/';
    return ajaxRequest("post", url, data, 200)
}
//get profile data
function fetchProfileData(sub_url) {
    return getProfileData(sub_url, "get", {}, 200)
}
//get profile data by id
function fetchProfileDataById(sub_url, id) {
    return getProfileDataById(sub_url, id, "get", {}, 200)
}
//patch patch profile data by id
function updateProfileDataById(sub_url, id, data) {
    return patchProfileDataById(sub_url, id, "patch", data, 200)
}
//content
//get content data of blogs, events, complaints,etc
//in use
function fetchContent(sub_url) {
    return getContent(sub_url, "get", {}, 200)
}
//get content data by id of blogs, events, complaints, etc
//in use
function fetchContentByID(sub_url, id) {
    return getContentByID(sub_url, "get", id, {}, 200)
}
//add content data
//in use
function addContent(sub_url, data) {
    return postContent(sub_url, "post", data, 200);
}
//patch content data
//in use
function updateContent(sub_url, id, data) {
    return patchContent(sub_url, id, "patch", data, 200);
}
//committee
//get committee data
//in use
function fetchCommittee(sub_url) {
    return getCommittee(sub_url, "get", {}, 200)
}
//get committee data by ID
//in use
function fetchCommitteeByID(sub_url, id) {
    return getCommitteeByID(sub_url, id, "get", {}, 200)
}
//post committee member data by to add members
//in use
function addCommitteeMembers(sub_url, id, data) {
    return postCommitteeMembers(sub_url, "post", id, data, 200)
}
//post committee data by ID
function updateCommitteeByID(sub_url) {
    return patchCommitteeByID(sub_url, "get", {}, 200)
}
//admin
//get all admin
function fetchAllAdminData(sub_url) {
    return getAllAdminData(sub_url, "get", {}, 200)
}
//Patch request functions
function updateAdminDataByID(sub_url, id, data) {
    return patchAdminDataByID(sub_url, "patch", id, data, 200)
}
//patch request to content by id
//in use
function patchRequestByID(sub_url, id, data) {
    return upadateVerificationStatus(sub_url, "patch", id, data, 200)
}
//patch request to content by id
function patchViewRequestByID(sub_url, id, data) {
    return upadateContentStatus(sub_url, "patch", id, data, 200)
}

//delete request by id
//in use
function removePrivilegeByID(sub_url, id) {
    return deletePrivilegeStatusByID(sub_url, "delete", id, 204)
}
//post request to privilege
function postPrivilegeRequest(sub_url, data) {
    return addPrivilegeStatus(sub_url, "post", data, 201)
}
//patch request to content by id
// function patchRequestMembers(sub_url, id, data) {
//     return upadateVerificationStatus(sub_url, "patch", id, data, 200)
// }

//requesting ajax to get profile data
function postProfileData(sub_url, type, data, status) {
    if (sub_url == 'member') {
        sub_url = 'member';
    } else {
        sub_url = `member/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    console.log(status)
    return ajaxRequest(type, url, data, status);
}
function getProfileData(sub_url, type, data, status) {
    if (sub_url == 'member') {
        sub_url = 'member';
    } else {
        sub_url = `member/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    console.log(status)
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get profile data by id
function getProfileDataById(sub_url, id, type, data, status) {
    if (sub_url == 'member') {
        sub_url = 'member';
    } else {
        sub_url = `member/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to patch profile data by id
function patchProfileDataById(sub_url, id, type, data, status) {
    if (sub_url == 'member') {
        sub_url = 'member';
    } else {
        sub_url = `member/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get home page data
//in use
function getHomePageData(sub_url, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get content data
//in use
function getContent(sub_url, type, data, status) {
    if (sub_url == 'content') {
        sub_url = 'content';
    } else {
        sub_url = `content/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}

//requesting ajax to get content data by id
//in use
function getContentByID(sub_url, type, id, data, status) {
    if (sub_url == 'content') {
        sub_url = 'content';
    } else {
        sub_url = `content/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get committee data
//in use
function getCommittee(sub_url, type, data, status) {
    if (sub_url == 'committee') {
        sub_url = 'committee';
    } else {
        sub_url = `committee/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to poist committee data
//not in use right now
function postCommitteeMembers(sub_url, type, id, data, status) {
    if (sub_url == 'committee') {
        sub_url = 'committee';
    } else {
        sub_url = `committee/${sub_url}`
    }
    var type = type;
    var url = main_url + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get committee data by ID
//in use
function getCommitteeByID(sub_url, id, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to update status
function upadateStatus(sub_url, type, id, data, status) {
    var type = type;
    var url = main_url + 'content/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
// removeVerificationStatus
function removePrivilegeVerificationStatus(sub_url, type, id, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/' + id + '/';
    var status = status;
    console.log(status)
    return ajaxRequest(type, url, {}, status);
}
//requesting ajax to get admins
function getAllAdminData(sub_url, type, data, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to delete admins
function deletePrivilegeStatusByID(sub_url, type, id, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/' + id + '/';
    var status = status;
    return ajaxRequest(type, url, {}, status);
}
//requesting ajax to update status
function upadateVerificationStatus(sub_url, type, id, data, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
function upadateContentStatus(sub_url, type, id, data, status) {
    var type = type;
    var url = main_url + 'content/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
function addPrivilegeStatus(sub_url, type, data, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/';
    var data = data;
    var status = status;
    console.log(data);
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to post content 
//in use
function postContent(sub_url, type, data, status) {
    var type = type;
    var url = main_url + 'content/' + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to patch content
//in use
function patchContent(sub_url, id, type, data, status) {
    console.log('event id ', id);
    var type = type;
    var url = main_url + 'content/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to update status
function upadatePrivilegeStatus(sub_url, type, id, data, status) {
    var type = type;
    var url = main_url + 'privilege/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//function to check status and return it
function checkStatus(status) {
    console.log(status);
    return status;
}
//cookies implementation
//To set cookie
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//To get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//To check cookie
window.addEventListener('load', checkCookie);
function checkCookie() {
    // let windowLink = window.location.href.split('/');
    // let getLink = windowLink[3];
    // if (getCookie('token') == "" && getLink != "logIn") {
    //     window.location.replace('/logIn');
    //     return;
    // } else {
    //     console.log('window link :', getLink);
    // }

    //if token and privilege cookis is not present then return.
    if (getCookie("token") == "" || getCookie("privilege") == "") return;

    // try {
    var permissions = getCookie("privilege");
    permissionsStringify = JSON.parse(permissions);
    console.log(permissionsStringify);
    let memberPrivilege = permissionsStringify.member_privilege;
    let committeePrivilege = permissionsStringify.committee_privilege;
    let committeeSpecificPrivilege = permissionsStringify.committee_specific_privilege;
    let verificationPrivilege = permissionsStringify.verification_privilege;
    let adminPrivilege;
    if (permissionsStringify.admin_privilege != null) {
        adminPrivilege = permissionsStringify.admin_privilege.manage_admin;
    } else {
        adminPrivilege = permissionsStringify.admin_privilege
    }
    let verificationPrivilegeBlog;
    let verificationPrivilegeEvent;
    let verificationPrivilegeComplaint;

    //set href link when clicked on navbar privilege
    console.log('admin privilege is ', adminPrivilege)
    if (adminPrivilege != null) {
        //displaying privilege link according to cookie
        $('#privilegesLink').css('display', 'block')
    }

    //If member has permission to privilege for blog, event & complaint then store its boolean value
    if (permissionsStringify.verification_privilege != null) {
        verificationPrivilegeBlog = permissionsStringify.verification_privilege.manage_blog;
        console.log(verificationPrivilegeBlog);
        verificationPrivilegeEvent = permissionsStringify.verification_privilege.manage_event;
        console.log(verificationPrivilegeEvent);
        verificationPrivilegeComplaint = permissionsStringify.verification_privilege.manage_complaint;
        console.log(verificationPrivilegeComplaint);
    }
    console
    let sendLinkToChangeStatus = link[3];
    if (memberPrivilege == null && committeePrivilege == null && committeeSpecificPrivilege == null && verificationPrivilege == null && adminPrivilege == false) {
        $('#footerLikeDislike').append(`
             <img class="mr-3" src="/img/icons/like.png" alt=""><img src="/img/icons/divider.png"
             alt=""><img class="ml-3" src="/img/icons/dislike.png" alt="">
             `);
        $('#contentUpdateDate').append(`
            <p><b id="contentUpdatedD">Last Updated on: <span id="blogDay"></span>
                                        <span id="blogYearName"></span> <span id="blogYear"></span></b></p>
            `)
    }
    //add or remove permission buttons inside blogsview, eventsview & complaintsview
    console.log('blogsView, ComplaintsView or EventsView', sendLinkToChangeStatus);
    switch (sendLinkToChangeStatus) {
        case 'blogsView':
            if (verificationPrivilegeBlog == true || permissionsStringify.admin_privilege != null) {
                console.log('inside blogs view');
                switch (status) {
                    case 2:
                        document.getElementById("footerPrivilege").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtons").classList.add("footerPrivilegeButtons");
                        $('#footerLikeDislike').append(`
                             <img class="mr-3" src="/img/icons/like.png" alt=""><img src="/img/icons/divider.png"
                             alt=""><img class="ml-3" src="/img/icons/dislike.png" alt="">
                             `);
                        $('#contentUpdateDate').append(`
                            <p><b>Last Updated on: <span id="detailsBlogDay"></span>
                                                        <span id="detailsBlogYearName"></span> <span id="detailsBlogYear"></span></b></p>
                            `)
                        $('#privilegeButtons').append(`
                            <div class="edit">
                                <a href="/blogForm/${blog_id}/2" class="edit__button button__design">Edit Blog</a>
                            </div>
                            <div class="rejectApprove d-flex">
                                <div class="reject mr-3">
                                    <a class="reject__button button__design" id="rejectButton">Reject</a>
                                </div>
                                <div class="approve">
                                    <a class="approve__button button__design" id="approveButton">Unapprove</a>
                                </div>
                            </div>
                
                            `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '3');
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '1');
                        })
                        break;
                    case 1:
                        document.getElementById("footerPrivilege").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtons").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtons').append(`
                            <div class="edit">
                                <a href="/blogForm/${blog_id}/1" class="edit__button button__design">Edit Blog</a>
                            </div>
                            <div class="rejectApprove d-flex">
                                <div class="reject mr-3">
                                    <a class="reject__button button__design" id="rejectButton">Reject</a>
                                </div>
                                <div class="approve">
                                    <a class="approve__button button__design" id="approveButton">Approve</a>
                                </div>
                            </div>
                            `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '3');
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '2');
                        })
                        break;
                    case 3:
                        document.getElementById("footerPrivilege").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtons").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtons').append(`
                            <div class="edit">
                                <a href="/blogForm/${blog_id}/3" class="edit__button button__design">Edit Blog</a>
                            </div>
                            <div class="rejectApprove d-flex">
                                <div class="approve">
                                    <a class="approve__button button__design" id="approveButton">Approve</a>
                                </div>
                            </div>
                            `)
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '2');
                        })
                        break;
                    default:
                        $('#footerLikeDislike').append(`
                             <img class="mr-3" src="/img/icons/like.png" alt=""><img src="/img/icons/divider.png"
                             alt=""><img class="ml-3" src="/img/icons/dislike.png" alt="">
                             `);
                        $('#contentUpdateDate').append(`
                            <p><b id="contentUpdatedD">Last Updated on: <span id="blogDay"></span>
                                                        <span id="blogYearName"></span> <span id="blogYear"></span></b></p>
                            `)
                }
            }
            break;
        case 'complaintsView':
            if (verificationPrivilegeComplaint == true || permissionsStringify.admin_privilege != null) {
                console.log('inside complaints view');
                switch (status) {
                    case '2':
                        document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsComplaint').append(`
                                <div class="edit">
                                    <a href="/complaintsForm/${complaint_id}/2" class="edit__button button__design">Edit Complaint</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                    <div class="reject mr-3">
                                        <a class="reject__button button__design" id="rejectButton">Reject</a>
                                    </div>
                                    <div class="approve">
                                        <a class="approve__button button__design" id="approveButton">Unapprove</a>
                                    </div>
                                </div>
                
                                `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '3');
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '1');
                        })
                        break;
                    case '1':
                        document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsComplaint').append(`
                                <div class="edit">
                                    <a href="/complaintsForm/${complaint_id}/1" class="edit__button button__design">Edit Complaint</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                    <div class="reject mr-3">
                                        <a class="reject__button button__design" id="rejectButton">Reject</a>
                                    </div>
                                    <div class="approve">
                                        <a class="approve__button button__design" id="approveButton">Approve</a>
                                    </div>
                                </div>
                                `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '3');
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '2');
                        })
                        break;
                    case '3':
                        document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsComplaint').append(`
                                <div class="edit">
                                    <a href="/complaintsForm/${complaint_id}/3" class="edit__button button__design">Edit Complaint</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                    <div class="approve">
                                        <a class="approve__button button__design" id="approveButton">Approve</a>
                                    </div>
                                </div>
                            `)
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '2');
                        })
                        break;
                    default:
                        console.log('No complaint view');
                }
            }
            break;
        case 'eventsView':
            if (verificationPrivilegeEvent == true || permissionsStringify.admin_privilege != null) {
                console.log('inside eventsView');
                switch (status) {
                    case '2':
                        document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                    <a href="/eventsForm/${event_id}/2" class="edit__button button__design">Edit Event</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                    <div class="reject mr-3">
                                        <a class="reject__button button__design" id="rejectButton">Reject</a>
                                    </div>
                                    <div class="approve">
                                        <a class="approve__button button__design" id="approveButton">Unapprove</a>
                                    </div>
                                </div>
                    
                                `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, '3');
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, 1);
                        })
                        break;
                    case '1':
                        document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                <a href="/eventsForm/${event_id}/1" class="edit__button button__design">Edit Event</a>
                                </div>
                                    <div class="rejectApprove d-flex">
                                    <div class="reject mr-3">
                                <a class="reject__button button__design" id="rejectButton">Reject</a>
                                </div>
                                <div class="approve">
                                    <a class="approve__button button__design" id="approveButton">Approve</a>
                                </div>
                                </div>
                                `)
                        document.getElementById("rejectButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, 3);
                        })
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, 2);
                        })
                        break;
                    case '3':
                        document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                    <a href="/eventsForm/${event_id}/3" class="edit__button button__design">Edit Event</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                    <div class="approve">
                                        <a class="approve__button button__design" id="approveButton">Approve</a>
                                    </div>
                                </div>
                                `)
                        document.getElementById("approveButton").addEventListener('click', function () {
                            pivilegeButtons(sendLinkToChangeStatus, 2);
                        })
                        break;
                    default:
                        console.log('No complaint view');
                }
            }
            break;
        default:
            console.log('No view');
    }
    //adding and removing unapproved and rejected button acc. to privilege
    console.log('check value', verificationPrivilege, adminPrivilege)
    if (verificationPrivilege != null || adminPrivilege != null) {
        if (verificationPrivilegeBlog == true || adminPrivilege != null) {
            $('#eventsPendingLink, #eventsRejectedLink').css('display', 'block')
        }
        if (verificationPrivilegeComplaint == true || adminPrivilege != null) {
            $('#complaintsPendingLink, #complaintsRejectedLink').css('display', 'block')
        }
        if (verificationPrivilegeEvent == true || adminPrivilege != null) {
            $('#blogsPendingLink, #blogsRejectedLink').css('display', 'block')
        }
    }
    // } catch (err) {
    //     console.log('error occured', err);
    // }
}

//set privilege in cookie
if (getCookie('privilege') == '') {
    let memberProfile = fetchProfileData('member_profile');
    if (memberProfile.message.member_privileges) {
        setCookie('privilege', JSON.stringify(memberProfile.message.member_privileges), 10);
    }

}

//set member profile data in cookie
if (getCookie('member_profile') == '') {
    let memberProfile = fetchProfileData('member_profile');
    console.log(memberProfile.message.member_details);
    if (memberProfile.message.member_details) {
        setCookie('member_profile', JSON.stringify(memberProfile.message.member_details), 10);
    }
}

//set member profile data in cookie
if (getCookie('member_profile') != "") {
    loggedInUserId = JSON.parse(getCookie('member_profile')).id;
    $('#profileButton').attr('href', '/profile/' + JSON.parse(getCookie('member_profile')).id);
}


//functions for all pages
//date converted to this format -> (12 feb 2021)
function dateConverter(date) {
    let blogDate = date.split("-");
    let date_month = blogDate[1];
    let date_day = blogDate[2];
    let dayElement = date_day.split(":");
    let day = dayElement[0].slice(0, 2);
    let year = blogDate[0];
    let date_list = [];
    let date_string = date_month.toString();
    for (var j = 0, len = date_string.length; j < len; j += 1) {
        date_list.push(date_string.charAt(j));
    }
    if (date_list[0] == "0") {
        date_month = date_list[1];
    } else {
        date_month = date[1];
    }
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month_name = month[date_month - 1];
    let blogDateDis = [day, month_name, year];
    return (blogDateDis);
}

function timeConverter(time) {
    let eventTime = time;
    eventTime = eventTime.split(':');
    let eventHour = eventTime[0].split('-');
    eventHour = eventHour[2].slice(-2);
    let eventMinute = eventTime[1];
    let eventSetAmPm = 'AM'
    if (eventHour > 12 && eventMinute > 0) {
        eventSetAmPm = 'PM'
    }
    let eventTimeJoin = eventHour + ':' + eventMinute + ' ' + eventSetAmPm;
    return eventTimeJoin;
}

//trimming of title and description
function titleDescTrimmer(title, description, maxStringTitle, maxStringDesc) {
    let trimStringTitle = title;
    let trimStringDesc = description;
    console.log(trimStringTitle, trimStringDesc)
    if (title.length > maxStringTitle) {
        trimStringTitle = title.substr(0, maxStringTitle) + '...';
    }

    if (description.length > maxStringDesc) {
        trimStringDesc = description.substr(0, maxStringDesc) + '...';
    }

    return {
        "trimStringTitle": trimStringTitle,
        "trimStringDesc": trimStringDesc,
    };
}

//checking priority of complaints
function checkPriority(priority) {
    let priorityBar;
    console.log(priority);
    if (priority == 'low' || priority == 'Low') {
        console.log('inside low priority')
        priorityBar = `<div class="priority priority_low">
        <span class="badge rounded-pill"><img src="/img/icons/Tag.png"> Priority:<span class="priority_set">Low</span></span>
    </div>`
    } else if (priority == 'medium' || priority == 'Medium') {
        console.log('inside medium priority')
        priorityBar = `<div class="priority priority_mid">
        <span class="badge rounded-pill"><img src="/img/icons/Tag.png"> Priority:
            <span class="priority_set">Medium</span></span>
    </div>`
    } else if (priority == 'high' || priority == 'High') {
        console.log('inside high priority')
        priorityBar = `<div class="priority priority_high">
        <span class="badge rounded-pill"><img src="/img/icons/Tag.png"> Priority:
            <span class="priority_set">High</span></span>
    </div>`
    }
    return priorityBar;
}
//function to change the status to rejected, approved and pending
function pivilegeButtons(fName, status) {
    let formName = fName;
    let reqLink, id;
    switch (formName) {
        case 'blogsView':
            reqLink = 'blogs';
            id = blog_id;
            break;
        case 'complaintsView':
            reqLink = 'complaints';
            id = complaint_id;
            break;
        case 'eventsView':
            reqLink = 'events'
            id = event_id;
            break;
        default:
            console.log('No link found')

    }
    let patchRequestBlog = patchViewRequestByID(`${reqLink}/content_update`, id, { status: `${status}` });
    console.log(patchRequestBlog);
    console.log(typeof (status));
    if (typeof (status) == typeof (1)) {
        status = status.toString();
    }
    switch (status) {
        case '1':
            status = 'Pending';
            break;
        case '2':
            status = 'Approved';
            break;
        case '3':
            status = 'Rejected';
            break;
        default:
            console.log('No link found');

    }
    console.log(status);
    if (patchRequestBlog.error == false) {
        // console.log(`/${reqLink}${status}`)
        window.location.replace(`/${reqLink}${status}`);
    }
}

//convert single image to base64
// function convertSingleBase64(file) {
//     // Make sure `file.name` matches our extensions criteria
//     if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
//         var reader = new FileReader();

//         reader.addEventListener("load", function () {
//             var image = new Image();
//             image.height = 100;
//             image.title = file.name;
//             image.src = this.result;
//             preview.appendChild(image);
//         }, false);

//         reader.readAsDataURL(file);
//     }
//     console.log(file);
// }
// //convert multiple image to base64
// function imgBase64Converter() {
//     var preview = document.querySelector('#preview');
//     var files = document.querySelector('input[type=file]').files;

//     function readAndPreview(file) {
//         // Make sure `file.name` matches our extensions criteria
//         if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
//             var reader = new FileReader();

//             reader.addEventListener("load", function () {
//                 var image = new Image();
//                 image.height = 100;
//                 image.title = file.name;
//                 image.src = this.result;
//                 preview.appendChild(image);
//             }, false);

//             reader.readAsDataURL(file);
//         }
//         console.log(file);
//     }
//     if (files) {
//         [].forEach.call(files, readAndPreview);
//     }
// }

//get privilege link when clicked on privilege link on navbar.
// function getPrivilegesLink(memberPrivilege, committeePrivilege, committeeSpecificPrivilege, verificationPrivilege, adminPrivilege) {
//     if (memberPrivilege != null) {
//         let privilegeLink = document.getElementById('privilegeLinkPage');
//         privilegeLink.href = '/manageMembers';
//     }
//     else if (committeeSpecificPrivilege != null) {
//         let privilegeLink = document.getElementById('privilegeLinkPage');
//         privilegeLink.href = '/manageCommitteeSpecific';
//     }
//     else if (verificationPrivilege != null) {
//         let privilegeLink = document.getElementById('privilegeLinkPage');
//         privilegeLink.href = '/manageVerificationTeam';
//     } else if (adminPrivilege == true) {
//         let privilegeLink = document.getElementById('privilegeLinkPage');
//         privilegeLink.href = '/manageAdmins';
//     }

// }
//search members
function mySearchFunction(input, members, memberName) {
    let filter, item, i, txtValue, memberSearch = input, memberBlock = members, memberCard = memberName;
    input = document.getElementById(`${memberSearch}`);
    console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    // Grabs the parent element by id
    members = document.getElementById(`${memberBlock}`);
    console.log(members);
    // Individual item on list
    memberName = members.getElementsByClassName(`${memberCard}`);
    for (i = 0; i < memberName.length; i++) {
        item = memberName[i];
        txtValue = item.textContent || item.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // Displays list items that are a match, and nothing if no match
            memberName[i].style.display = "";
        } else {
            memberName[i].style.display = "none";
        }
    }
}

//log out member from their account
function logOutMemeber() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    eraseCookie('token');
    eraseCookie('privilege');
    eraseCookie('member_profile');
    window.location.replace('/logIn');

}
function eraseCookie(name) {
    setCookie(name, "", -1);
}

//preloader
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});


//light and dark mode
window.addEventListener('load', changeTheme);
function changeTheme() {
    //main body where all card is shown
    let allCardBody;
    //all card
    let allCard;
    //all card footer
    let allCardFooter;
    //all links
    let allLink;
    //all headers of body
    let allHeader;
    //all icons
    let allIcon;
    //all tabs where members are shown
    let allTabs;
    let allInputs;
    let loader;
    allCardBody = document.querySelectorAll('.card_body_dark');
    allTabs = document.querySelectorAll('.tab_dark');
    allCard = document.querySelectorAll('.card_dark');
    allCardFooter = document.querySelectorAll('.card_dark .footer');
    allLink = document.querySelectorAll('.nav-link');
    allHeader = document.querySelectorAll('.header,.headerMain,.events__detail,.events__image');
    allIcon = document.querySelectorAll('.icon_img');
    allInputs = document.querySelectorAll('.dark_box');
    loader = document.querySelectorAll('.loader_dark');
    console.log(allHeader);
    if (localStorage.getItem('mode') === 'dark') {
        let layoutBgDark;
        layoutBgDark = document.querySelector('body');
        layoutBgDark.classList.add('dark');
        layoutBgDark.classList.remove('light');
        // loader.classList.add('loader_darkMode');
        console.log(allCard);
        for (let i = 0; i < loader.length; i++) {
            loader[i].classList.add('loader_darkMode')
        }
        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].classList.add('dark_inputBox');
        }
        for (let i = 0; i < allCardBody.length; i++) {
            allCardBody[i].classList.add('card_body_darkMode');
        }
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.add('card_darkMode');
        }
        for (let i = 0; i < allIcon.length; i++) {
            allIcon[i].style.filter = "invert(70%)";
        }
        for (let i = 0; i < allLink.length; i++) {
            allLink[i].classList.add('link_dark');
            allLink[i].classList.remove('link_light');
        }
        for (let i = 0; i < allHeader.length; i++) {
            allHeader[i].classList.add('header_dark');
            allHeader[i].classList.remove('header_light');
        }
        for (let i = 0; i < allCard.length; i++) {
            allCard[i].classList.add('card_darkMode');
            allCardFooter[i].classList.add('card_darkMode');
            allCard[i].classList.remove('card_light');
            allCardFooter[i].classList.remove('card_light');
        }
        console.log(allCardBody);
    } else {
        let layoutBgLight;
        layoutBgLight = document.querySelector('body');
        layoutBgLight.classList.remove('dark');
        layoutBgLight.classList.add('light');
        console.log(allCardBody);
        // loader.classList.remove('loader_darkMode');
        for (let i = 0; i < loader.length; i++) {
            loader[i].classList.remove('loader_darkMode')
        }
        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].classList.remove('dark_inputBox');
        }
        for (let i = 0; i < allCardBody.length; i++) {
            allCardBody[i].classList.remove('card_body_darkMode');
        }
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.remove('card_darkMode');
        }
        for (let i = 0; i < allIcon.length; i++) {
            allIcon[i].style.filter = "invert(0%)";
        }
        for (let i = 0; i < allLink.length; i++) {
            allLink[i].classList.add('link_light');
            allLink[i].classList.remove('link_dark');
        }
        for (let i = 0; i < allHeader.length; i++) {
            allHeader[i].classList.add('header_light');
            allHeader[i].classList.remove('header_dark');
        }
        for (let i = 0; i < allCard.length; i++) {
            allCard[i].classList.remove('card_darkMode');
            allCardFooter[i].classList.remove('card_darkMode');
            allCard[i].classList.add('card_light');
            allCardFooter[i].classList.add('card_light');
        }
        console.log(allCardBody);

    }
}

//set mode name in local storage
function ChangeThemeOnclick() {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
    changeTheme();
}

//get mode name from local storage to display changes
document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
// }
// parliamentConstituencies
// legislativeAssemblyConstituencies
// upBlockEducationConstituencies
// townshipConstituencies
// panchayatSamitis
// villageCouncils
// revenueVilleges
// booths