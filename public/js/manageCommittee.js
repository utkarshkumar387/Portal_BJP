let link = ['', '', '', ''];
let allMembers = fetchProfileData('get_all_members');
let allCommitteePrivilegeMembers = fetchAllAdminData('committee');
console.log(allMembers);
console.log(allCommitteePrivilegeMembers);
if (allCommitteePrivilegeMembers.error == false) {
    for (let i = 0; i < allCommitteePrivilegeMembers.message.length; i++) {
        let memberName = allCommitteePrivilegeMembers.message[i].user.first_name + ' ' + allCommitteePrivilegeMembers.message[i].user.last_name
        let committeeName;
        if (allCommitteePrivilegeMembers.message[i].committee_name != null) {
            committeeName = allCommitteePrivilegeMembers.message[i].committee_name;
        } else {
            committeeName = 'Not in committee';
        }
        $('#manageCommitteeBlock').append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${memberName}</b>
                    <p class="small">${allCommitteePrivilegeMembers.message[i].user.district}, <span>${allCommitteePrivilegeMembers.message[i].user.state}</span>
                    </p>
                </div>
            </div>
            <div class="d-flex">
                <div class="member__committeeName px-5">
                    <p>${committeeName}</p>
                </div>
                <button class="btn btn-danger" onclick=removePrivilege(this.id) id="${allCommitteePrivilegeMembers.message[i].id}">Remove</button>
            </div>
        </div>
    </div>
        `
        )
    }
}

function removePrivilege(id) {
    let response = removePrivilegeByID('committee', id);
    console.log(response);
    if (!response.error) {
        window.location.reload();
    }
    else {
        console.log('show alert message to notify user about something fishy');
        // show alert message to notify user about something fishy
    }
}

let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('manageCommitteeBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    console.log(input1, members1, memberName1);
    mySearchFunction(input1, members1, memberName1);
}
function getButton(id, memberID) {
    let memberPermissionMenu = document.getElementById(`${id}`);
    let input = memberPermissionMenu.querySelector('input');
    if (input.checked == false) {
        let adminStatus = deletePrivilegeRequestByID('committee', memberID);
        if (adminStatus.error == false) {
            window.location.reload();
        } else {
            console.log(adminStatus.message);
        }
    }
}

let count = 0;
for (let i = 0; i < allMembers.message.length; i++) {
    let exist = false;
    for (let j = 0; j < allCommitteePrivilegeMembers.message.length; j++) {
        if (allMembers.message[i].id === allCommitteePrivilegeMembers.message[j].user.id) {
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

        $(`#allMembersToAddInCommittee`).append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCardAdmins">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${memberName}</b>
                    <p class="small">${allMembers.message[i].district}, <span>${allMembers.message[i].state}</span>
                    </p>
                </div>
            </div>
            <div class="d-flex">
                <div class="member__committeeName px-5">
                    <p>${committeeName}</p>
                </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" onclick="getMemberID(this.id)" id="${allMembers.message[i].id}">
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
    console.log(stringifyMemebers);
    // for (li in list) console.log(list[li]);
}

function addAllMembersToList() {
    // let allMembers = Object.assign({}, members);
    // // for (var i = 0; i < members.length; i++) list.push({ 'user_id': members[i] });
    // // console.log(list);
    // let data = allMembers;
    // console.log(data);
    let data = stringifyMemebers;
    console.log('data to post', data);
    let addCommitteePrivilege = postPrivilegeRequest('committee', data);
    if (addCommitteePrivilege.error == false) {
        window.location.reload();
    } else {
        console.log(addCommitteePrivilege.messsage);
    }
}