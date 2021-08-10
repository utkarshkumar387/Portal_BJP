let memberProfile = getRequest.member('member_profile');
// console.log(memberProfile);
let link = window.location.href.split('/');
// console.log(link[4]);
$('#marital_status').on('change', selectMaritialStatus);
$('#genderMale').on('change', selectMaritialStatus);
$('#genderFemale').on('change', selectMaritialStatus);

function selectMaritialStatus() {
    var maritalStatus = $('#marital_status').find(":selected").text();
    var genderStatus = $('#genderMale').prop("checked");
    // console.log(maritalStatus);
    // console.log(genderStatus);
    $('#couple_status').empty();
    if (maritalStatus == 'Married') {
        if ($('#genderMale').prop("checked")) {
            $('#couple_status').append(`
            <label for="inputEmail3" class="col-sm-4 col-form-label">Wife's Name
            (optional)</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="inputEmail3" placeholder="">
        </div>
            `
            )
        }
        else if ($('#genderFemale').prop("checked")) {
            $('#couple_status').append(`
            <label for="inputEmail3" class="col-sm-4 col-form-label">Husband's Name
                                    (optional)</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="inputEmail3" placeholder="">
                                </div>
            `
            )
        }
    }
    // var maritialStatus = document.getElementById("marital_status").val();
    // console.log(maritialStatus)
    // console.log((document.getElementsByTagName("option")[maritialStatus].value));
};

let phoneNumberArray = [];
let indexPhoneNumber = 2;
function addPhoneNumber() {
    var id = indexPhoneNumber;
    $('#allPhoneNumber').append(`
        <div id="phoneNumber${id}" class="form-group d-flex">
            <input type="tel" class="form-control" id="phoneNumberField${id}"
                placeholder="+91-9876543210">
            <button onclick="removePhoneNumber(${id})" class="btn btn-outline-danger ml-2 formButtonPhone">-</button>
        </div>
    `);
    phoneNumberArray.push(indexPhoneNumber);
    indexPhoneNumber++;
}

function removePhoneNumber(id) {
    $("#phoneNumber" + id).remove();
    const index = phoneNumberArray.indexOf(id);
    if (index > -1) {
        // console.log('enjoy kro');
        phoneNumberArray.splice(index, 1);
    }
    // for (var i = 0; i < phoneNumberArray.length; i++) {
    //     if (phoneNumberArray[i] == id) {
    //         phoneNumberArray.re
    //     }
    // }
}


//copy residential address to permanent address
// let addressCopy = document.getElementById('addressCopy');
// addressCopy.addEventListener('click', copyAddress);
function copyAddress() {
    let permanentAddress = document.getElementById('permanentAddress');
    // console.log(permanentAddress.value);
    let residentialAddress = document.getElementById('residentialAddress');
    residentialAddress.value = permanentAddress.value;
}

