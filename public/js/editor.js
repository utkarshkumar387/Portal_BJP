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

//change footer color
function changeColor() {
    document.getElementById("testElem1").style.backgroundColor =
        document.getElementById("ColorPicker1").value;
}

//Add social media links
//add facebook id
function socialMediaFacebook(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div id="facebookID" style="color: #fff; margin: 5px;">/utkarsh123@</div>`);
    } else {
        $('#facebookID').remove();
    }
}

//add instagram id
function socialMediaInstagram(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div id="instagramID" style="color: #fff; margin: 5px;">/utkarsh123@</div>`);
    } else {
        $('#instagramID').remove();
    }
}

//add twitter id
function socialMediaTwitter(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div id="twitterID" style="color: #fff; margin: 5px;">/utkarsh123@</div>`);
    } else {
        $('#twitterID').remove();
    }
}

//add whatsapp number
function socialMediaWhatsapp(checkbox) {
    if (checkbox.checked == true) {
        $('#testElem1').append(`<div id="whatsappID" style="color: #fff; margin: 5px;">/utkarsh123@</div>`);
    } else {
        $('#whatsappID').remove();
    }
}

//Add your image
function addImage() {
    // console.log($('#imageRightLarge')[0]);
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

//execute command for text
const bindInputToElement = (inputEl, elementEl) => {
    console.log(inputEl, elementEl);
    inputEl.addEventListener('keyup', () => {
        elementEl.textContent = inputEl.value;
    });
}

//Adding footer
$('#foot1').on('click', function () {
    $('.testElem').remove();
    $('#layoutZoom').append($('<div id="testElem1" style="position: absolute; z-index: 1; background-color: black; width: 100%; min-height: 20px; bottom: 0;" class="testElem d-flex justify-content-center"></div>'));
});


//binding entered data
bindInputToElement(
    document.getElementById('your_name'),
    document.getElementById('card_name')
);

bindInputToElement(
    document.getElementById('phone_number'),
    document.getElementById('card_phone')
);
bindInputToElement(
    document.getElementById('Whatsapp_number'),
    document.getElementById('card_whatsapp')
);
bindInputToElement(
    document.getElementById('facebook_link'),
    document.getElementById('card_facebook')
);
bindInputToElement(
    document.getElementById('instagram_link'),
    document.getElementById('card_instagram')
);
bindInputToElement(
    document.getElementById('twitter_link'),
    document.getElementById('card_twitter')
);

//enble edit mode
function enabledEditMode() {
    document.querySelector('#poster').designMode = 'On';
}

//execcommand with command function
function sendCmd(command) {
    document.execCommand(command, false, null);
}

//execute command with command and argument function
function sendCommandArg(command, arg) {
    document.execCommand(command, false, arg);
}

