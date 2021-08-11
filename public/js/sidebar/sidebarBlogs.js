if (getCookie('privilege').verification_privilege == null) {
    $('#blogsPendingLink').css('display', 'none')
    $('#blogsRejectedLink').css('display', 'none')
} else {
    $('#blogsPendingLink').css('display', 'block');
    $('#blogsRejectedLink').css('display', 'block')
}