$('#nationalityIndian').on('change', officialDetails);
$('#nationalityNRI').on('change', officialDetails);
function officialDetails() {
    $('#officialDetails').empty();
    if ($('#nationalityIndian').prop("checked")) {
        $('#officialDetails').append(`
            <div class="form-group row">
                                    <label for="getAllStates" class="col-sm-4 col-form-label">State
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="getAllStates" class="form-select form-control" id="getAllStates">
                                        <option selected disabled >-Select State-</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="getAllDistricts" class="col-sm-4 col-form-label">District
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="getAllDistricts" class="form-select form-control" id="getAllDistricts">
                                        <option selected disabled>-Select District-</option>
                                        </select>
                                        </div>
                                </div>
            `)
    }
    // <div class="form-group row">
    //     <label for="parliamentConstituencies" class="col-sm-4 col-form-label">Lok Sabha Constituency
    //         <span>*</span></label>
    //         <div class="col-md-8">
    //         <select name="parliamentConstituencies" class="form-select form-control" id="parliamentConstituencies">
    //         <option selected disabled>-Select Up Block Parliament Constituency-</option>
    //         </select>
    //         </div>
    // </div>
    // <div class="form-group row">
    //     <label for="legislativeAssemblyConstituencies" class="col-sm-4 col-form-label">Legislative Assembly Constituency
    //         <span>*</span></label>
    //         <div class="col-md-8">
    //         <select name="legislativeAssemblyConstituencies" class="form-select form-control" id="legislativeAssemblyConstituencies">
    //         <option selected disabled>-Select Legislative Assembly Constituency-</option>
    //         </select>
    //         </div>
    // </div>
    // <div class="form-group row">
    //  <label for="upBlockEducationConstituencies" class="col-sm-4 col-form-label">Up Block Education Constituency
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="upBlockEducationConstituencies" class="form-select form-control" id="upBlockEducationConstituencies">
    //          <option selected disabled>-Select Up Block Education Constituency-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="townshipConstituencies" class="col-sm-4 col-form-label">Township Constituency
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="townshipConstituencies" class="form-select form-control" id="townshipConstituencies">
    //          <option selected disabled>-Select Township Constituency-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="panchayatSamitis" class="col-sm-4 col-form-label">Panchayat Samiti
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="panchayatSamitis" class="form-select form-control" id="panchayatSamitis">
    //          <option selected disabled>-Select Panchayat Samiti-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="villageCouncils" class="col-sm-4 col-form-label">Village Council
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="villageCouncils" class="form-select form-control" id="villageCouncils">
    //          <option selected disabled>-Select Village Council-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="revenueVilleges" class="col-sm-4 col-form-label">Revenue Village
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="revenueVilleges" class="form-select form-control" id="revenueVilleges">
    //          <option selected disabled>-Select Revenue Village-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="booths" class="col-sm-4 col-form-label">Booth
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="booths" class="form-select form-control" id="booths">
    //          <option selected disabled>-Select Booth-</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="allreligion" class="col-sm-4 col-form-label">Religion
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <select name="allreligion" class="form-select form-control" id="allreligion">
    //          <option value="" selected disabled>-Select Religion-</option>
    //          <option value="Hinduism">Hinduism</option>
    //          <option value="Islam">Islam</option>
    //          <option value="Christianity">Christianity</option>
    //          <option value="Sikhism">Sikhism</option>
    //          <option value="Buddhism">Buddhism</option>
    //          <option value="Jainism">Jainism</option>
    //      </select>
    //  </div>
    // </div>
    // <div class="form-group row">
    //  <label for="allCaste" class="col-sm-4 col-form-label">Caste
    //      <span>*</span>
    //  </label>
    //  <div class="col-md-8">
    //      <input name="allCaste" class="form-select form-control" id="allCaste">
    //  </div>
    // </div>

    //appending states options
    let states = getRequest.member('get_states');
    if (states.error == false) {
        let allStates = states.message.states;
        // console.log(allStates);
        for (let i = 0; i < allStates.length; i++) {
            // console.log('states id ', allStates[i].id, allStates[i].name);
            $('#getAllStates').append(
                `
                <option value="${allStates[i].id}">${allStates[i].name}</option>
            `
            )
        }
    }
    document.getElementById('getAllStates').addEventListener('change', function () {
        let state;
        state = document.getElementById("getAllStates").value;
        let districts = getRequest.member('get_districts', state);
        if (districts.error == false) {
            let allDistricts = districts.message.districts;
            for (let i = 0; i < allDistricts.length; i++) {
                $('#getAllDistricts').append(
                    `
                    <option value="${allDistricts[i].id}">${allDistricts[i].name}</option>
                `
                )
            }
        }
    })
    document.getElementById('getAllDistricts').addEventListener('change', districtDependentOptions)
}

