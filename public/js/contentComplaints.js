$(document).ready(function () {
    let contentComplaints = fetchContent('complaints');
    let complaints = contentComplaints.message.complaints;

    if (contentComplaints.error == false) {
        //appending complaints
        for (var i = 0; i < complaints.length; i++) {
            let complaintDate = dateConverter(complaints[i].date);
            let title = complaints[i].title;
            let maxStringTitle = 20;
            let trimmedDatacomplaint = titleDescTrimmer(title, maxStringTitle);
            let priority = checkPriority(complaints[i].priority);

            $('#allComplaintsBlock').append(`
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
    } else {
        console.log(contentComplaints.messsage);
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

});