var authorDetails, authorName, authorID;
let link = window.location.href.split('/');
let blogID, blogFunctionality, status;
console.log(link.length);
blogFunctionality = document.getElementById('addEditBlog');
if (link.length == 4) {
    blogFunctionality.addEventListener('click', addBlog);
} else { //if greater than 4 execute it
    blogFunctionality.addEventListener('click', editBlog);
}
$(document).ready(() => {
    if (link.length == 4) {
        let cookieDetails = JSON.parse(getCookie('member_profile'));
        // console.log(cookieDetails)
        let authorName = cookieDetails.first_name + ' ' + cookieDetails.last_name
        // console.log(authorName);
        $('#blogAuthor').val(authorName);
    } else if (link.length == 6) {
        blogID = link[4];
        status = link[5];
        console.log(blogID, status);
        switch (status) {
            case 'approved':
                let editBlogDetails = fetchContentByID('blogs', blogID);
                // console.log(editBlogDetails);
                if (editBlogDetails.error == false) {
                    // console.log(editBlogDetails.message);
                    // console.log(authorName);
                    //change to name..... added email just to check
                    $('#blogAuthor').val(editBlogDetails.message.user_id.email);
                    $('#blogTitle').val(editBlogDetails.message.title);
                    $('#blogBody').val(editBlogDetails.message.description);
                }
        }
        console.log('Inside blog edit form');
    }
});
function addBlog() {
    authorDetails = JSON.parse(getCookie('member_profile'));
    authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.user_id;
    console.log($('#blogTitle').val());
    let data = {
        data: JSON.stringify({
            blog_data:
            {
                // image: null,
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: 'pending'
            },
            blog_data_images: JSON.stringify([

            ])
        })
    }
    console.log(data);
    let blogDetails = addContent('blogs', data);
    window.location.replace('/blogs');
    console.log(blogDetails);
}
function editBlog() {
    let data = {
        // image: null,
        user_id: authorID,
        title: $('#blogTitle').val(),
        description: $('#blogBody').val(),
        status: status

    }
    console.log(data);
    //no patch request in content/blogs/id or content/approved
    let blogDetails = patchRequestByID('blogs/update_status', blogID, data);
    console.log(blogDetails);
    window.location.replace(`/blogsView/${blogID}/${status}`);
    // console.log(blogDetails);
}

