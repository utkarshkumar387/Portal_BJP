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
                console.log(error);
                console.log(message);
            }
            console.log('my status code is ', status);
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
            console.log('error', JSON.parse(message).detail);
        }
    });
    // if (JSON.parse(message).detail == 'Invalid token') {
    //     console.log('inside error');
    //     location.replace('/login');
    // }

    return { "error": error, "message": message };
}
function logInMemberData(sub_url, data) {
    let url = main_url + sub_url + '/';
    return ajaxRequest("post", url, data, 200)
}
function addProfileData(sub_url, data) {
    return getProfileData(sub_url, "post", data, 201)
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
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function signUpMember() {
    let data = {
        first_name: $('#signUpFirstName').val(),
        last_name: $('#signUpLastName').val(),
        phone_no: $('#signUpPhoneNumber').val(),
        password: $('#signUpPassword').val()
    }
    console.log(data);

    let response = addProfileData('create_member', data);
    console.log(response);
    if (response.error == false) {
        console.log('member added');
        setCookie('token', `Token ${response.message.token}`, 10);
        window.location.replace('/');
    } else {
        alert('This number is already present please sign up with any another number.');
        console.log(response.message);
    }
}

function logInMember() {
    let data = {
        phone_no: $('#logInPhoneNumber').val(),
        password: $('#logInPassword').val()
    }
    console.log('data data data', data);

    let response = logInMemberData('member/login_member', data);
    if (response.error == false) {
        // console.log('member added');
        // console.log(response.message.token);
        setCookie('token', `Token ${response.message.token}`, 10);
        // console.log(getCookie('token'));
        window.location.replace('/');
    } else {
        alert('This number is not registered. Please Sign up before Log In.');
        console.log(response.message);
    }
}

document.getElementById('loginButton').addEventListener('click', () => {
    $('#signupPage').css('display', 'none');
    $('#loginPage').css('display', 'block');
});
document.getElementById('signupButton').addEventListener('click', () => {
    $('#signupPage').css('display', 'block');
    $('#loginPage').css('display', 'none');
});
