var main_url = "https://bjpbarmer.herokuapp.com/";
// var main_url = "http://192.168.1.3:8002/";
//Ajax Request
let loggedInUserId = null;
function ajaxRequest(type, url, data, status) {
    if (typeof (data) == typeof ({})) {
        data = JSON.stringify(data);
    }
    let error = true;
    let message = "";
    console.log('data is', data)
    console.log("calling for : " + url + " " + type);
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        headers: {
            Accept: "application/json; charset=utf-8",
            'Authorization': getCookie('token'),
            'Content-Type': 'application/json; charset=utf-8'
        },
        crossDomain: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log('jqXHR status is', jqXHR.status);
            if (jqXHR.status == status) {
                error = false;
                message = data;
                console.log('message recieved during ajax call ', message);
            }
            console.log('my status code is ', status);
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
            if (JSON.parse(message).detail == 'Invalid token.') {
                console.log('inside error');
                location.replace('/login');
            }
        }
    });
    return { "error": error, "message": message };
}

//all get requests
class getRequests {
    constructor() {
        this.type = 'get';
        this.status = 200;
        this.data = {};
    }
    //index page
    homepage(sub_url) {
        let homepageUrl = main_url + sub_url + '/';
        return ajaxRequest(this.type, homepageUrl, this.data, this.status);
    }
    //data for members/users
    member(sub_url, id = null) {
        (sub_url == 'member') ? sub_url = 'member' : sub_url = `member/${sub_url}`;
        let memberUrl;
        (id == null) ? memberUrl = main_url + sub_url + '/' : memberUrl = main_url + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, memberUrl, this.data, this.status);
    }
    //content data ( blogs, events, complaints )
    content(sub_url, id = null) {
        (sub_url == 'content') ? sub_url = 'content' : sub_url = `content/${sub_url}`;
        let contentUrl;
        (id == null) ? contentUrl = main_url + sub_url + '/' : contentUrl = main_url + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, contentUrl, this.data, this.status);
    }
    //committee related data
    committee(sub_url, id = null) {
        (sub_url == 'committee') ? sub_url = 'committee' : sub_url = `committee/${sub_url}`;
        let committeeUrl;
        (id == null) ? committeeUrl = main_url + sub_url + '/' : committeeUrl = main_url + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, committeeUrl, this.data, this.status);
    }
    //admin privileges for user
    admin(sub_url) {
        let adminUrl = main_url + 'privilege/' + sub_url + '/';
        return ajaxRequest(this.type, adminUrl, this.data, this.status);
    }
    //editor data
    editor(sub_url, id = null) {
        let editorUrl;
        (id == null) ? editorUrl = main_url + 'editor/' + sub_url + '/' : editorUrl = main_url + 'editor/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, editorUrl, this.data, this.status);
    }

}
//all post requests
class postRequests {
    constructor() {
        this.type = 'post';
        this.status = 200;
    }
    content(sub_url, data) {
        let contentUrl = main_url + 'content/' + sub_url + '/';
        return ajaxRequest(this.type, contentUrl, data, this.status);
    }
    committee(sub_url, id, data) {
        (sub_url == 'committee') ? sub_url = 'committee' : sub_url = `committee/${sub_url}`;
        let committeeUrl = main_url + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, committeeUrl, data, this.status);
    }
    admin(sub_url, data) {
        let adminUrl = main_url + 'privilege/' + sub_url + '/';
        return ajaxRequest(this.type, adminUrl, data, this.status);
    }
    editor(sub_url, data, id = null) {
        let editorUrl;
        (id == null) ? editorUrl = main_url + 'editor/' + sub_url + '/' : editorUrl = main_url + 'editor/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, editorUrl, data, this.status);
    }
}
//all patch requests
class patchRequests {
    constructor() {
        this.type = 'patch';
        this.status = 200;
    }
    member(sub_url, id, data) {
        (sub_url == 'member') ? sub_url = 'member' : sub_url = `member/${sub_url}`;
        let memberUrl = main_url + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, memberUrl, data, this.status);
    }
    content(sub_url, id, data) {
        let contentUrl = main_url + 'content/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, contentUrl, data, this.status);
    }
    admin(sub_url, id, data) {
        let adminUrl = main_url + 'privilege/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, adminUrl, data, this.status);
    }
}
//all delete requests
class deleteRequests {
    constructor() {
        this.type = 'delete';
        this.status = 204;
        this.data = {};
    }
    admin(sub_url, id) {
        let adminUrl = main_url + 'privilege/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, adminUrl, this.data, this.status);
    }
    editorTemplate(sub_url, id) {
        let editorTemplateUrl = main_url + 'editor/' + sub_url + '/' + id + '/';
        return ajaxRequest(this.type, editorTemplateUrl, this.data, this.status);
    }
}
let getRequest = new getRequests();
let postRequest = new postRequests();
let patchRequest = new patchRequests();
let deleteRequest = new deleteRequests();
//function to check status and return it
function checkStatus(status) {
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

    //if token and privilege cookies is not present then return.
    if (getCookie("token") == "" || getCookie("privilege") == "") return;

    var permissions = getCookie("privilege");
    permissionsStringify = JSON.parse(permissions);
    let memberPrivilege = permissionsStringify.member_privilege;
    let committeePrivilege = permissionsStringify.committee_privilege;
    let committeeSpecificPrivilege = permissionsStringify.committee_specific_privilege;
    let verificationPrivilege = permissionsStringify.verification_privilege;
    let adminPrivilege, verificationPrivilegeBlog, verificationPrivilegeEvent, verificationPrivilegeComplaint;
    (permissionsStringify.admin_privilege != null) ? adminPrivilege = permissionsStringify.admin_privilege.manage_admin : adminPrivilege = permissionsStringify.admin_privilege;
    //set href link when clicked on navbar privilege
    if (adminPrivilege != null) {
        //displaying privilege link according to cookie
        $('#privilegesLink').css('display', 'block')
    }

    //If member has permission to privilege for blog, event & complaint then store its boolean value
    if (permissionsStringify.verification_privilege != null) {
        verificationPrivilegeBlog = permissionsStringify.verification_privilege.manage_blog;
        verificationPrivilegeEvent = permissionsStringify.verification_privilege.manage_event;
        verificationPrivilegeComplaint = permissionsStringify.verification_privilege.manage_complaint;
    }
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
    switch (sendLinkToChangeStatus) {
        case 'blogsView':
            if (verificationPrivilegeBlog == true || permissionsStringify.admin_privilege != null) {
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
                                <a href="/blogForm/${blog_id}/2" class="edit__button button__design">Edit</a>
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
                                <a href="/blogForm/${blog_id}/1" class="edit__button button__design">Edit</a>
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
                                <a href="/blogForm/${blog_id}/3" class="edit__button button__design">Edit</a>
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
                switch (status) {
                    case '2':
                        document.getElementById("footerPrivilegeComplaint").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsComplaint").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsComplaint').append(`
                                <div class="edit">
                                    <a href="/complaintsForm/${complaint_id}/2" class="edit__button button__design">Edit</a>
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
                                    <a href="/complaintsForm/${complaint_id}/1" class="edit__button button__design">Edit</a>
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
                                    <a href="/complaintsForm/${complaint_id}/3" class="edit__button button__design">Edit</a>
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
                switch (status) {
                    case '2':
                        document.getElementById("footerPrivilegeEvent").classList.add("footerPrivilege");
                        document.getElementById("privilegeButtonsEvent").classList.add("footerPrivilegeButtons");
                        $('#privilegeButtonsEvent').append(`
                                <div class="edit">
                                    <a href="/eventsForm/${event_id}/2" class="edit__button button__design">Edit</a>
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
                                <a href="/eventsForm/${event_id}/1" class="edit__button button__design">Edit</a>
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
                                    <a href="/eventsForm/${event_id}/3" class="edit__button button__design">Edit</a>
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
}

//set privilege in cookie
if (getCookie('privilege') == '') {
    let memberProfile = getRequest.member('member_profile');
    if (memberProfile.message.member_privileges) {
        setCookie('privilege', JSON.stringify(memberProfile.message.member_privileges), 10);
    }

}

//set member profile data in cookie
if (getCookie('member_profile') == '') {
    let memberProfile = getRequest.member('member_profile');
    if (memberProfile.message.member_details) {
        setCookie('member_profile', JSON.stringify(memberProfile.message.member_details), 10);
    }
}

//set member profile data in cookie
if (getCookie('member_profile') != "") {
    loggedInUserId = JSON.parse(getCookie('member_profile')).id;
    $('#profileButton').attr('href', '/profile/' + JSON.parse(getCookie('member_profile')).id);
}
//modifying view in mobile view
function contentMobileView() {
    let width = window.outerWidth;
    let navbar = document.getElementById('navbarLinks');
    if (width < 768) {
        $('.removeButton').html(`<i class="far fa-trash-alt"></i>`);
    } else {
        $('.removeButton').html(`Remove`);
    }
    if (width <= 991) {
        navbar.classList.add('mobileNavbar');
        console.log('inside');
        $('.burgerMobileButton').show();
        $('.sidemenuMobile').show();
        $('.sidemenu').hide();
        $('.deleteProfile').html(`<i class="fas fa-trash-alt"></i>`)
        $('.navbarLinksDesktop').hide()
        $('.mobileViewNav').show()
    } else {
        navbar.classList.remove('mobileNavbar', 'container');
        $('.burgerMobileButton').hide();
        $('.sidemenuMobile').hide();
        $('.sidemenu').show();
        $('.deleteProfile').html(`Delete Profile`)
        $('.navbarLinksDesktop').show()
        $('.mobileViewNav').hide()
    }
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

//converts time

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
    if (priority.toLowerCase() == 'low') {
        priorityBar = `
    <div class="priorityMobile priority_low">
        <span class="badge rounded-pill">
            <img src="/img/icons/Tag.png"> 
            <span class="priorityTag">Priority:</span>
            <span class="priority_set">
                Low
            </span>
        </span>
    </div>
    `
    } else if (priority.toLowerCase() == 'medium') {
        priorityBar = `
    <div class="priorityMobile priority_mid">
        <span class="badge rounded-pill">
            <img src="/img/icons/Tag.png"> 
            <span class="priorityTag">Priority:</span>
            <span class="priority_set">
                Medium
            </span>
        </span>
    </div>
    `
    } else if (priority.toLowerCase() == 'high') {
        priorityBar = `
    <div class="priorityMobile priority_high">
        <span class="badge rounded-pill">
            <img src="/img/icons/Tag.png"> 
            <span class="priorityTag">Priority:</span>
            <span class="priority_set">
                 High
            </span>
        </span>
    </div>
    `
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
    let patchRequestContent = patchRequest.content(`${reqLink}/content_update`, id, { status: `${status}` });
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
    if (patchRequestContent.error == false) {
        window.location.replace(`/${reqLink}${status}`);
    } else {
        console.log(`can't able to perform patch request for this request`)
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

//search members
function mySearchFunction(input, members, memberName) {
    let filter, item, i, txtValue, memberSearch = input, memberBlock = members, memberCard = memberName;
    input = document.getElementById(`${memberSearch}`);
    filter = input.value.toUpperCase();
    // Grabs the parent element by id
    members = document.getElementById(`${memberBlock}`);
    // Individual item on list
    memberName = members.getElementsByClassName(`${memberCard}`);
    for (i = 0; i < memberName.length; i++) {
        item = memberName[i];
        txtValue = item.textContent || item.innerText;
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
    let allCardBody, allCard, allCardFooter, allLink, allHeader, allIcon, allTabs, allInputs, loader;
    allCardBody = document.querySelectorAll('.card_body_dark');
    allTabs = document.querySelectorAll('.tab_dark');
    allCard = document.querySelectorAll('.card_dark');
    allCardFooter = document.querySelectorAll('.card_dark .footer');
    allLink = document.querySelectorAll('.nav-link');
    allHeader = document.querySelectorAll('.header,.headerMain,.events__detail,.events__image');
    allIcon = document.querySelectorAll('.icon_img');
    allInputs = document.querySelectorAll('.dark_box');
    loader = document.querySelectorAll('.loader_dark');
    (document.querySelector('.sidenav')) ? document.querySelector('.sidenav').style.backgroundColor = "#252836" : console.log('no side nav');
    // document.querySelectorAll('.buttonInvert img').style.filter = "invert(100%)"
    if (localStorage.getItem('mode') === 'dark') {
        let layoutBgDark;
        layoutBgDark = document.querySelector('body');
        layoutBgDark.classList.add('dark');
        layoutBgDark.classList.remove('light');
        // document.getElementById('navbarLinks').classList.add('navbarDarkMobile');
        document.querySelector('.navbarLinksMobile').style.backgroundColor = '#252836';
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
    } else {
        let layoutBgLight;
        layoutBgLight = document.querySelector('body');
        layoutBgLight.classList.remove('dark');
        layoutBgLight.classList.add('light');
        document.querySelector('.sidenav').style.backgroundColor = "#fff"
        document.querySelector('.navbarLinksMobile').style.backgroundColor = '#fff';
        // document.getElementById('navbarLinks').classList.remove('navbarDarkMobile');
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
    }
    //check theme inside local storage
    (localStorage.getItem('mode') == 'dark') ? $('#themeMode').attr('checked', true) : $('#themeMode').attr('checked', false);
}

//set mode name in local storage
function ChangeThemeOnclick(check) {
    localStorage.setItem('mode', check === false ? 'light' : 'dark');
    changeTheme();
}

//get mode name from local storage to display changes
document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

//overlay sidebar open
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
//overlay sidebar close
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//go back button
function goBack() {
    window.history.back();
}
