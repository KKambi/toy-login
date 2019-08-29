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
            if (this.validateId(id)) {
                this.addPassMessage(inputForId);
                return;
            }
            this.addFailMessage(inputForId);
        })
    },

    satisfyLength(id) {  
        return this.minLength <= id.length;
    },    
    hasInvalidCharacter(id) {
        console.log(this.regExp.test(id))
        return this.regExp.test(id);
    },
    validateId(id) {
        return (this.satisfyLength(id) && this.hasInvalidCharacter(id) == false);
    },

    showMessage(target, type){
        target.setAttribute('style', 'display: block;');
        target.setAttribute('class', `message ${type}`);
    },
    addPassMessage(inputForId){
        const messageSpan = document.querySelector("#id-message");
        this.showMessage(messageSpan, "pass");
        messageSpan.innerHTML = this.passMessage;
    },
    addFailMessage(inputForId){
        const messageSpan = document.querySelector("#id-message");
        this.showMessage(messageSpan, "fail");
        messageSpan.innerHTML = this.failMessage;
    }
}

validationForId.init();