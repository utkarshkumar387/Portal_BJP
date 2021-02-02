const zoom = document.querySelector('.editor_zoom input')
zoom.addEventListener('change', zoomLayout);
zoom.addEventListener('mouseover', zoomLayout);


function zoomLayout() {
    console.log(this.name, this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + `%`);
}
window.onload = zoomLayout;



function downloadPoster() {
    var container = document.getElementById("layoutZoom");
    html2canvas(container, { allowTaint: false }).then(function (canvas) {

        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
}

const bindInputToElement = (inputEl, elementEl) => {
    inputEl.addEventListener('keyup', () => {
        elementEl.textContent = inputEl.value;
    });
}
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


function enabledEditMode() {
    document.querySelector('#poster').designMode = 'On';
}

function sendCmd(command) {
    document.execCommand(command, false, null);
}
function sendCommandArg(command, arg) {
    document.execCommand(command, false, arg);
}

//draggable and resizable
interact('.resize')
    .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
            move(event) {
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)'

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
            }
        }
    })

interact('.drag')
    .draggable({
        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,
        }
    })
function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener