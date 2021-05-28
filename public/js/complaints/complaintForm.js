var authorDetails, authorName, authorID;
authorDetails = JSON.parse(getCookie('member_profile'));
authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
authorID = authorDetails.user_id;
// console.log(authorName, authorID);
// console.log(authorName);
// "id": 11,
//             "images": [],
//             "solutions": [],
//             "user_full_name": "full name",
//             "user_email": "email@gmail.com",
//             "user_phone_no": "9876876987",
//             "user_address": "user ka address",
//             "complaint_address": "complaint address",
//             "complaint_subject": "complaint subject",
//             "complaint_body": "complaint body",
//             "tagged_members": null,
//             "date": "2021-02-17T08:32:14.847288Z",
//             "status": "approved",
//             "has_image": false,
//             "priority": "low",
//             "likes": null,
//             "dis_likes": null,
//             "user_id": {
//                 "id": 2,
//                 "username": "Utkarsh",
//                 "first_name": "Utkarsh",
//                 "last_name": "Kumar",
//                 "email": "qwerty@gmail.com"
//             },
//             "district": "Barmer",
//             "state": "Rajasthan"
function addBlog() {
    let data = {
        data: JSON.stringify({
            complaints:
            {
                // image: null,
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: 'pending'
            }
        })
    }
    let complaintDetails = postRequest.content('complaints', data);
    console.log(complaintDetails);
}

