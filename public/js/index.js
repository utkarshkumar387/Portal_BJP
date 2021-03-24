let link = ['', '', '', ''];
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
// var home = fetchHomepageDataTest('homepage');
var home = fetchHomepageData('homepage');
// console.log(home.message.blogs.length);
let blogs = home.message.blogs;
console.log(blogs);
let events = home.message.events;
console.log(events);
let complaints = home.message.complaints;
console.log(complaints);

if (home.error == false) {

    //appending blogs
    for (var i = 0; i < blogs.length; i++) {
        let blogDate = dateConverter(blogs[i].date);
        let name = blogs[i].user.first_name + ' ' + blogs[i].user.last_name
        let title = blogs[i].title;
        let description = blogs[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        console.log(trimmedDataBlog);

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
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${name}</span></p>
                    <a href="/blogsView/${blogs[i].id}/${blogs[i].status}">
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
        let title = complaints[i].complaint_subject;
        let maxStringTitle = 20;
        let trimmedDataComplaint = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
        console.log(trimmedDataComplaint);
        let priority = checkPriority(complaints[i].priority);
        let name = complaints[i].user.first_name + ' ' + complaints[i].user.last_name;

        $('#complaintsBlock').append(`
            <div class="card cardStyle">
            <div class="complaints__header">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${name}</b>
                    <p class="small">Pune, <span>Maharashtra</span>
                    </p>
                </div>
                ${priority}
            </div>
            <div class="complaints__body">
                <p class="card-text"><span>Sub: </span>${trimmedDataComplaint.trimStringTitle}</p>
            </div>
            <div class="card-footer footer">
                <p>${complaintDate[0]} ${complaintDate[1]} ${complaintDate[2]}</p>
                <a href="/complaintsView/${complaints[i].id}/${complaints[i].status}">
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
    // why event is getting appended again and again
    for (var i = 0; i < events.length; i++) {
        let eventDate = dateConverter(events[i].date);
        let title = events[i].title;
        let description = events[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        console.log(trimmedDataEvent);
        console.log(eventDate[0]);
        $('#eventBlock').append(`
            <li class="glide__slide events__card">
                <div class="card cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
 z                   class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</p>
                        <a href="/eventsView/${events[i].id}/${events[i].status}">
                            View Event
                            <span>
                                <img src="/img/icons/link.png" alt="">
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
//mounting slider
glide.mount();
console.log('Token stored in cookie is :', getCookie('token'));



