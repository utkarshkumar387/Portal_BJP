let link = window.location.href.split('/');
let contentBlogs = getRequest.content('blogs');
let blogs = contentBlogs.message.blogs;
// console.log(contentBlogs);
if (contentBlogs.error == false) {
    for (let i = 0; i < blogs.length; i++) {
        let blogDate = dateConverter(blogs[i].date);
        let title = blogs[i].title;
        let description = blogs[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        // console.log(blogs[i].status);
        let blogImage;
        if (blogs[i].images.length > 0) {
            for (let j = 0; j < blogs[i].images.length; j++) {
                // console.log(blogs[i].images[j].image);
                blogImage = `${blogs[i].images[j].image}`;
            }
        } else {
            blogImage = `https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg`;
        }
        $('#allBlogsBlock').append(`
            <div class="card card_dark cardStyle" id="blogID_${blogs[i].id}">
        <div class="row g-0">
        <div class="col-md-6 col-sm-12">
            <img class="blogsImg"
                src="${blogImage}"
                alt="Blog Image">
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="card-body">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}...</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${blogs[i].user.first_name} ${blogs[i].user.last_name}</span></p>
                    <a href="/blogsView/${blogs[i].id}/${blogs[i].status}">
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
    console.log(contentBlogs.message);
}

//modifying view in mobile view
window.onload = contentMobileView();