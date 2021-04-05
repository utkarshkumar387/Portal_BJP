let link = ['', '', '', ''];
let contentEvents;
if (document.getElementById('previousEvents').clicked == true) {
    console.log('inside previous')
    document.getElementById('previousEvents').addEventListener('click', function () {
        let previousEventLink = contentEvents.message.previous.split('?').pop();
        console.log(previousEventLink);
        contentEvents = fetchContent(`events/pending/?${previousEventLink}`);
    })
} else if (document.getElementById('nextEvents').clicked == true) {
    console.log('inside next');
    document.getElementById('nextEvents').addEventListener('click', function () {
        let nextEventLink = contentEvents.message.next.split('?').pop();
        console.log(nextEventLink);
        contentEvents = fetchContent(`events/pending/?${nextEventLink}`);
    })
} else {
    contentEvents = fetchContent('events/pending');
}
let events = contentEvents.message.results;
console.log(events);

if (contentEvents.error == false) {
    //appending Events
    for (var i = 0; i < events.length; i++) {
        let eventDate = dateConverter(events[i].date);
        let title = events[i].title;
        let maxStringTitle = 20;
        let trimmedDataEvent = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
        // let priority = checkPriority(events[i].priority);

        $('#eventsPendingBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card card_dark cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                        </div>
                    <div class="card-footer footer">
                        <p><span>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</span></p>
                        <a href="/eventsView/${events[i].id}/${events[i].status}">
                            View Event
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