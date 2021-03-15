let link = ['', '', '', ''];
let allMembers = fetchAllAdminData('verification');
console.log(allMembers);
if (allMembers.error == false) {
    for (let i = 0; i < allMembers.message.length; i++) {
        let memberName = allMembers.message[i].user.first_name + ' ' + allMembers.message[i].user.last_name;
        let committeeName;
        if (allMembers.message[i].committee_name != null) {
            committeeName = allMembers.message[i].committee_name;
        } else {
            committeeName = 'Not in committee';
        }
        $('#manageVerificationTeamBlock').append(
            `
        <div class="card cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${memberName}</b>
                    <p class="small">${allMembers.message[i].user.district}, <span>${allMembers.message[i].user.state}</span>
                    </p>
                </div>
            </div>
            <div class="d-flex">
                <div class="member__committeeName px-5">
                    <p>${committeeName}</p>
                </div>
                <div class="member__permission btn-group dropright">
                    <img class="member__more dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" src="img/icons/More.png" alt="">
                        <div class="dropdown-menu" id="memberPermissionMenu${allMembers.message[i].id}">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="blogsPermission${allMembers.message[i].id}">
                            <label class="form-check-label px-2"
                                for="blogsPermission${allMembers.message[i].id}">Blogs</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="eventsPermission${allMembers.message[i].id}">
                            <label class="form-check-label px-2"
                                for="eventsPermission${allMembers.message[i].id}">Events</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="complaintsPermission${allMembers.message[i].id}">
                            <label class="form-check-label px-2"
                                for="complaintsPermission${allMembers.message[i].id}">Complaints</label>
                        </div>
                        <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.id, ${allMembers.message[i].id})" class='btn btn-primary mt-3'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        )
        let verificationPrivilege = allMembers.message[i];
        // let temp = { "temp": null };
        // console.log(temp['temp']);
        // console.log(verificationPrivilege);
        // console.log(verificationPrivilege != temp['temp']);
        if (verificationPrivilege != null) {
            let manageBlog = allMembers.message[i].manage_blog;
            let manageEvent = allMembers.message[i].manage_event;
            let manageComplaint = allMembers.message[i].manage_complaint;
            document.getElementById(`blogsPermission${allMembers.message[i].id}`).checked = manageBlog;
            document.getElementById(`eventsPermission${allMembers.message[i].id}`).checked = manageEvent;
            document.getElementById(`complaintsPermission${allMembers.message[i].id}`).checked = manageComplaint;
        }
        $('.save__verification').attr('id', `submitMemberVerification${allMembers.message[i].id}`)
    }
}
//search members
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('manageVerificationTeamBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    console.log(input1, members1, memberName1);
    mySearchFunction(input1, members1, memberName1);
}

// let memberVerification = fetchVerificationStatus('verification');
// console.log(memberVerification);
//status change of privilege
function getButton(id, memberID) {
    console.log(id, memberID);
    let memberPermissionMenu = document.getElementById(`${id}`);
    let allInputs = memberPermissionMenu.querySelectorAll('input');
    let check;
    let allChecks = [];
    for (let i = 0; i < allInputs.length; i++) {
        check = allInputs[i].checked
        allChecks.push(check);
    }
    console.log(allChecks);
    let data = {
        manage_blog: allChecks[0],
        manage_event: allChecks[1],
        manage_complaint: allChecks[2]
    }
    console.log(data);
    let patchVerificationMembers = patchRequestByID('verification', memberID, data);
    if (patchVerificationMembers.error == false) {
        window.location.reload();
    } else {
        console.log(patchVerificationMembers.message);
    }
}
// function saveVerificationPrivileges() {
// }


