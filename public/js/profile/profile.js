let link = window.location.href.split('/');
console.log('location is', link[3]);
let profileID = link[4]
// let profileDetails = fetchProfileDataById('member_profile', profileID);
let profileDetails = getRequest.member('member_profile', profileID);
if (profileDetails.error == false) {
    let user = profileDetails.message.member_details;
    let userName;
    (user.first_name || user.last_name) ? userName = user.first_name + ' ' + user.last_name : userName = 'Not available';
    $('#memberName').html(userName);
    (user.committee) ? $('#memberCommitteName').html(user.committee.title) : $('#memberCommitteName').html('Not in committee');
    $('#memberUserName').html(user.email);
    $('#memberFullname').html(userName);
    (user.email) ? $('#memberEmail').html(user.email) : $('#memberEmail').html('Not available');
    //have to send multiple phone number in an array to get multiple phone number.
    $('#memberPhone').html(user.phone_no);
    $('#memberProfession').html(user.profession);
    (user.facebook_link) ? $('#memberFacebookLink').html(user.facebook_link) : $('#memberFacebookLink').html('Not available');
    (user.instagram_link) ? $('#memberInstagramLink').html(user.instagram_link) : $('#memberInstagramLink').html('Not available');
    (user.twitter_link) ? $('#memberTwitterLink').html(user.twitter_link) : $('#memberTwitterLink').html('Not available');
    (user.voter_id_card) ? $('#memberVoterID').html(user.voter_id_card) : $('#memberVoterID').html('Not available');
    (user.aadhar_card) ? $('#memberaAdhar').html(user.aadhar_card) : $('#memberaAdhar').html('Not available');
    (user.pan_card) ? $('#memberPAN').html(user.pan_card) : $('#memberPAN').html('Not available');
    (user.state_id) ? $('#memberState').html(user.state_id.name) : $('#memberState').html('Not Available');
    (user.district_id) ? $('#memberDistrict').html(user.district_id.name) : $('#memberDistrict').html('Not Available');
    // $('#memberUpkhand').html();
    // $('#memberTehsil').html(user.parliament_constituency_id.name);
    (user.parliament_constituency_id) ? $('#memberLokSabha').html(user.parliament_constituency_id.name) : $('#memberLokSabha').html('Not Available');
    // $('#memberPanchayatSamiti').html(user.panchayat_samiti_id.name);
    // $('#memberGramPanchayat').html(user.village_council_id.name);
    // $('#memberRevenueVillage').html(user.revenue_villege_id.name);
    // $('#memberBooth').html(user.booth_id.name);
    (user.legislative_assembly_constituency_id) ? $('#memberVidhanSabha').html(user.legislative_assembly_constituency_id.name) : $('#memberVidhanSabha').html('Not Available');

    let profileBlogs = profileDetails.message.blogs;
    let profileEvents = profileDetails.message.events;
    let profileComplaints = profileDetails.message.complaints;
    if (profileBlogs.length > 0) {
        for (let i = 0; i < profileBlogs.length; i++) {
            let blogDate = dateConverter(profileBlogs[i].date);
            let name = profileBlogs[i].user.first_name + ' ' + profileBlogs[i].user.last_name
            let title = profileBlogs[i].title;
            let description = profileBlogs[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
            let blogsImage;
            (profileBlogs[i].images.length > 0) ? blogsImage = profileBlogs[i].images[0].image : blogsImage = 'https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg';
            $('#profileBlogsBlock').append(
                `
            <div class="card card_dark cardStyle">
        <div class="row g-0">
        <div class="col-md-6">
            <img class="blogsImg"
                src="${blogsImage}"
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
                    <a href="/blogsView/${profileBlogs[i].id}/1">
                    <span class="viewTag">View Blog</span>
                        <span>
                            <img src="/img/icons/link.png" alt="">
                        </span> 
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
            `
            )
        }
    } else {
        $('#profileBlogsBlock').append(
            `
            <div class="p-3 text-center">
            <div class="mx-auto my-5">
                <h5 class="font-weight-normal">No complaints added by you yet.</h5>
                <small><i>Click on New Complaint button to add your new complaint.</i></small>
            </div>
        </div>
            `
        )
    }
    if (profileEvents.length > 0) {
        for (let i = 0; i < profileEvents.length; i++) {
            let eventDate = dateConverter(profileEvents[i].date);
            let title = profileEvents[i].title;
            let description = profileEvents[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
            let eventsImage;
            (profileEvents[i].images.length > 0) ? eventsImage = profileEvents[i].images[0] : eventsImage = 'https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg';
            $('#profileEventsBlock').append(
                `
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card card_dark cardStyle">
                    <img src="${eventsImage}"
                    class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                        </div>
                    <div class="card-footer footer">
                        <p><span>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</span></p>
                        <a href="/eventsView/${profileEvents[i].id}/1">
                        <span class="viewTag">View Event</span>
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
    } else {
        $('#profileEventsBlock').append(
            `
            <div class="p-3 w-100 text-center">
                <div class="mx-auto my-5">
                    <h5 class="font-weight-normal">No Events added by you yet.</h5>
                    <small><i>Click on New Event button to add your new complaint.</i></small>
                </div>
            </div>
            `
        )
    }
    if (profileComplaints.length > 0) {
        for (let i = 0; i < profileComplaints.length; i++) {
            let complaintDate = dateConverter(profileComplaints[i].date);
            let title = profileComplaints[i].complaint_subject;
            let maxStringTitle = 20;
            let trimmedDataComplaint = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
            let priority = checkPriority(profileComplaints[i].priority);
            let name = profileComplaints[i].user.first_name + ' ' + profileComplaints[i].user.last_name;
            $('#profileComplaintsBlock').append(
                `
            <div class="card card_dark cardStyle">
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
                <a href="/complaintsView/${profileComplaints[i].id}/1">
                    <span class="viewTag">View Complaint</span>
                    <span>
                        <img src="/img/icons/link.png" alt="">
                    </span>
                </a>
            </div>
        </div>
            `
            )
        }
    } else {
        $('#profileComplaintsBlock').append(`
        <div class="p-3 text-center">
            <div class="mx-auto my-5">
                <h5 class="font-weight-normal">No complaints added by you yet.</h5>
                <small><i>Click on New Complaint button to add your new complaint.</i></small>
            </div>
        </div>
        `)
    }
}
$('#editButton').attr('href', `/profileEdit/${link[4]}`)

//modifying view in mobile view
window.onload = contentMobileView();