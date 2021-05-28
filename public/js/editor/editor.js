//sidebar
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) // forEach
});

const bindInputToElement = (inputEl, elementEl) => {
    // console.log(inputEl, elementEl);
    inputEl.addEventListener('keyup', () => {
        // console.log(elementEl);
        elementEl.textContent = inputEl.value;
    });
}

//change color
function changeColor(element, colorPicker) {
    document.querySelector(`.${element}`).style.backgroundColor =
        document.getElementById(`${colorPicker}`).value;
}

//change text stroke color
function changeStrokeColor(element, colorPicker) {
    let color = document.getElementById(`${colorPicker}`).value;
    document.querySelector(`.${element}`).style.webkitTextStroke = `0.0325em ${color}`;
}

//change text color
function changeTextColor(element, colorPicker) {
    // console.log(document.querySelector(`.${element}`));
    let allElements = document.querySelectorAll(`.${element}`)
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.color = document.getElementById(`${colorPicker}`).value;
    }
}

//Add social media links
//add facebook id
function socialMediaFacebook(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="facebookID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/facebook_icon.png" style="height: 0.875em; width: 0.875em" alt="Instagram icon"/>
            <span class="socialMedia" id="userFacebook" data-name="facebook" style="margin: 0.125em 0.125em; font-size: 0.875em;">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#facebookID').remove();
    }
    bindInputToElement(
        document.getElementById('facebook_link'),
        document.getElementById('userFacebook')
    );
}

//add instagram id
function socialMediaInstagram(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`
        <div class="d-flex align-items-center" id="instagramID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/insta_icon.png" style="height: 0.875em; width: 0.875em" alt="Instagram icon"/>
            <span class="socialMedia" id="userInstagram" data-name="instagram" style="margin: 0.125em 0.125em; font-size: 0.875em;">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#instagramID').remove();
    }
    bindInputToElement(
        document.getElementById('instagram_link'),
        document.getElementById('userInstagram')
    );
}

//add twitter id
function socialMediaTwitter(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="twitterID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/twitter_icon.png" style="height: 0.875em; width: 0.875em" alt="Instagram icon"/>
            <span class="socialMedia" id="userTwitter" data-name="twitter" style="margin: 0.125em 0.125em; font-size: 0.875em;">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#twitterID').remove();
    }
    bindInputToElement(
        document.getElementById('twitter_link'),
        document.getElementById('userTwitter')
    );
}

//add whatsapp number
function socialMediaWhatsapp(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="whatsappID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/whatsapp_icon.png" style="height: 0.875em; width: 0.875em" alt="whatsapp icon"/>
            <span class="socialMedia" id="userWhatsappNumber" data-name="whatsapp" style="margin: 0.125em 0.125em; font-size: 0.875em;">
                9876543212
            </span>
        </div>`);
    } else {
        $('#whatsappID').remove();
    }
    bindInputToElement(
        document.getElementById('Whatsapp_number'),
        document.getElementById('userWhatsappNumber')
    );
}

//add website link
function personalWebsite(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="websiteID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/website_link.png" style="height: 0.875em; width: 0.875em" alt="website icon"/>
            <span class="socialMedia" id="userWebsite" data-name="website" style="margin: 0.125em 0.125em; font-size: 0.875em">
                www.abc.com
            </span>
        </div>`);
    } else {
        $('#websiteID').remove();
    }
    bindInputToElement(
        document.getElementById('website_link'),
        document.getElementById('userWebsite')
    );
}

//add email address
function personalEmail(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="emailID" style="color: rgb(255, 255, 255);">
            <img src="/img/icons/email_icon.png" style="height:0.875em; width:0.875em" alt="email icon"/>
            <span class="socialMedia" id="userEmail" data-name="email" style="margin: 0.125em 0.125em; font-size: 0.875em">
                utkarshkumar387@gmail.com
            </span>
        </div>`);
    } else {
        $('#emailID').remove();
    }
    bindInputToElement(
        document.getElementById('email_address'),
        document.getElementById('userEmail')
    );
}

