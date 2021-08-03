let link = ['', '', '', ''];
//index event slider
let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
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
var home = getRequest.homepage('homepage');
let blogs = home.message.blogs;
let events = home.message.events;
let complaints = home.message.complaints;

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
        if (blogs[i].images.length > 0) {
            for (let j = 0; j < blogs[i].images.length; j++) {
                blogImage = `${blogs[i].images[j].image}`;
            }
        } else {
            blogImage = `https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg`;
        }
        $('#blogsBlock').append(`
        <div class="card cardStyle card_dark">
        <div class="row g-0">
        <div class="col-md-6 col-sm-12">
            <img class="blogsImg"
                src="${blogImage}"
                alt="Blog Image">
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="card-body blog_cardBody">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${name}</span></p>
                    <a href="/blogsView/${blogs[i].id}/${blogs[i].status}">
                        <span class="viewTag">View Blog</span>
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
        // console.log(trimmedDataComplaint);
        let priority = checkPriority(complaints[i].priority);
        let name = complaints[i].user.first_name + ' ' + complaints[i].user.last_name;

        $('#complaintsBlock').append(`
            <div class="card cardStyle card_dark">
            <div class="complaints__header">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaintsUserData d-flex align-items-center">
                    <div class="complaints__sender">
                        <b>${name}</b>
                        <p class="small">Pune, <span>Maharashtra</span></p>
                    </div>
                    ${priority}
                </div>
            </div>
            <div class="complaints__body">
                <p class="card-text"><span>Sub: </span>${trimmedDataComplaint.trimStringTitle}</p>
            </div>
            <div class="card-footer footer">
                <p>${complaintDate[0]} ${complaintDate[1]} ${complaintDate[2]}</p>
                <a href="/complaintsView/${complaints[i].id}/${complaints[i].status}">
                <span class="viewTag">View Complaints</span>
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
        let eventImage;
        let title = events[i].title;
        let description = events[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        // console.log(trimmedDataEvent);
        // console.log(eventDate[0]);
        if (events[i].images.length > 0) {
            for (let j = 0; j < events[i].images.length; j++) {
                // console.log(events[i].images[j].image);
                eventImage = `${events[i].images[j].image}`;
            }
        } else {
            eventImage = `https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg`;
        }
        $('#eventBlock').append(`
            <li class="glide__slide events__card">
                <div class="card cardStyle card_dark">
                    <img src=${eventImage}
 z                   class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                    </div>
                    <div class="card-footer footer">
                        <p>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</p>
                        <a href="/eventsView/${events[i].id}/${events[i].status}">
                        <span class="viewTag">View Event</span>
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
// console.log('Token stored in cookie is :', getCookie('token'));
let memberDetails = JSON.parse(getCookie('member_profile'));
// console.log('father name', memberDetails.father_name);
if (memberDetails.father_name) {
    // console.log('inside alert block');
    $('#alert').css('display', 'none');
}
let clickHere = document.getElementById('profileClickHere').setAttribute('href', `/profileEdit/${memberDetails.id}`);

//modifying view in mobile view
window.onload = contentMobileView();





