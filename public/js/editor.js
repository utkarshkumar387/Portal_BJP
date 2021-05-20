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
    console.log(inputEl, elementEl);
    inputEl.addEventListener('keyup', () => {
        // console.log(elementEl);
        elementEl.textContent = inputEl.value;
    });
}

//change footer color
function changeColor() {
    document.getElementById("testElem1").style.backgroundColor =
        document.getElementById("ColorPicker1").value;
}

//Add social media links
//add facebook id
function socialMediaFacebook(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div class="d-flex align-items-center" id="facebookID" style="color: #fff; margin: 5px;">
            <img src="/img/icons/facebook_icon.png" height="20" width="20" alt="Instagram icon"/>
            <span id="userFacebook">
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
        <div class="d-flex align-items-center" id="instagramID" style="color: #fff; margin: 5px;">
            <img src="/img/icons/insta_icon.png" height="20" width="20" alt="Instagram icon"/>
            <span id="userInstagram">
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
        $('#testElem1').append(`<div class="d-flex align-items-center" id="twitterID" style="color: #fff; margin: 5px;">
            <img src="/img/icons/twitter_icon.png" height="20" width="20" alt="Instagram icon"/>
            <span id="userTwitter">
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
        $('#testElem1').append(`<div id="whatsappID" style="color: #fff; margin: 5px;">
            <img src="/img/icons/whatsapp_icon.png" height="20" width="20" alt="Instagram icon"/>
            <span id="userWhatsappNumber">
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
        $('#layoutZoom').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; right: 10px;">
        <img src="/img/your_image.png" height="250" alt="your image">
    </div>
        `);
    } else if ($('#imageRightSmall')[0].checked) {
        $('#layoutZoom').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; right: 10px;">
                <img src="/img/your_image.png" height="200" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftLarge')[0].checked) {
        $('#layoutZoom').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; left: 10px;">
                <img src="/img/your_image.png" height="250" alt="your image">
            </div>
        `);
    } else if ($('#imageLeftSmall')[0].checked) {
        $('#layoutZoom').append(`
        <div class="yourPersonalImage" style="position: absolute; bottom: 0; left: 10px;">
                <img src="/img/your_image.png" height="200" alt="your image">
            </div>
        `);
    } else {
        console.log('Nothing to display')
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
            <span class="userPost">
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
                <span class="userPost" style="font-weight: 500">
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

//convert html to png image
function downloadPoster() {
    var container = document.getElementById("layoutZoom");
    html2canvas(container, { letterRendering: 1, allowTaint: true }).then(function (canvas) {

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
    $('.testElem').remove();
    $('#layoutZoom').append($('<div id="testElem1" style="position: absolute; z-index: 1; background-color: black; width: 100%; min-height: 20px; bottom: 0;" class="testElem d-flex justify-content-center flex-wrap"></div>'));
});

//execcommand with command function
function sendCmd(command) {
    document.execCommand(command, false, null);
}

//execute command with command and argument function
function sendCommandArg(command, arg) {
    document.execCommand(command, false, arg);
}