//Object Literal for Validation
const validationForId = {
    minLength: 5,

    regExp: /[^a-z0-9\_\-]/,

    passMessage: "사용 가능한 아이디입니다.",
    failMessage: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",

    init(){
        this.registerEvent();
    },
    registerEvent(){
        let inputForId = document.querySelector("#id");
        inputForId.addEventListener("blur", () => {
            let id = inputForId.value;
            let messageType = this.validateId(id)
            this.printMessage(messageType);
        })
    },
    printMessage(type){
        if (type == "pass") message.addPassMessage("#id-message", this.passMessage);
        else message.addFailMessage("#id-message", this.failMessage)
    },

    satisfyLength(id) {  
        return this.minLength <= id.length;
    },    
    hasInvalidCharacter(id) {
        return this.regExp.test(id);
    },
    validateId(id) {
        if (this.satisfyLength(id) == false) return "fail"
        if (this.hasInvalidCharacter(id) == true) return "fail";
        return "pass";
    }
}

const validationPassword = {
    minLength: 8,

    regExp_UpperCase: /[A-Z]/,
    regExp_Number: /[0-9]/,
    regExp_Special: /[^0-9a-zA-Z\n\t\s]/,

    passMessage: "안전한 비밀번호입니다.",
    failMessage_Length: "8자 이상 16자 이하로 입력해주세요.",
    failMessage_UpperCase: "영문 대문자를 최소 1자 이상 포함해주세요.",
    failMessage_Number: "숫자를 최소 1자 이상 포함해주세요.",
    failMessage_NotSpecial: "특수문자를 최소 1자 이상 포함해주세요.",

    init(){
        this.registerEvent();
    },
    registerEvent(){
        let inputForPassword = getNode("#password");
        inputForPassword.addEventListener("blur", () => {
            let password = inputForPassword.value;
            let messageType = this.validatePassword(password)
            this.printMessage(messageType);
        })
    },
    printMessage(type){
        if (type == "pass") message.addPassMessage("#password-message", this.passMessage);
        if (type == "fail_Length") message.addFailMessage("#password-message", this.failMessage_Length)
        if (type == "fail_UpperCase") message.addFailMessage("#password-message", this.failMessage_UpperCase)
        if (type == "fail_Number") message.addFailMessage("#password-message", this.failMessage_Number)
        if (type == "fail_NotSpecial") message.addFailMessage("#password-message", this.failMessage_NotSpecial)
    },

    satisfyLength(password) {  
        return this.minLength <= password.length;
    },    
    hasUpperCase(password) {
        return this.regExp_UpperCase.test(password);
    },
    hasNumber(password) {
        return this.regExp_Number.test(password);
    },
    hasSpecial(password) {
        return this.regExp_Special.test(password);
    },
    validatePassword(password) {
        if (this.satisfyLength(password) == false) return "fail_Length";
        if (this.hasUpperCase(password) == false) return "fail_UpperCase";
        if (this.hasNumber(password) == false) return "fail_Number";
        if (this.hasSpecial(password) == false) return "fail_NotSpecial";
        return "pass";
    }
}

validationForId.init();
validationPassword.init();