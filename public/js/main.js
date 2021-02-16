var main_url = "https://bjpbarmer.herokuapp.com/";
function ajaxRequest(type, url, data, status) {
    let error = true;
    let message = "";
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        headers: { "Authorization": "Token 41dbb74aaefc9395472cb23039529467f2244fc2" },
        success: function (data, textStatus, jqXHR) {
            if (jqXHR.status == status) {
                error = false;
                message = data;
                console.log(message);
            }
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
        }
    });

    return { "error": error, "message": message };
}

//Return Parameters to get data
function fetchHomepageData(sub_url) {
    return getHomePageData(sub_url, "get", {}, 200);
}
function fetchProfileData(sub_url) {
    return getProfileData(sub_url, "get", {}, 200)
}
function fetchContent(sub_url) {
    return getContent(sub_url, "get", {}, 200)
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
    return ajaxRequest(type, url, data, status);
}

function getHomePageData(sub_url, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}

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