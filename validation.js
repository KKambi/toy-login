//constant variable object
const constant = {
    idMinLength: 5,
    passwordMinLength: 8,
}

//Object Literal for Validation
const validationForId = {
    minLength: constant.idMinLength,

    regExp: /[^a-z0-9\_\-]/,
    printMessage: {
        empty: () => { messageUtil.addFailMessage("#id-message", message.emptyMessage); },
        pass: () => { messageUtil.addPassMessage("#id-message", message.id.pass); },
        fail: () => { messageUtil.addFailMessage("#id-message", message.id.fail); },
    },

    init(){
        let inputForId = document.querySelector("#id");
        dom_util.registerBlurEvent(inputForId, this);
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

    printMessage: {
        empty: () => { messageUtil.addFailMessage("#password-message", message.emptyMessage); },
        pass: () => { messageUtil.addPassMessage("#password-message", message.password.pass); },
        fail_length: () => { messageUtil.addFailMessage("#password-message", message.password.fail_Length); },
        fail_character: () => { messageUtil.addFailMessage("#password-message", message.password.fail_Character); }
    },

    init(){
        let inputForPassword = document.querySelector("#password");
        dom_util.registerBlurEvent(inputForPassword, this);
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
        if (this.satisfyLength(password) == false) return "fail_length";
        if (this.hasUpperCase(password) == false
            || this.hasNumber(password) == false
            || this.hasSpecial(password) == false) return "fail_character";
        return "pass";
    }
}

const validationPasswordReconfirm = {
    printMessage: {
        empty: () => { messageUtil.addFailMessage("#password-reconfirm-message", message.emptyMessage); },
        pass: () => { messageUtil.addPassMessage("#password-reconfirm-message", message.passwordReconfirm.pass); },
        fail: () => { messageUtil.addFailMessage("#password-reconfirm-message", message.passwordReconfirm.fail); }
    },

    init(){
        let inputForPasswordReconfirm = document.querySelector("#password-reconfirm");
        dom_util.registerBlurEvent(inputForPasswordReconfirm, this);
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
    messageNode: document.querySelector("#name-message"),
    regExp: /[^a-zA-Z가-힣]/,

    printMessage: {
        empty: () => { messageUtil.addFailMessage("#name-message", message.emptyMessage); },
        pass: () => { messageUtil.addPassMessage("#name-message", message.name.pass); },
        fail: () => { messageUtil.addFailMessage("#name-message", message.name.fail); }
    },

    init(){
        let inputForName = document.querySelector("#name");
        dom_util.registerBlurEvent(inputForName, this);
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
    messageNode: document.querySelector("#gender-message"),
    printMessage: {
        empty: (messageNode) => { messageUtil.showMessage(messageNode); },
        pass: (messageNode) => { messageUtil.hideMessage(messageNode); },
        fail: undefined,
    },

    init(){
        let inputForGender = document.querySelector("#gender");
        dom_util.registerBlurEvent(inputForGender, this);
    },

    validateInput(gender) {
        if (is_util.isEmpty(gender)) return "empty";
        return "pass";
    }
}

const validationEmail = {
    messageNode: document.querySelector("#email-message"),
    regExp_Email: /^[\w\-]+@[a-zA-Z]+\.[a-zA-Z]{2,}/,
    
    printMessage: {
        empty: undefined,
        pass: (messageNode) => { messageUtil.hideMessage(messageNode); },
        fail: (messageNode) => { messageUtil.showMessage(messageNode); },
    },

    init(){
        let inputForEmail = document.querySelector("#email");
        dom_util.registerBlurEvent(inputForEmail, this);
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
    messageNode: document.querySelector("#phone-message"),
    regExp_10digit: /(010)(\d{3})(\d{4})/,
    regExp_11digit: /(010)(\d{4})(\d{4})/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { messageUtil.hideMessage(messageNode); },
        fail: (messageNode) => { messageUtil.showMessage(messageNode); },
    },

    init(){
        let inputForPhone = document.querySelector("#phone");
        dom_util.registerBlurEvent(inputForPhone, this);
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

const validationBirthDate = {
    messageNode: document.querySelector("#birthdate-message"),
    regExp_Year: /\d{4}/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { messageUtil.hideMessage(messageNode); },
        fail_range: () => { messageUtil.addFailMessage("#birthdate-message", message.birthDate.range); },
        fail_invalid: () => { messageUtil.addFailMessage("#birthdate-message", message.birthDate.invalid); },
        fail_day: () => { messageUtil.addFailMessage("#birthdate-message", message.birthDate.day); }
    },

    getInputArray(nodeArray){
        const inputArray = nodeArray.map(node => node.value);
        return inputArray;
    },

    init(){
        const nodeArray = [document.querySelector("#yy"), document.querySelector("#mm"), document.querySelector("#dd")]; 
        nodeArray.forEach((element) => {
            element.addEventListener("blur", function(){
                let inputArray = this.getInputArray(nodeArray);
                let messageType = this.validateInput(inputArray)
                this.printMessage[messageType](this.messageNode);
            }.bind(validationBirthDate))
        })
    },

    has4digitYear(year) {
        return this.regExp_Year.test(year);
    },
    isInvalidYear(year){
        const currentYear = new Date().getFullYear();
        const comeFromPast = (currentYear - year) >= 100;
        const comeFromFuture = (currentYear - year) < 15;
        return (comeFromPast || comeFromFuture);
    },
    isValidDay(year, month, day){
        const currentDate = new Date(year, month, 0);
        const finalDay = currentDate.getDate();
        return (1 <= day && day <= finalDay);
    },
    validateInput(birthDate) {
        const [year, month, day] = birthDate;
        if (is_util.isEmpty(year)) return "fail_invalid";
        if (this.has4digitYear(year) == false) return "fail_invalid";
        if (this.isInvalidYear(year) == true) return "fail_range";

        if (is_util.isEmpty(month)) return "fail_invalid";

        if (is_util.isEmpty(day)) return "fail_invalid";
        if (this.isValidDay(year, month, day) == false) return "fail_day";

        return "pass";
    }
}

validationForId.init();
validationPassword.init();
validationPasswordReconfirm.init();
validationName.init();
validationBirthDate.init();
validationGender.init();
validationEmail.init();
validationPhone.init();
//term.init();