const getNode = function(selector){
    return document.querySelector(selector);
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
        const messageNode = getNode(selector)
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "pass");
        this.setMessage(messageNode, message);
    },
    addFailMessage(selector, message){
        const messageNode = getNode(selector)
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "fail");
        this.setMessage(messageNode, message);
    }
}