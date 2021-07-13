let link = ['', '', '', '', ''];
let userDetails = getCookie('member_profile');
let userCommitteeID = JSON.parse(userDetails).committee_id
let committeeRelatedDetails = getRequest.committee('committee', userCommitteeID);
// console.log('committee details', committeeRelatedDetails);
if (committeeRelatedDetails.error == false) {
    let allCommitteeDetails = committeeRelatedDetails.message.committee_data;
    // console.log('all committee details inside msg ', allCommitteeDetails);
    $('#myCommitteeName').html(allCommitteeDetails.title);
    $('#myCommitteeDescription').html(allCommitteeDetails.description);
    for (let i = 0; i < allCommitteeDetails.committee_members.length; i++) {
        let committeeMemberName = allCommitteeDetails.committee_members[i].first_name + ' ' + allCommitteeDetails.committee_members[i].last_name;
        $('#allCommitteeMembers').append(`
        <div class="card tab_dark cardStyle mt-3">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <b>${committeeMemberName}/b>
                    <p class="small">${allCommitteeDetails.committee_members[i].district}, <span>${allCommitteeDetails.committee_members[i].state}</span>
                    </p>
                </div>
            </div>
            <div>
                <a class="member__button mr-3" href="">View</a>
                <img class="member__more dropleft" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" src="/img/icons/More.png"
                    alt="">
                <div class="dropdown-menu">
                    <h6 class="dropdown-header">Dropdown header</h6>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </div>
        </div>
    </div>
        `)
    }
}

//modifying view in mobile view
window.onload = contentMobileView();