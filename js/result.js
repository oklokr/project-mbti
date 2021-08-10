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

function createElements() {
    const resultMbtiSubTitle = document.querySelector('.result-mbti-sub-title');
    const resultBoxSubTitle = document.querySelector('.result-box-sub-title');
    const resultMbtiTitle = document.querySelector('.result-mbti-title');
    const resultBoxTitle = document.querySelector('.result-box-title');
    const resultBoxText = document.querySelector('.reulst-box-text');
    const resultMbtiImg = document.querySelector('.result-mbti-img');
    const goodText = document.querySelector('.good-text');
    const goodImg = document.querySelector('.good-img');
    const badText = document.querySelector('.bad-text');
    const badImg = document.querySelector('.bad-img')
    const viewTypeItemBox = document.querySelector('.view-type-item-box')

    resultMbtiTitle.innerHTML = userMbti;
    resultBoxTitle.innerHTML = userMbti;

    mbti.map(mbti => {
        const { name, title, text, imgeGif, good, bad } = mbti;

        if (name === userMbti) {
            resultMbtiSubTitle.innerHTML = title;
            resultBoxSubTitle.innerHTML = title;
            resultBoxText.innerText = text;
            resultMbtiImg.src = imgeGif;
            goodText.innerHTML = good
            goodImg.src = "/mbti/img/mbti-img/"+good+".gif"
            badText.innerHTML = bad
            badImg.src = "/mbti/img/mbti-img/"+bad+".gif"
        }
        
        const mbtisList = document.createElement("li");
        const mbtisLink = document.createElement('a');
        const mbtisImg = document.createElement('img');
        const mbtisText = document.createElement('p');

        mbtisLink.setAttribute('href', "" + name.toLowerCase() + ".html");
        mbtisText.innerText = name;
        mbtisImg.src = imgeGif;
        
        viewTypeItemBox.appendChild(mbtisList);
        mbtisList.appendChild(mbtisLink);
        mbtisLink.appendChild(mbtisImg);
        mbtisLink.appendChild(mbtisText)
    })
}

createElements();

viewBtn.addEventListener('click', viewAllTypeClickEvnet)