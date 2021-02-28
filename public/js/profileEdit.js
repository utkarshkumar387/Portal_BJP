let link = ['', '', '', ''];
$('#marital_status').on('change', selectMaritialStatus);
$('#genderMale').on('change', selectMaritialStatus);
$('#genderFemale').on('change', selectMaritialStatus);

function selectMaritialStatus() {
    var maritalStatus = $('#marital_status').find(":selected").text();
    var genderStatus = $('#genderMale').prop("checked");
    console.log(maritalStatus);
    console.log(genderStatus);
    $('#couple_status').empty();
    if (maritalStatus == 'Married') {
        if ($('#genderMale').prop("checked")) {
            console.log('go append');
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
        console.log('enjoy kro');
        phoneNumberArray.splice(index, 1);
    }
    // for (var i = 0; i < phoneNumberArray.length; i++) {
    //     if (phoneNumberArray[i] == id) {
    //         phoneNumberArray.re
    //     }
    // }
}


//copy residential address to permanent address
let addressCopy = document.getElementById('addressCopy');
addressCopy.addEventListener('click', copyAddress);
function copyAddress() {
    let permanentAddress = document.getElementById('permanentAddress');
    console.log(permanentAddress.value);
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
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">State
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select State-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Lok Sabha Satra
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Lok Sabha Satra-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Vidhan Sabha Satra
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Vidhan Sabha Satra-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">District
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select District-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Upkhand
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Upkhand-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Tehsil
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Tehsil-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Panchayat Samiti
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Panchayat Samiti-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Gram Panchayat
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Gram Panchayat-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Revenue Village
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Revenue Village-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Booth
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Booth-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Religion
                                        <span>*</span>
                                    </label>
                                    <div class="col-md-8">
                                    <select name="marital_status" class="form-select form-control" id="marital_status">
                                        <option value="">-Select Religion-</option>
                                        <option value="Hinduism">Hinduism</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Christianity">Christianity</option>
                                        <option value="Sikhism">Sikhism</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Jainism">Jainism</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-4 col-form-label">Caste
                                        <span>*</span></label>
                                        <div class="col-md-8">
                                        <select name="marital_status" class="form-select form-control" id="marital_status">
                                            <option value="">-Select Caste-</option>
                                            <option value="Hinduism">Hinduism</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Christianity">Christianity</option>
                                            <option value="Sikhism">Sikhism</option>
                                            <option value="Buddhism">Buddhism</option>
                                            <option value="Jainism">Jainism</option>
                                        </select>
                                        </div>
                                </div>
            `)
    }
    // else if($('#nationalityNRI').prop("checked")){

    // };
}