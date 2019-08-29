const is_util = {
    isEmpty(input){
        return (input === undefined || input === null || input.length === 0);
    }
}

const dom_util = {
    registerBlurEvent(element, caller){
        element.addEventListener("blur", function(){
            let inputValue = element.value;
            let messageType = this.validateInput(inputValue)
            this.printMessage(messageType);
        }.bind(caller))
    }
}

const message = {
    emptyMessage: "필수 정보입니다.",

    showMessage(element){
        element.setAttribute('style', 'display: block;');
    },
    setMessageType(element, type){
        element.setAttribute('class', `message ${type}`);
    },
    setMessage(element, message){
        element.innerHTML = message;
    },
    addPassMessage(selector, message){
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "pass");
        this.setMessage(messageNode, message);
    },
    addFailMessage(selector, message){
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "fail");
        this.setMessage(messageNode, message);
    }
}