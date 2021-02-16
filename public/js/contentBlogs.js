$(document).ready(function () {
    let contentBlogs = fetchContent('blogs');
    // let contentBlogsRejected = fetchContent('blogs/rejected')
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

            $('#allBlogsBlock').append(`
            <div class="card cardStyle">
        <div class="row g-0">
        <div class="col-md-6">
            <img class="blogsImg"
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201708/bjpup-insta_083117051140.jpg"
                alt="...">
        </div>
        <div class="col-md-6">
            <div class="card-body">
                <h5 class="card-title headerMain">${trimmedDataBlog.trimStringTitle}${trimmedDataBlog.extend}</h5>
                <p class="card-text blogText">${trimmedDataBlog.trimStringDesc}...</p>
                </p>
                <div class="card-footer footer">
                    <p id="homePageBlogDate_id">${blogDate[0]} ${blogDate[1]} ${blogDate[2]} <i class="fa fa-circle" aria-hidden="true"></i><span
                            id="homePageBlogAuthor_id">${blogs.user_id}</span></p>
                    <a href="/blogsView">
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

    function dateConverter(date) {
        let blogDate = date.split("-");
        let date_month = blogDate[1];
        let date_day = blogDate[2];
        let dayElement = date_day.split(":");
        let day = dayElement[0].slice(3);
        let year = blogDate[0];
        let date_list = [];
        let date_string = date_month.toString();
        for (var j = 0, len = date_string.length; j < len; j += 1) {
            date_list.push(date_string.charAt(j));
        }
        if (date_list[0] == "0") {
            date_month = date_list[1];
        } else {
            date_month = date[1];
        }
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month_name = month[date_month - 1];
        let blogDateDis = [day, month_name, year];
        return (blogDateDis);
    }

    //trimming of title and description
    function titleDescTrimmer(title, description, maxStringTitle, maxStringDesc) {
        let trimStringTitle;
        let trimStringDesc;
        let extend;
        if (title.length > maxStringTitle) {
            trimStringTitle = title.substr(0, maxStringTitle);
            extend = '...'
        } else {
            trimStringTitle = title;
            extend = '';
        }

        if (description.length > maxStringDesc) {
            trimStringDesc = description.substr(0, maxStringDesc);
        }

        return {
            "trimStringTitle": trimStringTitle,
            "trimStringDesc": trimStringDesc,
            "extend": extend
        };
    }
});