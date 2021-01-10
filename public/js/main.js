// $(document).ready(function () {
//     $(window).bind('scroll', function () {
//         var navHeight = $(window).height() - 600;
//         if ($(window).scrollTop() > navHeight) {
//             $('.component').css('margin-top', '20px');
//         }
//         else {
//             $('.component').css('margin', '0');
//         }
//     });
// });


var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    startAt: 0,
    gap: 20,
    autoplay: 4000 | true,
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
})

glide.mount();