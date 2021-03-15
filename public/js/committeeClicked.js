let link = window.location.href.split('/');
console.log(link);
let committeeID = link[4];
let committeeDetails = fetchCommitteeByID(`committee`, committeeID);
console.log(committeeDetails);
if (committeeDetails.error == false) {
    let committee = committeeDetails.message.committee_data;
    console.log(committee);
    let committeeLeader = committee.leader.first_name + ' ' + committee.leader.last_name;
    let committeeLeaderAddress = committee.leader.district + ', ' + committee.leader.state;
    console.log(committeeLeader, committeeLeaderAddress);
    $('#committeeName').html(committee.title);
    $('#committeeDesc').html(committee.description);
    $('#committeeLeader').html(committeeLeader);
    $('#committeeLeaderAddress').html(committeeLeaderAddress);
    for (let i = 0; i < committee.committee_members.length; i++) {
        let committeeMemberName = committee.committee_members[i].first_name + ' ' + committee.committee_members[i].last_name;
        let committeeMemberAddress = committee.committee_members[i].district + ', ' + committee.committee_members[i].state;
        $('#committeeMemberBlock').append(`
        <div class="card cardStyle mt-3 memberCard" id="memberCard">
        <div class="complaints__header member__inner d-flex justify-content-between">
            <div class="d-flex">
                <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202001/mano_1579261142_749x421.jpeg?size=1200:675"
                    class="rounded-circle" alt="...">
                <div class="complaints__sender">
                    <strong>${committeeMemberName}</strong>
                    <p class="small">${committeeMemberAddress}</p>
                </div>
            </div>
            <div>
                <a class="member__button mr-3" href="/profile/${committee.committee_members[i].id}">View</a>
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
let search = document.getElementById('committee__membersSearch');
search.addEventListener('keyup', searchFunction);
function searchFunction() {
    let input1 = document.getElementById('committee__membersSearch').id;
    let members1 = document.getElementById('committeeMemberBlock').id;
    let memberName1 = document.getElementById('memberCard').id;
    console.log(input1, members1, memberName1);
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

