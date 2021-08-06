let link = ['', '', '', ''];
let allMemberAdmins = getRequest.admin('member');
let allMembers = getRequest.member('get_all_members');
// console.log('all manage members', allMemberAdmins);
if (allMemberAdmins.error == false) {
    for (let i = 0; i < allMemberAdmins.message.length; i++) {
        let memberName = allMemberAdmins.message[i].user.first_name + ' ' + allMemberAdmins.message[i].user.last_name;
        let committeeName;
        if (allMemberAdmins.message[i].committee_name != null) {
            committeeName = allMemberAdmins.message[i].committee_name;
        } else {
            committeeName = 'Not in committee';
        }
        $('#manageMembersData').append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${memberName}</b>
                    <p class="small">${allMemberAdmins.message[i].user.district}, <span>${allMemberAdmins.message[i].user.state}</span>
                    </p>
                </div>
            </div>
            <div class="d-flex manageTabCommittee align-items-center">
                <div class="member__committeeName px-5">
                    <p>${committeeName}</p>
                </div>
                <div class="manageTabButtons">
                    <button onclick=removePrivilege(this.id) id="${allMemberAdmins.message[i].id}" class="btn btn-outline-danger removeButton"></button>
                </div>
            </div>
        </div>
    </div>
        `
        )
        // if (allMemberAdmins.message[i]) {
        //     document.getElementById(`memberUserPermission${allMemberAdmins.message[i].id}`).checked = true;
        // } else {
        //     document.getElementById(`memberUserPermission${allMemberAdmins.message[i].id}`).checked = false;
        // }
    }
} else {
    $('#manageMembersData').html('<h3>Please referesh your page</h3>')
}

function removePrivilege(id) {
    let response = deleteRequest.admin('member', id);
    // console.log(response);
    if (!response.error) {
        window.location.reload();
    }
    else {
        console.log('show alert message to notify user about something fishy');
        // show alert message to notify user about something fishy
    }
}

//serach for manage member admin list
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunctionMembers);
function searchFunctionMembers() {
    let input = document.getElementById('committee__membersSearch').id;
    let members = document.getElementById('manageMembersData').id;
    let memberName = document.getElementById('memberCard').id;
    mySearchFunction(input, members, memberName);
}

//search for add members list  
let adminsSearch = document.getElementById('privilege__membersAddSearch');
adminsSearch.addEventListener('keyup', searchFunctionsMemberSearch);
function searchFunctionsMemberSearch() {
    let input = document.getElementById('privilege__membersAddSearch').id;
    let members = document.getElementById('allMembersDataAdmins').id;
    let memberName = document.getElementById('memberCardMembers').id;
    mySearchFunction(input, members, memberName);
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
    // console.log(stringifyMemebers);
    // for (li in list) console.log(list[li]);
}

function addAllMembersToList() {
    // let allMembers = Object.assign({}, members);
    // // for (var i = 0; i < members.length; i++) list.push({ 'user_id': members[i] });
    // // console.log(list);
    // let data = allMembers;
    // console.log(data);
    let data = stringifyMemebers;
    // console.log('data to post', data);
    let addMemberAdmins = postRequest.admin('member', data);
    if (addMemberAdmins.error == false) {
        window.location.reload();
    } else {
        console.log(addMemberAdmins.messsage);
    }
}

//delete request to remove member form member privilege list
function getButton(id, memberID) {
    let memberPermissionMenu = document.getElementById(`${id}`);
    let input = memberPermissionMenu.querySelector('input');
    if (input.checked == false) {
        let adminStatus = deleteRequest.admin('member', memberID);
        if (adminStatus.error == false) {
            window.location.reload();
        } else {
            console.log(adminStatus.message);
        }
    }
}

//filter already present admin from all members list
let count = 0;
for (let i = 0; i < allMembers.message.length; i++) {
    let exist = false;
    for (let j = 0; j < allMemberAdmins.message.length; j++) {
        if (allMembers.message[i].id === allMemberAdmins.message[j].user.id) {
            // console.log(allAdminMembers.message[i].id);
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
        $(`#allMembersDataAdmins`).append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCardMembers" id="memberCardMembers">
            <div class="complaints__header member__inner d-flex justify-content-between row">
                <div class="d-flex">
                    <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                        class="rounded-circle" alt="...">
                    <div class="complaints__sender">
                        <b>${memberName}</b>
                        <p class="small">${allMembers.message[i].district}, <span>${allMembers.message[i].state}</span></p>
                    </div>
                </div>
                <div class="d-flex manageTabCommittee justify-content-between align-items-center">
                    <div class="member__committeeName px-5">
                        <p>${committeeName}</p>
                    </div>
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
    $('#allMembersDataAdmins').append(`
        <h2>No member to display</h2>
    `)
}

//modifying view in mobile view
window.onload = contentMobileView();