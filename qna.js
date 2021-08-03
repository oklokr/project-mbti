const questionArea = document.querySelector('.question-area');
const doneBtn = document.querySelector('.done-btn');
const farstNum = question.length / 2;
let nextState = true;
let mbtiArray = { e: 0, i: 0, s: 0, n: 0, t: 0, f: 0, j: 0, p: 0 };
let resultMbti = "";

// item click evnet wrap
function itemClickEvent(e) {
    const targetParent = e.target.parentNode;
    const parentChild = targetParent.childNodes;
    
    for (let i = 0; i < parentChild.length; i++) {
        parentChild[i].classList.remove('active')
        e.target.classList.add('active');
    }
}

// createElement and setting data wrap
function createEl(question, i) {
    // create elements
    const questionWrap = document.createElement('div');
    const questionNumber = document.createElement('div');
    const questionNumberText = document.createElement('p');
    const questionTitle = document.createElement('h3');
    const questionImge = document.createElement('img');
    const questionClickItemWrap = document.createElement('div');

    // question inner addClass
    questionWrap.classList.add('question-wrap');
    questionWrap.classList.add('card-box-'+i+'');
    questionNumber.classList.add('question-number');
    questionNumberText.classList.add("question-number-text");
    questionTitle.classList.add('question-title');
    questionImge.classList.add('question-img');
    questionClickItemWrap.classList.add('question-click-item-wrap');

    // question-wrap append
    questionWrap.append(questionNumber);
    questionWrap.append(questionTitle);
    questionWrap.append(questionImge);
    questionWrap.append(questionClickItemWrap);

    // question-number append
    questionNumber.append(questionNumberText);

    // question attribute setting
    questionNumberText.innerHTML = "Q" + (i + 1) + ".";
    questionTitle.innerHTML = question.q;
    questionImge.src = question.img

    for (let e = 0; e < question.a.length; e++) {
        const questionClickItem = document.createElement('button');
        const questionText = document.createElement('p');
        const clickState = document.createElement('div');

        questionClickItem.classList.add('question-click-item');
        questionText.classList.add('question-text');
        clickState.classList.add('click-state');

        questionClickItem.setAttribute('data-mbti', question.a[e].type);
        questionText.innerHTML = question.a[e].answer;

        questionClickItem.append(questionText);
        questionClickItem.append(clickState);

        questionClickItemWrap.append(questionClickItem);


        questionClickItem.addEventListener('click', (evnet) => {
            itemClickEvent(evnet);
            evnet.target.parentNode.parentNode.scrollIntoView({behavior: "smooth", block: "start"});
        })
    }

    return questionWrap;
}

// nextBtn click Evnet wrap
function nextClick() {
    const activeItemEl = document.querySelectorAll('.question-click-item.active');

    if (farstNum > activeItemEl.length) { return alert('모든 질문의 답변을 선택해주세요.'); }
    for (let i = 0; i < activeItemEl.length; i++) { mbtiArray[activeItemEl[i].getAttribute('data-mbti')]++; }
    
    document.querySelector('.top-area').scrollIntoView({behavior: "smooth", block: "start"});

    document.querySelector('.question-area').innerHTML = "";

    for (let i = farstNum; i < question.length; i++) { questionArea.append(createEl(question[i], i)); }

    setTimeout(() => {
        document.querySelector('.progress-inner').style.width = "100%";
        document.querySelector('.message-box').style.left = 90 + "%"
        document.querySelector('.next-btn').classList.remove('active');
        document.querySelector('.result-btn').classList.add('active');
    }, 700)
    
    nextState = false;
}

// resultBtn click evnet wrap
function resultEvnet() {
    const activeItemEl = document.querySelectorAll('.question-click-item.active');
    if (farstNum > activeItemEl.length) { return alert('모든 질문의 답변을 선택해주세요.'); }
    for (let i = 0; i < activeItemEl.length; i++) { mbtiArray[activeItemEl[i].getAttribute('data-mbti')]++; }
    
    if (mbtiArray.e > mbtiArray.i) { resultMbti += "e"; }
    else if (mbtiArray.e < mbtiArray.i) { resultMbti += "i"; }
    else { return console.log('mbti 객체 값 오류입니다.') }

    if (mbtiArray.s > mbtiArray.n) { resultMbti += "s"; }
    else if (mbtiArray.s < mbtiArray.n) { resultMbti += "n"; }
    else { return console.log('mbti 객체 값 오류입니다.') }

    if (mbtiArray.t > mbtiArray.f) { resultMbti += "t"; }
    else if (mbtiArray.t < mbtiArray.f) { resultMbti += "f"; }
    else { return console.log('mbti 객체 값 오류입니다.') }

    if (mbtiArray.j > mbtiArray.p) { resultMbti += "j"; }
    else if (mbtiArray.j < mbtiArray.p) { resultMbti += "p"; }
    else { return console.log('mbti 객체 값 오류입니다.') }

    location.href = "/mbti/resultPage/"+resultMbti+".html"
}

// dom creater
for (let i = 0; i < question.length / 2; i++) {
    questionArea.append(createEl(question[i], i));
}

// click evnet
doneBtn.addEventListener('click', () => {
    
    switch (nextState) {
        case true: nextClick(mbti); break;
        case false: resultEvnet(); break;
        default: console.log('오류'); break;
    }
})