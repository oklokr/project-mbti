// MBTI 유형 별 설정 : 타이틀(제목), 텍스트(문구), 이미지(고정 이미지), gif이미지(움직이는 이미지)
// 이미지 경로 수정시 주의사항 : mbti(폴더이름) => mbti/img/이미지or폴더명
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
    {
        name: 'ISFJ' ,
        title: '갈치말치 고민이야',
        text: '남들은 시원하게 먹는 냉면을 본인은 혼자 골머리를 앓아서 결국은 혼자 쓴맛을 보게 되는 스타일이에요. 남들을 필요이상으로 배려하고 노력하는 모습에 많은 사람들이 따르지만 정작 자기자신은 힘들어하는 스타일이에요. 한번 시작하면 끝을 봐야하는 성격이고, 그게 아니라면 시작할 생각을 하지않아요. 남들을 생각하는 예쁜 마음을 나를 아끼는 데에도 써보는게 어떨까요?',
        imge: '/mbti/img/mbti-img/ISFJ.gif',
        imgeGif: '/mbti/img/mbti-img/ISFJ.gif',
        good: 'ESTJ',
        bad: 'ENTP',
        special: '8'
    },
    {
        name: 'INFJ' ,
        title: '뱀장어 몸으로 하트만드는거',
        text: '삶의 의미가 무엇인지에 대해서 진지하게 생각하고 혼자만의 시간을 아주 소중하게 생각해요. 생각이 많을 때는 혼자 조용하고 평화롭게 고민하는 것을 선호하고, 시간이 남으면 혼자 집에서 자기만의 시간을 즐기는 것을 좋아하는 어쩌면 재미없는 스타일이라고 할 수도 있겠네요. 통찰력이 좋아서 주변사람들에게 큰 영향력이 되고, 무엇이든 장기적으로 생각하고 노력하는 모습으로 멋있고 진중한 스타일입니다.',
        imge: '/mbti/img/mbti-img/INFJ.gif',
        imgeGif: '/mbti/img/mbti-img/INFJ.gif',
        good: 'ESTJ',
        bad: 'ESTP',
        special: '4'
    },
    {
        name: 'INTJ',
        title: '사회성이 부족한 꼰대형',
        text: '독창적이고, 자신이 결심한 일은실현시킬 수 있는 능력자여서 정말 스스로 만드는 든든한 한끼가 어울리는 사람입니다. 자기자신을 믿고 일을 수행해나가는 모습이 너무나 멋있는 사람이네요. 꽂히면 해야만 하는 성격에 그 분야의 전문가가 될 수 있습니다. 실행력도 좋지만 자신이한 일에 반성도 할 줄 알아서 큰 어려움은 없습니다. 하지만 다른 사람과 어울리는 일에도 흥미를 가져보는 건 어떨까요?',
        imge: '/mbti/img/mbti-img/INTJ.gif',
        imgeGif: '/mbti/img/mbti-img/INTJ.gif',
        good: 'ESFJ',
        bad: 'ESFP',
        special: '6'
    },
    {
        name: 'ISTP' ,
        title: '입으로 일하는 똑똑이형',
        text: '세상 모든 일이 귀찮고, 직접 해먹는 것은 더욱 귀찮지만 틀에 박힌 생활은 싫어하는 신기한 스타일. 항상 도전하는 모습이 멋있고 모험을 즐기지만 막상 움직이지는 않아요. 귀찮다고 생각해서 하지않은 일들이 수두룩하지만 머리가 좋아서 마음만 먹으면 얼마든지 잘해나갈 수 있어요. 귀찮다고만 생각하지 말고 조금 더 적극 적으로 실천하려고 노력해보는 것은 어떨까요?',
        imge: '/mbti/img/mbti-img/ISTP.gif',
        imgeGif: '/mbti/img/mbti-img/ISTP.gif',
        good: 'ENFP',
        bad: 'ENFJ',
        special: '4'
    },
    {
        name: 'ISFP' ,
        title: '따듯하지만 귀차니즘 가득형',
        text: '남한테 간섭 받는 것을 몹시 싫어하고, 누군가와 함께 하는 것 만으로도 힘들어해요. 침대 하나만 있어도 혼자 재미있게 놀 수 있고, 태생적으로 낙천적이어서 미룰 수 있을 때까지 최선을 다해 미뤄요. 생각하고 계획은 많이 해도 행동력은 0%라 이런 성격이 많은 걸림돌이 될거에요. 미래보다 현재를 위해 실천해보는 것은 어떤가요?',
        imge: '/mbti/img/mbti-img/ISFP.gif',
        imgeGif: '/mbti/img/mbti-img/ISFP.gif',
        good: 'ENTP',
        bad: 'ENTJ',
        special: ''
    },
    {
        name: 'INFP' ,
        title: '따듯한 세상을 만들어가는 완벽주의자',
        text: '당신은 주변사람들에게 공감을 잘해주고, 마음도 따뜻하고 생각이 바라서 남들에게 상처 주는 말을 하지않으려고 노력해요. 항상 배려하고 노력하는 마음이 예뻐서 차분하고 큰 탈이 없지만, 게으른 완벽주의자 성격에시작조차 하지않아서 일이 진행되기 힘듭니다. 서툴더라도 실행에 옮기는 습관을 가진다면 오늘보다 내일이 더밝을 거에요.',
        imge: '/mbti/img/mbti-img/INFP.gif',
        imgeGif: '/mbti/img/mbti-img/INFP.gif',
        good: 'ESTP',
        bad: 'ESTJ',
        special: '4'
    },
    {
        name: 'INTP' ,
        title: '혼자서도 잘 하는 팩폭인간형',
        text: '당신은 혼자 하는 일에 굉장히 행복감을 느낍니다. 혼자 무언가를 먹을 때도 외로움보다는 혼자 많은 것을 먹을 수 있음에 행복감을 느끼는 스타일이지요. 무엇이든 이론이 빠삭하지만 그것을 행동으로 옮기는 데에 아주 오랜 시간이 걸려요. 당신이 가진 생각을 직접 실천만 하면 목표를 달성할 수 있으니 지금 당장 실천해보세요!',
        imge: '/mbti/img/mbti-img/INTP.gif',
        imgeGif: '/mbti/img/mbti-img/INTP.gif',
        good: 'ESFP',
        bad: 'ESFJ',
        special: '4'
    },
    {
        name: 'ESTP' ,
        title: '어쩌다보니 성공한 활동가',
        text: '어쩌다 보니 성공하고, 살아가다 보니 되는 긍정의 아이콘입니다. 그냥 나는 살아가는 대로 나름 즐기며 살고 있는데 남들은 나를 되게 부러워하고멋있다고 생각해요. 인생을 즐기는 것을 너무 의미를 둔 나머지 다른 걸 놓치고 있지는않은지 잘 생각해 보아야해요!',
        imge: '/mbti/img/mbti-img/ESTP.gif',
        imgeGif: '/mbti/img/mbti-img/ESTP.gif',
        good: 'INFP',
        bad: 'INFJ',
        special: '4'
    },
    {
        name: 'ESFP' ,
        title: '요기조기 잘갖다 붙이네',
        text: '어느 파티나 바비큐는 파티의 하이라이트이기 마련이죠. 이처럼 당신도 바비큐같이 사람들 사이에서 핵심적인 인물입니다. 파티를 한다면 그 파티를 만든 사람이 되고, 사람들은 당신이 이런 자리를 만든 것에 대해 무척이나 고마워합니다. 인싸력과 함께 배려심도 넘치지만, 그런 당신은 그런 성향에 따라 공부 모임이 자연스럽게 술 모임이 되고있지는 않은지 조심해야겠네요.',
        imge: '/mbti/img/mbti-img/ESFP.gif',
        imgeGif: '/mbti/img/mbti-img/ESFP.gif',
        good: 'INTP',
        bad: 'INTJ',
        special: '5'
    },
    {
        name: 'ENFP' ,
        title: '음주가무를 즐기는 최고 인싸형',
        text: '당신의 엉뚱함이 다른 사람들에게 충격을 안겨 주기도 하지만, 대게는 그런 당신의 성격에 매력을 느끼게 돼요! 뭔가를 마음먹으면 어느 날 갑자기 마음먹고 일을 진행하는 일이 많으며, 끈기만 있다며 꾸준히 성장하는 나를 볼 수 있을 거예요',
        imge: '/mbti/img/mbti-img/ENFP.gif',
        imgeGif: '/mbti/img/mbti-img/ENFP.gif',
        good: 'INTP',
        bad: 'ISTJ',
        special: '8'
    },
    {
        name: 'ENTP' ,
        title: '못하는게 없는 멋진 선배형',
        text: '창의력이 풍부하고 새로운 일을 시도하는 것에 대해 무서워 하지 않아요. 마음만 먹으면 못하는게 없는 당신은 어떻게 말하면 능력자라고도 부를 수 있겠네요. 자신이 생각해낸 것을 현실화 시킬 수 있는 능력이 있고, 자신이 하고자 하는 일을 뚝심 있게 계속한다면 성취할 수 없는게 없을 거예요!',
        imge: '/mbti/img/mbti-img/ENTP.gif',
        imgeGif: '/mbti/img/mbti-img/ENTP.gif',
        good: 'ISFP',
        bad: 'ISFJ',
        special: '5'
    },
    {
        name: 'ESTJ' ,
        title: '말로 뼈 때리는 학년주임형',
        text: '매사에 철두철미하고, 계획적인 스타일이에요. 책임감이 강해서 친구들이 잘 따르고 논리적이고 분석적이어서 가끔은 친구들에게 상처 되는 말을 하기도 해요. 철저한 계획을 잘 세우고 계획에 잘 따라서 주변에서 걱정을 하지않고, 실행력도 강해서 하는 일이 성공할 확률이 크지만,주변 사람들한테까지도 뼈 때리는 말은조심하는게 어떨까요?',
        imge: '/mbti/img/mbti-img/ESTJ.gif',
        imgeGif: '/mbti/img/mbti-img/ESTJ.gif',
        good: 'INFJ',
        bad: 'INFP',
        special: '12'
    },
    {
        name: 'ESFJ' ,
        title: '노는게 제일 좋은 인간 뽀로로형',
        text: '노는게 세상에서 제일 좋은 당신. 친구들은 물론 친구의 친구까지 모아서 날이면 날마다 파티를 합니다. 당신을 처음 본 사람 조차 당신의 인싸력에 놀라며 좋아해요! 이런 성격에 비해 철두철미한자기관리하는 모습 또한 소유하고있는 계획적이 사람입니다.하지만 귀가 얇아서 눈이 돌아가는 일이 많지만 본질에 충실하게 자신의 일을 하게 된다면 좋은 성과가 있을 거에요.',
        imge: '/mbti/img/mbti-img/ESFJ.gif',
        imgeGif: '/mbti/img/mbti-img/ESFJ.gif',
        good: 'INTJ',
        bad: 'INTP',
        special: '8'
    },
    {
        name: 'ENFJ' ,
        title: '다정한 긍정의 아이콘형',
        text: '사람을 좋아하고 헌신적이며, 누구보다 마음이 따뜻해 많은 사람들이 당신을 좋아해요 또한, 많은 사람들에게 따뜻한 인상을 주고, 책임감 있고, 열정적인 성격입니다. 탈없고 긍정적이어서 성격이 좋지만, 거절을 못해서 계획이 틀어지는 일도 꽤나 많아요. 행동력을 잘 발휘한다면 원하는 목표에 한 발 더 가까워 질 수 있을 거에요!',
        imge: '/mbti/img/mbti-img/ENFJ.gif',
        imgeGif: '/mbti/img/mbti-img/ENFJ.gif',
        good: 'ISTJ',
        bad: 'ISTP',
        special: '5'
    },
    {
        name: 'ENTJ' ,
        title: '결단력이 있는 넘사벽 모범생형',
        text: '통송력이있고, 효율성 있는 성격으로리더로써 적합한 사람이에요. 사람들은 그런 당신을 멋있고 결단력이 있어서 사람들이 당신을부러워하는 경우가 많아요. 자신을  잘 컨트롤해서 멋있어 보이지만 한편으로 다가가기 조금 어려워 보일 수도 있어요. 당신의 통솔력을 조금 더 배려 있고 따뜻하게 해보는 것은 어떨까요?',
        imge: '/mbti/img/mbti-img/ENTJ.gif',
        imgeGif: '/mbti/img/mbti-img/ENTJ.gif',
        good: 'ISFJ',
        bad: 'ISFP',
        special: '6'
    },
]

