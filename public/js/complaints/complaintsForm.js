let link = window.location.href.split('/');
let allAdmins = getRequest.admin('admin_list');
console.log('all admins are ', allAdmins);
if (allAdmins.error == false) {
    for (let i = 0; i < allAdmins.message.length; i++) {
        let memberName = allAdmins.message[i].user.first_name + ' ' + allAdmins.message[i].user.last_name;
        console.log('all member Name is', memberName);
        $('.allAdminsList').append(`
        <option value="${i}">${memberName}</option>
        `)
    }
} else {
    console.log(allAdmins.message);
}
let userDetails = JSON.parse(getCookie('member_profile'));
console.log('member detail is ', userDetails);
$('#complainantName').val(userDetails.first_name + ' ' + userDetails.last_name);
$('#complainantEmail').val(userDetails.email);
$('#complainantPhone').val(userDetails.phone_no);
$('#complainantAddress').val(userDetails.residence_address_line1);
// let chosenManagers = document.getElementById('chosenManager');
// let allChosenManagers = chosenManagers.
//     console.log(chosenManagers);

// var authorDetails, authorName, authorID;
// let link = window.location.href.split('/');
// let complaintID, complaintFunctionality, status;
// console.log(link.length);
// complaintFunctionality = document.getElementById('addEditComplaint');
// if (link.length == 4) {
//     complaintFunctionality.addEventListener('click', addComplaint);
// } else { //if link array is greater than 4 execute it
//     complaintFunctionality.addEventListener('click', editComplaint);
// }
// if (link.length == 4) {
//     let cookieDetails = JSON.parse(getCookie('member_profile'));
//     console.log(cookieDetails)
//     let authorName = cookieDetails.first_name + ' ' + cookieDetails.last_name
//     console.log(authorName);
//     $('#complainantName').val(authorName);
//     $('#complainantPhone').val(cookieDetails.phone_no);
//     $('#complainantAddress').val(cookieDetails.permanent_address_line1 + cookieDetails.permanent_address_line2);
//     $('#complainantEmail').val(cookieDetails.email);
// } else if (link.length == 6) {
//     complaintID = link[4];
//     status = link[5];
//     console.log(complaintID, status);
//     switch (status) {
//         case 'approved':
//             let editComplaintDetails = fetchContentByID('complaints', complaintID);
//             // console.log(editBlogDetails);
//             if (editComplaintDetails.error == false) {
//                 // console.log(editBlogDetails.message);
//                 // console.log(authorName);
//                 //change to name..... added email just to check
//                 $('#complaintAuthor').val(editComplaintDetails.message.user_id.email);
//                 $('#complaintTitle').val(editComplaintDetails.message.title);
//                 $('#complaintBody').val(editComplaintDetails.message.description);
//             }
//     }
//     console.log('Inside complaint edit form');
// }
function addComplaint() {
    authorDetails = JSON.parse(getCookie('member_profile'));
    authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.id;
    let authorEmail = authorDetails.email;
    let authorAddress = authorDetails.residence_address_line1;
    let authorNumber = authorDetails.phone_no;
    let data = {
        data: JSON.stringify({
            complaint_data:
            {
                // image: null,
                solutions: [],
                user_id: authorID,
                user_full_name: authorName,
                user_email: authorEmail,
                user_phone_no: authorNumber,
                user_address: authorAddress,
                complaint_address: "",
                complaint_subject: $('#complaintSubject').val(),
                complaint_body: $('#complaintBody').val(),
                tagged_members: [],
                priority: $('#complaintPriority').val(),
                likes: [],
                dis_likes: [],
                has_image: false,
                status: 'pending',
            },
            complaint_data_images: JSON.stringify([

            ])
        })
    }
    console.log(data);
    // window.location.replace('/complaints');
    // if (checkEventValidations() == true) {
    let complaintDetails = postRequest.content('complaints', data);
    console.log(complaintDetails);
    if (complaintDetails.error == false) {
        // console.log('complaints added')
        window.location.replace('/complaintsApproved');
    } else {
        console.log(complaintDetails.error);
        console.log(complaintDetails.message);
    }
    // }
}
// "images": [],
//             "solutions": [],
//             "user": {
//                 "id": 1,
//                 "phone_no": "7541079745",
//                 "first_name": "Utkarsh",
//                 "last_name": "Kumar",
//                 "email": "abc@gmail.com",
//                 "state": "Rajasthan",
//                 "district": "Barmer",
//                 "avatar": null
//             },
//             "user_full_name": "Kapil sharma",
//             "user_email": "uyt@gmail.com",
//             "user_phone_no": "8678769785",
//             "user_address": "jhsh ois  uo uopo s s",
//             "complaint_address": "shls  sfsoos;o;ksoseuoeueo u oe  ueuoeuo eo",
//             "complaint_subject": "ydius   yo sodps",
//             "complaint_body": "sydo su poeipo ps psu ps",
//             "tagged_members": [],
//             "date": "2021-03-09T09:19:53.215416Z",
//             "status": 2,
//             "has_image": false,
//             "priority": "high",
//             "likes": [],
//             "dis_likes": [],
//             "user_id": 1
// function editComplaint() {
//     let data = {
//         // image: null,
//         user_id: authorID,
//         title: $('#complaintTitle').val(),
//         description: $('#complaintBody').val(),
//         status: status

//     }
//     console.log(data);
//     //no patch request in content/blogs/id or content/approved
//     let complaintDetails = patchRequest.content('complaints/update_status', complaintID, data);
//     console.log(complaintDetails);
//     window.location.replace(`/complaintsView/${complaintID}/${status}`);
//     // console.log(blogDetails);
// }

//modifying view in mobile view
window.onload = contentMobileView();

