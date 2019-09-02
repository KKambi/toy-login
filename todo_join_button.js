const initializationButton = {
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
        let initializationButton = document.querySelector("#initialization-button")
        initializationButton.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
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
    },
}

const joinButton = {
    init: function(){
        this.preventSubmit()
        this.addCheckEvent()
        this.addCloseEvent()
    },

    preventSubmit: function(){
        let joinButton = document.querySelector("#join-button")
        joinButton.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
        })
    },

    addCheckEvent: function(){
        let joinButton = document.querySelector("#join-button")
        joinButton.addEventListener("click", function(){
            this.checkEmptyInput()
        }.bind(this))
    },
    checkEmptyInput: function(){
        let errorList = []

        //check input
        validationList.forEach((validationObject) => {
            console.log(validationObject)
            if(validationObject.state !== "pass") errorList.push(validationObject.joinError)
        })
        
        //체크박스->input.checked
        if (term.state !== "pass") errorList.push(term.joinError)

        //에러가 있다면 모달을 띄운다.
        if (errorList.length > 0){
            this.fillDiv(errorList)
            this.openModal(errorList)
        }
        else{
            /*
            TODO: 가입하기 버튼을 클릭했을 때, 모든 항목이 입력된 상태라면 
            모든 내용이 비동기로 서버로 보내지고 결과를 받은 후 자동로그인이 된다.
            자동로그인이 된 상태로 메인화면으로 이동된다.
            */
        }
    },

    openModal: function(){
        let modal = document.querySelector(".join__overlay").parentNode
        modal.setAttribute("class", "modal")
    },
    closeModal: function(){
        let modal = document.querySelector(".join__overlay").parentNode
        modal.setAttribute("class", "modal hidden")
    },

    fillDiv: function(errorList){
        let errorDiv = document.querySelector(".join__content h2").nextElementSibling
        errorList.forEach((error) => {
            let newDiv = document.createElement("div")
            let newText = document.createTextNode(error)
            newDiv.appendChild(newText)

            errorDiv.appendChild(newDiv)
        })
    },
    clearDiv: function(){
        let errorDiv = document.querySelector(".join__content h2").nextElementSibling
        errorDiv.innerHTML = ""
    },

    addCloseEvent: function(){
        let confirmButton = document.querySelector(".join__agree")
        confirmButton.addEventListener("click", function(){
            this.closeModal()
            this.clearDiv()
        }.bind(this))
    }
}

initializationButton.init()
joinButton.init()