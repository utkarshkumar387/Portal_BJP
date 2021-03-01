var main_url = "https://bjpbarmer.herokuapp.com/";
// var main_url = "http://192.168.1.3:8001/";
let headerParams = { 'Authorization': 'Token 564ca593060440790f2754d7857c5b28b5637e36' };
//Ajax Request
function ajaxRequest(type, url, data, status) {
    console.log(data);
    let error = true;
    let message = "";
    console.log("calling for : " + url + " " + type);
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        headers: headerParams,
        success: function (data, textStatus, jqXHR) {
            if (jqXHR.status == status) {
                error = false;
                message = data;
            }
            console.log(data);
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
        }
    });

    return { "error": error, "message": message };
}

//Return Parameters to get data
//get home page data
function fetchHomepageData(sub_url) {
    return getHomePageData(sub_url, "get", {}, 200);
}
//get profile data
function fetchProfileData(sub_url) {
    return getProfileData(sub_url, "get", {}, 200)
}
//get content data of blogs, events, complaints,etc
function fetchContent(sub_url) {
    return getContent(sub_url, "get", {}, 200)
}
//get content data by id of blogs, events, complaints, etc
function fetchContentByID(sub_url, id) {
    return getContentByID(sub_url, "get", id, {}, 200)
}

//Patch request functions
//patch request to content by id
function patchRequestByID(sub_url, id, data) {
    return upadateStatus(sub_url, "patch", id, data, 200)
}
//add content to db
function addContent(sub_url, data) {
    return postContent(sub_url, "post", data, 201);
}

