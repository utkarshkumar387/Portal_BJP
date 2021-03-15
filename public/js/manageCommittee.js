let link = ['', '', '', ''];
let allMembers = fetchAllAdminData('committee');
console.log(allMembers);
if (allMembers.error == false) {
    for (let i = 0; i < allMembers.message.length; i++) {
        let memberName = allMembers.message[i].user.first_name + ' ' + allMembers.message[i].user.last_name
        let committeeName;
        if (allMembers.message[i].committee_name != null) {
            committeeName = allMembers.message[i].committee_name;
        } else {
            committeeName = 'Not in committee';
        }
        $('#manageCommitteeBlock').append(
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
                    <div class="dropdown-menu" id="submitCommitteePrivilege${allMembers.message[i].id}">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="memberCommitteePermission${allMembers.message[i].id}">
                            <label class="form-check-label px-2"
                                for="memberCommitteePermission${allMembers.message[i].id}">Permission</label>
                                </div>
                                <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.id, ${allMembers.message[i].id})" class='btn btn-primary mt-3'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        )
        if (allMembers.message[i]) {
            document.getElementById(`memberCommitteePermission${allMembers.message[i].id}`).checked = true;
        } else {
            document.getElementById(`memberCommitteePermission${allMembers.message[i].id}`).checked = false;

        }
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