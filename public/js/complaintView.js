// const e = require("express");

let link = window.location.href.split('/');
console.log(link);
var complaint_id = link[4], status;
status = link[5];
$(document).ready(() => {
    let complaint;
    let complaintDetails;
    let recentBlogs;
    switch (link[5]) {
        case 'approved':
            complaint = fetchContentByID('complaints_with_recent', complaint_id);
            blogDetails = complaint.message.complaint_details;
            // recentBlogs = complaint.message.recent_blogs;
            console.log(complaint);
            break;
        case 'pending':
            complaint = fetchContentByID('complaints_unapproved', complaint_id);
            complaintDetails = complaint.message
            break;
        case 'rejected':
            complaint = fetchContentByID('complaints_unapproved', complaint_id);
            complaintDetails = complaint.message
            break;
        default:
            console.log('No complaints found');
    }
    //recent wali bad me add krni hai
    console.log(complaint);
    if (complaint.error == false) {
        // status = complaint.message.complaint_details.status;
        //message
        //complaintDetails
        //recentComplaints
        let complaintDetails;
        switch (status) {
            case 'approved':
                complaintDetails = complaint.message.complaint_details;
                console.log('inside approved')
                break;
            case 'rejected':
            case 'pending':
                complaintDetails = complaint.message;
                console.log('inside pending or rejected')
                break;
            default:
                console.log('No data to display')

        }
        console.log(complaintDetails);
        // let recentComplaints = complaint.message.recent_complaints;
        console.log(complaintDetails.date);
        let complaintDate = dateConverter(complaintDetails.date);
        let complainantName = `${complaintDetails.user_id.first_name}` + ' ' + `${complaintDetails.user_id.last_name}`
        let priority = checkPriority(complaintDetails.priority);
        // status = complaintDetails.status;
        // console.log(status);
        $('#complaintAddressedTo').html(complaintDetails.title);
        $('#complaintSub').html(complaintDetails.complaint_subject);
        $('#complaintSubTop').html(complaintDetails.complaint_subject);
        $('#complainantName').html(complainantName);
        $('#complainantNameOuter').html(complainantName);
        $('#complainantDistrict').html(complaintDetails.district);
        $('#complainantState').html(complaintDetails.state);
        $('#complaintBody').html(complaintDetails.complaint_body);
        $('#complaintDetailsPriorityBar').before(priority);
        console.log(priority)
        $('#complaintDay').html(complaintDate[0]);
        $('#complaintYearName').html(complaintDate[1]);
        $('#complaintYear').html(complaintDate[2]);

        //wiil add recents later
        // for (var i = 0; i < recentComplaints.length; i++) {
        //     let recentComplaintsDate = dateConverter(recentComplaints[i].date);
        //     let name = recentComplaints[i].user_id.first_name + ' ' + recentComplaints[i].user_id.last_name
        //     let title = recentComplaints[i].complaint_subject;
        //     let maxStringTitle = 20;
        //     console.log(title, maxStringTitle);
        //     let trimmedDataComplaint = titleDescTrimmer(title, maxStringTitle);
        //     let priority = checkPriority(recentComplaints[i].priority);

        //     $('#complaintViewBlogsBlock').append(`
        //     <div class="card cardStyle">
        //     <div class="complaints__header">
        //         <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
        //             class="rounded-circle" alt="...">
        //         <div class="complaints__sender">
        //             <b>${name}</b>
        //             <p class="small">Pune, <span>Maharashtra</span>
        //             </p>
        //         </div>
        //         ${priority}
        //     </div>
        //     <div class="complaints__body">
        //         <p class="card-text"><span>Sub: </span>${trimmedDataComplaint.trimStringTitle}</p>
        //     </div>
        //     <div class="card-footer footer">
        //         <p>${recentComplaintsDate[0]} ${recentComplaintsDate[1]} ${recentComplaintsDate[2]}</p>
        //         <a href="/complaintsView/${recentComplaints[i].id}">
        //             View Complaint
        //             <span>
        //                 <img src="/img/icons/link.png" alt="">
        //             </span>
        //         </a>
        //     </div>
        // </div>
        //             `)
        // }
    } else {
        console.log(complaint.message);
    }
});
