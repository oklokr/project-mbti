수품원 MBTI 사용서
================

# 1. 문구 수정 및 이미지 수정
경로는 js 폴더 안에 data.js 입니다.

## 1-1. MBTI유형 문구 수정
```
const mbti = [
    {
        name: 'ISTJ',
        title: '널 넙치할거야',
        text: '새로운 것보다 익숙한 것을 좋아하고 그런 익숙한 상황에 안정감을 찾아가요. 어쩌면 지루하고 평범한 것을 최고로 좋아하는 사람이지요. 끈기가 있기때문에 하고자 하는 일에 끝까지 열심히 도전을 하고, 변화를 좋아하는 않지만자기가 살아온 방식에서 벗어나지 않는 선에서 최선을 다해 노력해 나갑니다.',
        imge: '/mbti/img/mbti-img/ISTJ.gif',
        imgeGif: '/mbti/img/mbti-img/ISTJ.gif',
        good: 'INFP',
        bad: 'INFJ',
        special: '12'
    },
    ...
]


const mbti = [
    {
        name: 'MBTI 유형',
        title: 'MBTI 타이틀 문구',
        text: 'MBTI 설명 문구',
        imge: '이미지 경로',
        imgeGif: 'gif 이미지 경로',
        good: '해당 MBTI유형의 잘맞는 MBTI유형',
        bad: '해당 MBTI유형의 안맞는 MBTI유형',
        special: '희소성 %'
    },
    ...
]
```
위에 맞게 넣어주시면 됩니다.

## 1-2. 질문과 답변 문구 수정
```
const question = [
    {
        q: "시장에서 밥 먹기로 약속한 날!<br> 도착 후 시계를 보니!?",
        img: "/mbti/img/qusetion-img/01.png",
        a: [
            {answer: "늦는건 못참아!<br>난 언제나 10분전 도착.", type:"j"},
            {answer: "약속시간 10분 경과<br>\"응 거의 다왔어\"", type:"p"},
        ]
    },
    ...
]


const question = [
    {
        q: "질문",
        img: "질문 이미지",
        a: [
            {answer: "답변", type:"답변의 MBTI 타입"},
            {answer: "답변", type:"답변의 MBTI 타입"},
        ]
    },
    ...
]
```
위에 맞게 넣어주시면 됩니다.

## 1-3. 이미지 수정
바꾸고자 하는 이미지 네이밍은 기존 이미지와 동일하게 설정해야 합니다.

# 2. 수정 업로드
* 수정한 파일을 업로드하려면 FTP 접속을 해야합니다. 예) fileZilla
* FTP https://www.cumediagroup.co.kr/ 주소로 접속합니다.
* 해당 경로 내부에 www 안에 mbti파일에 넣어주시면 됩니다.
