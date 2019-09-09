const is_util = {
    isEmpty(input) {
        return (input === undefined || input === null || input.length === 0);
    }
}

const async_util = {
    submitAfter0Seconds(formNode){
        return new Promise(resolve => {
            setTimeout(() => {
                formNode.submit();
            }, 0)
        })
    }
}

const dom_util = {
    registerBlurEvent(element, caller) {
        element.addEventListener("blur", function () {
            let inputValue = element.value;
            let messageType = this.validateInput(inputValue)
            this.printMessage[messageType](this.messageNode);
        }.bind(caller))
    },

    //addClass & removeClass 출처: https://unikys.tistory.com/301
    addClass(element, className){
        let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
        if (check.test(element.className) === false) { 
            element.className += " " + className; 
        }

    },
    removeClass(element, className){
        let check = new RegExp("(\\s|^)" + className + "(\\s|$)"); 
        if (check.test(element.className) === true) { 
            element.className = element.className.replace(check, " ").trim();
        }
    }
}

const message = {
    emptyMessage: "필수 정보입니다.",

    id: {
        pass: "사용 가능한 아이디입니다.",
        fail: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
        fail_duplication: "이미 존재하는 아이디입니다."
    },
    password: {
        pass: "안전한 비밀번호입니다.",
        fail_Length: "8자 이상 16자 이하로 입력해주세요.",
        fail_Character: "영문 대문자, 숫자, 특수문자를 최소 1자 이상 포함해주세요.",
    },
    passwordReconfirm: {
        pass: "비밀번호가 일치합니다.",
        fail: "비밀번호가 일치하지 않습니다.",
    },
    name: {
        pass: "멋진 이름이네요!",
        fail: "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백, 숫자 사용 불가)"
    },
    birthDate: {
        range: "가입할 수 없는 나이입니다 죄송해요ㅠㅠ",
        invalid: "태어난 날짜를 정확하게 입력하세요.",
        day: "태어난 일을 정확하게 입력하세요."
    }
}

const messageUtil = {
    showMessage(element) {
        element.setAttribute('style', 'display: block;');
    },
    hideMessage(element) {
        element.setAttribute('style', 'display: none;');
    },
    setMessageType(element, type) {
        element.setAttribute('class', `message ${type}`);
    },
    setMessage(element, message) {
        element.innerHTML = message;
    },
    addPassMessage(selector, message) {
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "pass");
        this.setMessage(messageNode, message);
    },
    addFailMessage(selector, message) {
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "fail");
        this.setMessage(messageNode, message);
    }
}
