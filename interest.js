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
    addClose: function(aNode, removeTag = this.removeTag, tagList = this.tagList){
        aNode.addEventListener('click', function(){
            let spanNode = aNode.parentElement
            removeTag(tagList, spanNode.innerText)
            spanNode.parentNode.removeChild(spanNode)
        })
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
        txtNode.addEventListener("keyup", (inputChar) => {
            let exceptionKey = ["Backspace", "Delete", ","]
            let tagString = tags.input.value.trim()
            tagString = tagString.slice(0, -1)
            let currentKey = inputChar.key

            //쉼표일 때
            if (exceptionKey.indexOf(currentKey) === 2) {
                tags.addTag(tagString)
                tags.initInput()
                tags.initSize()
            }
            //백스페이스, 딜리트일 때
            else {
                //TODO: 태그 마지막 글자를 지우고 input에 나머지를 채우는 행동
            }
        })
    }
}

tags.addFocus();
tags.addAutoChangeSize();
interest.init();