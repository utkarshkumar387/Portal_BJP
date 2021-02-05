//selecting zoom input
const zoom = document.querySelector('.editor_zoom input')
//executing zoom with change function
zoom.addEventListener('change', zoomLayout);
//executing zoom with mouseover function
zoom.addEventListener('mouseover', zoomLayout);
//zoom in and zoom out
function zoomLayout() {
    console.log(this.name, this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + `%`);
}

//convert html to png image
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

//execute command for text
const bindInputToElement = (inputEl, elementEl) => {
    console.log(inputEl, elementEl);
    inputEl.addEventListener('keyup', () => {
        elementEl.textContent = inputEl.value;
    });
}

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

//draggable and resizable
interact('.resize-drag')
    .resizable({
        // resize from all edges and corners
        edges: { left: false, right: false, bottom: false, top: false },

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
        },
        modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
                outer: 'parent'
            }),
        ],

        inertia: true,
        endOnly: true
    })
    .draggable({
        listeners: {
            // call this function on every dragmove event

            move: dragMoveListener,
        },
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: false
            })
        ]
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

// let posterTags = document.getElementById('poster').querySelectorAll('div, img');

let templateToggle = document.querySelectorAll('.template');
document.addEventListener('dblclick', addDrag);
document.addEventListener('click', removeDrag);
function addDrag(e) {
    e.target.closest('.template').classList.add('resize-drag')
}
function removeDrag(e) {
    e.target.closest('.template').classList.remove('resize-drag')
}
// document.addEventListener('click', function (e) {
//     e.target.classList.toggle('resize-drag');
// })

// document.addEventListener('click', function (e) {
//     for (let i = 0; i < posterTags.length; i++) {
//         if (posterTags[i].getAttribute('class') == e.target.className) {
//             console.log(posterTags[i].getAttribute('class'), e.target.className);
//             console.log("yeahhhh");
//             e.target.classList.toggle('grabbed');
//         } else {
//             console.log(posterTags[i].getAttribute('class'));
//             console.log(e.target);
//             console.log("Nope");
//         }
//     }
//     console.log(e.target.className);
// });

let draggingType;

let itemTypes = document.querySelectorAll("[data-slide-type]");
console.log(itemTypes);
let len = itemTypes.length;

for (let i = 0; i < len; i++) {
    let itemType = itemTypes[i];
    let slideType;

    console.log(itemType);
    itemType.addEventListener("dragstart", function (ev) {
        let self = this;
        slideType = self.getAttribute("data-slide-type");
        draggingType = slideType;
        console.log(slideType);
    });
}

var dropZone = document.querySelector("[data-drop-zone]");
console.log(dropZone);
dropZone.addEventListener("dragover", function (event) {

    // prevent default to allow drop
    event.preventDefault();
}, false);
dropZone.addEventListener("dragenter", function (event) {
    console.log(this);
    // highlight potential drop target when the draggable element enters it
    if (this.className == "c-drop-zone") {
        console.log("enter");
        event.target.classList.toggle("targeted");
    }

}, false);

dropZone.addEventListener("dragleave", function (event) {

    event.target.classList.toggle("targeted");

}, false);

dropZone.addEventListener("drop", function (ev) {
    // prevent default action (open as link for some elements)
    ev.preventDefault();
    var slideTemplate = document.querySelector('[data-slide-type-template="' + draggingType + '"');
    console.log('drop');
    var self = this;
    self.appendChild(slideTemplate.content.cloneNode(true));
});