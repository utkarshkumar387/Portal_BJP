let link = ['', '', '', ''];
let allMembers = getRequest.member('get_all_members');
let allVerificationMember = getRequest.admin('verification');
// console.log(allVerificationMember);
if (allVerificationMember.error == false) {
    for (let i = 0; i < allVerificationMember.message.length; i++) {
        let memberName = allVerificationMember.message[i].user.first_name + ' ' + allVerificationMember.message[i].user.last_name;
        let committeeName;
        if (allVerificationMember.message[i].committee_name != null) {
            committeeName = allVerificationMember.message[i].committee_name;
        } else {
            committeeName = 'Not in committee';
        }
        $('#manageVerificationTeamBlock').append(
            `
        <div class="card tab_dark cardStyle memberCard" id="memberCard" style="margin-top: 35px">
            <div class="allTags" style="position: absolute; margin-top: -25px">
                <div class="d-flex">
                    <h6 class="px-1 py-1" id="blogsAdminBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Blogs</span></h6>
                    <h6 class="px-1 py-1" id="eventsAdminBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Events</span></h6>
                    <h6 class="px-1 py-1" id="complaintsAdminBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Complaints</span></h6>
                </div>
            </div>
            <div class="complaints__header member__inner d-flex justify-content-between">
                <div class="d-flex">
                    <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                        class="rounded-circle" alt="...">
                    <div class="d-flex w-100 justify-content-between">
                    <div class="complaints__sender">
                        <b>${memberName}</b>
                        <p class="small">${allVerificationMember.message[i].user.district}, <span>${allVerificationMember.message[i].user.state}</span></p>
                    </div>
                    <div class="privilegeFunctionButtonsMobile">
                        <div class="member__permission btn-group dropright">
                            <img class="member__more dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="img/icons/More.png" alt="">
                            <div class="dropdown-menu" id="memberPermissionMenu${allVerificationMember.message[i].id}">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="blogsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="blogsPermission${allVerificationMember.message[i].id}">Blogs</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="eventsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="eventsPermission${allVerificationMember.message[i].id}">Events</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="complaintsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="complaintsPermission${allVerificationMember.message[i].id}">Complaints</label>
                                </div>
                                <div class="d-flex">
                                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="deleteMemberContentPrivilege(${allVerificationMember.message[i].id})" class='btn btn-danger mt-3'>Delete</button>
                                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.parentNode.id, ${allVerificationMember.message[i].id})" class='btn btn-primary mt-3 ml-2'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="member__committeeName px-5">
                        <p>${committeeName}</p>
                    </div>
                    <div class="privilegeFunctionButtonsDesktop">
                        <div class="member__permission btn-group dropright">
                            <img class="member__more dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="img/icons/More.png" alt="">
                            <div class="dropdown-menu" id="memberPermissionMenu${allVerificationMember.message[i].id}">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="blogsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="blogsPermission${allVerificationMember.message[i].id}">Blogs</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="eventsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="eventsPermission${allVerificationMember.message[i].id}">Events</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="complaintsPermission${allVerificationMember.message[i].id}">
                                    <label class="form-check-label px-2" for="complaintsPermission${allVerificationMember.message[i].id}">Complaints</label>
                                </div>
                                <div class="d-flex">
                                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="deleteMemberContentPrivilege(${allVerificationMember.message[i].id})" class='btn btn-danger mt-3'>Delete</button>
                                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.parentNode.id, ${allVerificationMember.message[i].id})" class='btn btn-primary mt-3 ml-2'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        )
        let verificationPrivilege = allVerificationMember.message[i];
        // let temp = { "temp": null };
        // console.log(temp['temp']);
        // console.log(verificationPrivilege);
        // console.log(verificationPrivilege != temp['temp']);
        if (verificationPrivilege != null) {
            let manageBlog = allVerificationMember.message[i].manage_blog;
            let manageEvent = allVerificationMember.message[i].manage_event;
            let manageComplaint = allVerificationMember.message[i].manage_complaint;
            // console.log('verification team privileges', manageBlog, manageEvent, manageComplaint);
            document.getElementById(`blogsPermission${allVerificationMember.message[i].id}`).checked = manageBlog;
            document.getElementById(`eventsPermission${allVerificationMember.message[i].id}`).checked = manageEvent;
            document.getElementById(`complaintsPermission${allVerificationMember.message[i].id}`).checked = manageComplaint;
            if (manageBlog) {
                $(`#blogsAdminBadge${allMembers.message[i].id}`).css('display', 'block');
            } else {
                $(`#blogsAdminBadge${allMembers.message[i].id}`).css('display', 'none');
            }
            if (manageEvent) {
                $(`#eventsAdminBadge${allMembers.message[i].id}`).css('display', 'block');
            } else {
                $(`#eventsAdminBadge${allMembers.message[i].id}`).css('display', 'none');
            }
            if (manageComplaint) {
                $(`#complaintsAdminBadge${allMembers.message[i].id}`).css('display', 'block');
            } else {
                $(`#complaintsAdminBadge${allMembers.message[i].id}`).css('display', 'none');
            }
        }
        $('.save__verification').attr('id', `submitMemberVerification${allVerificationMember.message[i].id}`)
    }
}
//search members
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('manageVerificationTeamBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    // console.log(input1, members1, memberName1);
    mySearchFunction(input1, members1, memberName1);
}

