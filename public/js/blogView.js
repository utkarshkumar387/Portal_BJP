// const e = require("express");

let link = window.location.href.split('/');
console.log(link);
// checkCookie(link);
let blog_id = link[4], status;
$(document).ready(() => {
    let blog;
    let blogDetails;
    let recentBlogs;
    switch (link[5]) {
        case 'approved':
            blog = fetchContentByID('blogs_with_recent', blog_id);
            blogDetails = blog.message.blog_details;
            recentBlogs = blog.message.recent_blogs;
            console.log(blog);
            break;
        case 'pending':
            blog = fetchContentByID('blogs_unapproved', blog_id);
            blogDetails = blog.message
            break;
        case 'rejected':
            blog = fetchContentByID('blogs_unapproved', blog_id);
            blogDetails = blog.message
            break;
        default:
            console.log('No blogs found');
    }
    if (blog.error == false) {
        status = blogDetails.status;
        console.log(status);
        let authorName = `${blogDetails.user_id.first_name}` + ' ' + `${blogDetails.user_id.last_name}`;
        let blogDate = dateConverter(blogDetails.date);
        console.log(blogDate);
        $('#blogTitle').html(blogDetails.title);
        $('#blogContent').html(blogDetails.description);
        $('#blogAuthorName').html(authorName);
        $('#blogDistrict').html(blogDetails.district);
        $('#blogState').html(blogDetails.state);
        $('#detailsBlogDay').html(blogDate[0]);
        $('#detailsBlogYearName').html(blogDate[1]);
        $('#detailsBlogYear').html(blogDate[2]);
        console.log(blogDate[0]);

        //appending blogs
        //     for (var i = 0; i < recentBlogs.length; i++) {
        //         let blogDate = dateConverter(recentBlogs[i].date);
        //         let name = recentBlogs[i].user_id.first_name + ' ' + recentBlogs[i].user_id.last_name
        //         let title = recentBlogs[i].title;
        //         let description = recentBlogs[i].description;
        //         let maxStringTitle = 20;
        //         let maxStringDesc = 300;
        //         let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        //         console.log(trimmedDataBlog);

        //         $('#blogviewBlogsBlock').append(`
        //     <div class="card cardStyle">
        //     <div class="row g-0">
        //     <div class="col-md-6">
        //         <img class="blogsImg"
        //             src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg"
        //             alt="...">
        //     </div>
        //     <div class="col-md-6">
        //         <div class="card-body">
        //             <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
        //             <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}</p>
        //             </p>
        //             <div class="card-footer footer">
        //                 <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
        //                         id="homePageBlogAuthor_id">${name}</span></p>
        //                 <a href="/blogsView/${recentBlogs[i].id}">
        //                     View Blog
        //                     <span>
        //                         <img src="/img/icons/link.png" alt="">
        //                     </span>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
        //     `)
        //     }
    } else {
        console.log(blog.message);
    }
});
window.addEventListener('load', function checkStatus(status) {
    console.log(status);
    return status;
})

