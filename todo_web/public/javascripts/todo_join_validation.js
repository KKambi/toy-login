//constant variable object
const constant = {
    idMinLength: 5,
    passwordMinLength: 8,
    
    setState: function(state, caller){
        caller.state = state
    }
}

//Object Literal for Validation
const validationForId = {
    minLength: constant.idMinLength,
    state: "empty",
    joinError: "아이디를 정확히 입력해주세요.",

    regExp: /[^a-z0-9\_\-]/,
    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#id-message", message.emptyMessage); 
            constant.setState("empty", validationForId)
        },
        pass: () => { 
            messageUtil.addPassMessage("#id-message", message.id.pass); 
            constant.setState("pass", validationForId)
        },
        fail: () => {
            messageUtil.addFailMessage("#id-message", message.id.fail); 
            constant.setState("fail", validationForId)
        },
        fail_duplication: () => {
            messageUtil.addFailMessage("#id-message", message.id.fail_duplication); 
            constant.setState("fail", validationForId)
        }
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
    isDuplicated(id){
        // 응답에 대한 반응함수 설정
        let httpRequest = new XMLHttpRequest()
        let result = false
        httpRequest.onreadystatechange = function(){
            //서버로부터 응답을 받음
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                const response = httpRequest.responseText
                console.log("응답결과:",response)
                if (response === 'true') {
                    result = true;
                }
            }
        }
        // POST 요청 보내기
        httpRequest.open('POST', window.location.href + '/duplication-check', false)
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        httpRequest.send(`id=${id}`)
        return result
    },
    validateInput(id) {
        if (is_util.isEmpty(id)) return "empty";
        if (this.satisfyLength(id) === false) return "fail"
        if (this.hasInvalidCharacter(id) === true) return "fail";
        if (this.isDuplicated(id) === true) return "fail_duplication"
        return "pass";
    }
}

const validationPassword = {
    minLength: constant.passwordMinLength,
    state: "empty",
    joinError: "비밀번호를 정확히 입력해주세요.",

    regExp_UpperCase: /[A-Z]/,
    regExp_Number: /[0-9]/,
    regExp_Special: /[^0-9a-zA-Z\n\t\s]/,

    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#password-message", message.emptyMessage); 
            constant.setState("empty", validationPassword)
        },
        pass: () => { 
            messageUtil.addPassMessage("#password-message", message.password.pass); 
            constant.setState("pass", validationPassword)
        },
        fail_length: () => {
            messageUtil.addFailMessage("#password-message", message.password.fail_Length);
            constant.setState("fail", validationPassword)
        },
        fail_character: () => { 
            messageUtil.addFailMessage("#password-message", message.password.fail_Character); 
            constant.setState("fail", validationPassword)
        }
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
        if (this.satisfyLength(password) === false) return "fail_length";
        if (this.hasUpperCase(password) === false
            || this.hasNumber(password) === false
            || this.hasSpecial(password) === false) return "fail_character";
        return "pass";
    }
}

const validationPasswordReconfirm = {
    state: "empty",
    joinError: "비밀번호 재확인이 올바르지 않습니다.",
    
    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#password-reconfirm-message", message.emptyMessage); 
            constant.setState("empty", validationPasswordReconfirm)
        },
        pass: () => { 
            messageUtil.addPassMessage("#password-reconfirm-message", message.passwordReconfirm.pass); 
            constant.setState("pass", validationPasswordReconfirm)
        },
        fail: () => { 
            messageUtil.addFailMessage("#password-reconfirm-message", message.passwordReconfirm.fail); 
            constant.setState("fail", validationPasswordReconfirm)
        }
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
        if (this.isEqual(passwordReconfirm) === false) return "fail";
        return "pass";
    }
}

const validationName = {
    messageNode: document.querySelector("#name-message"),
    state: "empty",
    joinError: "이름을 정확히 입력해주세요.",
    regExp: /[^a-zA-Z가-힣]/,

    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#name-message", message.emptyMessage); 
            constant.setState("empty", validationName)
        },
        pass: () => { 
            messageUtil.addPassMessage("#name-message", message.name.pass); 
            constant.setState("pass", validationName)
        },
        fail: () => { 
            messageUtil.addFailMessage("#name-message", message.name.fail); 
            constant.setState("fail", validationName)
        }
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
        if (this.hasInvalidCharacter(name) === true) return "fail";
        return "pass";
    }
}

const validationGender = {
    messageNode: document.querySelector("#gender-message"),
    state: "empty",
    joinError: "성별을 정확히 입력해주세요.",
    printMessage: {
        empty: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("empty", validationGender)
        },
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationGender)
        },
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
    state: "empty",
    joinError: "이메일을 정확히 입력해주세요.",
    regExp_Email: /^[\w\-]+@[a-zA-Z]+\.[a-zA-Z]{2,}/,
    
    printMessage: {
        empty: undefined,
        pass: function(messageNode){ 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationEmail)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationEmail)
        },
    },

    init(){
        let inputForEmail = document.querySelector("#email");
        dom_util.registerBlurEvent(inputForEmail, validationEmail);
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
    state: "empty",
    joinError: "전화번호를 정확히 입력해주세요.",
    regExp_10digit: /(010)(\d{3})(\d{4})/,
    regExp_11digit: /(010)(\d{4})(\d{4})/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationPhone)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationPhone)
        },
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
        if (is_util.isEmpty(phone) === true) return "fail";
        if (this.hasValidForm(phone) === false) return "fail";
        return "pass";
    }
}

const validationBirthDate = {
    messageNode: document.querySelector("#birthdate-message"),
    state: "empty",
    joinError: "생년월일을 정확히 입력해주세요.",
    regExp_Year: /\d{4}/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationBirthDate)
        },
        fail_range: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.range); 
            constant.setState("fail", thivalidationBirthDates)
        },
        fail_invalid: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.invalid); 
            constant.setState("fail", validationBirthDate)
        },
        fail_day: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.day); 
            constant.setState("fail", validationBirthDate)
        }
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
        if (is_util.isEmpty(year) === true) return "fail_invalid";
        if (this.has4digitYear(year) === false) return "fail_invalid";
        if (this.isInvalidYear(year) === true) return "fail_range";

        if (is_util.isEmpty(month) === true) return "fail_invalid";

        if (is_util.isEmpty(day) === true) return "fail_invalid";
        if (this.isValidDay(year, month, day) === false) return "fail_day";

        return "pass";
    }
}

const validationInterest = {
    messageNode: document.querySelector("#interest-message"),
    state: "empty",
    joinError: "관심사를 정확히 입력해주세요.",
    minimun: 3,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationInterest)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationInterest)
        },
    },

    init(){
        let interstWrapper = document.querySelector(".interest-input-wrapper");
        interstWrapper.addEventListener("focusout", function(){
            const type = this.validateInterest(tags.tagList)
            this.printMessage[type](this.messageNode)
        }.bind(this))
    },
    validateInterest(tagList) {
        if (tagList.length < this.minimun) return "fail"
        return "pass"
    }
}

const validationList = [
    validationForId, validationPassword, validationPasswordReconfirm,
    validationName, validationBirthDate, validationGender,
    validationEmail, validationPhone, validationInterest
]

validationForId.init();
validationPassword.init();
validationPasswordReconfirm.init();
validationName.init();
validationBirthDate.init();
validationGender.init();
validationEmail.init();
validationPhone.init();
validationInterest.init();