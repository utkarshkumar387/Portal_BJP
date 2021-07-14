let link = ['', '', '', 'complaintsView'];
let contentComplaints = getRequest.content('complaints/pending');
let complaints = contentComplaints.message.results;
// console.log(complaints);

if (contentComplaints.error == false) {
    //appending complaints
    for (var i = 0; i < complaints.length; i++) {
        let complaintDate = dateConverter(complaints[i].date);
        let title = complaints[i].complaint_subject;
        let maxStringTitle = 20;
        let trimmedDatacomplaint = titleDescTrimmer(title, maxStringTitle);
        let priority = checkPriority(complaints[i].priority);

        $('#complaintsUnapproved').append(`
            <div class="card card_dark cardStyle">
            <div class="complaints__header">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${complaints[i].user_full_name}</b>
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
                <a href="/complaintsView/${complaints[i].id}/${complaints[i].status}">
                <span class="viewTag">View Complaint</span>
                    <span>
                        <img src="img/icons/link.png" alt="">
                    </span>
                </a>
            </div>
        </div>
                    `)
    }
} else {
    console.log(contentComplaints.messsage);
}

//modifying view in mobile view
window.onload = contentMobileView();