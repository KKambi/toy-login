
const button = {
    init: function(){
        let buttonNodeList = document.querySelectorAll(".primary-button")
        buttonNodeList.forEach((node) => {
            node.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
            })
        })
    }
}

button.init()