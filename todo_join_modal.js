const term = {
    state: "fail",
    joinError: "약관을 읽고 동의해주세요.",
    message: `
        정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
        <br><br>
        
        <strong>1. 수집하는 개인정보의 항목</strong><br>
        최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.<br>
        - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사<br><br>
        
        <strong>2. 개인정보의 수집 및 이용 목적</strong><br>
        가. 컨텐츠 제공, 특정 맞춤 서비스 제공<br>
        나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재
        <br><br>

        <strong>3. 개인정보의 보유 및 이용기간</strong><br>
        이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
        <br><br>
        가. 회사 내부 방침에 의한 정보보유 사유<br>
        - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)<br>
        보존 항목 : 가입인증 휴대폰 번호<br>
        보존 이유 : 부정 가입 및 이용 방지<br>
        보존 기간 : 6개월<br>
        ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.
        <br><br>
        나. 관련법령에 의한 정보보유 사유<br>
        상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. 
        <br><br>
        - 계약 또는 청약철회 등에 관한 기록<br>
        보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
        보존 기간 : 5년
        <br><br>
        - 소비자의 불만 또는 분쟁처리에 관한 기록<br>
        보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
        보존 기간 : 3년
        <br><br>
        - 웹사이트 방문기록<br>
        보존 이유 : 통신비밀보호법<br>
        보존 기간 : 3개월<br>
    `,

    init: function(){
        this.fillTerm()
        this.addOpenEvent()
        this.addCloseEvent()
        this.addScrollEvent()
    },

    fillTerm: function(){
        document.querySelector("#modal__term").innerHTML = this.message
    },
    addOpenEvent: function(){
        document.querySelector("span.join-title").addEventListener("click", () => {
            document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal")
        })
    },
    addCloseEvent: function(){
        //어떻게 해야 바깥을 클릭했을 때 꺼지게 하지?
        // document.querySelector(".modal").addEventListener("click", (clickEvent) => {
        //     console.log(clickEvent.target)
        //     if(clickEvent.target != document.querySelector(".modal__content")){
        //         console.log(clickEvent)
        //         document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
        //     }
        // })
        
        document.querySelector(".modal-row a").addEventListener("click", () => {
            document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
        })
    },
    addScrollEvent: function(){
        document.querySelector("#modal__term").addEventListener("scroll", () => {
            let scrollDiv = document.querySelector("#modal__term")
            let userScroll = scrollDiv.offsetHeight + scrollDiv.scrollTop + 1
            let clearScroll = scrollDiv.scrollHeight;
            if (userScroll >= clearScroll){
                //스크롤을 끝까지 한 후, 체크버튼을 클릭하면
                let checkButton = document.querySelector(".term-button")
                checkButton.addEventListener("click", () => {
                    //약관창이 닫힌다
                    document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
                    
                    //체크박스가 체크된다.
                    let checkBox = document.querySelector("#term-box__checkbox")
                    checkBox.setAttribute("checked", "")

                    //state를 pass로 만든다.
                    term.state = "pass"
                })
            }
        })
    }
}

term.init()