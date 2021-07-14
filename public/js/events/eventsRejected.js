let link = ['', '', '', 'eventsView'];
let contentEvents = getRequest.content('events/rejected');
let events = contentEvents.message.results;
// console.log(events);

if (contentEvents.error == false) {
    //appending Events
    for (var i = 0; i < events.length; i++) {
        let eventDate = dateConverter(events[i].date);
        let title = events[i].title;
        let maxStringTitle = 20;
        let trimmedDataEvent = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
        // let priority = checkPriority(events[i].priority);
        let eventImage;
        if (events[i].images.length > 0) {
            for (let j = 0; j < events[i].images.length; j++) {
                // console.log(events[i].images[j].image);
                eventImage = `${events[i].images[j].image}`;
            }
        } else {
            eventImage = `https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg`;
        }
        $('#eventsRejectedBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card card_dark cardStyle">
                    <img src=${eventImage}
                    class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                        </div>
                    <div class="card-footer footer">
                        <p><span>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</span></p>
                        <a href="/eventsView/${events[i].id}/${events[i].status}">
                        <span class="viewTag">View Event</span>
                            <span>
                                <img src="/img/icons/link.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
                    `)
    }
} else {
    console.log(contentEvents.messsage);
}

//modifying view in mobile view
window.onload = contentMobileView();