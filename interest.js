const tags = {
    input: document.querySelector("#interest"),
    wrapper: document.querySelector(".interest-input-wrapper"),
    defaultSize: 1,

    addFocus: function(wrapper=this.wrapper){
        wrapper.addEventListener("click", function(){
            dom_util.addClass(wrapper, "focus")
        })
        wrapper.addEventListener("focusout", function(){
            dom_util.removeClass(wrapper, "focus")
        })
    },
    addTag: function (tagString, input = this.input, wrapper = this.wrapper) {
        if (tagString.length === 0) return;

        const spanNode = document.createElement('span')
        const textNode = document.createTextNode(tagString)
        spanNode.appendChild(textNode)
        spanNode.setAttribute("class", "tag")
        
        const aNode = document.createElement('a')
        const x = document.createTextNode('x')
        aNode.appendChild(x)
        spanNode.appendChild(aNode)
        
        wrapper.insertBefore(spanNode, input)
    },

    addAutoChangeSize: function(input = this.input){
        input.addEventListener('keyup', function(keyEvent){
            if (keyEvent.key === ',') return;
            let length = input.value.length
            input.setAttribute("size", `${length}`)
        })
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