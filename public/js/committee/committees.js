let link = ['', '', '', ''];
let committees = getRequest.committee('committee_list');
if (committees.error == false) {
    let committee = committees.message.committees;
    for (let i = 0; i < committee.length; i++) {
        let title = committee[i].title;
        let description = committee[i].description;
        let maxStringTitle = 20;
        let maxStringDesc = 300;
        let trimmedDataCommittee = titleDescTrimmer(title, description, maxStringTitle, maxStringDesc);
        // console.log(trimmedDataCommittee.trimStringTitle, trimmedDataCommittee.trimStringDesc);
        // https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg
        $('#committeeBlock').append(`
        <div class="col-md-6 committee__card mb-4 px-3">
            <div class="card card_dark cardStyle committee__poster">
                <img src="${committee[i].image == null ? 'https://images.livemint.com/img/2020/01/19/600x338/20190726221L_1564151885181_1579462418514.jpg' : main_url.substr(0, main_url.length - 1) + committee[i].image}"
                class="card-img-top" alt="...">
                <div class="card-body committee__body">
                    <h3>${trimmedDataCommittee.trimStringTitle}</h3>
                    <p class="card-text">${trimmedDataCommittee.trimStringDesc}</p>
                </div>
                <div class="card-footer footer mb-2">
                    <a href="/committeeClicked/${committee[i].id}">
                        View Committee
                        <span>
                            <img src="img/icons/link.png" alt="">
                        </span>
                    </a>
                </div>
            </div>
        </div>
        `)

    }
}
{/* <a class="committee__edit" href="#">Edit Committee</a> */ }
//modifying view in mobile view
window.onload = contentMobileView();