// let memberVerification = fetchVerificationStatus('verification');
// console.log(memberVerification);
//status change of privilege
function deleteMemberContentPrivilege(memberID) {
    let deleteVerificationMembers = deleteRequest.admin('verification', memberID)
    if (deleteVerificationMembers.error == false) {
        window.location.reload();
    } else {
        console.log(deleteVerificationMembers.message);
    }
}

function getButton(id, memberID) {
    // console.log(id, memberID);
    let memberPermissionMenu = document.getElementById(`${id}`);
    let allInputs = memberPermissionMenu.querySelectorAll('input');
    let check;
    let allChecks = [];
    for (let i = 0; i < allInputs.length; i++) {
        check = allInputs[i].checked
        allChecks.push(check);
    }
    // console.log(allChecks);
    let data = {
        manage_blog: allChecks[0],
        manage_event: allChecks[1],
        manage_complaint: allChecks[2]
    }
    // console.log(data);
    if (data.manage_blog || data.manage_event || data.manage_complaint) {
        let patchVerificationMembers = patchRequest.admin('verification', memberID, data);
        if (patchVerificationMembers.error == false) {
            window.location.reload();
        } else {
            console.log(patchVerificationMembers.message);
        }
    } else {
        deleteMemberContentPrivilege(memberID);
    }
}
// function saveVerificationPrivileges() {
// }

// allVerificationDataAdmin
let count = 0;
for (let i = 0; i < allMembers.message.length; i++) {
    let exist = false;
    // console.log('all verification team users', allVerificationMember.message);
    for (let j = 0; j < allVerificationMember.message.length; j++) {
        if (allMembers.message[i].id === allVerificationMember.message[j].user.id) {
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

        $(`#allVerificationDataAdmin`).append(
            `
        <div class="card cardStyle tab_dark memberCard" id="memberCardAdmins" style="margin-top: 35px">
            <div class="allTags" style="position: absolute; margin-top: -25px">
                <div class="d-flex">
                    <h6 class="px-1 py-1" id="blogsBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Blogs</span></h6>
                    <h6 class="px-1 py-1" id="eventsBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Events</span></h6>
                    <h6 class="px-1 py-1" id="complaintsBadge${allMembers.message[i].id}" style="display:none;"><span class="badge badge_design">Complaints</span></h6>
                </div>
            </div>
            <div class="complaints__header member__inner d-flex justify-content-between">
                <div class="d-flex">
                    <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                        class="rounded-circle" alt="...">
                    <div class="complaints__sender">
                        <b>${memberName}</b>
                        <p class="small">${allMembers.message[i].district}, <span>${allMembers.message[i].state}</span></p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="member__committeeName px-5">
                        <p>${committeeName}</p>
                    </div>
                    <div class="member__permission btn-group dropright">
                        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton${allMembers.message[i].id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add
                        </button>
                        <div class="dropdown-menu" id="dropdownMenuPermission${allMembers.message[i].id}">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" onclick="checkMemberPermission(${allMembers.message[i].id})" id="blogsPermissionAdd${allMembers.message[i].id}">
                                <label class="form-check-label px-2"
                                    for="blogsPermissionAdd${allMembers.message[i].id}">Blogs</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" onclick="checkMemberPermission(${allMembers.message[i].id})" id="eventsPermissionAdd${allMembers.message[i].id}">
                                <label class="form-check-label px-2"
                                    for="eventsPermissionAdd${allMembers.message[i].id}">Events</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" onclick="checkMemberPermission(${allMembers.message[i].id})" id="complaintsPermissionAdd${allMembers.message[i].id}">
                                <label class="form-check-label px-2"
                                    for="complaintsPermissionAdd${allMembers.message[i].id}">Complaints</label>
                            </div>
                        </div>
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
    $('#allVerificationDataAdmin').append(`
        <h2>No member to display</h2>
    `)
}


let permissionList = new Object();
function checkMemberPermission(id) {
    if ($('#blogsPermissionAdd' + id).prop("checked")) {
        $('#blogsBadge' + id).css('display', 'block');
    } else {
        $('#blogsBadge' + id).css('display', 'none');
    }

    if ($('#eventsPermissionAdd' + id).prop("checked")) {
        $('#eventsBadge' + id).css('display', 'block');
    } else {
        $('#eventsBadge' + id).css('display', 'none');
    }

    if ($('#complaintsPermissionAdd' + id).prop("checked")) {
        $('#complaintsBadge' + id).css('display', 'block');
    } else {
        $('#complaintsBadge' + id).css('display', 'none');
    }

    modify_data(
        id,
        $('#blogsPermissionAdd' + id).prop("checked"),
        $('#eventsPermissionAdd' + id).prop("checked"),
        $('#complaintsPermissionAdd' + id).prop("checked"),
    );
    // console.log($('#blogsPermissionAdd' + id).prop("checked"));
}
function modify_data(id, blog, event, complaint) {
    delete permissionList[id];

    if (blog || complaint || event) {
        permissionList[id] = {
            'user_id': id,
            'manage_blog': blog,
            'manage_event': event,
            'manage_complaint': complaint,
        };
    }
    // console.log(permissionList);
}
function addAllPermittedMembersToList() {
    let list = [];
    for (i in permissionList) list.push(permissionList[i]);
    // console.log(list);
    let postPermissionList = postRequest.admin('verification', list);
    if (postPermissionList.error == false) {
        // console.log('succed')
        window.location.reload();
    } else {
        console.log(postPermissionList.messsage);
    }
}

//modifying view in mobile view
window.onload = contentMobileView();


