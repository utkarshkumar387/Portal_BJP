const zoom = document.querySelector('.editor_zoom input')
zoom.addEventListener('change', zoomLayout);
zoom.addEventListener('mouseover', zoomLayout);

function zoomLayout() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


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