// post request to api
let memberDetailsGet = getRequest.member('member_profile', link[4]);
if (memberDetailsGet.error == false) {
    let memberData = memberDetailsGet.message.member_details;
    if (memberData.gender == 1) {
        document.getElementById('genderMale').checked = true;
        // $('#genderMale').prop("checked");
    } else if (memberData.gender == 2) {
        document.getElementById('genderFemale').checked = true;
    } else {
        document.getElementById('genderMale').checked = true;
    }

    $('#memberName').html(memberData.first_name + ' ' + memberData.last_name);
    (memberData.committee_id) ? $('#memberCommitteeName').html(memberData.committee_id.name) : $('#memberCommitteeName').html('Not in committee');
    $('#memberFirstName').val(memberData.first_name);
    $('#memberLastName').val(memberData.last_name);
    $('#memberFatherName').val(memberData.father_name);
    // $('#memberGender').val(memberData.father_name);
    // console.log('Maritial status is ', $('#marital_status option'));
    $('#marital_status option').removeAttr('selected').filter(`[value=${memberData.marital_status}]`).attr('selected', true);
    $('#memberEmail').val(memberData.email);
    $('#primaryPhoneNumber').val(memberData.phone_no);
    $('#memberDOB').val(memberData.dob);
    $('#memberBloodGrouop').val(memberData.blood_group);
    $('#memberAnniversary').val(memberData.anniversary);
    $('#permanentAddress').val(memberData.permanent_address_line1);
    $('#residentialAddress').val(memberData.residence_address_line1);
    // if (memberData.nationality == 1) {
    //     $('#nationalityIndian').attr('checked', 'true');
    // } else if (memberData.nationality == 2) {
    //     $('#nationalityNRI').attr('checked', 'true');
    // }
    // $('#getAllStates option').removeAttr('selected').filter(`[value=${memberData.state_id.id}]`).attr('selected', true)
    // $('#getAllDistricts').val(memberData.district_id.name);
    // $('#parliamentConstituencies').val(memberData.parliament_constituency_id.name);
    // $('#legislativeAssemblyConstituencies').val(memberData.legislative_assembly_constituency_id.name);
    // $('#upBlockEducationConstituencies').val(memberData.up_block_education_constituency_id.name);
    // $('#townshipConstituencies').val(memberData.township_constituency_id.name);
    // $('#panchayatSamitis').val(memberData.panchayat_samiti_id.name);
    // $('#villageCouncils').val(memberData.village_council_id.name);
    // $('#revenueVilleges').val(memberData.village_council_id.name);
    // $('#booths').val(memberData.booth_id.name);
    // $('#allreligion').val(memberData.religion);
    // $('#allCaste').val(memberData.caste);
    $('#voterIdCard').val(memberData.voter_id_card);
    $('#adharCard').val(memberData.aadhar_card);
    $('#panCard').val(memberData.pan_card);
    $('#facebookLink').val(memberData.facebook_link);
    $('#instagramLink').val(memberData.instagram_link);
    $('#twitterLink').val(memberData.twitter_link);
}

