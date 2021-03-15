let link = window.location.href.split('/');
console.log(link[4]);
let profileID = link[4]
let profileDetails = fetchProfileDataById('member_profile', profileID);
console.log(profileDetails);
if (profileDetails.error == false) {
    let user = profileDetails.message.member_details;
    let userName = user.first_name + ' ' + user.last_name;
    $('#memberUserName').html(user.email);
    $('#memberFullname').html(userName);
    $('#memberEmail').html(user.email);
    //have to send multiple phone number in an array to get multiple phone number.
    // $('#memberPhone').html(user.phone_no);
    $('#memberProfession').html(user.profession);
    $('#memberFacebookLink').html(user.facebook_link);
    $('#memberInstagramLink').html();
    $('#memberTwitterLink').html(user.twitter_link);
    $('#memberVoterID').html(user.voter_id_card);
    $('#memberaAdhar').html(user.aadhar_card);
    $('#memberPAN').html(user.pan_card);
    $('#memberState').html(user.state_id.name);
    $('#memberDistrict').html(user.district_id.name);
    $('#memberUpkhand').html();
    $('#memberTehsil').html(user.parliament_constituency_id.name);
    $('#memberVidhanSabha').html();
    $('#memberPanchayatSamiti').html(user.panchayat_samiti_id.name);
    $('#memberGramPanchayat').html(user.village_council_id.name);
    $('#memberRevenueVillage').html(user.revenue_villege_id.name);
    $('#memberBooth').html(user.booth_id.name);
    $('#memberVidhanSabha').html(user.legislative_assembly_constituency_id.name);

    let profileBlogs = profileDetails.message.blogs;
    console.log(profileBlogs);
    let profileEvents = profileDetails.message.events;
    console.log(profileEvents);
    let profileComplaints = profileDetails.message.complaints;
    console.log(profileComplaints);
    for (let i = 0; i < profileBlogs.length; i++) {
        let blogDate = dateConverter(profileBlogs[i].date);
        let name = profileBlogs[i].user.first_name + ' ' + profileBlogs[i].user.last_name
        let title = profileBlogs[i].title;
        let description = profileBlogs[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        console.log(trimmedDataBlog);
        $('#profileBlogsBlock').append(
            `
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
                    <a href="/blogsView/${profileBlogs[i].id}/approved">
                        View Blog
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
    for (let i = 0; i < profileEvents.length; i++) {
        let eventDate = dateConverter(profileEvents[i].date);
        let title = profileEvents[i].title;
        let description = profileEvents[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataEvent = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        $('#profileEventsBlock').append(
            `
            <div class="col-md-4 events__card mb-4 px-3">
                <div class="card cardStyle">
                    <img src="https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg"
                    class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${trimmedDataEvent.trimStringTitle}</p>
                        </div>
                    <div class="card-footer footer">
                        <p><span>${eventDate[0]} ${eventDate[1]} ${eventDate[2]}</span></p>
                        <a href="/eventsView/${profileEvents[i].id}/rejected">
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
    for (let i = 0; i < profileComplaints.length; i++) {
        let complaintDate = dateConverter(profileComplaints[i].date);
        let title = profileComplaints[i].complaint_subject;
        let maxStringTitle = 20;
        let trimmedDataComplaint = titleDescTrimmer(title, description = '', maxStringTitle, maxStringDesc = 0);
        console.log(trimmedDataComplaint);
        let priority = checkPriority(profileComplaints[i].priority);
        let name = profileComplaints[i].user.first_name + ' ' + profileComplaints[i].user.last_name;
        $('#profileComplaintsBlock').append(
            `
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
                <a href="/complaintsView/${profileComplaints[i].id}/approved">
                    View Complaint
                    <span>
                        <img src="/img/icons/link.png" alt="">
                    </span>
                </a>
            </div>
        </div>
            `
        )
    }
}

// anniversary: "2021-02-01"
// avatar: null
// blood_group: "O+"
// booth_id: {id: 1, name: "Khatri colony", district_id: 1}
// committee_id: 1
// committee_leader_of: null
// date_joined: "2021-02-27T16:13:21.623264Z"
// dis_liked_blogs: []
// dis_liked_complaints: []
// dis_liked_events: []
// district_id: {id: 1, name: "Barmer", state_id: 1}
// dob: "2020-03-17"
// email: "xyz@gmail.com"
// father_name: "Jhon doe"
// first_name: "Utkarsh"
// gram_panchayat_id: {id: 1, name: "Balotra", district_id: 1}
// husband_name: null
// id: 7
// is_superuser: true
// last_login: "2021-02-28T12:46:23Z"
// last_name: "kumar"
// legislative_assembly_constituency_id: {id: 1, name: "Barmer Jodhpur", district_id: 1}
// liked_blogs: []
// liked_complaints: []
// liked_events: []
// panchayat_samiti_id: {id: 1, name: "Balotra", district_id: 1}
// parliament_constituency_id: {id: 1, name: "Barmer Jodhpur", district_id: 1}
// permanent_address_city: "pune"
// permanent_address_district: "pune"
// permanent_address_line1: "I don't Know"
// permanent_address_line2: "don't ask me"
// phone_no: "7541079745"
// pin_code: "411046"
// residence_address_city: "pune"
// residence_address_district: "pune"
// residence_address_line1: "Again I don't Know"
// residence_address_line2: "don't ask me"
// revenue_villege_id: {id: 1, name: "Pachpadra", district_id: 1}
// state_id: {id: 1, name: "Rajasthan"}
// township_constituency_id: {id: 1, name: "Pachpadra", district_id: 1}
// up_block_education_constituency_id: {id: 1, name: "Pachpadra", district_id: 1}

