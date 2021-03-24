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
        console.log(response);
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
