if (getCookie('privilege').verification_privilege == null) {
    $('#eventsPendingLink').css('display', 'none')
    $('#eventsRejectedLink').css('display', 'none')
} else {
    $('#eventsPendingLink').css('display', 'block');
    $('#eventsRejectedLink').css('display', 'block')
}