var main_url = "https://bjpbarmer.herokuapp.com/";
// var main_url = "http://192.168.1.3:8001/";
let headerParams = { 'Authorization': 'Token ba730132209b079871e705ad18c39dacfb3a925d' };
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
    return upadateStatus(sub_url, "PATCH", id, data, 200)
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
function checkCookie() {
    var permissions = getCookie("privilege");
    permissionsStringify = JSON.parse(permissions);
    let memberPrivilege = permissionsStringify.member_privilege;
    let committeePrivilege = permissionsStringify.committee_privilege;
    let committeeSpecificPrivilege = permissionsStringify.committee_specific_privilege;
    let verificationPrivilege = permissionsStringify.verification_privilege;
    let verificationPrivilegeBlog = permissionsStringify.verification_privilege.manage_blog;
    let verificationPrivilegeEvent = permissionsStringify.verification_privilege.manage_event;
    let verificationPrivilegeComplaint = permissionsStringify.verification_privilege.manage_complaint;
    let adminPrivilege = permissionsStringify.admin_privilege.manage_admin;
    console.log(status);
    console.log(memberPrivilege, committeePrivilege, committeeSpecificPrivilege, verificationPrivilege, verificationPrivilegeBlog, verificationPrivilegeEvent, verificationPrivilegeComplaint, adminPrivilege);

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
        //have to change to true
        if (verificationPrivilegeBlog == false) {
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
                        <a class="reject__button button__design" onclick="rejectBlog()">Reject</a>
                    </div>
                    <div class="approve">
                        <a class="approve__button button__design" onclick="unapproveBlog()">Unapprove</a>
                    </div>
                </div>
                
            `)
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
                        <a class="reject__button button__design" onclick="rejectBlog()">Reject</a>
                    </div>
                    <div class="approve">
                        <a class="approve__button button__design" onclick="approveBlog()">Approve</a>
                    </div>
                </div>
            `)
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
                        <a class="approve__button button__design" onclick="approveBlog()">Approve</a>
                    </div>
                </div>
            `)
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
    }
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
//function to change the status to rejected
function rejectBlog() {
    let patchRequestBlog = patchRequestByID('blogs/update_status', blog_id, { status: "rejected" });
    console.log(patchRequestBlog);
    if (patchRequestBlog.error == false) {
        window.location.replace('/blogsRejected');
    }
}
//function to change the status to approved
function approveBlog() {
    let patchRequestBlog = patchRequestByID('blogs/update_status', blog_id, { status: "approved" });
    console.log(patchRequestBlog);
    if (patchRequestBlog.error == false) {
        window.location.replace('/blogs');
    }

}
//function to change the status to unapproved
function unapproveBlog() {
    let patchRequestBlog = patchRequestByID('blogs/update_status', blog_id, { status: "pending" });
    console.log(patchRequestBlog);
    if (patchRequestBlog.error == false) {
        window.location.replace('/blogsUnapproved');
    }

}
