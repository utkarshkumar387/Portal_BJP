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