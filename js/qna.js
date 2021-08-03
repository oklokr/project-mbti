const questionArea = document.querySelector('.question-area');          // 질문지 question-area element 저장 변수
const doneBtn = document.querySelector('.done-btn');                    // 맨 하단 다음페이지 버튼 element 저장 변수
const farstNum = question.length / 2;                                   // 전체 질문수 / 2 저장 변수
let nextState = true;                                                   // 다음 페이지 값 true 저장 변수
let mbtiArray = { e: 0, i: 0, s: 0, n: 0, t: 0, f: 0, j: 0, p: 0 };     // 유형별 초기값 저장 변수
let resultMbti = "";                                                    // 최종값 저장 변수

// 질문 클릭 시 함수
function itemClickEvent(e) {
    const targetParent = e.target.parentNode;       // 클릭 element 부모 저장 변수
    const parentChild = targetParent.childNodes;    // 클릭 element 부모 자식들 저장 변수
    
    for (let i = 0; i < parentChild.length; i++) {
        parentChild[i].classList.remove('active')
        e.target.classList.add('active');
    }
}

// element 생성 || 값 세팅 함수
function createEl(question, i) {
    const setCreateFc = (element, addClass, setText, setSrc) => {
        const el = document.createElement(element);
        el.classList.add(addClass);
        el.innerHTML = setText;
        el.src = setSrc;
        return el
    }

    const questionWrap = setCreateFc('div', 'question-wrap', null, null);                          // 질문 박스 element 생성 || 클레스 선언 저장 변수
    const questionNumber = setCreateFc('div', 'question-number', null, null);                      // 질문 번호 wrap element 생성 || 클레스 선언 저장 변수
    const questionNumberText = setCreateFc('p', 'question-number-text', "Q" + (i + 1) + ".");      // 질문 번호 element 생성 || 클레스 || 텍스트 선언 저장 변수
    const questionTitle = setCreateFc('h3', 'question-title', question.q, null);                   // 질문 element 생성 || 클레스 || 텍스트 선언 저장 변수
    const questionImge = setCreateFc('img', 'question-img', null, question.img);                   // 이미지 element 생성 || 클레스 || 이미지 링크 선언 저장 변수
    const questionClickItemWrap = setCreateFc('div', 'question-click-item-wrap', null, null);      // 선택 지 wrap element 생성 || 클레스 선언 저장 변수

    // 질문 박스 element 안에 변수들 선언
    // const contents = questionNumber, questionTitle, questionImge, questionClickItemWrap;
    // questionWrap.append({})
    questionWrap.append(questionNumber);
    questionWrap.append(questionTitle);
    questionWrap.append(questionImge);
    questionWrap.append(questionClickItemWrap);

    // 질문 번호 wrap 안에 번호 element 변수 선언
    questionNumber.append(questionNumberText);

    for (let e = 0; e < question.a.length; e++) {
        const questionClickItem = setCreateFc('button', 'question-click-item', null, null);     // 선택지 element 생성 || 클레스 선언 저장 변수
        const questionText = setCreateFc('p', 'question-text', question.a[e].answer, null);     // 선택지 text 생성 || 클레스 || 텍스트 선언 저장 변수
        const clickState = setCreateFc('div', 'click-state', null, null);                       // 체크 이미지 박스 element 생성 || 클레스 선언 저장 변수

        questionClickItem.setAttribute('data-mbti', question.a[e].type);

        // 선택지 wrap element 안에 변수들 선언
        questionClickItem.append(questionText);
        questionClickItem.append(clickState);

        // 질문 박스 element 안에 변수 선언
        questionClickItemWrap.append(questionClickItem);

        // 선택지 text element 클릭 이벤트
        questionClickItem.addEventListener('click', evnet => {
            itemClickEvent(evnet);
            evnet.target.parentNode.parentNode.scrollIntoView({ behavior: "smooth", block: "start" });
        })
    }

    return questionWrap;
}

// 다음페이지 클릭 시 호출 함수
function nextResultFc() {
    const activeItemEl = document.querySelectorAll('.question-click-item.active');
    if (farstNum > activeItemEl.length) { return alert('모든 질문의 답변을 선택해주세요.'); }
    for (let i = 0; i < activeItemEl.length; i++) { mbtiArray[activeItemEl[i].getAttribute('data-mbti')]++; }
    
    // 다음 페이지 값 유효성 검사
    switch (nextState) {
        case true:
            document.querySelector('.top-area').scrollIntoView({ behavior: "smooth", block: "start" });
            questionArea.innerHTML = "";
            for (let i = farstNum; i < question.length; i++) { questionArea.append(createEl(question[i], i)); }
            setTimeout(() => {
                document.querySelector('.progress-inner').style.width = "100%";
                document.querySelector('.message-box').style.left = 90 + "%"
                document.querySelector('.next-btn').classList.remove('active');
                document.querySelector('.result-btn').classList.add('active');
            }, 700)
            nextState = false;
            break
        case false:
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
            break
        default: break
    }
}

// 총 질문수 / 2 만큼 element 생성
for (let i = 0; i < question.length / 2; i++) {
    questionArea.append(createEl(question[i], i));
}

// 다음페이지, 결과 확인하기 클릭 이벤트
doneBtn.addEventListener('click', nextResultFc);