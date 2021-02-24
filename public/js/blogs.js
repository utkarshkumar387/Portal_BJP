let link = window.location.href.split('/');
$(document).ready(function () {
    let contentBlogs = fetchContent('blogs');
    let blogs = contentBlogs.message.blogs;
    console.log(blogs.length);
    if (contentBlogs.error == false) {
        for (let i = 0; i < blogs.length; i++) {
            let blogDate = dateConverter(blogs[i].date);
            let title = blogs[i].title;
            let description = blogs[i].description;
            let maxStringTitle = 20;
            let maxStringDesc = 300;
            let trimmedDataBlog = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
            console.log(blogs[i].status);
            $('#allBlogsBlock').append(`
            <div class="card cardStyle" id="blogID_${blogs[i].id}">
        <div class="row g-0">
        <div class="col-md-6">
            <img class="blogsImg"
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg"
                alt="...">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}...</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${blogs[i].user_id.first_name} ${blogs[i].user_id.last_name}</span></p>
                    <a href="/blogsView/${blogs[i].id}/${blogs[i].status}">
                        View Blog
                        <span>
                            <img src="img/icons/link.png" alt="">
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
});