var committeeMemberDetails = JSON.parse(getCookie('member_profile'));
var memberPivilege = JSON.parse(getCookie('privilege'));
if (memberPivilege.committee_privilege || memberPivilege.admin_privilege) {
    $('#allCommittees').css('display', 'block');
} else {
    $('#allCommittees').css('display', 'none');
}

// $('#userCommittee').attr('href', `/committeeClicked/${committeeMemberDetails.committee_id}`)