$(document).ready(function () {
    let contentEvents = fetchContent('events');
    let upcomingEvents = contentEvents.message.upcoming_events;
    let pastEvents = contentEvents.message.past_events;

    if (contentEvents.error == false) {
        for (let i = 0; i < upcomingEvents.length; i++) {
            let upcomingEventDate = dateConverter(upcomingEvents[i].date);
            let title = upcomingEvents[i].title;
            let description = upcomingEvents[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

            $('#upcomingEventBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${upcomingEventDate[0]} ${upcomingEventDate[1]} ${upcomingEventDate[2]}</p>
                        <a href="/eventsView">
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
        for (let i = 0; i < pastEvents.length; i++) {
            let pastEventDate = dateConverter(pastEvents[i].date);
            let title = pastEvents[i].title;
            let description = pastEvents[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

            $('#pastEventBlock').append(`
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${pastEventDate[0]} ${pastEventDate[1]} ${pastEventDate[2]}</p>
                        <a href="/eventsView">
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

    //date converted to this format -> (12 feb 2021)
    function dateConverter(date) {
        let blogDate = date.split("-");
        let date_month = blogDate[1];
        let date_day = blogDate[2];
        let dayElement = date_day.split(":");
        let day = dayElement[0].slice(3);
        let year = blogDate[0];
        let date_list = [];
        let date_string = date_month.toString();
        for (var j = 0, len = date_string.length; j < len; j += 1) {
            date_list.push(date_string.charAt(j));
        }
        if (date_list[0] == "0") {
            date_month = date_list[1];
        } else {
            date_month = date[1];
        }
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month_name = month[date_month - 1];
        let blogDateDis = [day, month_name, year];
        return (blogDateDis);
    }

    //trimming of title and description
    function titleDescTrimmer(title, description, maxStringTitle, maxStringDesc) {
        let trimStringTitle;
        let trimStringDesc;
        let extend;
        if (title.length > maxStringTitle) {
            trimStringTitle = title.substr(0, maxStringTitle);
            extend = '...'
        } else {
            trimStringTitle = title;
            extend = '';
        }

        if (description.length > maxStringDesc) {
            trimStringDesc = description.substr(0, maxStringDesc);
        }

        return {
            "trimStringTitle": trimStringTitle,
            "trimStringDesc": trimStringDesc,
            "extend": extend
        };
    }
});