//split location link 
let link = window.location.href.split('/');
let blog_id = link[4], status;
let blog;
let blogDetails;
let recentBlogs;
//switching acc to status extracted
switch (link[5]) {
    case '2':
        blog = getRequest.content('blogs_with_recent', blog_id);
        blogDetails = blog.message.blog_details;
        recentBlogs = blog.message.recent_blogs;
        console.log(blog);
        break;
    case '1':
        blog = getRequest.content('blogs_unapproved', blog_id);
        $('#home__blogs').css("display", "none");
        blogDetails = blog.message
        break;
    case '3':
        blog = getRequest.content('blogs_unapproved', blog_id);
        $('#home__blogs').css("display", "none");
        blogDetails = blog.message
        break;
    default:
        console.log('No blogs found');
}
if (blog.error == false) {
    //appending data of the blog which is clicked
    status = blogDetails.status;
    // console.log(status);
    let authorName = `${blogDetails.user.first_name}` + ' ' + `${blogDetails.user.last_name}`;
    let blogDate = dateConverter(blogDetails.date);
    // console.log(blogDate);
    $('#blogTitle').html(blogDetails.title);
    if (blogDetails.images.length > 0) {
        for (let j = 0; j < blogDetails.images.length; j++) {
            console.log(blogDetails.images[j].image);
            blogImage = `${blogDetails.images[j].image}`;
        }
    } else {
        blogImage = `https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg`;
    }
    // console.log('blog image to display ', blogImage)
    $('#blogImage').attr('src', blogImage);
    $('#blogContent').html(blogDetails.description);
    $('#blogAuthorName').html(authorName);
    $('#blogDistrict').html(blogDetails.user.district);
    $('#blogState').html(blogDetails.user.state);
    $('#detailsBlogDay').html(blogDate[0]);
    $('#detailsBlogYearName').html(blogDate[1]);
    $('#detailsBlogYear').html(blogDate[2]);
    // console.log(blogDate[0]);

    //appending recent blogs
    if (link[5] == '2') {
        for (var i = 0; i < recentBlogs.length; i++) {
            let blogDate = dateConverter(recentBlogs[i].date);
            let name = recentBlogs[i].user.first_name + ' ' + recentBlogs[i].user.last_name
            let title = recentBlogs[i].title;
            let description = recentBlogs[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
            // console.log(trimmedDataBlog);
            if (recentBlogs[i].images.length > 0) {
                for (let j = 0; j < recentBlogs[i].images.length; j++) {
                    console.log(recentBlogs[i].images[j].image);
                    blogImage = `https://bjpbarmer.herokuapp.com${recentBlogs[i].images[j].image}`;
                }
            } else {
                blogImage = `https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg`;
            }
            $('#blogviewBlogsBlock').append(`
        <div class="card card_dark cardStyle">
        <div class="row g-0">
        <div class="col-md-6">
            <img class="blogsImg"
                src="${blogImage}"
                alt="Blog Image">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${name}</span></p>
                    <a href="/blogsView/${recentBlogs[i].id}/${recentBlogs[i].status}">
                    <span class="viewTag">View Blog</span>
                        <span>
                            <img src="/img/icons/link.png" alt="">
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
        `)
        }
    } else {
        console.log('recent blogs not available');
    }
} else {
    console.log(blog.message);
}
//returning status
window.addEventListener('load', function checkStatus(status) {
    console.log(status);
    return status;
})

//modifying view in mobile view
window.onload = contentMobileView();

