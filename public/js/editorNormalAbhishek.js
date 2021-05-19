//<div style="width: 305px; height: 29px; background-color: rgba(5, 103, 132, 1);"/>

var filePath = '/img/your_image.png';
var mainFrameId = 'layoutZoom';
var logoPath = '/img/IDcard/logoBack.png';
    
var heightFrame = document.getElementById('layoutZoom').clientHeight;
var widthFrame = document.getElementById('layoutZoom').clientWidth;

function getStrip(params){

    width = params['width'];
    height = params['height'];
    backgroundColor = params['backgroundColor'];
    bottom = params['bottom'];
    left = params['left'];
    top = params['top'];
    right = params['right'];


    var myStripElement = document.createElement("div");
    myStripElement.setAttribute('id', 'bottom-strip');
    myStripElement.style.height = height;
    myStripElement.style.width = width;
    myStripElement.style.position = 'absolute';
    myStripElement.style.backgroundColor= backgroundColor;
    myStripElement.style.bottom = bottom;
    myStripElement.style.left = left;
    myStripElement.style.top = top;
    myStripElement.style.right = right;
    myStripElement.style.display = 'table';
    myStripElement.style.tableLayout = 'fixed';

    return myStripElement;
}

function addStrip(color){

    console.log(heightFrame, widthFrame)

    document.getElementById('layoutZoom').appendChild( getStrip(

        {
            'width': heightFrame+'px',
            'height': widthFrame * 0.07 +'px',
            'backgroundColor': color,
            'bottom': '10px',
            'top': '0px',
        }
    ));
}
function addSocailMedia(){
    var social_media = [
        {
            'social' : 'facebook',
            'username': '/abhishekvarde'
        },
        {
            'social' : 'whatsapp',
            'username': '/abhishekvarde'
        },
        {
            'social' : 'insta',
            'username': '/abhishekvarde'
        },
        // {
        //     'social' : 'whatsapp',
        //     'username': '/abhishekvarde'
        // }
    ]
    // adding social media to strip
    for( var i in social_media ){

        var socialMediaIcon = document.createElement('img');
        socialMediaIcon.setAttribute('src', '/img/icons/'+ social_media[i]['social'] +'_icon.png')
        socialMediaIcon.style.height = '20px'
        socialMediaIcon.style.width = '20px'
        socialMediaIcon.style.float = 'left'
        socialMediaIcon.style.marginTop = '4px'
        socialMediaIcon.style.margin = '10px'

        var socailMediaUsername = document.createElement('p');
        socailMediaUsername.innerHTML = social_media[i]['username']
        socailMediaUsername.style.float = 'left'
        socailMediaUsername.style.padding = '10px'
        socailMediaUsername.style.color = 'white'

        var innerSocialMediaDiv = document.createElement('div')
        innerSocialMediaDiv.style.alignItems = 'center'
        innerSocialMediaDiv.style.display = 'table';
        innerSocialMediaDiv.style.tableLayout = 'fixed';
        innerSocialMediaDiv.appendChild(socialMediaIcon)
        innerSocialMediaDiv.appendChild(socailMediaUsername)

        var username = document.createElement('div')
        username.setAttribute('class', 'social-media-horizontal')
        username.style.fontSize = '20px';
        // username.style.justifyContent = 'center'
        // username.style.display = 'flex'
        // username.innerHTML = social_media[i]['username']
        username.appendChild(innerSocialMediaDiv)

        document.getElementById('bottom-strip').appendChild(
            username
        )
    }
}

function addPictureGeneral(){
    var photoElement = document.createElement('img');
    photoElement.setAttribute('src', filePath);
    photoElement.setAttribute('alt', 'Pagal');
    // photoElement.style.height = '100px';
    photoElement.style.position = 'absolute';
    photoElement.style.bottom = params['bottom'] + 'px';
    photoElement.style.left = params['left'] + 'px';
    photoElement.style.top = params['top'] + 'px';
    photoElement.style.right = params['right'] + 'px';
    photoElement.style.height = widthFrame * 0.3 + 'px';
    photoElement.style.width = widthFrame * 0.3 + 'px';
    document.getElementById(mainFrameId).appendChild(photoElement);
}

function addPhoto(){
    var photoElement = document.createElement('img');
    photoElement.setAttribute('src', filePath);
    photoElement.setAttribute('alt', 'Pagal');
    // photoElement.style.height = '100px';
    photoElement.style.position = 'absolute';
    photoElement.style.bottom = '0px';
    photoElement.style.right = '0px';
    photoElement.style.width = widthFrame * 0.3 + 'px';
    document.getElementById(mainFrameId).appendChild(photoElement);

}

function addLogo(){
    var photoElement = document.createElement('img');
    photoElement.setAttribute('src', filePath);
    photoElement.setAttribute('alt', 'Pagal');
    // photoElement.style.height = '100px';
    photoElement.style.position = 'absolute';
    photoElement.style.bottom = '0px';
    photoElement.style.right = '0px';
    photoElement.style.width = widthFrame * 0.3 + 'px';
    document.getElementById(mainFrameId).appendChild(photoElement);
}

function setBackground(){
    document.getElementById('layoutZoom').style.backgroundImage = "url('/img/backgroundImage.jpeg')";
    document.getElementById('layoutZoom').style.backgroundSize = heightFrame + 'px ' + heightFrame + 'px'
}

setBackground();
addLogo();
// addPhoto();
addStrip('#000');
addSocailMedia();