//requesting ajax to get profile data
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
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get home page data
function getHomePageData(sub_url, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to get content data
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
//requesting ajax to update status
function upadateStatus(sub_url, type, id, data, status) {
    var type = type;
    var url = main_url + 'content/' + sub_url + '/' + id + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
//requesting ajax to post content 
function postContent(sub_url, type, data, status) {
    var type = type;
    var url = main_url + 'content/' + sub_url + '/';
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
    var permissions = getCookie("privilege");
    permissionsStringify = JSON.parse(permissions);
    let memberPrivilege = permissionsStringify.member_privilege;
    let committeePrivilege = permissionsStringify.committee_privilege;
    let committeeSpecificPrivilege = permissionsStringify.committee_specific_privilege;
    let verificationPrivilege = permissionsStringify.verification_privilege;
    console.log(verificationPrivilege);
    let verificationPrivilegeBlog = permissionsStringify.verification_privilege.manage_blog;
    let verificationPrivilegeEvent = permissionsStringify.verification_privilege.manage_event;
    let verificationPrivilegeComplaint = permissionsStringify.verification_privilege.manage_complaint;
    let adminPrivilege = permissionsStringify.admin_privilege.manage_admin;
    // console.log(status);
    // console.log(memberPrivilege, committeePrivilege, committeeSpecificPrivilege, verificationPrivilege, verificationPrivilegeBlog, verificationPrivilegeEvent, verificationPrivilegeComplaint, adminPrivilege);
    // console.log(sendLinkToChangeStatus, status);
    let sendLinkToChangeStatus = link[3];
    // if (sendLinkToChangeStatus == 'blogsView' || sendLinkToChangeStatus == 'eventsView' || sendLinkToChangeStatus == 'complaintsView') {
    if (memberPrivilege == null && committeePrivilege == null && committeeSpecificPrivilege == null && verificationPrivilege == null && adminPrivilege == false) {
        $('#footerLikeDislike').append(`
             <img class="mr-3" src="/img/icons/like.png" alt=""><img src="/img/icons/divider.png"
             alt=""><img class="ml-3" src="/img/icons/dislike.png" alt="">
             `);
        $('#contentUpdateDate').append(`
            <p><b id="contentUpdatedD">Last Updated on: <span id="blogDay"></span>
                                        <span id="blogYearName"></span> <span id="blogYear"></span></b></p>
            `)
    } else if (verificationPrivilege != null) {
        console.log(sendLinkToChangeStatus);
        switch (sendLinkToChangeStatus) {
            case 'blogsView':
                console.log('inside blog view');
                if (verificationPrivilegeBlog == true) {
                    console.log(sendLinkToChangeStatus, status);
                    switch (status) {
                        case 'approved':
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
                                <a href="/blogForm/${blog_id}/approved" class="edit__button button__design">Edit Blog</a>
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
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'pending');
                            })
                            break;
                        case 'pending':
                            document.getElementById("footerPrivilege").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtons").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtons').append(`
                            <div class="edit">
                                <a href="/blogForm/${blog_id}/pending" class="edit__button button__design">Edit Blog</a>
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
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
                            })
                            break;
                        case 'rejected':
                            document.getElementById("footerPrivilege").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtons").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtons').append(`
                            <div class="edit">
                                <a href="/blogForm/${blog_id}/rejected" class="edit__button button__design">Edit Blog</a>
                            </div>
                            <div class="rejectApprove d-flex">
                                <div class="approve">
                                    <a class="approve__button button__design" id="approveButton">Approve</a>
                                </div>
                            </div>
                            `)
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
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
            case 'complaintsView':
                if (verificationPrivilegeComplaint == true) {
                    console.log(sendLinkToChangeStatus, status);
                    switch (status) {
                        case 'approved':
                            document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtonsComplaint').append(`
                                <div class="edit">
                                <a href="/complaintsForm/${complaint_id}/approved" class="edit__button button__design">Edit Complaint</a>
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
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'pending');
                            })
                            break;
                        case 'pending':
                            document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                            console.log(sendLinkToChangeStatus);
                            $('#privilegeButtonsComplaint').append(`
                <div class="edit">
                    <a href="/complaintsForm/${complaint_id}/pending" class="edit__button button__design">Edit Complaint</a>
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
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
                            })
                            break;
                        case 'rejected':
                            document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtonsComplaint').append(`
                <div class="edit">
                    <a href="/complaintsForm/${complaint_id}/rejected" class="edit__button button__design">Edit Complaint</a>
                </div>
                <div class="rejectApprove d-flex">
                    <div class="approve">
                        <a class="approve__button button__design" id="approveButton">Approve</a>
                    </div>
                </div>
                `)
                            document.getElementById("approveButton").addEventListener('click', function () {
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
                            })
                            break;
                        default:
                            console.log('No complaint view');
                    }
                }
            case 'eventsView':
                if (verificationPrivilegeEvent == true) {
                    console.log(sendLinkToChangeStatus, status);
                    switch (status) {
                        case 'approved':
                            document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                    <a href="/eventsForm/${event_id}/approved" class="edit__button button__design">Edit Event</a>
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
                                console.log('sending rejected link to privilege buttons', sendLinkToChangeStatus)
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                console.log('sending pending link to privilege buttons', sendLinkToChangeStatus)
                                pivilegeButtons(sendLinkToChangeStatus, 'pending');
                            })
                            break;
                        case 'pending':
                            document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                            console.log(sendLinkToChangeStatus);
                            $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                <a href="/eventsForm/${event_id}/pending" class="edit__button button__design">Edit Event</a>
                                </div>
                                    <div class="rejectApprove d-flex">
                                    <div class="reject mr-3">
                                <a class="reject__button button__design" id="rejectButton">Reject</a>
                                </div>
                                <div class="approve">
                                    <a class="approve__button button__design" id="pendingButton">Approve</a>
                                </div>
                                </div>
                                `)
                            document.getElementById("rejectButton").addEventListener('click', function () {
                                console.log('sending rejected link to privilege buttons', sendLinkToChangeStatus)
                                pivilegeButtons(sendLinkToChangeStatus, 'rejected');
                            })
                            document.getElementById("approveButton").addEventListener('click', function () {
                                console.log('sending approved link to privilege buttons', sendLinkToChangeStatus)
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
                            })
                            break;
                        case 'rejected':
                            document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                            document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                            $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                <a href="/eventsForm/${event_id}/rejected" class="edit__button button__design">Edit Event</a>
                                </div>
                                <div class="rejectApprove d-flex">
                                <div class="approve">
                                <a class="approve__button button__design" id="approveButton">Approve</a>
                                </div>
                                </div>
                                `)
                            document.getElementById("approveButton").addEventListener('click', function () {
                                console.log('sending approved link to privilege buttons', sendLinkToChangeStatus)
                                pivilegeButtons(sendLinkToChangeStatus, 'approved');
                            })
                            break;
                        default:
                            console.log('No complaint view');
                    }
                }
        }
    }
    // }
}
if (getCookie('privilege') == '') {
    let memberProfile = fetchProfileData('member_profile');
    setCookie('privilege', JSON.stringify(memberProfile.message.member_details[0].permissions), 10);
}

if (getCookie('member_profile') == '') {
    let memberProfile = fetchProfileData('member_profile');
    setCookie('member_profile', JSON.stringify(memberProfile.message.member_details[0]), 10);
}

//functions for all pages
//date converted to this format -> (12 feb 2021)
function dateConverter(date) {
    let blogDate = date.split("-");
    let date_month = blogDate[1];
    let date_day = blogDate[2];
    let dayElement = date_day.split(":");
    let day = dayElement[0].slice(3);
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
    if (priority == 'low') {
        priorityBar = `<div class="priority priority_low">
        <span class="badge rounded-pill"><img src="/img/icons/Tag.png"> Priority:<span class="priority_set">Low</span></span>
    </div>`
    } else if (priority == 'medium') {
        priorityBar = `<div class="priority priority_mid">
        <span class="badge rounded-pill"><img src="/img/icons/Tag.png"> Priority:
            <span class="priority_set">Medium</span></span>
    </div>`
    } else if (priority == 'high') {
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
    console.log(fName, reqLink, id, status);
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
    let patchRequestBlog = patchRequestByID(`${reqLink}/update_status`, id, { status: `${status}` });
    console.log(patchRequestBlog);
    if (patchRequestBlog.error == false) {
        // console.log(`/${reqLink}${status}`)
        window.location.replace(`/${reqLink}${status}`);
    }
}

//convert multiple image to base64
function imgBase64Converter() {
    var preview = document.querySelector('#preview');
    var files = document.querySelector('input[type=file]').files;

    function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
            var reader = new FileReader();

            reader.addEventListener("load", function () {
                var image = new Image();
                image.height = 100;
                image.title = file.name;
                image.src = this.result;
                preview.appendChild(image);
            }, false);

            reader.readAsDataURL(file);
        }
        console.log(file);
    }


    if (files) {
        [].forEach.call(files, readAndPreview);
    }
}

//preloader
// window.addEventListener('load', function () {
//     document.querySelector('body').classList.add("loaded")
// });
