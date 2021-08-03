function imgeClickEvent(e) {
    const domBody = document.querySelector('body');                                                 // DOM body 저장 변수
    const actionBox = document.querySelector('.action-box-wrap');                                   // 클릭 팝업창 element 저장 변수
    const clickBoxImge = document.querySelector('.action-imge');                                    // 클릭 팝업창 이미지 element 저장 변수
    const clickBoxTitle = document.querySelector('.action-title');                                  // 클릭 팝업창 title element 저장 변수
    const clickBoxSubTitle = document.querySelector('.action-text');                                // 클릭 팝업창 sub-title element 저장 변수
    const clickBoxText = document.querySelector('.action-details-text');                            // 클릭 팝업창 텍스트영역 element 저장 변수
    const arraySerch = mbti.findIndex(obj => obj.name === e.target.getAttribute('data-mbti'));      // 클릭 아이템 index 저장 변수
    
    clickBoxImge.src = mbti[arraySerch].imgeGif;
    clickBoxTitle.innerHTML = mbti[arraySerch].name;
    clickBoxSubTitle.innerHTML = mbti[arraySerch].title;
    clickBoxText.innerHTML = mbti[arraySerch].text;

    domBody.classList.add('noneScroll');
    actionBox.classList.add('active');

    actionBox.addEventListener('click', (e) => {

        const tgEl = e.target;
        const tgBox = tgEl.closest('.action-box-inner');

        if (!tgBox || tgEl.id == "action-box-close-btn") {
            domBody.classList.remove('noneScroll');
            actionBox.classList.remove('active');
            console.log('닫음');
        }

        e.stopImmediatePropagation();
    })
}

const dataCreateElements = (mbti) => {
    const swiperWrapper = document.querySelector('.swiper-wrapper')

    // createElements
    const cardBox = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubTitle = document.createElement('p');
    const cardImgeBtn = document.createElement('button');
    const cardImge = document.createElement('img');

    // element addClass
    cardBox.classList.add('swiper-slide');
    cardTitle.classList.add('mbti-title');
    cardSubTitle.classList.add('mbti-subTitle');
    cardImgeBtn.classList.add('mbti-imge-btn');
    cardImge.classList.add('mbti-imge');

    // element attribute
    cardTitle.innerHTML = mbti.name;
    cardSubTitle.innerHTML = mbti.title;
    cardImge.src = mbti.imge;
    cardImge.setAttribute("data-mbti", mbti.name);

    // element appends
    cardImgeBtn.appendChild(cardImge)

    cardBox.appendChild(cardTitle);
    cardBox.appendChild(cardSubTitle);
    cardBox.appendChild(cardImgeBtn);

    swiperWrapper.appendChild(cardBox);
    
    cardImgeBtn.addEventListener('click', imgeClickEvent);
}

for (let i = 0; i < mbti.length; i++) { dataCreateElements(mbti[i]); }