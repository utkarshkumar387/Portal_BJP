let link = ['', '', '', ''];
let privilegeLink = window.location.href.split('/');
// console.log(privilegeLink[4]);
let allMembers = fetchProfileData('get_all_members');
// console.log(allMembers);
if (allMembers.error == false) {
    for (let i = 0; i < allMembers.message.length; i++) {
        let memberName = allMembers.message[i].first_name + ' ' + allMembers.message[i].last_name
        let committeeName;
        if (allMembers.message[i].committee != null) {
            committeeName = allMembers.message[i].committee.title;
        } else {
            committeeName = 'Not in committee';
        }

        $('#allMembersData').append(
            `
        <div class="card cardStyle mt-3 memberCard" id="memberCard">
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
                <div class="member__permission btn-group dropright">
                    <img class="member__more dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" src="/img/icons/More.png" alt="">
                    <div class="dropdown-menu member__optionsDrop${allMembers.message[i].id}" id="nonPrivilegeMembersDrop"></div>
                </div>
            </div>
        </div>
    </div>
        `
        )
        if (privilegeLink[4] == 'manageAdmins' || privilegeLink[4] == 'manageCommittee' || privilegeLink[4] == 'manageCommSpecific' || privilegeLink[4] == 'manageMembers') {
            $(`.member__optionsDrop${allMembers.message[i].id}`).append(
                `
                <div class="form-check
                <input type="checkbox" class="form-check-input" id="memberCommitteePermission${allMembers.message[i].id}">
                <label class="form-check-label px-2"
                    for="memberCommitteePermission${allMembers.message[i].id}">Permission</label>
                    </div>
                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.id, ${allMembers.message[i].id})" class='btn btn-primary mt-3'>Add</button>

                `
            )
        } else if (privilegeLink[4] == 'manageVerificationTeam') {
            $(`.member__optionsDrop${allMembers.message[i].id}`).append(
                `
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
                    <button style="width: 100%;" type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="getButton(this.parentNode.id, ${allMembers.message[i].id})" class='btn btn-primary mt-3'>Add</button>
                `
            )
        }
        // if (!allMembers.message[i].committee_privileege) {
        //     document.getElementById(`memberCommitteePermission${allMembers.message[i].id}`).checked = true;
        // } else {
        //     document.getElementById(`memberCommitteePermission${allMembers.message[i].id}`).checked = false;

        // }
    }
}
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('manageCommitteeBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    // console.log(input1, members1, memberName1);
    mySearchFunction(input1, members1, memberName1);
}

//modifying view in mobile view
window.onload = contentMobileView();
