let link = window.location.href.split('/');
let contentEvents = getRequest.content('events');
let upcomingEvents = contentEvents.message.upcoming_events;
// console.log(upcomingEvents);
let pastEvents = contentEvents.message.past_events;
// console.log(pastEvents);

if (contentEvents.error == false) {
    for (let i = 0; i < upcomingEvents.length; i++) {
        let upcomingEventDate = dateConverter(upcomingEvents[i].date);
        let title = upcomingEvents[i].title;
        let description = upcomingEvents[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

        //nothing is coming in upcoming event block
        $('#upcomingEventBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card card_dark cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${upcomingEventDate[0]} ${upcomingEventDate[1]} ${upcomingEventDate[2]}</p>
                        <a href="/eventsView/${upcomingEvents[i].id}/${upcomingEvents[i].status}">
                        <span class="viewTag">View Event</span>
                            <span>
                                <img src="img/icons/link.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            `)
    }
    for (let i = 0; i < pastEvents.length; i++) {
        let pastEventDate = dateConverter(pastEvents[i].date);
        let title = pastEvents[i].title;
        let description = pastEvents[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

        $('#pastEventBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card card_dark cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${pastEventDate[0]} ${pastEventDate[1]} ${pastEventDate[2]}</p>
                        <a href="/eventsView/${pastEvents[i].id}/${pastEvents[i].status}">
                            View Event
                            <span>
                                <img src="img/icons/link.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            `)
    }
} else {
    console.log(contentEvents.message);
}

//modifying view in mobile view
window.onload = contentMobileView();