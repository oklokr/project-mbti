const viewBtn = document.querySelector('.view-btn');


const viewAllTypeClickEvnet = (e) => {
    const domBody = document.querySelector('body');
    const viewWrap = document.querySelector('.view-wrap');

    domBody.classList.add('noneScroll');
    viewWrap.classList.add('active');

    viewWrap.addEventListener('click', (e) => {
        const tgEl = e.target;
        const tgBox = tgEl.closest('.view-all-type-box');

        if (!tgBox || tgEl.id == "close-btn") {
            domBody.classList.remove('noneScroll');
            viewWrap.classList.remove('active');
            console.log('닫음');
        }

        e.stopImmediatePropagation();
    })

}

viewBtn.addEventListener('click', viewAllTypeClickEvnet)