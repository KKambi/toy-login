const tags = {
    input: document.querySelector("#interest"),
    wrapper: document.querySelector(".interest-input-wrapper"),

    addFocus: function(wrapper=this.wrapper){
        wrapper.addEventListener("click", function(){
            dom_util.addClass(wrapper, "focus")
        })
        wrapper.addEventListener("focusout", function(){
            dom_util.removeClass(wrapper, "focus")
        })
    },

    addTag: function (tagString, input = this.input, wrapper = this.wrapper) {
        const spanNode = document.createElement('span')
        const textNode = document.createTextNode(tagString)
        spanNode.appendChild(textNode)

        wrapper.insertBefore(spanNode, input)
    },

    initInput: function (input = this.input) {
        input.value = ""
    }
}

const interest = {
    init() {
        const txtNode = document.querySelector("#interest")
        txtNode.addEventListener("keydown", (inputChar) => {
            let exceptionKey = ["Backspace", "Delete", ","]
            let tagString = tags.input.value.trim()
            let currentKey = inputChar.key

            //쉼표일 때
            if (exceptionKey.indexOf(currentKey) === 2) {
                tags.addTag(tagString)
                tags.initInput()
            }
            //백스페이스, 딜리트일 때
            else {
                //TODO: 태그 마지막 글자를 지우고 input에 나머지를 채우는 행동
            }
        })
    }
}

tags.addFocus();
interest.init();