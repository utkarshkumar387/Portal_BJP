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
    let editBlogDetails;
    switch (status) {
        case '2':
            editBlogDetails = fetchContentByID('blogs', blogID);
            console.log(editBlogDetails);
            break;
        case '1':
            editBlogDetails = fetchContentByID('blogs_unapproved', blogID);
            console.log(editBlogDetails);
            break;
        case '3':
            editBlogDetails = fetchContentByID('blogs_unapproved', blogID);
            console.log(editBlogDetails);
            break;
    }
    console.log('Inside blog edit form');
    if (editBlogDetails.error == false) {
        // console.log(editBlogDetails.message);
        // console.log(authorName);
        //change to name..... added email just to check
        $('#blogAuthor').val(editBlogDetails.message.user.first_name + ' ' + editBlogDetails.message.user.last_name);
        $('#blogTitle').val(editBlogDetails.message.title);
        $('#blogBody').val(editBlogDetails.message.description);
    }
}

document.getElementById('browse').addEventListener('change', imgBase64Converter)
function addBlog() {
    authorDetails = JSON.parse(getCookie('member_profile'));
    authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.id;
    console.log('author ID is', authorID);
    console.log($('#blogTitle').val());
    let data = {
        data: JSON.stringify({
            blog_data:
            {
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: '1'
            },
            // event_data_images: JSON.stringify([

            // ])
        })
    }
    // JSON.stringify({
    //     blogs:
    //         [
    //             {
    //                 user_id: authorID,
    //                 title: $('#blogTitle').val(),
    //                 description: $('#blogBody').val(),
    //                 status: 1,
    //             }
    //         ],
    //     blog_data_images: JSON.stringify([

    //     ])
    console.log(data);
    let blogDetails = addContent('blogs', data);
    console.log(blogDetails);
    if (blogDetails.error == false) {
        // console.log('blog added');
        window.location.replace('/blogsApproved');
    } else {
        console.log(blogDetails.message);
    }
}
function editBlog() {
    let data = {
        // image: null,
        user_id: authorID,
        title: $('#blogTitle').val(),
        description: $('#blogBody').val(),
        status: status;

    }
    console.log(data);
    let blogDetails = updateContent('blogs/update_status', blogID, data);
    console.log(blogDetails);
    if (blogDetails.error == false) {
        console.log('blog patch request done');
        // window.location.replace(`/blogsView/${blogID}/${status}`);
    } else {
        console.log(blogDetails.message);
    }
}

