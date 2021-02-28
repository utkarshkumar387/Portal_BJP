// const e = require("express");

let link = window.location.href.split('/');
console.log(link);
var event_id = link[4], status;
status = link[5];
$(document).ready(() => {
    let event;
    let eventDetails;
    // let recentBlogs;
    switch (link[5]) {
        case 'approved':
            event = fetchContentByID('event_with_recent', event_id);
            eventDetails = event.message.event_details;
            // recentBlogs = event.message.recent_blogs;
            console.log('fetching from event_with_recent api link');
            break;
        case 'pending':
            event = fetchContentByID('events_unapproved', event_id);
            eventDetails = event.message;
            console.log('fetching from events_approved api link');
            break;
        case 'rejected':
            event = fetchContentByID('events_unapproved', event_id);
            eventDetails = event.message;
            console.log('fetching from events_unapproved api link');
            break;
        default:
            console.log('No events found');
    }
    //recent wali bad me add krni hai
    // console.log(event);
    if (event.error == false) {
        // status = event.message.event_details.status;
        //message
        //eventDetails
        //recentevents
        let eventDetails;
        switch (status) {
            case 'approved':
                eventDetails = event.message.event_details;
                console.log('inside approved')
                break;
            case 'rejected':
            case 'pending':
                eventDetails = event.message;
                console.log('inside pending or rejected')
                break;
            default:
                console.log('No data to display')

        }
        console.log(eventDetails);
        // let recentevents = event.message.recent_events;
        console.log(eventDetails.district, eventDetails.state);
        // let eventDate = dateConverter(eventDetails.date);
        let eventOrganizerName = `${eventDetails.user.first_name}` + ' ' + `${eventDetails.user.last_name}`
        // let priority = checkPriority(eventDetails.priority);
        // status = eventDetails.status;
        // console.log(status);
        let eventDate = dateConverter(eventDetails.event_date);
        let eventDateJoin = eventDate[0] + ' ' + eventDate[1] + ' ' + eventDate[2];

        let eventTime = timeConverter(eventDetails.event_date);


        $('#eventTitle').html(eventDetails.title);
        $('#eventVenue').html(eventDetails.venue);
        $('#eventDate').html(eventDateJoin);
        $('#eventGuest').html(eventDetails.chief_guest);
        $('#eventTime').html(eventTime);
        $('#eventOrganizer').html(eventOrganizerName);
        $('#eventOrganizerDistrict').html(eventDetails.district);
        $('#eventOrganizerState').html(eventDetails.state);



        //wiil add recents later
        // for (var i = 0; i < recentevents.length; i++) {
        //     let recenteventsDate = dateConverter(recentevents[i].date);
        //     let name = recentevents[i].user_id.first_name + ' ' + recentevents[i].user_id.last_name
        //     let title = recentevents[i].event_subject;
        //     let maxStringTitle = 20;
        //     console.log(title, maxStringTitle);
        //     let trimmedDataevent = titleDescTrimmer(title, maxStringTitle);
        //     let priority = checkPriority(recentevents[i].priority);

        //     $('#eventViewBlogsBlock').append(`
        //     <div class="card cardStyle">
        //     <div class="events__header">
        //         <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
        //             class="rounded-circle" alt="...">
        //         <div class="events__sender">
        //             <b>${name}</b>
        //             <p class="small">Pune, <span>Maharashtra</span>
        //             </p>
        //         </div>
        //         ${priority}
        //     </div>
        //     <div class="events__body">
        //         <p class="card-text"><span>Sub: </span>${trimmedDataevent.trimStringTitle}</p>
        //     </div>
        //     <div class="card-footer footer">
        //         <p>${recenteventsDate[0]} ${recenteventsDate[1]} ${recenteventsDate[2]}</p>
        //         <a href="/eventsView/${recentevents[i].id}">
        //             View event
        //             <span>
        //                 <img src="/img/icons/link.png" alt="">
        //             </span>
        //         </a>
        //     </div>
        // </div>
        //             `)
        // }
    } else {
        console.log(event.message);
    }
});
