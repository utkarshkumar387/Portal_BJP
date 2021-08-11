var authorDetails, authorName, authorID;
let link = window.location.href.split('/');
let blogID, blogFunctionality, status, edittedBlogUserID, image64;
// console.log(link.length);
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
    // console.log(blogID, status);
    let editBlogDetails;
    switch (status) {
        case '2':
            editBlogDetails = getRequest.content('blogs', blogID);
            // console.log('edit blog detaila', editBlogDetails);
            edittedBlogUserID = editBlogDetails.message.user_id;
            // console.log('edit blog user id', edittedBlogUserID);
            break;
        case '1':
            editBlogDetails = getRequest.content('blogs_unapproved', blogID);
            // console.log('edit blog detaila', editBlogDetails);
            edittedBlogUserID = editBlogDetails.message.user_id;
            // console.log('edit blog user id', edittedBlogUserID);
            break;
        case '3':
            editBlogDetails = getRequest.content('blogs_unapproved', blogID);
            // console.log('edit blog detaila', editBlogDetails);
            edittedBlogUserID = editBlogDetails.message.user_id;
            // console.log('edit blog user id', edittedBlogUserID);
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

// document.getElementById('browse').addEventListener('change', imgBase64Converter)
function addBlog() {
    let alerts = document.getElementById('blogValidations').querySelector('.alert');
    if (alerts != null) {
        alerts.remove()
    }
    authorDetails = JSON.parse(getCookie('member_profile'));
    authorName = authorDetails.first_name + ' ' + authorDetails.last_name;
    authorID = authorDetails.id;
    // console.log('author ID is', authorID);
    // console.log($('#blogTitle').val());
    let data = {
        data: JSON.stringify({
            blog_data:
            {
                user_id: authorID,
                title: $('#blogTitle').val(),
                description: $('#blogBody').val(),
                status: '1'
            },
            blog_data_images: JSON.stringify(convertedImage)
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
    // console.log('data of added blog is ', data);
    // console.log(blogDetails);
    if (checkValidations() == true) {
        let blogDetails = postRequest.content('blogs', data);
        console.log(blogDetails);
        if (blogDetails.error == false) {
            window.location.replace('/blogsApproved');
        } else {
            console.log(blogDetails.message);
        }
    } else {
        console.log('Enter correct details');
    }
}
function editBlog() {
    let alerts = document.getElementById('blogValidations').querySelector('.alert');
    if (alerts != null) {
        alerts.remove()
    }
    let data = {
        // image: null,
        user_id: edittedBlogUserID,
        title: $('#blogTitle').val(),
        description: $('#blogBody').val(),
        status: status,

    }
    console.log(data);
    console.log(blogDetails);
    if (checkValidations() == true) {
        let blogDetails = patchRequest.content('blogs/content_update', blogID, data);
        if (blogDetails.error == false) {
            // console.log('blog patch request done');
            window.location.replace(`/blogsView/${blogID}/${status}`);
        } else {
            console.log(blogDetails.message);
        }
    } else {
        console.log('Enter correct details');
    }
}
// function imgBase64Converter() {
//     let preview = document.querySelector('#preview');
//     let files = document.querySelector('input[type=file]').files;
//     let count = 0;

//     function readAndPreview(file) {
//         // Make sure `file.name` matches our extensions criteria
//         if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
//             let reader = new FileReader();

//             reader.addEventListener("load", function () {
//                 let image = new Image();
//                 console.log(image);
//                 image.height = 100;
//                 image.title = file.name;
//                 image.src = this.result;
//                 preview.appendChild(image);
//             }, false);

//             reader.readAsDataURL(file);
//         }
//         console.log(file);
//     }
//     count++;
//     if (files && count < 5) {
//         [].forEach.call(files, readAndPreview);
//     } else {
//         alert('You can not able to add more images');
//     }
//     console.log(files);
// }
let convertedImage = [];
function convertSingleBase64(input) {
    image64 = null;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // console.log(e.target.result);
            image64 = e.target.result;
            $('#preview').attr('height', '100')
            $('#preview').attr('src', `${e.target.result}`);
            convertedImage.push({ "image": image64 });
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function checkValidations() {
    let blogTitle = $('#blogTitle');
    let blogBody = $('#blogBody');
    if (blogTitle.val() == "") {
        $('#blogValidations').append(`
        <div class="alert alert-danger" role="alert">
            Please enter blog title.
        </div>
        `)
        return false;
    }
    if (blogBody.val() == "") {
        $('#blogValidations').append(`
        <div class="alert alert-danger" role="alert">
            Please enter blog body.
        </div>
        `)
        return false;
    }
    return true;
}

//modifying view in mobile view
window.onload = contentMobileView();

