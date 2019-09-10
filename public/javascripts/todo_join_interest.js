const tags = {
    input: document.querySelector("#interest"),
    wrapper: document.querySelector(".interest-input-wrapper"),
    defaultSize: 1,
    tagList: [],

    addFocus: function(wrapper=this.wrapper){
        wrapper.addEventListener("focusin", function(){
            dom_util.addClass(wrapper, "focus")
        })
        wrapper.addEventListener("focusout", function(){
            dom_util.removeClass(wrapper, "focus")
        })
    },
    addAutoChangeSize: function(input = this.input){
        input.addEventListener('keyup', function(keyEvent){
            if (keyEvent.key === ',') return;
            let length = input.value.length
            input.setAttribute("size", `${length<=0? 1:length}`)
        })
    },
    addClose: function(aNode){
        aNode.addEventListener('click', function(){
            let spanNode = aNode.parentElement
            this.removeTag(this.tagList, spanNode.innerText)
            spanNode.parentNode.removeChild(spanNode)
        }.bind(this))
    },
    addValidateEvent: function(aNode){
        aNode.addEventListener("click", function(){
            const type = validationInterest.validateInterest(this.tagList)
            const messageNode = document.querySelector("#interest-message")
            validationInterest.printMessage[type](messageNode)
        }.bind(this))
    },

    addTag: function (tagString, input = this.input, wrapper = this.wrapper) {
        if (tagString.length === 0) return;
        
        const spanNode = document.createElement('span')
        const textNode = document.createTextNode(tagString)
        spanNode.appendChild(textNode)
        spanNode.setAttribute("class", "tag")
        
        const aNode = document.createElement('a')
        const x = document.createTextNode('x')
        this.addClose(aNode)
        this.addValidateEvent(aNode)
        aNode.appendChild(x)
        spanNode.appendChild(aNode)
        
        this.tagList.push(tagString)
        wrapper.insertBefore(spanNode, input)
    },
    removeTag: function(tagList, tagString){
        let tagIndex = tagList.indexOf(tagString)
        tagList.splice(tagIndex, 1)
    },
    modifyTag: function(inputStng, input = this.input, tagList = this.tagList){
        if (inputStng.length >= 1) return;  //길이가 0일 때 백스페이스, 딜리트가 들어왔으면 작동한다.
        if (tagList.length <=0 ) return; //지울 노드가 없다면 종료

        let spanNode = this.wrapper
        .lastChild
        .previousSibling
        spanNode.parentNode.removeChild(spanNode)
        
        let tagString = tagList[tagList.length-1]
        console.log(tagString)
        this.removeTag(tagList, tagString)
        input.value = tagString
        input.size = tagString.length
    },
    
    initInput: function (input = this.input) {
        input.value = ""
    },
    initSize: function (input = this.input) {
        input.setAttribute("size", this.defaultSize)
    }
}

const interest = {
    init() {
        const txtNode = document.querySelector("#interest")
        let exceptionKey = ["Backspace", "Delete", ","]
        
        //쉼표일 때의 이벤트 추가
        txtNode.addEventListener("keyup", function(inputChar){
            let currentKey = inputChar.key
            let inputString = tags.input.value
            inputString = inputString.slice(0, -1)
            
            let currentKeyIndex = exceptionKey.indexOf(currentKey)
            if (currentKeyIndex === 2) {
                tags.addTag(inputString)
                tags.initInput()
                tags.initSize()
            }
        }.bind(tags))

        //백스페이스, 딜리트일 때의 이벤트 추가
        txtNode.addEventListener("keydown", function(inputChar){
            let currentKey = inputChar.key
            let inputString = tags.input.value
            
            let currentKeyIndex = exceptionKey.indexOf(currentKey)
            if (currentKeyIndex === 0 || currentKeyIndex === 1){
                tags.modifyTag(inputString)
            }
        }.bind(tags))
    }
}

tags.addFocus();
tags.addAutoChangeSize();
interest.init();