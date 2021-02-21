var authorDetails, authorName, authorID;
let link = window.location.href.split('/');
let blogID;
console.log(link.length);
$(document).ready(() => {

    let blogFunctionality;
    if (link.length == 4) {
        blogFunctionality = document.getElementById('addEditBlog');
        blogFunctionality.addEventListener('click', addBlog());
        let cookieDetails = JSON.parse(getCookie('member_profile'));
        // console.log(cookieDetails)
        let authorName = cookieDetails.first_name + ' ' + cookieDetails.last_name
        // console.log(authorName);
        $('#blogAuthor').val(authorName);
    } else if (link.length == 6) {
        blogID = link[4];
        let status = link[5];
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
        blogFunctionality = document.getElementById('addEditBlog');
        blogFunctionality.addEventListener('click', editBlog());
        console.log('Inside blog edit form');
    }
});
function addBlog() {
    authorDetails = JSON.parse(getCookie('member_profile'));
    authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.user_id;
    let data = {
        data: JSON.stringify({
            blog_data:
            {
                // image: null,
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: 'pending'
            }
        })
    }
    let blogDetails = addContent('blogs', data);
    // window.location.replace('/blogs');
    console.log(blogDetails);
}
function editBlog() {
    let data = {
        data: JSON.stringify({
            blog_data:
            {
                // image: null,
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: 'pending'
            }
        })
    }
    //no patch request in content/blogs/id or content/approved
    let blogDetails = patchRequestByID('blogs', blogID, data);
    // window.location.replace(`/blogForm/${blogID}/${status}`);
    console.log(blogDetails);
}

