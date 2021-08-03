let link = window.location.href.split('/');
let allMembers = getRequest.member('get_all_members');
let committeeID = link[4];
let committeeDetails = getRequest.committee(`committee`, committeeID);
let committee = committeeDetails.message.committee_data;
if (committeeDetails.error == false) {
    // console.log(committee);
    let committeeLeader;
    let committeeLeaderAddress;
    if (committee.leader) {
        committeeLeader = committee.leader.first_name + ' ' + committee.leader.last_name;
        committeeLeaderAddress = committee.leader.district + ', ' + committee.leader.state;
    } else {
        committeeLeader = 'No leader';
        committeeLeaderAddress = 'Place';
    }
    $('#committeeName').html(committee.title);
    $('#committeeDesc').html(committee.description);
    (committee.image) ? $('.committeeImage').attr('src', `${committee.image}`) : $('.committeeImage').attr('src', 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/01/bjp-cec-1579191185.jpg')
    $('#committeeLeader').html(committeeLeader);
    $('#committeeLeaderAddress').html(committeeLeaderAddress);
    //appending committee members
    for (let i = 0; i < committee.committee_members.length; i++) {
        let committeeMemberName = committee.committee_members[i].first_name + ' ' + committee.committee_members[i].last_name;
        let committeeMemberAddress = committee.committee_members[i].district + ', ' + committee.committee_members[i].state;
        $('#committeeMemberBlock').append(`
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex w-100 justify-content-between align-items-center">
                <div class="d-flex">
                    <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                        class="rounded-circle" alt="...">
                    <div class="complaints__sender">
                        <strong>${committeeMemberName}</strong>
                        <p class="small">${committeeMemberAddress}</p>
                    </div>
                </div>
                <div class="committeePrivilege">
                    <div class="moreButtonsMobileView">
                        <img class="member__more dropleft" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false" src="/img/icons/More.png"
                            alt="">
                        <div class="dropdown-menu tab_dark">
                            <div class="dropdown-item">
                                <button class="btn btn-danger" style="width: 100%;">Delete</button>
                            </div>
                            <div class="dropdown-item">
                                <button class="btn btn-warning" style="width: 100%;">Appoint Leader</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="committeePrivilege w-100">
                <div class="member__buttons justify-content-end align-items-center d-flex">
                        <a class="member__button" href="/profile/${committee.committee_members[i].id}">View</a>
                    <div class="moreButtonDesktopView buttonInvert ml-3">
                        <img class="member__more dropleft" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false" src="/img/icons/More.png"
                            alt="">
                        <div class="dropdown-menu tab_dark">
                            <div class="dropdown-item">
                                <button class="btn btn-danger" style="width: 100%;">Delete</button>
                            </div>
                            <div class="dropdown-item">
                                <button class="btn btn-warning" style="width: 100%;">Appoint Leader</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `)
    }
}
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('committeeMemberBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    mySearchFunction(input1, members1, memberName1);
}
// function mySearchFunction(input, members, memberName) {
//     let filter, item, i, txtValue, memberSearch = input, memberBlock = members, memberCard = memberName;
//     input = document.getElementById(`${memberSearch}`);
//     console.log(input);
//     filter = input.value.toUpperCase();
//     // Grabs the parent element by id
//     members = document.getElementById(`${memberBlock}`);
//     // Individual item on list
//     memberName = members.getElementsByClassName(`${memberCard}`);
//     for (i = 0; i < memberName.length; i++) {
//         item = memberName[i];
//         txtValue = item.textContent || item.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             // Displays list items that are a match, and nothing if no match
//             memberName[i].style.display = "";
//         } else {
//             memberName[i].style.display = "none";
//         }
//     }
// }
let members = [];
let list = []
let stringifyMemebers;
function getMemberID(id) {
    let memberClicked = document.getElementById(`${id}`)
    if (memberClicked.checked == true) {
        members.push(id);
        list.push({ 'user_id': id });
    }
    else {
        for (let i = 0; i < members.length; i++) {
            if (memberClicked.checked == false && members[i] == id) {
                members.splice(i, 1);
                list.splice(i, 1);
            }
        }
    }
    stringifyMemebers = JSON.stringify(list);
}
// function addAllMembersToList() {
//     let data = stringifyMemebers;
//     let addMemberAdmins = postRequest.committee('add_members_to_committee', committeeID, data);
//     if (addMemberAdmins.error == false) {
//         console.log('member added in committee successfully');
//         // window.location.reload();
//     } else {
//         console.log('Error occured');
//         console.log(addMemberAdmins);
//     }
// }

//checking and appending members in add members list
let count = 0;
for (let i = 0; i < allMembers.message.length; i++) {
    let exist = false;
    for (let j = 0; j < committee.committee_members.length; j++) {
        if (allMembers.message[i].id === committee.committee_members[j].id || allMembers.message[i].committee != null) {
            // console.log(allMembers.message[i].id);
            exist = true;
        }
    }
    if (!exist) {
        let memberName = allMembers.message[i].first_name + ' ' + allMembers.message[i].last_name
        let committeeName;
        if (allMembers.message[i].committee != null) {
            committeeName = allMembers.message[i].committee.title;
        } else {
            committeeName = 'Not in committee';
        }

        $(`#allMembersDataCommittee`).append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCardAdmins">
        <div class="complaints__header member__inner align-items-center d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${memberName}</b>
                    <p class="small">${allMembers.message[i].district}, <span>${allMembers.message[i].state}</span>
                    </p>
                </div>
            </div>
            <div class="d-flex committeeMemerAddCheck">
                <div class="form-check">
                    <input type="checkbox" onclick="getMemberID(this.id)" id="${allMembers.message[i].id}">
                </div>
            </div>
        </div>
    </div>
        `
        )
        count++;
    }

}
if (count == 0) {
    $('#allMembersToAddInCommittee').append(`
        <h2>No member to display</h2>
    `)
}

//checking privilege and adding buttons
var committeeMemberPivilege = JSON.parse(getCookie('privilege'));
if (committeeMemberPivilege.committee_privilege || committeeMemberPivilege.admin_privilege) {
    $('.committeePrivilege').css('display', 'block');
} else {
    $('.committeePrivilege').css('display', 'none');
}

//modifying view in mobile view
window.onload = contentMobileView();
