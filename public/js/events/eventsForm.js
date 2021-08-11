let authorDetails, authorName, authorID, edittedEventUserID;
let link = window.location.href.split('/');
let eventID, eventFunctionality, status, image64;
// console.log(link[4]);
// console.log(link.length);
// eventFunctionality = document.getElementById('addEditEvent');
// console.log(eventFunctionality);
if (link.length == 4) {
    document.getElementById('addEditEventButton').addEventListener('click', addEvent);
    // console.log('inside add event')
} else { //if greater than 4 execute it
    document.getElementById('addEditEventButton').addEventListener('click', editEvent);
}
if (link.length == 6) {
    eventID = link[4];
    status = link[5];
    // console.log(eventID, status);
    let editEventDetails;
    switch (status) {
        case '2':
            editEventDetails = getRequest.content('events', eventID);
            // console.log(editEventDetails);
            edittedEventUserID = editEventDetails.message.user_id;
            // console.log('edit event user id', edittedEventUserID);
            break;
        case '1':
            editEventDetails = getRequest.content('events_unapproved', eventID);
            // console.log(editEventDetails);
            edittedEventUserID = editEventDetails.message.user_id;
            // console.log('edit event user id', edittedEventUserID);
            break;
        case '3':
            editEventDetails = getRequest.content('events_unapproved', eventID);
            // console.log(editEventDetails);
            edittedEventUserID = editEventDetails.message.user_id;
            // console.log('edit event user id', edittedEventUserID);
            break;
    }
    console.log('Inside event edit form');
    if (editEventDetails.error == false) {
        // console.log(editeventDetails.message);
        // console.log(authorName);
        // console.log('event date is ', editEventDetails.message.event_date)
        $('#eventTitle').val(editEventDetails.message.title);
        $('#eventDate').val(editEventDetails.message.event_date);
        $('#eventBody').val(editEventDetails.message.description);
    }
}

// document.getElementById('browse').addEventListener('change', imgBase64Converter);

function addEvent() {
    let alerts = document.getElementById('eventValidations').querySelector('.alert');
    if (alerts != null) {
        alerts.remove()
    }
    // can't able to send post request in events
    // console.log('inside add event function');
    authorDetails = JSON.parse(getCookie('member_profile'));
    // console.log(authorDetails);
    // authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.user_id;
    // console.log($('#eventTitle').val());
    // console.log(convertedImage);
    let data = {
        data: JSON.stringify({
            event_data:
            {
                user_id: authorID,
                title: $('#eventTitle').val(),
                chief_guest: $('#eventChiefGuest').val(),
                venue: $('#eventVenue').val(),
                event_date: null,
                // event_data: $('#eventDate').val(),
                description: $('#eventBody').val(),
                status: '1'
            },
            event_data_images: JSON.stringify(convertedImage)
        })
    }
    console.log(data);
    if (checkEventValidations() == true) {
        let eventDetails = postRequest.content('events', data);
        if (eventDetails.error == false) {
            console.log('event added')
            window.location.replace('/eventsApproved');
        } else {
            console.log(eventDetails.error);
            console.log(eventDetails.message);
        }
    }
}
function editEvent() {
    let alerts = document.getElementById('blogValidations').querySelector('.alert');
    if (alerts != null) {
        alerts.remove()
    }
    let data = {
        // image: null,
        user_id: edittedEventUserID,
        title: $('#eventTitle').val(),
        chief_guest: $('#eventChiefGuest').val(),
        venue: $('#eventVenue').val(),
        event_date: $('#eventDate').val(),
        description: $('#eventBody').val(),
        status: '1'

    }
    // console.log(data);
    //no patch request in content/events/id or content/approved
    if (checkEventValidations() == true) {
        let eventDetails = patchRequest.content('events/content_update', eventID, data);
        // console.log(eventDetails);
        if (eventDetails.error == false) {
            console.log('event patch request done');
            // window.location.replace(`/eventsView/${eventID}/${status}`);
        } else {
            console.log(eventDetails.message);
        }
    }
}
let convertedImage = [];
function convertSingleBase64(input) {
    image64 = null;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // console.log(e.target.result);
            image64 = e.target.result;
            $('#preview').attr('height', '100')
            $('#preview').attr('src', `${e.target.result}`);
            convertedImage.push({ "image": image64 });
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function checkEventValidations() {
    let eventCheckTitle = $('#eventTitle');
    let eventCheckChiefGuest = $('#eventChiefGuest');
    let eventCheckVenue = $('#eventVenue');
    if (eventCheckTitle.val() == "") {
        $('#eventValidations').append(`
            <div class="alert alert-danger" role="alert">
                Please enter event title.
            </div>
        `)
        return false;
    }
    if (eventCheckChiefGuest.val() == "") {
        $('#eventValidations').append(`
            <div class="alert alert-danger" role="alert">
                Please enter event's chief Guest.
            </div>
        `)
        return false;
    }
    if (eventCheckVenue.val() == "") {
        $('#eventValidations').append(`
            <div class="alert alert-danger" role="alert">
                Please enter events venue.
            </div>
        `)
        return false;
    }
    return true;
}

//modifying view in mobile view
window.onload = contentMobileView();

