console.log('Download your id card from here');
let link = ['', '', '', ''];
let userData = JSON.parse(getCookie('member_profile'));
// console.log(userData);
function downloadPoster(type) {
    var container = document.getElementById("IDcard");
    html2canvas(container, { allowTaint: false }).then(function (canvas) {

        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = `Your_IDcard.${type}`;
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
}
// console.log(userData.first_name);
$('#memberName').html(`${userData.first_name} ${userData.last_name}`);
let memberCommittee = userData.committee_id;
if (memberCommittee) {
    memberCommittee = memberCommittee;
} else {
    memberCommittee = '';
}
$('#memberCommittee').html(`${memberCommittee}`);
$('#memberPhoneNo').html(userData.first_name.phone_no);
$('#memberDOB').html(userData.dob);
// function downloadPosterPDF(type) {
//     html2canvas($("#IDcard"), {
//         onrendered: function (canvas) {
//             let imgData = canvas.toDataURL(
//                 'image/png');
//             let imgWidth = (canvas.width * 60) / 240;
//             let imgHeight = (canvas.height * 70) / 240;
//             let doc = new jsPDF('p', 'mm', 'a4');
//             doc.addImage(imgData, 'PNG', 15, 2, imgWidth, imgHeight);
//             doc.save(`sample-file.${type}`)
//         }

//     });
// }