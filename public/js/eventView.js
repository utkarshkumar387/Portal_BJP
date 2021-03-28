//get and split link from here
let link = window.location.href.split('/');
console.log(link);
var event_id = link[4], status;
status = link[5];
let events;
let eventDetails;
//switching to different links which ha to be fired acc to status of event
//case(2) = approved; case(1) = pending; case(3) = rejected; 
switch (link[5]) {
    case '2':
        events = fetchContentByID('event_with_recent', event_id);
        eventDetails = events.message.event_details;
        recentEvents = events.message.recent_events;
        break;
    case '1':
        events = fetchContentByID('events_unapproved', event_id);
        eventDetails = events.message;
        console.log('data from events unapproved', eventDetails);
        $('#home__events').css('display', 'none');
        break;
    case '3':
        events = fetchContentByID('events_unapproved', event_id);
        eventDetails = events.message;
        $('#home__events').css('display', 'none');
        break;
    default:
        console.log('No events found');
}
if (events.error == false) {
    //appending event which is clicked to view
    let eventOrganizerName = `${eventDetails.user.first_name}` + ' ' + `${eventDetails.user.last_name}`
    let eventDate;
    let eventTime;
    let eventDateJoin;
    let eventChiefGuest;
    eventDetails.event_date != null ? eventTime = timeConverter(eventDetails.event_date) : eventTime = 'Not available';
    eventDetails.venue ? eventVenue = eventDetails.venue : eventVenue = 'Not available';
    eventDetails.chief_guest ? eventChiefGuest = eventDetails.chief_guest : eventChiefGuest = 'Not available';
    if (eventDetails.event_date != null) {
        eventDate = dateConverter(eventDetails.event_date);
        eventDateJoin = eventDate[0] + ' ' + eventDate[1] + ' ' + eventDate[2];
    } else {
        eventDateJoin = 'Not available';
    }
    // console.log(eventDetails);
    $('#eventTitleView').html(eventDetails.title);
    $('#eventVenueView').html(eventVenue);
    $('#eventDateView').html(eventDateJoin);
    $('#eventGuestView').html(eventChiefGuest);
    $('#eventTimeView').html(eventTime);
    $('#eventOrganizerView').html(eventOrganizerName);
    $('#eventOrganizerDistrictView').html(eventDetails.user.district);
    $('#eventOrganizerStateView').html(eventDetails.user.state);

    //appending recent events
    if (link[5] == '2') {
        for (var i = 0; i < recentEvents.length; i++) {
            let recentEventsDate = dateConverter(recentEvents[i].date);
            let title = recentEvents[i].title;
            let maxStringTitle = 20;
            let trimmedDataEvent = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
            $('#recentViewEventsBlock').append(
                `
                <div class="col-md-4 events__card mb-4">
                    <div class="card card_dark cardStyle">
                        <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                        class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                        </div>
                        <div class="card-footer footer">
                            <p>${recentEventsDate[0]} ${recentEventsDate[1]} ${recentEventsDate[2]}</p>
                            <a href="/eventsView/${recentEvents[i].id}/${recentEvents[i].status}">
                                View Event
                                <span>
                                    <img src="/img/icons/link.png" alt="">
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                `
            )
        }
    }
} else {
    console.log(events.message);
}