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