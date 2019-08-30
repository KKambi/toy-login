//constant variable object
const constant = {
    idMinLength: 5,
    passwordMinLength: 8,

}

//Object Literal for Validation
const validationForId = {
    minLength: constant.idMinLength,

    regExp: /[^a-z0-9\_\-]/,
    
    passMessage: "사용 가능한 아이디입니다.",
    failMessage: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",

    init(){
        let inputForId = document.querySelector("#id");
        dom_util.registerBlurEvent(inputForId, this);
    },

    printMessage(type){
        if (type == "empty") message.addFailMessage("#id-message", message.emptyMessage);
        if (type == "pass") message.addPassMessage("#id-message", this.passMessage);
        if (type == "fail") message.addFailMessage("#id-message", this.failMessage);
    },

    satisfyLength(id) {  
        return this.minLength <= id.length;
    },    
    hasInvalidCharacter(id) {
        return this.regExp.test(id);
    },
    validateInput(id) {
        if (is_util.isEmpty(id)) return "empty";
        if (this.satisfyLength(id) == false) return "fail"
        if (this.hasInvalidCharacter(id) == true) return "fail";
        return "pass";
    }
}

const validationPassword = {
    minLength: constant.passwordMinLength,

    regExp_UpperCase: /[A-Z]/,
    regExp_Number: /[0-9]/,
    regExp_Special: /[^0-9a-zA-Z\n\t\s]/,

    passMessage: "안전한 비밀번호입니다.",
    failMessage_Length: "8자 이상 16자 이하로 입력해주세요.",
    failMessage_Character: "영문 대문자, 숫자, 특수문자를 최소 1자 이상 포함해주세요.",

    init(){
        let inputForPassword = document.querySelector("#password");
        dom_util.registerBlurEvent(inputForPassword, this);
    },

    printMessage(type){
        if (type == "empty") message.addFailMessage("#password-message", message.emptyMessage);
        if (type == "pass") message.addPassMessage("#password-message", this.passMessage);
        if (type == "fail_Length") message.addFailMessage("#password-message", this.failMessage_Length)
        if (type == "fail_Character") message.addFailMessage("#password-message", this.failMessage_Character)
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
    validateInput(password) {
        if (is_util.isEmpty(password)) return "empty";
        if (this.satisfyLength(password) == false) return "fail_Length";
        if (this.hasUpperCase(password) == false
            || this.hasNumber(password) == false
            || this.hasSpecial(password) == false) return "fail_Character";
        return "pass";
    }
}

const validationPasswordReconfirm = {
    passMessage: "비밀번호가 일치합니다.",
    failMessage: "비밀번호가 일치하지 않습니다.",

    init(){
        let inputForPasswordReconfirm = document.querySelector("#password-reconfirm");
        dom_util.registerBlurEvent(inputForPasswordReconfirm, this);
    },

    printMessage(type){
        if (type == "empty") message.addFailMessage("#password-reconfirm-message", message.emptyMessage);
        if (type == "pass") message.addPassMessage("#password-reconfirm-message", this.passMessage);
        if (type == "fail") message.addFailMessage("#password-reconfirm-message", this.failMessage);
    },

    isEqual(passwordReconfirm) {
        const password = document.querySelector("#password").value;
        return password === passwordReconfirm;
    },
    validateInput(passwordReconfirm) {
        if (is_util.isEmpty(passwordReconfirm)) return "empty";
        if (this.isEqual(passwordReconfirm) == false) return "fail";
        return "pass";
    }
}

const validationName = {
    regExp: /[^a-zA-Z가-힣]/,

    passMessage: "멋진 이름이네요!",
    failMessage: "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백, 숫자 사용 불가)",

    init(){
        let inputForName = document.querySelector("#name");
        dom_util.registerBlurEvent(inputForName, this);
    },

    printMessage(type){
        if (type == "empty") message.addFailMessage("#name-message", message.emptyMessage);
        if (type == "pass") message.addPassMessage("#name-message", this.passMessage);
        if (type == "fail") message.addFailMessage("#name-message", this.failMessage)
    },

    hasInvalidCharacter(name) {
        return this.regExp.test(name);
    },
    validateInput(name) {
        if (is_util.isEmpty(name)) return "empty";
        if (this.hasInvalidCharacter(name) == true) return "fail";
        return "pass";
    }
}

const validationGender = {
    init(){
        let inputForGender = document.querySelector("#gender");
        dom_util.registerBlurEvent(inputForGender, this);
    },

    printMessage(type){
        const messageNode = document.querySelector("#gender-message");
        if (type == "empty") message.showMessage(messageNode);
        if (type == "pass") message.hideMessage(messageNode);
    },

    validateInput(gender) {
        if (is_util.isEmpty(gender)) return "empty";
        return "pass";
    }
}

const validationEmail = {
    regExp_Email: /^[\w\-]+@[a-zA-Z]+\.[a-zA-Z]{2,}/,

    init(){
        let inputForEmail = document.querySelector("#email");
        dom_util.registerBlurEvent(inputForEmail, this);
    },

    printMessage(type){
        const messageNode = document.querySelector("#email-message");
        if (type == "fail") message.showMessage(messageNode);
        if (type == "pass") message.hideMessage(messageNode);
    },

    hasValidForm(email) {
        return this.regExp_Email.test(email);
    },
    validateInput(email) {
        if (is_util.isEmpty(email)) return "fail";
        if (this.hasValidForm(email) === false) return "fail";
        return "pass";
    }
}

const validationPhone = {
    regExp_10digit: /(010)(\d{3})(\d{4})/,
    regExp_11digit: /(010)(\d{4})(\d{4})/,

    init(){
        let inputForPhone = document.querySelector("#phone");
        dom_util.registerBlurEvent(inputForPhone, this);
    },

    printMessage(type){
        const messageNode = document.querySelector("#phone-message");
        if (type == "fail") message.showMessage(messageNode);
        if (type == "pass") message.hideMessage(messageNode);
    },

    hasValidForm(phone) {
        if (phone.length === 10) return this.regExp_10digit.test(phone);
        if (phone.length === 11) return this.regExp_11digit.test(phone);
        return false;
    },
    validateInput(phone) {
        if (is_util.isEmpty(phone)) return "fail";
        if (this.hasValidForm(phone) === false) return "fail";
        return "pass";
    }
}

validationForId.init();
validationPassword.init();
validationPasswordReconfirm.init();
validationName.init();
//validationBirthDate.init();
validationGender.init();
validationEmail.init();
validationPhone.init();
//tag.init();
//term.init();