//Add your image
function addImage() {
    $('.yourPersonalImage').remove();
    if ($('#imageRightLarge')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="right" style="position: absolute; bottom: 0; right: 0.625em;">
        <img src="/img/your_image.png" class="profilePicture data-profile-height="15.625" style="height: 15.625em;" alt="your image">
    </div>
        `);
    } else if ($('#imageRightSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="right" style="position: absolute; bottom: 0; right: 0.625em;">
                <img src="/img/your_image.png" class="profilePicture" data-profile-height="12.5" style="height: 12.5em;" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftLarge')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="left" style="position: absolute; bottom: 0; left: 0.625em;">
                <img src="/img/your_image.png" class="profilePicture" data-profile-height="15.625" style="height: 15.625em;" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="left" style="position: absolute; bottom: 0; left: 0.625em;">
                <img src="/img/your_image.png" class="profilePicture" data-profile-height="12.5" style="height: 12.5em;" alt="your image">
            </div>
        `);
    } else {
        $('.yourPersonalImage').remove();
    }
}

//Add Name
function addName() {
    let footerHeight = document.querySelector('#testElem1').offsetHeight
    $('.yourNameAndDesignation').remove();
    if ($('#nameRightAligned')[0].checked) {
        $('#testElem1').before(`
        <div class="yourNameAndDesignation d-flex flex-column align-items-center" data-position="right" style="position: absolute; bottom: ${footerHeight}px; right: 3.125em">
            <span class="userName" style="font-size: 1.5em; font-weight: 700; color: rgb(0,0,0); -webkit-text-stroke: 0.0325em rgb(255,255,255);">
                Utkarsh
            </span>
            <span class="userPost" id="userPost" style="font-weight: 500; color: rgb(0,0,0); -webkit-text-stroke: 0.0325em rgb(255,255,255);">
                <h6>Zila Parisad<h6>
            </span>
        </div>
    `)
    } else if ($('#nameLeftAligned')[0].checked) {
        $('#testElem1').before(`
            <div class="yourNameAndDesignation d-flex flex-column align-items-center" data-position="left" style="position: absolute; bottom: ${footerHeight}px; left: 3.125em">
                <span class="userName" style="font-size: 1.5em; font-weight: 700; color: rgb(0,0,0); -webkit-text-stroke: 0.0325em rgb(255,255,255);">
                    Utkarsh
                </span>
                <span class="userPost" id="userPost" style="font-weight: 500; color: rgb(0,0,0); -webkit-text-stroke: 0.0325em rgb(255,255,255);">
                    Zila Parisad
                </span>
            </div>
        `)
    }
    bindInputToElement(
        document.getElementById('your_name'),
        document.querySelector('.userName')
    );
    bindInputToElement(
        document.getElementById('post_details'),
        document.querySelector('.userPost')
    );
}

//Add business logo
function addBusinessLogo() {
    $('.businessLogo').remove();
    if ($('#logoLeftAligned')[0].checked) {
        $('#layoutInner').append(`
        <div class="businessLogo" id="businessLogo" data-logo-position="left" style="position: absolute; top: 1.25em; left: 1.25em">
            <img style="height:2.5em; width:2.5em" src="/img/IDcard/logoBack.png" alt="">
        </div>
        `)
    } else if ($('#logoRightAligned')[0].checked) {
        $('#layoutInner').append(`
        <div class="businessLogo" id="businessLogo" data-logo-position="right"  style="position: absolute; top: 1.25em; right: 1.25em">
            <img style="height:2.5em; width:2.5em;" src="/img/IDcard/logoBack.png" alt="">
        </div>
        `)
    } else {
        $('.businessLogo').remove();
    }
}

//convert html to png image
function downloadPoster() {
    var container = document.getElementById("layoutCanvas");
    html2canvas(
        container,
        { scrollY: -window.scrollY },
        { scrollX: -window.scrollX },
        {
            letterRendering: 1,
            allowTaint: true
        }).then(function (canvas) {

            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "html_image.jpg";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
        });
}

//Adding footer
$('#foot1').on('click', function () {
    //have to fix margin
    $('.testElem').remove();
    $('#layoutInner').append($('<div id="testElem1" style="position: absolute; z-index: 1; background-color: rgb(0, 0, 0); width: 100%; min-height: 1.25rem; bottom: 0;" class="testElem d-flex justify-content-around flex-wrap"></div>'));
});

//Send template to server
// function getTemplate() {
//     let template = $("#layoutInner").html();
//     // console.log(template);
//     var container = document.getElementById("layoutInner");
//     html2canvas(container, { letterRendering: 1, allowTaint: true }).then(function (canvas) {
//         let frame = canvas.toDataURL();
//         // console.log(frame);
//     });
// }

//Set designation
function setDesignation() {
    // console.log('inside designation', $('#showDesignation')[0]);
    if ($('#showDesignation')[0].checked) {
        $('#userPost').css('display', 'block');
    } else if ($('#hideDesignation')[0].checked) {
        $('#userPost').css('display', 'none');
    } else {
        console.log('Designation show hide not selected')
    }
}

