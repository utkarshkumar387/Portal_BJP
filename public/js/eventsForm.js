var authorDetails, authorName, authorID;
let link = window.location.href.split('/');
let eventID, eventFunctionality, status;
console.log(link[4]);
console.log(link.length);
// eventFunctionality = document.getElementById('addEditEvent');
// console.log(eventFunctionality);
if (link.length == 4) {
    document.getElementById('addEditEventButton').addEventListener('click', addEvent);
    console.log('inside add event')
} else { //if greater than 4 execute it
    document.getElementById('addEditEventButton').addEventListener('click', editEvent);
}
if (link.length == 6) {
    eventID = link[4];
    status = link[5];
    console.log(eventID, status);
    let editEventDetails;
    switch (status) {
        case '2':
            editEventDetails = fetchContentByID('events', eventID);
            console.log(editEventDetails);
            break;
        case '1':
            editEventDetails = fetchContentByID('events_unapproved', eventID);
            console.log(editEventDetails);
            break;
        case '3':
            editEventDetails = fetchContentByID('events_unapproved', eventID);
            console.log(editEventDetails);
            break;
    }
    console.log('Inside event edit form');
    if (editEventDetails.error == false) {
        // console.log(editeventDetails.message);
        // console.log(authorName);
        $('#eventTitle').val(editEventDetails.message.title);
        $('#eventDate').val(editEventDetails.message.event_date);
        $('#eventBody').val(editEventDetails.message.description);
    }
}

document.getElementById('browse').addEventListener('change', imgBase64Converter);

function addEvent() {
    // can't able to send post request in events
    console.log('inside add event function');
    authorDetails = JSON.parse(getCookie('member_profile'));
    console.log(authorDetails);
    // authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.user_id;
    console.log($('#eventTitle').val());
    let data = {
        data: JSON.stringify({
            event_data:
            {
                user_id: authorID,
                title: $('#eventTitle').val(),
                event_data: $('#eventDate').val(),
                description: $('#eventBody').val(),
                status: '1'
            },
            // event_data_images: JSON.stringify([

            // ])
        })
    }
    console.log(data);
    let eventDetails = addContent('events', data);
    if (eventDetails.error == false) {
        console.log('event added')
        window.location.replace('/eventsApproved');
    } else {
        console.log(eventDetails.error);
        console.log(eventDetails.message);
    }
}
function editEvent() {
    let data = {
        // image: null,
        user_id: authorID,
        title: $('#eventTitle').val(),
        event_data: $('#eventDate').val(),
        description: $('#eventBody').val(),
        status: '1'

    }
    console.log(data);
    //no patch request in content/events/id or content/approved
    let eventDetails = updateContent('events', eventID, data);
    console.log(eventDetails);
    if (eventDetails.error == false) {
        window.location.replace(`/eventsView/${eventID}/${status}`);
    } else {
        console.log(eventDetails.message);
    }
}