// Q&A 질문지 : q: 질문, answer: 선택 문구, type: 답변한 mbti유형
// 이미지 수정 시 img 수정 주의사항은 상단의 주석 확인바람
const question = [
    {
        q: "시장에서 밥 먹기로 약속한 날!<br> 도착 후 시계를 보니!?",
        img: "/mbti/img/qusetion-img/01.png",
        a: [
            {answer: "늦는건 못참아!<br>난 언제나 10분전 도착.", type:"j"},
            {answer: "약속시간 10분 경과<br>\"응 거의 다왔어\"", type:"p"},
        ]
    },
    {
        q: "수산시장 도착 후,<br>나의 장보기 습관은?",
        img: "/mbti/img/qusetion-img/02.png",
        a: [
            {answer: "고등어, 자반, 바지락<br>계획한 대로만 장보기.", type:"j"},
            {answer: "뭐가 맛있을까?<br>사고 싶은건<br>시장가서 결정.", type:"p"},
        ]
    },
    {
        q: "시장 상인이 생선을 추천한다.<br>그 때의 나는?",
        img: "/mbti/img/qusetion-img/03.png",
        a: [
            {answer: "원산지와 상태를,<br>꼼꼼히 확인한다!", type:"e"},
            {answer: "사장님이 좋은거라면<br>좋은 거겠지?", type:"i"},
        ]
    },
    {
        q: "회  식당에 들어가서 펼친 메뉴판.<br>그 때의 나는?",
        img: "/mbti/img/qusetion-img/04.png",
        a: [
            {answer: "가격이랑 원산지부터<br>확인한다.", type:"j"},
            {answer: "사장님~<br>오늘 제일 좋은게<br>뭐에요?", type:"p"},
        ]
    },
    {
        q: "“어떤 회 좋아해?”<br>친구가 나에게 묻는다.",
        img: "/mbti/img/qusetion-img/05.png",
        a: [
            {answer: "회? 없어서 못먹지~<br>나는 뭐든지 \"O.K\"", type:"i"},
            {answer: "광어 자연산인가?<br>내게 아무거나는 없다!", type:"e"},
        ]
    },
    {
        q: "너무 배부른데, 매운탕이 나왔다...<br> 공기밥 더드려요?",
        img: "/mbti/img/qusetion-img/06.png",
        a: [
            {answer: "더 먹으면 안돼!<br>생선살만 발라먹자.", type:"s"},
            {answer: "배가 찢어져도<br>매운탕엔 공기밥이지", type:"n"},
        ]
    },
    {
        q: "회를 먹던 중 원산지 표시가<br>맞지 않는것 같다. 그때의 나는?",
        img: "/mbti/img/qusetion-img/07.png",
        a: [
            {answer: "원산지는 확실하게!<br>정중하게 여쭤본다.", type:"s"},
            {answer: "맞겠지..맞을거야...<br>뭘 물어보기까지", type:"n"},
        ]
    },
    {
        q: "수산시장에서<br>원산지를 대하는 나는?",
        img: "/mbti/img/qusetion-img/08.png",
        a: [
            {answer: "다른 건 몰라도 수산물<br> 원산지는 나부터<br> 꼼꼼히 확인!", type:"i"},
            {answer: "수산물 원산지?<br>그냥 다 바다 아니야?<br>그게 그거겠지", type:"e"},
        ]
    },
    {
        q: "내가 데려온 횟집에<br>내가 바라는 친구 반응은?",
        img: "/mbti/img/qusetion-img/09.png",
        a: [
            {answer: "역시!<br> 너가 데려오는 집은<br> 진짜 제대로야!", type:"t"},
            {answer: "맛있는 집은<br> 너가 데려왔으니<br> 오늘은 내가 쏜다!", type:"f"},
        ]
    },
    {
        q: "주문한 회와 음식들이 나왔다,<br>어디서부터 공략할까?!",
        img: "/mbti/img/qusetion-img/10.png",
        a: [
            {answer: "맛있는 건 다양하게!<br>골고루 잘 먹는다.", type:"n"},
            {answer: "몇점 없는 진짜배기!<br>회부터 공략", type:"s"},
        ]
    },
    {
        q: "식사 후, 친구가 체했다.<br> 그 때의 나는?",
        img: "/mbti/img/qusetion-img/11.png",
        a: [
            {answer: "문제점을 찾고,<br>적절한 도움을 준다.", type:"t"},
            {answer: "많이 먹어서 그런가?<br>괜찮아?위로해준다.", type:"f"},
        ]
    },
    {
        q: "약속 후, 회사에서 급한 일이<br>생겨버렸다.. 나의 선택은?",
        img: "/mbti/img/qusetion-img/12.png",
        a: [
            {answer: "맛있게 먹었으니,<br>후딱 일하고 쉬자!", type:"f"},
            {answer: "내일 일은 내일로!<br>집으로 향한다.", type:"t"},
        ]
    }
]