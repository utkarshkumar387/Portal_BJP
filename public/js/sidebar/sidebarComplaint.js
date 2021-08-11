if (getCookie('privilege').verification_privilege == null) {
    $('#complaintsPendingLink').css('display', 'none')
    $('#complaintsRejectedLink').css('display', 'none')
} else {
    $('#complaintsPendingLink').css('display', 'block');
    $('#complaintsRejectedLink').css('display', 'block')
}