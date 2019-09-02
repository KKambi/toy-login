
const button = {
    init: function(){
        this.preventSubmit()
        this.addOpenModalEvent()
        this.addInitializationEvent()
        this.addCancleEvent()
    },
    addOpenModalEvent: function(){
        document.querySelector("#initialization-button").addEventListener("click", () => {
            document.querySelector(".init__overlay").parentNode.setAttribute("class", "modal")
        })
    },
    preventSubmit: function(){
        let buttonNodeList = document.querySelectorAll(".primary-button")
        buttonNodeList.forEach((node) => {
            node.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
            })
        })
    },
    addInitializationEvent: function(){
        let initalizationButton = document.querySelector(".init__agree")
        initalizationButton.addEventListener("click", () => {
            document.querySelector(".join_form").reset()
            document.querySelector(".init__overlay").parentNode.setAttribute("class", "modal hidden")
        })
    },
    addCancleEvent: function(){
        let cancelButton = document.querySelector(".init__cancel")
        cancelButton.addEventListener("click", () => {
            document.querySelector(".init__overlay").parentNode.setAttribute("class", "modal hidden")
        })
    }
}

button.init()