//Edit font-family
function editFontFamily(element, fontFamily) {
    let font = document.querySelectorAll(`.${element}`)
    for (i = 0; i < font.length; i++) {
        console.log(font[i]);
        font[i].style.fontFamily = `${fontFamily}`;
    }
}

//RGB to hex conversion
function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";

    // turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return r + g + b;
}
function getCssSyntaxValues() {
    let canvas = $('#layoutInner');
    let footerColor = RGBToHex(document.getElementById('testElem1').style.backgroundColor);
    let allSocialMedia = document.getElementsByClassName('socialMedia');
    let facebook = "", instagram = "", twitter = "", whatsapp = "", website = "", email = "";
    for (let i = 0; i < allSocialMedia.length; i++) {
        let socialMediaName = allSocialMedia[i].getAttribute("data-name");
        if (socialMediaName == 'facebook') {
            (i >= 0) ? facebook = i : facebook = facebook;
        } else if (socialMediaName == 'instagram') {
            (i >= 0) ? instagram = i : instagram = instagram;
        } else if (socialMediaName == 'twitter') {
            (i >= 0) ? twitter = i : twitter = twitter;
        } else if (socialMediaName == 'website') {
            (i >= 0) ? website = i : website = website;
        } else if (socialMediaName == 'email') {
            (i >= 0) ? email = i : email = email;
        } else if (socialMediaName == 'whatsapp') {
            (i >= 0) ? whatsapp = i : whatsapp = whatsapp;
        } else {
            console.log('No social media selected');
        }
    }
    let socialMediaFontColor;
    (document.querySelector('.socialMedia')) ? socialMediaFontColor = RGBToHex(document.querySelector('.socialMedia').style.color) : socialMediaFontColor = null;
    let profileImagePosition;
    (document.querySelector('.yourPersonalImage')) ? profileImagePosition = document.querySelector('.yourPersonalImage').getAttribute("data-profile-position") : profileImagePosition = null;
    let profilePictureHeight;
    (document.querySelector('.profilePicture')) ? profilePictureHeight = document.querySelector('.profilePicture').getAttribute("data-profile-height") : profilePictureHeight = null;
    let logoPosition;
    (document.querySelector('.businessLogo')) ? logoPosition = document.querySelector('.businessLogo').getAttribute("data-logo-position") : logoPosition = null;
    let nameFontColor;
    (document.querySelector('.userName')) ? nameFontColor = RGBToHex(document.querySelector('.userName').style.color) : nameFontColor = null;
    let nameStrokeColor;
    (document.querySelector('.userName')) ? nameStrokeColor = RGBToHex(document.querySelector('.userName').style.webkitTextStrokeColor) : nameStrokeColor = null;
    let postDisplay;
    (document.querySelector('.userPost')) ? postDisplay = document.querySelector('.userPost').style.display : postDisplay = false;
    let postFontColor;
    (document.querySelector('.userPost')) ? postFontColor = RGBToHex(document.querySelector('.userPost').style.color) : nameFontColor = null;
    let postStrokeColor;
    (document.querySelector('.userPost')) ? postStrokeColor = RGBToHex(document.querySelector('.userPost').style.webkitTextStrokeColor) : postStrokeColor = null;
    // console.log(postFontColor, postStrokeColor);
    let cssValues = {
        footer_color: footerColor,
        facebook: facebook,
        instagram: instagram,
        whatsapp: whatsapp,
        website: website,
        email: email,
        twitter: twitter,
        social_media_font_size: "",
        social_media_color: socialMediaFontColor,
        profile_picture_position: profileImagePosition,
        profile_picture_height: profilePictureHeight,
        logo_position: logoPosition,
        logo_height: "",
        name_font_size: "",
        name_font_outer_colour: nameFontColor,
        name_font_inner_colour: nameStrokeColor,
        post_display: true,
        post_font_size: "",
        post_font_outer_colour: postFontColor,
        post_font_inner_colour: postStrokeColor,
    }
    console.log('all css values are ', cssValues);
}

function postCssSyntaxValues() {

}
// //execcommand with command function
// function sendCmd(command) {
//     document.execCommand(command, false, null);
// }

// //execute command with command and argument function
// function sendCommandArg(command, arg) {
//     document.designMode = "on";
//     document.execCommand(command, false, arg);
// }

