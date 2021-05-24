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
        $('#testElem1').append(`<div class="d-flex align-items-center" id="facebookID" style="color: #fff;">
            <img src="/img/icons/facebook_icon.png" height="14" width="14" alt="Instagram icon"/>
            <span class="socialMedia" id="userFacebook" style="margin-left: 2px; font-size: 14px">
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
        <div class="d-flex align-items-center" id="instagramID" style="color: #fff;">
            <img src="/img/icons/insta_icon.png" height="14" width="14" alt="Instagram icon"/>
            <span class="socialMedia" id="userInstagram" style="margin-left: 2px; font-size: 14px">
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
        $('#testElem1').append(`<div class="d-flex align-items-center" id="twitterID" style="color: #fff;">
            <img src="/img/icons/twitter_icon.png" height="14" width="14" alt="Instagram icon"/>
            <span class="socialMedia" id="userTwitter" style="margin-left: 2px; font-size: 14px">
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
        $('#testElem1').append(`<div class="d-flex align-items-center" id="whatsappID" style="color: #fff;">
            <img src="/img/icons/whatsapp_icon.png" height="14" width="14" alt="whatsapp icon"/>
            <span class="socialMedia" id="userWhatsappNumber" style="margin-left: 2px; font-size: 14px">
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

//Add your image
function addImage() {
    $('.yourPersonalImage').remove();
    if ($('#imageRightLarge')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; right: 10px;">
        <img src="/img/your_image.png" height="250" alt="your image">
    </div>
        `);
    } else if ($('#imageRightSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; right: 10px;">
                <img src="/img/your_image.png" height="200" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftLarge')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; left: 10px;">
                <img src="/img/your_image.png" height="250" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftSmall')[0].checked) {
        $('#layoutInner').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; left: 10px;">
                <img src="/img/your_image.png" height="200" alt="your image">
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
        <div class="yourNameAndDesignation d-flex flex-column align-items-center" style="position: absolute; bottom: ${footerHeight}px; right: 50px">
            <span class="userName" style="font-size: 24px; font-weight: 700">
                Utkarsh
            </span>
            <span class="userPost" class="userPost">
                <h6>Zila Parisad<h6>
            </span>
        </div>
    `)
    } else if ($('#nameLeftAligned')[0].checked) {
        $('#testElem1').before(`
            <div class="yourNameAndDesignation d-flex flex-column align-items-center" style="position: absolute; bottom: ${footerHeight}px; left: 50px">
                <span class="userName" style="font-size: 24px; font-weight: 700">
                    Utkarsh
                </span>
                <span class="userPost" id="userPost" style="font-weight: 500">
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
        <div class="businessLogo" id="businessLogo" style="position: absolute; top: 20px; left: 20px">
            <img height="40" width="40" src="/img/IDcard/logoBack.png" alt="">
        </div>
        `)
    } else if ($('#logoRightAligned')[0].checked) {
        $('#layoutInner').append(`
        <div class="businessLogo" id="businessLogo" style="position: absolute; top: 20px; right: 20px">
            <img height="40" width="40" src="/img/IDcard/logoBack.png" alt="">
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
    $('#layoutInner').append($('<div id="testElem1" style="position: absolute; z-index: 1; background-color: black; width: 500px; min-height: 20px; bottom: 0;" class="testElem d-flex justify-content-around flex-wrap"></div>'));
});

//Send template to server
function getTemplate() {
    let template = $("#layoutInner").html();
    // console.log(template);
    var container = document.getElementById("layoutInner");
    html2canvas(container, { letterRendering: 1, allowTaint: true }).then(function (canvas) {
        let frame = canvas.toDataURL();
        // console.log(frame);
    });
}

//Set designation
function setDesignation() {
    if ($('#showDesignation')[0].checked) {
        $('#userPost').css('display', 'block');
    } else if ($('#hideDesignation')[0].checked) {
        $('#userPost').css('display', 'none');
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
// //execcommand with command function
// function sendCmd(command) {
//     document.execCommand(command, false, null);
// }

// //execute command with command and argument function
// function sendCommandArg(command, arg) {
//     document.designMode = "on";
//     document.execCommand(command, false, arg);
// }

