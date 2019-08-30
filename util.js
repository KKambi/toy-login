const is_util = {
    isEmpty(input) {
        return (input === undefined || input === null || input.length === 0);
    }
}

const dom_util = {
    registerBlurEvent(element, caller) {
        element.addEventListener("blur", function () {
            let inputValue = element.value;
            let messageType = this.validateInput(inputValue)
            this.printMessage[messageType](this.messageNode);
        }.bind(caller))
    }
}

const message = {
    emptyMessage: "필수 정보입니다.",

    id: {
        pass: "사용 가능한 아이디입니다.",
        fail: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
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
        range: "타임머신을 타고 오셨군요^^",
        year: "태어난 년도 4자리를 정확하게 입력하세요.",
        month: "태어난 달을 정확하게 입력하세요.",
        day: "생년월일을 다시 확인해주세요.",
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