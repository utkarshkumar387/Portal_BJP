let link = window.location.href.split('/');
let allAdmins = fetchAllAdminData('admin_list');
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
function groupAllTaggedMembers(id) {
    console.log(id);
}
$(function () {
    $('#allAdminsList').tokenInput([{
        id: 7,
        name: "Super Mario"
    }, {
        id: 11,
        name: "Battletoads"
    }, {
        id: 13,
        name: "Pong"
    }, {
        id: 17,
        name: "The Legend of Zelda"
    }, {
        id: 19,
        name: "Metroid"
    }, {
        id: 23,
        name: "Donkey Kong Country"
    }, {
        id: 29,
        name: "Super Smash Bros."
    }, {
        id: 32,
        name: "Star Fox"
    }, {
        id: 35,
        name: "Starcraft"
    }, {
        id: 37,
        name: "Pokemon"
    }, {
        id: 38,
        name: "Minecraft"
    }, {
        id: 41,
        name: "The Sims"
    }, {
        id: 43,
        name: "Final Fantasy"
    }, {
        id: 44,
        name: "Resident Evil"
    }, {
        id: 46,
        name: "Kingdom Hearts"
    }, {
        id: 47,
        name: "Tetris"
    }, {
        id: 48,
        name: "Grand Theft Auto"
    }, {
        id: 51,
        name: "World of Warcraft"
    }, {
        id: 53,
        name: "Metal Gear Solid"
    }, {
        id: 54,
        name: "Civilization"
    }, {
        id: 56,
        name: "Pac-Man"
    }, {
        id: 59,
        name: "Animal Crossing"
    }, {
        id: 62,
        name: "Spyro the Dragon"
    }, {
        id: 64,
        name: "Crash Bandicoot"
    }, {
        id: 65,
        name: "Sonic the Hedgehog"
    }, {
        id: 72,
        name: "Tomb Raider"
    }, {
        id: 77,
        name: "Mortal Kombat"
    }, {
        id: 81,
        name: "Space Invaders"
    }], {
        theme: "facebook",
        hintText: "Know of any cool games?",
        noResultsText: "Nothin' found.",
        searchingText: "Gaming...",
        preventDuplicates: true,
        // onAdd: function (item) {
        //     sync(this.tokenInput("get"));
        // },
        // onDelete: function (item) {
        //     sync(this.tokenInput("get"));
        // }
    });

});
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
// function addComplaint() {
//     authorDetails = JSON.parse(getCookie('member_profile'));
//     authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
//     authorID = authorDetails.user_id;
//     console.log($('#complaintTitle').val());
//     let data = {
//         data: JSON.stringify({
//             blog_data:
//             {
//                 // image: null,
//                 user_id: authorID,
//                 title: $('#complaintTitle').val(),
//                 description: $('#complaintBody').val(),
//                 status: 'pending'
//             },
//             complaint_data_images: JSON.stringify([

//             ])
//         })
//     }
//     console.log(data);
//     let complaintDetails = addContent('complaints', data);
//     window.location.replace('/complaints');
//     console.log(complaintDetails);
// }
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
//     let complaintDetails = updateContent('complaints/update_status', complaintID, data);
//     console.log(complaintDetails);
//     window.location.replace(`/complaintsView/${complaintID}/${status}`);
//     // console.log(blogDetails);
// }

