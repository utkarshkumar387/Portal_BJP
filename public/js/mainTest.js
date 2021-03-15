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
function fetchHomepageDataTest(sub_url) {
    return getHomePageDataTest(sub_url, "get", {}, 200);
}
function getHomePageDataTest(sub_url, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return ajaxRequest(type, url, data, status);
}
let homepage = fetchHomepageDataTest('homepage');