//sidebar
let link = ['', '', '', '', ''];
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
            <span class="socialMedia" id="userFacebook" data-name="facebook" style="margin: 0.125em 0.125em; font-size: 0.875em;color: rgb(255, 255, 255),">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#facebookID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
            <span class="socialMedia" id="userInstagram" data-name="instagram" style="margin: 0.125em 0.125em; font-size: 0.875em;color: rgb(255, 255, 255);">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#instagramID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
            <span class="socialMedia" id="userTwitter" data-name="twitter" style="margin: 0.125em 0.125em; font-size: 0.875em;color: rgb(255, 255, 255);">
                utkarshkumar387
            </span>
        </div>`);
    } else {
        $('#twitterID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
            <span class="socialMedia" id="userWhatsappNumber" data-name="whatsapp" style="margin: 0.125em 0.125em; font-size: 0.875em;color: rgb(255, 255, 255);">
                9876543212
            </span>
        </div>`);
    } else {
        $('#whatsappID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
            <span class="socialMedia" id="userWebsite" data-name="website" style="margin: 0.125em 0.125em; font-size: 0.875em;color: rgb(255, 255, 255);">
                www.abc.com
            </span>
        </div>`);
    } else {
        $('#websiteID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
            <span class="socialMedia" id="userEmail" data-name="email" style="margin: 0.125em 0.125em; font-size: 0.875em; color: rgb(255, 255, 255)">
                utkarshkumar387@gmail.com
            </span>
        </div>`);
    } else {
        $('#emailID').remove();
    }
    if ($('.yourNameAndDesignation')) {
        addName()
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
        <div class="yourPersonalImage" data-profile-position="2" style="position: absolute; bottom: 0; right: 0.625em;">
        <img src="/img/your_image.png" class="profilePicture" data-profile-height="15.625" style="height: 15.625em;" alt="your image">
    </div>
        `);
    } else if ($('#imageRightSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="2" style="position: absolute; bottom: 0; right: 0.625em;">
                <img src="/img/your_image.png" class="profilePicture" data-profile-height="12.5" style="height: 12.5em;" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftLarge')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="1" style="position: absolute; bottom: 0; left: 0.625em;">
                <img src="/img/your_image.png" class="profilePicture" data-profile-height="15.625" style="height: 15.625em;" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" data-profile-position="1" style="position: absolute; bottom: 0; left: 0.625em;">
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
        <div class="yourNameAndDesignation d-flex flex-column align-items-center" data-position="2" style="position: absolute; bottom: ${footerHeight}px; right: 3.125em">
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
            <div class="yourNameAndDesignation d-flex flex-column align-items-center" data-position="1" style="position: absolute; bottom: ${footerHeight}px; left: 3.125em">
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
        <div class="businessLogo" id="businessLogo" data-logo-position="1" style="position: absolute; top: 1.25em; left: 1.25em">
            <img style="height:2.5em; width:2.5em" src="/img/IDcard/logoBack.png" alt="">
        </div>
        `)
    } else if ($('#logoRightAligned')[0].checked) {
        $('#layoutInner').append(`
        <div class="businessLogo" id="businessLogo" data-logo-position="2"  style="position: absolute; top: 1.25em; right: 1.25em">
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
    let footerColor = '000000';
    footerColor = RGBToHex(document.getElementById('testElem1').style.backgroundColor);
    let allSocialMedia = document.getElementsByClassName('socialMedia');
    let facebook = -1, instagram = -1, twitter = -1, whatsapp = -1, website = -1, email = -1;
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
    // console.log('social media color is ', document.querySelector('.socialMedia').style.color);
    let socialMediaFontColor;
    (document.querySelector('.socialMedia')) ? socialMediaFontColor = RGBToHex(document.querySelector('.socialMedia').style.color) : socialMediaFontColor = '';
    let profileImagePosition = 0;
    (document.querySelector('.yourPersonalImage')) ? profileImagePosition = document.querySelector('.yourPersonalImage').getAttribute("data-profile-position") : profileImagePosition = '';
    let profilePictureHeight;
    (document.querySelector('.profilePicture')) ? profilePictureHeight = document.querySelector('.profilePicture').getAttribute("data-profile-height") : profilePictureHeight = '';
    let logoPosition = 0;
    (document.querySelector('.businessLogo')) ? logoPosition = document.querySelector('.businessLogo').getAttribute("data-logo-position") : logoPosition = '';
    let nameFontColor;
    (document.querySelector('.userName')) ? nameFontColor = RGBToHex(document.querySelector('.userName').style.color) : nameFontColor = '';
    let nameStrokeColor;
    (document.querySelector('.userName')) ? nameStrokeColor = RGBToHex(document.querySelector('.userName').style.webkitTextStrokeColor) : nameStrokeColor = '';
    let postDisplay = false;
    (document.querySelector('.userPost')) ? postDisplay = (document.querySelector('.userPost').style.display == 'none') ? postDisplay = false : postDisplay = true : postDisplay = false;
    let postFontColor;
    (document.querySelector('.userPost')) ? postFontColor = RGBToHex(document.querySelector('.userPost').style.color) : nameFontColor = '';
    let postStrokeColor;
    (document.querySelector('.userPost')) ? postStrokeColor = RGBToHex(document.querySelector('.userPost').style.webkitTextStrokeColor) : postStrokeColor = '';
    console.log('profile picture height ', profilePictureHeight);
    let cssValues = {
        footer_color: footerColor,
        facebook: facebook,
        instagram: instagram,
        whatsapp: whatsapp,
        website: website,
        email: email,
        twitter: twitter,
        social_media_font_size: 0.875,
        social_media_color: socialMediaFontColor,
        profile_picture_position: profileImagePosition,
        profile_picture_height: profilePictureHeight,
        logo_position: logoPosition,
        logo_height: 2.5,
        name_font_size: 1.5,
        name_font_outer_colour: nameFontColor,
        name_font_inner_colour: nameStrokeColor,
        post_display: postDisplay,
        post_font_size: 6,
        post_font_outer_colour: postFontColor,
        post_font_inner_colour: postStrokeColor,
    }
    // console.log('all css values are ', cssValues);
    return cssValues;
}

function postCssSyntaxValues() {
    // console.log('all css values to post', getCssSyntaxValues());
    let data = getCssSyntaxValues();
    let validation = checkValidation();
    if (validation == false) {
        let response = postRequest.editor('custom_design', data);
        if (response.error == false) {
            alert('New template added successfully')
        } else {
            console.log(response.message);
        }
    }
}

//template build validations
function checkValidation() {
    let parent = document.getElementById('layoutInner');
    // $('#optionNotSelectedAlert').remove();
    console.log(parent);
    if (!parent.querySelector('#testElem1')) {
        $('#optionNotSelectedAlert').append(`
        <div class="alert alert-warning alert-dismissible fade show"
        style="position: absolute; max-width: 500px; min-width: 500px;" role="alert">
            <strong>Footer Not added.</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
        return true;
    }
    if (!parent.querySelector('.socialMedia')) {
        $('#optionNotSelectedAlert').append(`
        <div class="alert alert-warning alert-dismissible fade show"
        style="position: absolute; max-width: 500px; min-width: 500px;" role="alert">
            <strong>Add atleast one social media link.</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
        return true;
    }
    if (!parent.querySelector('.yourPersonalImage')) {
        $('#optionNotSelectedAlert').append(`
        <div class="alert alert-warning alert-dismissible fade show"
        style="position: absolute; max-width: 500px; min-width: 500px;" role="alert">
            <strong>Add position of your image.</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
        return true;
    }
    if (!parent.querySelector('.yourNameAndDesignation')) {
        $('#optionNotSelectedAlert').append(`
        <div class="alert alert-warning alert-dismissible fade show"
        style="position: absolute; max-width: 500px; min-width: 500px;" role="alert">
            <strong>Add your name position.</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
        return true;
    }
    if (!parent.querySelector('.businessLogo')) {
        $('#optionNotSelectedAlert').append(`
        <div class="alert alert-warning alert-dismissible fade show"
        style="position: absolute; max-width: 500px; min-width: 500px;" role="alert">
            <strong>Add your business logo position.</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        `)
        return true;
    }
    return false;
}

class displayAlltemplates {
    constructor(allTemplates) {
        this.allTemplates = allTemplates;
        if (this.allTemplates.error == false) {
            for (let i = 0; i < this.allTemplates.message.length; i++) {
                this.template = allTemplates.message[i];
                this.id = this.template.id;
                this.footerColor = this.template.footer_color;
                this.facebook = this.template.facebook;
                this.instagram = this.template.instagram;
                this.whatsapp = this.template.whatsapp;
                this.website = this.template.website;
                this.email = this.template.email;
                this.twitter = this.template.twitter;
                this.socialMediaFontSize = this.template.social_media_font_size;
                this.socialMediaFontColor = this.template.social_media_color;
                this.profilePicturePosition = this.template.profile_picture_position;
                this.profilePictureHeight = this.template.profile_picture_height;
                this.logoPosition = this.template.logo_position;
                this.logoHeight = this.template.logo_height;
                this.nameFontSize = this.template.name_font_size;
                this.nameFontStroke = this.template.name_font_outer_colour;
                this.nameFontColor = this.template.name_font_inner_colour;
                this.postDisplay = this.template.post_display;
                this.postFontSize = this.template.post_font_size;
                this.postFontStroke = this.template.post_font_outer_colour;
                this.postFontColor = this.template.post_font_inner_colour;
                console.log('footer color :', this.footerColor, 'facebook :', this.facebook, 'whatsapp :', this.whatsapp, 'Instagram :', this.instagram, 'website :', this.website, 'email :', this.email, 'twitter :', this.twitter, 'social media font size :', this.socialMediaFontSize, 'social media font color :', this.socialMediaFontColor, 'profile picture position :', this.profilePicturePosition, 'Profile picture height', this.profilePictureHeight, 'logo position :', this.logoPosition, 'logo height:', this.logoHeight, 'Name font size:', this.nameFontSize, 'Name font stroke', this.nameFontStroke, 'Name font color', this.nameFontColor, 'Post display', this.postDisplay, 'Post font size :', this.postFontSize, 'Post font stroke :', this.postFontStroke, 'Post font color:', this.postFontColor);
                this.appendTemplates();
            }
        } else {
            console.log('error occurs while displaying templates', allTemplates.message)
        }
    }
    appendTemplates() {
        let position = this.appendPositionOfImage();
        $('#allTemplate').append(`
        <div class="col-md-6 py-3 d-flex justify-content-center">
            <div class="templateCard p-1">
                <div class="background__box" style="background-color: grey">
                    <div class="yourNameAndDesignation d-flex flex-column align-items-center" data-position="1" style="position: absolute;right: calc(3.125em/5)">
                        <span class="userName" style="font-size: calc(1.5em/5); font-weight: 700; color: #${this.nameFontColor}; -webkit-text-stroke: calc(0.0325em/5) #${this.nameFontStroke};">
                            Utkarsh
                        </span>
                        <span class="userPost" id="userPost" style="font-weight: 500; font-size:calc(1rem/5); color: #${this.postFontColor}; -webkit-text-stroke: calc(0.0325em/5) #${this.postFontStroke};">
                            Zila Parisad
                        </span>
                    </div>
                    <div id="testElem1${this.id}"
                        style="position: absolute; z-index: 1; background-color: #${this.footerColor}; width:100%; min-height: calc(1.25em/5); bottom: 0;"
                        class="testElem d-flex justify-content-around flex-wrap">
                    </div>
                    <div class="yourPersonalImage" style="position: absolute; bottom: 0; ${position}: calc(10px/5);">
                        <img src="/img/your_image.png" style="height: calc(${this.profilePictureHeight}em/5);" alt="your image">
                    </div>
                </div>
                <div class="templateButtons d-flex justify-content-between mt-2">
                    <div class="templateUse templateButton">
                        <i class="fas fa-arrow-down"></i>
                    </div>
                    <div class="templateDelete templateButton">
                        <i class="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
                `)
        this.appendSocialMediaInTemplates();
        position = this.appendPositionOfImage();
        console.log(this.appendPositionOfImage());
    }
    appendSocialMediaInTemplates() {
        let socialMedias = {
            facebook: this.facebook,
            instagram: this.instagram,
            whatsapp: this.whatsapp,
            website: this.website,
            email: this.email,
            twitter: this.twitter,
        }
        var sortableSocialMedias = [];
        for (var socialMedia in socialMedias) {
            sortableSocialMedias.push([socialMedia, socialMedias[socialMedia]]);
        }
        sortableSocialMedias.sort(function (elementA, elementB) {
            return elementA[1] - elementB[1];
        });
        for (let i = 0; i < sortableSocialMedias.length; i++) {
            if (sortableSocialMedias[i][1] >= 0) {
                switch (sortableSocialMedias[i][0]) {
                    case 'facebook':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="facebookID">
                            <img src="/img/icons/facebook_icon.png" style="height: calc(0.875em/5); width: calc(0.875em/5)" alt="facebook icon"/>
                            <span class="socialMedia" id="userFacebook" data-name="facebook" style="margin: clac(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5);color: #${this.nameFontColor};">
                                utkarshkumar387
                            </span>
                        </div>
                        `)
                        break;
                    case 'instagram':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="instagramID">
                            <img src="/img/icons/insta_icon.png" style="height: calc(0.875em/5); width: calc(0.875em/5)" alt="Instagram icon"/>
                            <span class="socialMedia" id="userInstagram" data-name="instagram" style="margin: calc(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5);color: #${this.nameFontColor};">
                                utkarshkumar387
                            </span>
                        </div>
                        `)
                        break;
                    case 'twitter':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="twitterID">
                            <img src="/img/icons/twitter_icon.png" style="height: calc(0.875em/5); width: calc(0.875em/5)" alt="twitter icon"/>
                            <span class="socialMedia" id="userTwitter" data-name="twitter" style="margin: calc(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5);color:#${this.nameFontColor};">
                                utkarshkumar387
                            </span>
                        </div>
                        `)
                        break;
                    case 'whatsapp':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="whatsappID">
                            <img src="/img/icons/whatsapp_icon.png" style="height: calc(0.875em/5); width: calc(0.875em/5)" alt="whatsapp icon"/>
                            <span class="socialMedia" id="userWhatsappNumber" data-name="whatsapp" style="margin: calc(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5);color:#${this.nameFontColor};">
                                9876543212
                            </span>
                        </div>
                        `)
                        break;
                    case 'website':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="websiteID">
                            <img src="/img/icons/website_link.png" style="height: calc(0.875em/5); width: calc(0.875em/5)" alt="website icon"/>
                            <span class="socialMedia" id="userWebsite" data-name="website" style="margin: calc(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5);color: #${this.nameFontColor};">
                                www.abc.com
                            </span>
                        </div>
                        `)
                        break;
                    case 'email':
                        $(`#testElem1${this.id}`).append(`
                        <div class="d-flex align-items-center" id="emailID">
                            <img src="/img/icons/email_icon.png" style="height:calc(0.875em/5); width:calc(0.875em/5)" alt="email icon"/>
                            <span class="socialMedia" id="userEmail" data-name="email" style="margin: calc(0.125em/5) calc(0.125em/5); font-size: calc(0.875em/5); color: #${this.nameFontColor};">
                                utkarshkumar387@gmail.com
                            </span>
                        </div>
                        `)
                        break;
                    default:
                        console.log('No social media to show');
                }
            }
        }
    }
    appendPositionOfImage() {
        let position;
        switch (this.profilePicturePosition) {
            case 1:
                position = 'left'
                break;
            case 2:
                position = 'right'
                break;
            default:
                $('#yourPersonalImage').hide();
        }
        return position;
    }
}
let getAllTemplates = getRequest.editor('custom_design');
const displayTemplates = new displayAlltemplates(getAllTemplates);
// //execcommand with command function
// function sendCmd(command) {
//     document.execCommand(command, false, null);
// }

// //execute command with command and argument function
// function sendCommandArg(command, arg) {
//     document.designMode = "on";
//     document.execCommand(command, false, arg);
// }

