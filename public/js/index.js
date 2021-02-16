$(document).ready(function () {
    //index event slider
    let glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        focusAt: 'center',
        startAt: 0,
        gap: 20,
        autoplay: 4000 | true,
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    });
    var home = fetchHomepageData('homepage');
    let events = home.message.events;
    console.log(events);
    let blogs = home.message.blogs;
    console.log(blogs);
    let complaints = home.message.complaints;
    console.log(complaints);

    if (home.error == false) {

        //appending blogs
        for (var i = 0; i < blogs.length; i++) {
            let blogDate = dateConverter(blogs[i].date);
            let title = blogs[i].title;
            let description = blogs[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

            $('#blogsBlock').append(`
        <div class="card cardStyle">
        <div class="row g-0">
        <div class="col-md-6">
            <img class="blogsImg"
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg"
                alt="...">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}${trimmedDataBlog.extend}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}...</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${blogs.user_id}</span></p>
                    <a href="/blogsView">
                        View Blog
                        <span>
                            <img src="img/icons/link.png" alt="">
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
        `)
        }

        //appending complaints
        for (var i = 0; i < complaints.length; i++) {
            let complaintDate = dateConverter(complaints[i].date);
            let title = blogs[i].title;
            let maxStringTitle = 20;
            let trimmedDatacomplaint = titleDescTrimmer(title, maxStringTitle);
            let priority = checkPriority(complaints[i].priority);

            $('#complaintsBlock').append(`
            <div class="card cardStyle">
            <div class="complaints__header">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${complaints[i].user_id.first_name} ${complaints[i].user_id.last_name}</b>
                    <p class="small">Pune, <span>Maharashtra</span>
                    </p>
                </div>
                ${priority}
            </div>
            <div class="complaints__body">
                <p class="card-text"><span>Sub: </span>${trimmedDatacomplaint.trimStringTitle}</p>
            </div>
            <div class="card-footer footer">
                <p>${complaintDate[0]} ${complaintDate[1]} ${complaintDate[2]}</p>
                <a href="/complaintsView">
                    View Complaint
                    <span>
                        <img src="img/icons/link.png" alt="">
                    </span>
                </a>
            </div>
        </div>
                    `)
        }

        //appending events
        for (var i = 0; i < events.length; i++) {
            let eventDate = dateConverter(events[i].date);
            let title = events[i].title;
            let description = events[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);

            $('#eventBlock').append(`
            <li class="glide__slide events__card">
                <div class="card cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</p>
                        <a href="/eventsView">
                            View Event
                            <span>
                                <img src="img/icons/link.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
            </li>
            `)
        }
    } else {
        console.log(home.message);
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

    //checking priority of complaints
    function checkPriority(priority) {
        let priorityBar;
        if (priority == 'low') {
            priorityBar = `<div class="priority priority_low">
            <span class="badge rounded-pill"><img src="img/icons/Tag.png"> Priority:<span class="priority_set">Low</span></span>
        </div>`
        } else if (priority == 'medium') {
            priorityBar = `<div class="priority priority_mid">
            <span class="badge rounded-pill"><img src="img/icons/Tag.png"> Priority:
                <span class="priority_set">Medium</span></span>
        </div>`
        } else if (priority == 'high') {
            priorityBar = `<div class="priority priority_high">
            <span class="badge rounded-pill"><img src="img/icons/Tag.png"> Priority:
                <span class="priority_set">High</span></span>
        </div>`
        }
        return priorityBar;
    }

    //mounting slider
    glide.mount();
});



