//split link
let link = window.location.href.split('/');
// console.log(link);
var complaint_id = link[4], status;
status = link[5];
let complaint;
let complaintDetails;
let recentBlogs;
// console.log(status);
//switching api link acc to status
switch (status) {
    case '2':
        complaint = getRequest.content('complaints_with_recent', complaint_id);
        // console.log(complaint);
        complaintDetails = complaint.message.complaint_details;
        recentComplaints = complaint.message.recent_complaints;
        // console.log(recentComplaints);
        break;
    case '1':
        complaint = getRequest.content('complaints_unapproved', complaint_id);
        complaintDetails = complaint.message
        $('#home__complaints').css('display', 'none');
        break;
    case '3':
        complaint = getRequest.content('complaints_unapproved', complaint_id);
        complaintDetails = complaint.message
        $('#home__complaints').css('display', 'none');
        break;
    default:
        console.log(status);
        console.log('No complaints found');
}
if (complaint.error == false) {
    //appending data of clicked complaint
    let complaintDate = dateConverter(complaintDetails.date);
    let priority = checkPriority(complaintDetails.priority);

    $('#complaintAddressedTo').html(complaintDetails.title);
    $('#complaintSub').html(complaintDetails.complaint_subject);
    $('#complaintSubTop').html(complaintDetails.complaint_subject);
    $('#complainantName').html(complaintDetails.user_full_name)
    $('#complainantNameOuter').html(complaintDetails.user_full_name);
    $('#complainantDistrict').html(complaintDetails.user.district);
    $('#complainantState').html(complaintDetails.user.state);
    $('#complaintBody').html(complaintDetails.complaint_body);
    $('#complaintDetailsPriorityBar').before(priority);
    $('#complaintDay').html(complaintDate[0]);
    $('#complaintYearName').html(complaintDate[1]);
    $('#complaintYear').html(complaintDate[2]);

    //appending recent events
    if (link[5] == '2') {
        for (var i = 0; i < recentComplaints.length; i++) {
            let recentComplaintsDate = dateConverter(recentComplaints[i].date);
            let name = recentComplaints[i].user_full_name;
            let title = recentComplaints[i].complaint_subject;
            let maxStringTitle = 20;
            // console.log(title, maxStringTitle);
            let trimmedDataComplaint = titleDescTrimmer(title, maxStringTitle);
            let priority = checkPriority(recentComplaints[i].priority);

            $('#complaintViewBlogsBlock').append(`
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
            <p>${recentComplaintsDate[0]} ${recentComplaintsDate[1]} ${recentComplaintsDate[2]}</p>
            <a href="/complaintsView/${recentComplaints[i].id}/${recentComplaints[i].status}">
            <span class="viewTag">View Complaint</span>
                <span>
                    <img src="/img/icons/link.png" alt="">
                </span>
            </a>
        </div>
    </div>
                `)
        }
    }
} else {
    console.log(complaint.message);
}

//modifying view in mobile view
window.onload = contentMobileView();