//patch request to api
function addMemberDetails() {
    let alerts = document.getElementById('validationAlert').querySelector('.alert');
    if (alerts != null) {
        alerts.remove()
    }
    // $('#validationAlert').remove('.alert');
    // let allPhoneNumbers = [];
    // console.log(allPhoneNumbers);
    // let allPhoneNumbersInput = document.getElementById('allPhoneNumber').getElementsByTagName('input');
    // for (let i = 0; i < allPhoneNumbersInput.length; i++) {
    //     let no = allPhoneNumbersInput[i].value;
    //     allPhoneNumbers.push(no);
    // }

    let genderInput;
    let maleRadio = document.getElementById('genderMale').checked;
    let femaleRadio = document.getElementById('genderFemale').checked;
    if (maleRadio == true) {
        genderInput = 1;
    } else if (femaleRadio == true) {
        genderInput = 2;
    } else {
        genderInput = 0;
    }
    let memberDetails = {
        first_name: $('#memberFirstName').val(),
        last_name: $('#memberLastName').val(),
        father_name: $('#memberFatherName').val(),
        gender: genderInput,
        email: $('#memberEmail').val(),
        dob: $('#memberDOB').val(),
        blood_group: $('#memberBloodGrouop').val(),
        // anniversary: $('#memberAnniversary').val(),
        permanent_address_line1: $('#permanentAddress').val(),
        residence_address_line1: $('#residentialAddress').val(),
        voter_id_card: $('#voterIdCard').val(),
        pan_card: $('#panCard').val(),
        aadhar_card: $('#adharCard').val(),
        facebook_link: $('#facebookLink').val(),
        twitter_link: $('#twitterLink').val(),
        instagram_link: $('#instagramLink').val(),
    }
    // memberDetails = {
    //     father_name: $('#memberFatherName').val(),
    // }
    let id = link[4];
    if (formValidation() == true) {
        console.log(`validation verified`);
        let memberDetailsData = patchRequest.member('edit_member_profile', id, memberDetails);
        if (memberDetailsData.error == false) {
            setCookie('member_profile', JSON.stringify(memberProfile.message.member_details), 10);
            window.location.replace(`/profile/${id}`);
        } else {
            console.log(memberDetails);
            console.log(memberDetails.message);
        }
    } else {
        console.log('Enter correct details');
    }

}

// function districtDependentOptions() {
//     let district;
//     district = document.getElementById('getAllDistricts').value;
//     let districtDependent = getRequest.member('get_district_dependent', district);
//     if (districtDependent.error == false) {
//         let allofficialDetails = document.getElementById('officialDetails').getElementsByTagName('select');
//         for (let i = 0; i < allofficialDetails.length; i++) {
//             let id;
//             id = allofficialDetails[i].getAttribute('id');
//         }
//         var temp = districtDependent.message;
//         for (var temp1 in temp) {
//             var words = temp1.split('_');
//             for (var word in words) {
//                 if (word == 0) continue;
//                 words[word] = words[word].charAt(0).toUpperCase() + words[word].slice(1);
//             }
//             words = (words).join('');
//             for (var i = 0; i < temp[temp1].length; i++) {
//                 $('#' + words).append(
//                     `
//                             <option value="${temp[temp1][i].id}">${temp[temp1][i].name}</option>
//                         `
//                 )
//             }

//         }
//     }
// }
function imageURL(input) {
    formData = new FormData();
    formData.append('file', input.files[0]);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function formValidation() {
    let userFirstName = $('#memberFirstName');
    let userLastName = $('#memberLastName');
    let userFatherName = $('#memberFatherName');
    let userGender = document.getElementById('genderMale').checked || document.getElementById('genderFemale').checked;
    // console.log('check user gender ', userGender)
    let userMaritalStatus = $('#marital_status');
    let userPrimaryNumber = $('#primaryPhoneNumber');
    let userDOB = $('#memberDOB');
    let userPermanentAddress = $('#permanentAddress');
    let userResidentialAddress = $('#residentialAddress');
    if (userFirstName.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your First Name.
        </div>
        `)
        return false;
    }
    if (userLastName.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your Last Name.
        </div>
        `)
        return false;
    }
    if (userFatherName.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your Father's Name.
        </div>
        `)
        return false;
    }
    if (userGender == false) {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please select your Gender.
        </div>
        `)
        return false;
    }
    if (userMaritalStatus.selectedIndex < 1) {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please select your Marital Status.
        </div>
        `)
        return false;
    }
    if (userPrimaryNumber.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please select your Primary Number.
        </div>
        `)
        return false;
    }
    if (userDOB.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your Date of birth.
        </div>
        `)
        return false;
    }
    if (userPermanentAddress.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your Permanent Address.
        </div>
        `)
        return false;
    }
    if (userResidentialAddress.val() == "") {
        $('#validationAlert').append(`
        <div class="alert alert-danger" role="alert">
            Please enter your Residential Address.
        </div>
        `)
        return false;
    }

    return true;
}

//modifying view in mobile view
window.onload = contentMobileView();