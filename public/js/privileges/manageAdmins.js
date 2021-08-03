let link = ['', '', '', ''];
let allAdmins = getRequest.admin('admin_list');
// console.log('All admins are ', allAdmins);
if (allAdmins.error == false) {
    for (let i = 0; i < allAdmins.message.length; i++) {
        let adminName = allAdmins.message[i].user.first_name + ' ' + allAdmins.message[i].user.last_name;
        let committeeName;
        if (allAdmins.message[i].committee_name != null) {
            committeeName = allAdmins.message[i].committee_name;
        } else {
            committeeName = 'No committee';
        }
        $('#manageAdminBlock').append(
            `
        <div class="card tab_dark cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner">
            <div class="d-flex w-100">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="privilegeCard d-flex w-100 justify-content-between">
                    <div class="complaints__sender d-flex justify-content-between">
                    <div>
                        <b>${adminName}</b>
                        <p class="small">${allAdmins.message[i].user.district}, <span>${allAdmins.message[i].user.state}</span></p>
                    </div>
                    <div class="privilegeFunctionButtonsMobile">
                            <div class="member__permission btn-group dropright">
                                <img class="member__more dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" src="img/icons/More.png" alt="">
                                <div class="dropdown-menu" id="submitMemberAdmins${allAdmins.message[i].id}">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="memberAdminsPermission${allAdmins.message[i].id}">
                                        <label class="form-check-label px-1"
                                            for="memberAdminsPermission${allAdmins.message[i].id}">Super Admin</label>
                                    </div>
                                    <div class="d-flex mt-3">
                                        <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="deleteAdmin(${allAdmins.message[i].id}, ${allAdmins.message[i].user.id})" class='btn btn-danger'>Delete</button>
                                        <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.parentNode.id, ${allAdmins.message[i].id})" class='btn btn-primary ml-2'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex privilegeCommitteeName">
                        <div class="text-left member__committeeName">
                            <p>${committeeName}</p>
                        </div>
                        <div class="privilegeFunctionButtonsDesktop">
                            <div class="member__permission btn-group dropright">
                                <img class="member__more dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false" src="img/icons/More.png" alt="">
                                <div class="dropdown-menu" id="submitMemberAdmins${allAdmins.message[i].id}">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="memberAdminsPermission${allAdmins.message[i].id}">
                                        <label class="form-check-label px-1"
                                            for="memberAdminsPermission${allAdmins.message[i].id}">Super Admin</label>
                                    </div>
                                    <div class="d-flex mt-3">
                                        <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="deleteAdmin(${allAdmins.message[i].id}, ${allAdmins.message[i].user.id})" class='btn btn-danger'>Delete</button>
                                        <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.parentNode.id, ${allAdmins.message[i].id})" class='btn btn-primary ml-2'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        )
        // document.getElementById(`memberAdminsPermission${allAdmins.message[i].id}`).checked = true;

        if (allAdmins.message[i].manage_admin == true) {
            document.getElementById(`memberAdminsPermission${allAdmins.message[i].id}`).checked = true;
        } else {
            document.getElementById(`memberAdminsPermission${allAdmins.message[i].id}`).checked = false;

        }
    }
} else {
    $('#manageAdminBlock').html('<h3>Please refresh your page</h3>');
}

let allMembers = getRequest.member('get_all_members');
// Search admins in manage admins
let search = document.getElementById('committee__adminsMembersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__adminsMembersSearch').id;
    let members1 = document.getElementById('manageAdminBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    // console.log(input1, members1, memberName1);
    mySearchFunction(input1, members1, memberName1);

}

//search members in add manager modal
let searchMembers = document.getElementById('committee__membersAddSearch');
// console.log('all searched members ', searchMembers);
searchMembers.addEventListener('keyup', searchFunctionAddMembers);
function searchFunctionAddMembers() {
    let input1 = document.getElementById('committee__membersAddSearch').id;
    let members1 = document.getElementById('allMembersDataAdmins').id;
    let memberName1 = document.getElementById('memberCardAdmins').id;
    // console.log(input1, members1, memberName1);
    // mySearchFunction('inside add admin members ', input1, members1, memberName1);

}

function getButton(id, memberID) {
    // console.log(id, memberID);
    let memberPermissionMenu = document.getElementById(`${id}`);
    let input = memberPermissionMenu.querySelector('input');
    // let check;
    // console.log(input.checked, memberID);
    let check = input.checked;
    // console.log(check);
    let data = {
        manage_admin: check
    }
    // console.log(data);
    let adminStatus = patchRequest.admin('admin', memberID, data);
    if (adminStatus.error == false) {
        window.location.reload();
    } else {
        console.log(adminStatus.message);
    }
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

function deleteAdmin(adminID, userID) {
    // console.log(userID);
    // console.log(loggedInUserId);
    // console.log(userID == loggedInUserId);
    if (userID == loggedInUserId) {
        alert('You can not remove yourself from admin');
        return;
    }
    let adminDelete = deleteRequest.admin('admin', adminID)
    if (adminDelete.error == false) {
        console.log('succed')
        window.location.reload();
    } else {
        console.log(adminDelete.message);
    }
}

function addAllMembersToList() {
    // let allMembers = Object.assign({}, members);
    // // for (var i = 0; i < members.length; i++) list.push({ 'user_id': members[i] });
    // // console.log(list);
    // let data = allMembers;
    // console.log(data);
    let data = stringifyMemebers;
    // console.log('data to post', data);
    let addMemberAdmins = postRequest.admin('admin_create', data);
    if (addMemberAdmins.error == false) {
        // console.log('member added')
        window.location.reload();
    } else {
        // console.log('member cannot able to added');
        console.log(addMemberAdmins.messsage);
    }
}

let count = 0;
for (let i = 0; i < allMembers.message.length; i++) {
    let exist = false;
    for (let j = 0; j < allAdmins.message.length; j++) {
        if (allMembers.message[i].id === allAdmins.message[j].user.id) {
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
            committeeName = 'No committee';
        }

        $(`#allMembersDataAdmins`).append(
            `
        <div class="card cardStyle tab_dark mt-3 memberCard" id="memberCardAdmins">
            <div class="complaints__header member__inner d-flex justify-content-between">
                <div class="d-flex">
                    <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                        class="rounded-circle" alt="...">
                    <div class="complaints__sender">
                        <b>${memberName}</b>
                        <p class="small">${allMembers.message[i].district}, <span>${allMembers.message[i].state}</span></p>
                    </div>
                </div>
                <div class="d-flex manageTabCommittee justify-content-between align-items-center">
                    <div class="member__committeeName ml-1 px-5">
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


