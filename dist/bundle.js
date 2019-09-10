/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const button = __webpack_require__(1)
const interest = __webpack_require__(2)
const modal = __webpack_require__(3)
const validation = __webpack_require__(4)
const util = __webpack_require__(5)


tags.addFocus();
tags.addAutoChangeSize();
interest.init();

initializationButton.init()
joinButton.init()

term.init()

validationForId.init();
validationPassword.init();
validationPasswordReconfirm.init();
validationName.init();
validationBirthDate.init();
validationGender.init();
validationEmail.init();
validationPhone.init();
validationInterest.init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
            let interestInput = document.querySelector("#interest")
            interestInput.value = JSON.stringify(tags.tagList)
            let form = document.querySelector(".join_form")
            async_util.submitAfter0Seconds(form)
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



/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const term = {
    state: "fail",
    joinError: "약관을 읽고 동의해주세요.",
    message: `
        정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
        <br><br>
        
        <strong>1. 수집하는 개인정보의 항목</strong><br>
        최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.<br>
        - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사<br><br>
        
        <strong>2. 개인정보의 수집 및 이용 목적</strong><br>
        가. 컨텐츠 제공, 특정 맞춤 서비스 제공<br>
        나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재
        <br><br>

        <strong>3. 개인정보의 보유 및 이용기간</strong><br>
        이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
        <br><br>
        가. 회사 내부 방침에 의한 정보보유 사유<br>
        - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)<br>
        보존 항목 : 가입인증 휴대폰 번호<br>
        보존 이유 : 부정 가입 및 이용 방지<br>
        보존 기간 : 6개월<br>
        ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.
        <br><br>
        나. 관련법령에 의한 정보보유 사유<br>
        상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. 
        <br><br>
        - 계약 또는 청약철회 등에 관한 기록<br>
        보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
        보존 기간 : 5년
        <br><br>
        - 소비자의 불만 또는 분쟁처리에 관한 기록<br>
        보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
        보존 기간 : 3년
        <br><br>
        - 웹사이트 방문기록<br>
        보존 이유 : 통신비밀보호법<br>
        보존 기간 : 3개월<br>
    `,

    init: function(){
        this.fillTerm()
        this.addOpenEvent()
        this.addCloseEvent()
        this.addScrollEvent()
    },

    fillTerm: function(){
        document.querySelector("#modal__term").innerHTML = this.message
    },
    addOpenEvent: function(){
        document.querySelector("span.join-title").addEventListener("click", () => {
            document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal")
        })
    },
    addCloseEvent: function(){
        //어떻게 해야 바깥을 클릭했을 때 꺼지게 하지?
        // document.querySelector(".modal").addEventListener("click", (clickEvent) => {
        //     console.log(clickEvent.target)
        //     if(clickEvent.target != document.querySelector(".modal__content")){
        //         console.log(clickEvent)
        //         document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
        //     }
        // })
        
        document.querySelector(".modal-row a").addEventListener("click", () => {
            document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
        })
    },
    addScrollEvent: function(){
        document.querySelector("#modal__term").addEventListener("scroll", () => {
            let scrollDiv = document.querySelector("#modal__term")
            let userScroll = scrollDiv.offsetHeight + scrollDiv.scrollTop + 1
            let clearScroll = scrollDiv.scrollHeight;
            if (userScroll >= clearScroll){
                //스크롤을 끝까지 한 후, 체크버튼을 클릭하면
                let checkButton = document.querySelector(".term-button")
                checkButton.addEventListener("click", () => {
                    //약관창이 닫힌다
                    document.querySelector(".modal__overlay").parentNode.setAttribute("class", "modal hidden")
                    
                    //체크박스가 체크된다.
                    let checkBox = document.querySelector("#term-box__checkbox")
                    checkBox.setAttribute("checked", "")

                    //state를 pass로 만든다.
                    term.state = "pass"
                })
            }
        })
    }
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

//constant variable object
const constant = {
    idMinLength: 5,
    passwordMinLength: 8,
    
    setState: function(state, caller){
        caller.state = state
    }
}

//Object Literal for Validation
const validationForId = {
    minLength: constant.idMinLength,
    state: "empty",
    joinError: "아이디를 정확히 입력해주세요.",

    regExp: /[^a-z0-9\_\-]/,
    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#id-message", message.emptyMessage); 
            constant.setState("empty", validationForId)
        },
        pass: () => { 
            messageUtil.addPassMessage("#id-message", message.id.pass); 
            constant.setState("pass", validationForId)
        },
        fail: () => {
            messageUtil.addFailMessage("#id-message", message.id.fail); 
            constant.setState("fail", validationForId)
        },
        fail_duplication: () => {
            messageUtil.addFailMessage("#id-message", message.id.fail_duplication); 
            constant.setState("fail", validationForId)
        }
    },

    init(){
        let inputForId = document.querySelector("#id");
        dom_util.registerBlurEvent(inputForId, this);
    },

    satisfyLength(id) {  
        return this.minLength <= id.length;
    },    
    hasInvalidCharacter(id) {
        return this.regExp.test(id);
    },
    isDuplicated(id){
        // 응답에 대한 반응함수 설정
        let httpRequest = new XMLHttpRequest()
        let result = false
        httpRequest.onreadystatechange = function(){
            //서버로부터 응답을 받음
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                const response = httpRequest.responseText
                if (response === 'true') {
                    result = true;
                }
            }
        }
        // POST 요청 보내기
        httpRequest.open('POST', window.location.href + '/duplication-check', false)
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        httpRequest.send(`id=${id}`)
        return result
    },
    validateInput(id) {
        if (is_util.isEmpty(id)) return "empty";
        if (this.satisfyLength(id) === false) return "fail"
        if (this.hasInvalidCharacter(id) === true) return "fail";
        if (this.isDuplicated(id) === true) return "fail_duplication"
        return "pass";
    }
}

const validationPassword = {
    minLength: constant.passwordMinLength,
    state: "empty",
    joinError: "비밀번호를 정확히 입력해주세요.",

    regExp_UpperCase: /[A-Z]/,
    regExp_Number: /[0-9]/,
    regExp_Special: /[^0-9a-zA-Z\n\t\s]/,

    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#password-message", message.emptyMessage); 
            constant.setState("empty", validationPassword)
        },
        pass: () => { 
            messageUtil.addPassMessage("#password-message", message.password.pass); 
            constant.setState("pass", validationPassword)
        },
        fail_length: () => {
            messageUtil.addFailMessage("#password-message", message.password.fail_Length);
            constant.setState("fail", validationPassword)
        },
        fail_character: () => { 
            messageUtil.addFailMessage("#password-message", message.password.fail_Character); 
            constant.setState("fail", validationPassword)
        }
    },

    init(){
        let inputForPassword = document.querySelector("#password");
        dom_util.registerBlurEvent(inputForPassword, this);
    },

    satisfyLength(password) {  
        return this.minLength <= password.length;
    },    
    hasUpperCase(password) {
        return this.regExp_UpperCase.test(password);
    },
    hasNumber(password) {
        return this.regExp_Number.test(password);
    },
    hasSpecial(password) {
        return this.regExp_Special.test(password);
    },
    validateInput(password) {
        if (is_util.isEmpty(password)) return "empty";
        if (this.satisfyLength(password) === false) return "fail_length";
        if (this.hasUpperCase(password) === false
            || this.hasNumber(password) === false
            || this.hasSpecial(password) === false) return "fail_character";
        return "pass";
    }
}

const validationPasswordReconfirm = {
    state: "empty",
    joinError: "비밀번호 재확인이 올바르지 않습니다.",
    
    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#password-reconfirm-message", message.emptyMessage); 
            constant.setState("empty", validationPasswordReconfirm)
        },
        pass: () => { 
            messageUtil.addPassMessage("#password-reconfirm-message", message.passwordReconfirm.pass); 
            constant.setState("pass", validationPasswordReconfirm)
        },
        fail: () => { 
            messageUtil.addFailMessage("#password-reconfirm-message", message.passwordReconfirm.fail); 
            constant.setState("fail", validationPasswordReconfirm)
        }
    },

    init(){
        let inputForPasswordReconfirm = document.querySelector("#password-reconfirm");
        dom_util.registerBlurEvent(inputForPasswordReconfirm, this);
    },

    isEqual(passwordReconfirm) {
        const password = document.querySelector("#password").value;
        return password === passwordReconfirm;
    },
    validateInput(passwordReconfirm) {
        if (is_util.isEmpty(passwordReconfirm)) return "empty";
        if (this.isEqual(passwordReconfirm) === false) return "fail";
        return "pass";
    }
}

const validationName = {
    messageNode: document.querySelector("#name-message"),
    state: "empty",
    joinError: "이름을 정확히 입력해주세요.",
    regExp: /[^a-zA-Z가-힣]/,

    printMessage: {
        empty: () => { 
            messageUtil.addFailMessage("#name-message", message.emptyMessage); 
            constant.setState("empty", validationName)
        },
        pass: () => { 
            messageUtil.addPassMessage("#name-message", message.name.pass); 
            constant.setState("pass", validationName)
        },
        fail: () => { 
            messageUtil.addFailMessage("#name-message", message.name.fail); 
            constant.setState("fail", validationName)
        }
    },

    init(){
        let inputForName = document.querySelector("#name");
        dom_util.registerBlurEvent(inputForName, this);
    },

    hasInvalidCharacter(name) {
        return this.regExp.test(name);
    },
    validateInput(name) {
        if (is_util.isEmpty(name)) return "empty";
        if (this.hasInvalidCharacter(name) === true) return "fail";
        return "pass";
    }
}

const validationGender = {
    messageNode: document.querySelector("#gender-message"),
    state: "empty",
    joinError: "성별을 정확히 입력해주세요.",
    printMessage: {
        empty: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("empty", validationGender)
        },
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationGender)
        },
        fail: undefined,
    },

    init(){
        let inputForGender = document.querySelector("#gender");
        dom_util.registerBlurEvent(inputForGender, this);
    },

    validateInput(gender) {
        if (is_util.isEmpty(gender)) return "empty";
        return "pass";
    }
}

const validationEmail = {
    messageNode: document.querySelector("#email-message"),
    state: "empty",
    joinError: "이메일을 정확히 입력해주세요.",
    regExp_Email: /^[\w\-]+@[a-zA-Z]+\.[a-zA-Z]{2,}/,
    
    printMessage: {
        empty: undefined,
        pass: function(messageNode){ 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationEmail)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationEmail)
        },
    },

    init(){
        let inputForEmail = document.querySelector("#email");
        dom_util.registerBlurEvent(inputForEmail, validationEmail);
    },

    hasValidForm(email) {
        return this.regExp_Email.test(email);
    },
    validateInput(email) {
        if (is_util.isEmpty(email)) return "fail";
        if (this.hasValidForm(email) === false) return "fail";
        return "pass";
    }
}

const validationPhone = {
    messageNode: document.querySelector("#phone-message"),
    state: "empty",
    joinError: "전화번호를 정확히 입력해주세요.",
    regExp_10digit: /(010)(\d{3})(\d{4})/,
    regExp_11digit: /(010)(\d{4})(\d{4})/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationPhone)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationPhone)
        },
    },

    init(){
        let inputForPhone = document.querySelector("#phone");
        dom_util.registerBlurEvent(inputForPhone, this);
    },

    hasValidForm(phone) {
        if (phone.length === 10) return this.regExp_10digit.test(phone);
        if (phone.length === 11) return this.regExp_11digit.test(phone);
        return false;
    },
    validateInput(phone) {
        if (is_util.isEmpty(phone) === true) return "fail";
        if (this.hasValidForm(phone) === false) return "fail";
        return "pass";
    }
}

const validationBirthDate = {
    messageNode: document.querySelector("#birthdate-message"),
    state: "empty",
    joinError: "생년월일을 정확히 입력해주세요.",
    regExp_Year: /\d{4}/,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationBirthDate)
        },
        fail_range: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.range); 
            constant.setState("fail", thivalidationBirthDates)
        },
        fail_invalid: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.invalid); 
            constant.setState("fail", validationBirthDate)
        },
        fail_day: () => { 
            messageUtil.addFailMessage("#birthdate-message", message.birthDate.day); 
            constant.setState("fail", validationBirthDate)
        }
    },

    getInputArray(nodeArray){
        const inputArray = nodeArray.map(node => node.value);
        return inputArray;
    },

    init(){
        const nodeArray = [document.querySelector("#yy"), document.querySelector("#mm"), document.querySelector("#dd")]; 
        nodeArray.forEach((element) => {
            element.addEventListener("blur", function(){
                let inputArray = this.getInputArray(nodeArray);
                let messageType = this.validateInput(inputArray)
                this.printMessage[messageType](this.messageNode);
            }.bind(validationBirthDate))
        })
    },

    has4digitYear(year) {
        return this.regExp_Year.test(year);
    },
    isInvalidYear(year){
        const currentYear = new Date().getFullYear();
        const comeFromPast = (currentYear - year) >= 100;
        const comeFromFuture = (currentYear - year) < 15;
        return (comeFromPast || comeFromFuture);
    },
    isValidDay(year, month, day){
        const currentDate = new Date(year, month, 0);
        const finalDay = currentDate.getDate();
        return (1 <= day && day <= finalDay);
    },
    validateInput(birthDate) {
        const [year, month, day] = birthDate;
        if (is_util.isEmpty(year) === true) return "fail_invalid";
        if (this.has4digitYear(year) === false) return "fail_invalid";
        if (this.isInvalidYear(year) === true) return "fail_range";

        if (is_util.isEmpty(month) === true) return "fail_invalid";

        if (is_util.isEmpty(day) === true) return "fail_invalid";
        if (this.isValidDay(year, month, day) === false) return "fail_day";

        return "pass";
    }
}

const validationInterest = {
    messageNode: document.querySelector("#interest-message"),
    state: "empty",
    joinError: "관심사를 정확히 입력해주세요.",
    minimun: 3,

    printMessage: {
        empty: undefined,
        pass: (messageNode) => { 
            messageUtil.hideMessage(messageNode); 
            constant.setState("pass", validationInterest)
        },
        fail: (messageNode) => { 
            messageUtil.showMessage(messageNode); 
            constant.setState("fail", validationInterest)
        },
    },

    init(){
        let interstWrapper = document.querySelector(".interest-input-wrapper");
        interstWrapper.addEventListener("focusout", function(){
            const type = this.validateInterest(tags.tagList)
            this.printMessage[type](this.messageNode)
        }.bind(this))
    },
    validateInterest(tagList) {
        if (tagList.length < this.minimun) return "fail"
        return "pass"
    }
}

const validationList = [
    validationForId, validationPassword, validationPasswordReconfirm,
    validationName, validationBirthDate, validationGender,
    validationEmail, validationPhone, validationInterest
]



/***/ }),
/* 5 */
/***/ (function(module, exports) {

const is_util = {
    isEmpty(input) {
        return (input === undefined || input === null || input.length === 0);
    }
}

const async_util = {
    submitAfter0Seconds(formNode){
        return new Promise(resolve => {
            setTimeout(() => {
                formNode.submit();
            }, 0)
        })
    }
}

const dom_util = {
    registerBlurEvent(element, caller) {
        element.addEventListener("blur", function () {
            let inputValue = element.value;
            let messageType = this.validateInput(inputValue)
            this.printMessage[messageType](this.messageNode);
        }.bind(caller))
    },

    //addClass & removeClass 출처: https://unikys.tistory.com/301
    addClass(element, className){
        let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
        if (check.test(element.className) === false) { 
            element.className += " " + className; 
        }

    },
    removeClass(element, className){
        let check = new RegExp("(\\s|^)" + className + "(\\s|$)"); 
        if (check.test(element.className) === true) { 
            element.className = element.className.replace(check, " ").trim();
        }
    }
}

const message = {
    emptyMessage: "필수 정보입니다.",

    id: {
        pass: "사용 가능한 아이디입니다.",
        fail: "5~20자의 영문 소문자, 숫자와 특수기호(_)(-) 만 사용 가능합니다.",
        fail_duplication: "이미 존재하는 아이디입니다."
    },
    password: {
        pass: "안전한 비밀번호입니다.",
        fail_Length: "8자 이상 16자 이하로 입력해주세요.",
        fail_Character: "영문 대문자, 숫자, 특수문자를 최소 1자 이상 포함해주세요.",
    },
    passwordReconfirm: {
        pass: "비밀번호가 일치합니다.",
        fail: "비밀번호가 일치하지 않습니다.",
    },
    name: {
        pass: "멋진 이름이네요!",
        fail: "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백, 숫자 사용 불가)"
    },
    birthDate: {
        range: "가입할 수 없는 나이입니다 죄송해요ㅠㅠ",
        invalid: "태어난 날짜를 정확하게 입력하세요.",
        day: "태어난 일을 정확하게 입력하세요."
    }
}

const messageUtil = {
    showMessage(element) {
        element.setAttribute('style', 'display: block;');
    },
    hideMessage(element) {
        element.setAttribute('style', 'display: none;');
    },
    setMessageType(element, type) {
        element.setAttribute('class', `message ${type}`);
    },
    setMessage(element, message) {
        element.innerHTML = message;
    },
    addPassMessage(selector, message) {
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "pass");
        this.setMessage(messageNode, message);
    },
    addFailMessage(selector, message) {
        const messageNode = document.querySelector(selector);
        this.showMessage(messageNode);
        this.setMessageType(messageNode, "fail");
        this.setMessage(messageNode, message);
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2phdmFzY3JpcHRzL3RvZG9fam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvdG9kb19qb2luX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvdG9kb19qb2luX2ludGVyZXN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy90b2RvX2pvaW5fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2phdmFzY3JpcHRzL3RvZG9fam9pbl92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsZUFBZSxtQkFBTyxDQUFDLENBQXVCO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLENBQXlCO0FBQ2xELGNBQWMsbUJBQU8sQ0FBQyxDQUFzQjtBQUM1QyxtQkFBbUIsbUJBQU8sQ0FBQyxDQUEyQjtBQUN0RCxhQUFhLG1CQUFPLENBQUMsQ0FBVzs7O0FBR2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlELFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMENBQTBDO0FBQzFDLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNB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QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQSxrRTtBQUNBLHFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELEtBQUs7QUFDTDtBQUNBLHFEQUFxRDtBQUNyRCxLQUFLO0FBQ0w7QUFDQSxpREFBaUQsS0FBSztBQUN0RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGJ1dHRvbiA9IHJlcXVpcmUoJy4vdG9kb19qb2luX2J1dHRvbi5qcycpXHJcbmNvbnN0IGludGVyZXN0ID0gcmVxdWlyZSgnLi90b2RvX2pvaW5faW50ZXJlc3QuanMnKVxyXG5jb25zdCBtb2RhbCA9IHJlcXVpcmUoJy4vdG9kb19qb2luX21vZGFsLmpzJylcclxuY29uc3QgdmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vdG9kb19qb2luX3ZhbGlkYXRpb24uanMnKVxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsLmpzJylcclxuXHJcblxyXG50YWdzLmFkZEZvY3VzKCk7XHJcbnRhZ3MuYWRkQXV0b0NoYW5nZVNpemUoKTtcclxuaW50ZXJlc3QuaW5pdCgpO1xyXG5cclxuaW5pdGlhbGl6YXRpb25CdXR0b24uaW5pdCgpXHJcbmpvaW5CdXR0b24uaW5pdCgpXHJcblxyXG50ZXJtLmluaXQoKVxyXG5cclxudmFsaWRhdGlvbkZvcklkLmluaXQoKTtcclxudmFsaWRhdGlvblBhc3N3b3JkLmluaXQoKTtcclxudmFsaWRhdGlvblBhc3N3b3JkUmVjb25maXJtLmluaXQoKTtcclxudmFsaWRhdGlvbk5hbWUuaW5pdCgpO1xyXG52YWxpZGF0aW9uQmlydGhEYXRlLmluaXQoKTtcclxudmFsaWRhdGlvbkdlbmRlci5pbml0KCk7XHJcbnZhbGlkYXRpb25FbWFpbC5pbml0KCk7XHJcbnZhbGlkYXRpb25QaG9uZS5pbml0KCk7XHJcbnZhbGlkYXRpb25JbnRlcmVzdC5pbml0KCk7IiwiY29uc3QgaW5pdGlhbGl6YXRpb25CdXR0b24gPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucHJldmVudFN1Ym1pdCgpXHJcbiAgICAgICAgdGhpcy5hZGRPcGVuTW9kYWxFdmVudCgpXHJcbiAgICAgICAgdGhpcy5hZGRJbml0aWFsaXphdGlvbkV2ZW50KClcclxuICAgICAgICB0aGlzLmFkZENhbmNsZUV2ZW50KClcclxuICAgIH0sXHJcbiAgICBhZGRPcGVuTW9kYWxFdmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luaXRpYWxpemF0aW9uLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRfX292ZXJsYXlcIikucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50U3VibWl0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBpbml0aWFsaXphdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5pdGlhbGl6YXRpb24tYnV0dG9uXCIpXHJcbiAgICAgICAgaW5pdGlhbGl6YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYWRkSW5pdGlhbGl6YXRpb25FdmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaW5pdGFsaXphdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdF9fYWdyZWVcIilcclxuICAgICAgICBpbml0YWxpemF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuam9pbl9mb3JtXCIpLnJlc2V0KClcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbml0X19vdmVybGF5XCIpLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbCBoaWRkZW5cIilcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFkZENhbmNsZUV2ZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRfX2NhbmNlbFwiKVxyXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRfX292ZXJsYXlcIikucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsIGhpZGRlblwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG59XHJcblxyXG5jb25zdCBqb2luQnV0dG9uID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnByZXZlbnRTdWJtaXQoKVxyXG4gICAgICAgIHRoaXMuYWRkQ2hlY2tFdmVudCgpXHJcbiAgICAgICAgdGhpcy5hZGRDbG9zZUV2ZW50KClcclxuICAgIH0sXHJcblxyXG4gICAgcHJldmVudFN1Ym1pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgam9pbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam9pbi1idXR0b25cIilcclxuICAgICAgICBqb2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRDaGVja0V2ZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBqb2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb2luLWJ1dHRvblwiKVxyXG4gICAgICAgIGpvaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbXB0eUlucHV0KClcclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICB9LFxyXG4gICAgY2hlY2tFbXB0eUlucHV0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBlcnJvckxpc3QgPSBbXVxyXG5cclxuICAgICAgICAvL2NoZWNrIGlucHV0XHJcbiAgICAgICAgdmFsaWRhdGlvbkxpc3QuZm9yRWFjaCgodmFsaWRhdGlvbk9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWxpZGF0aW9uT2JqZWN0LnN0YXRlICE9PSBcInBhc3NcIikgZXJyb3JMaXN0LnB1c2godmFsaWRhdGlvbk9iamVjdC5qb2luRXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL+yytO2BrOuwleyKpC0+aW5wdXQuY2hlY2tlZFxyXG4gICAgICAgIGlmICh0ZXJtLnN0YXRlICE9PSBcInBhc3NcIikgZXJyb3JMaXN0LnB1c2godGVybS5qb2luRXJyb3IpXHJcblxyXG4gICAgICAgIC8v7JeQ65+s6rCAIOyeiOuLpOuptCDrqqjri6zsnYQg652E7Jq064ukLlxyXG4gICAgICAgIGlmIChlcnJvckxpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbERpdihlcnJvckxpc3QpXHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGVycm9yTGlzdClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IGludGVyZXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludGVyZXN0XCIpXHJcbiAgICAgICAgICAgIGludGVyZXN0SW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0YWdzLnRhZ0xpc3QpXHJcbiAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qb2luX2Zvcm1cIilcclxuICAgICAgICAgICAgYXN5bmNfdXRpbC5zdWJtaXRBZnRlcjBTZWNvbmRzKGZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuTW9kYWw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qb2luX19vdmVybGF5XCIpLnBhcmVudE5vZGVcclxuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsXCIpXHJcbiAgICB9LFxyXG4gICAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpvaW5fX292ZXJsYXlcIikucGFyZW50Tm9kZVxyXG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwgaGlkZGVuXCIpXHJcbiAgICB9LFxyXG5cclxuICAgIGZpbGxEaXY6IGZ1bmN0aW9uKGVycm9yTGlzdCl7XHJcbiAgICAgICAgbGV0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qb2luX19jb250ZW50IGgyXCIpLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGVycm9yTGlzdC5mb3JFYWNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgICAgICBsZXQgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yKVxyXG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3VGV4dClcclxuXHJcbiAgICAgICAgICAgIGVycm9yRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNsZWFyRGl2OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuam9pbl9fY29udGVudCBoMlwiKS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBlcnJvckRpdi5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZENsb3NlRXZlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpvaW5fX2FncmVlXCIpXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICAgICAgdGhpcy5jbGVhckRpdigpXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJjb25zdCB0YWdzID0ge1xyXG4gICAgaW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50ZXJlc3RcIiksXHJcbiAgICB3cmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludGVyZXN0LWlucHV0LXdyYXBwZXJcIiksXHJcbiAgICBkZWZhdWx0U2l6ZTogMSxcclxuICAgIHRhZ0xpc3Q6IFtdLFxyXG5cclxuICAgIGFkZEZvY3VzOiBmdW5jdGlvbih3cmFwcGVyPXRoaXMud3JhcHBlcil7XHJcbiAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkb21fdXRpbC5hZGRDbGFzcyh3cmFwcGVyLCBcImZvY3VzXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkb21fdXRpbC5yZW1vdmVDbGFzcyh3cmFwcGVyLCBcImZvY3VzXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRBdXRvQ2hhbmdlU2l6ZTogZnVuY3Rpb24oaW5wdXQgPSB0aGlzLmlucHV0KXtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGtleUV2ZW50KXtcclxuICAgICAgICAgICAgaWYgKGtleUV2ZW50LmtleSA9PT0gJywnKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBpbnB1dC52YWx1ZS5sZW5ndGhcclxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBgJHtsZW5ndGg8PTA/IDE6bGVuZ3RofWApXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRDbG9zZTogZnVuY3Rpb24oYU5vZGUpe1xyXG4gICAgICAgIGFOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IHNwYW5Ob2RlID0gYU5vZGUucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRhZyh0aGlzLnRhZ0xpc3QsIHNwYW5Ob2RlLmlubmVyVGV4dClcclxuICAgICAgICAgICAgc3Bhbk5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGFuTm9kZSlcclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICB9LFxyXG4gICAgYWRkVmFsaWRhdGVFdmVudDogZnVuY3Rpb24oYU5vZGUpe1xyXG4gICAgICAgIGFOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsaWRhdGlvbkludGVyZXN0LnZhbGlkYXRlSW50ZXJlc3QodGhpcy50YWdMaXN0KVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50ZXJlc3QtbWVzc2FnZVwiKVxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uSW50ZXJlc3QucHJpbnRNZXNzYWdlW3R5cGVdKG1lc3NhZ2VOb2RlKVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVGFnOiBmdW5jdGlvbiAodGFnU3RyaW5nLCBpbnB1dCA9IHRoaXMuaW5wdXQsIHdyYXBwZXIgPSB0aGlzLndyYXBwZXIpIHtcclxuICAgICAgICBpZiAodGFnU3RyaW5nLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNwYW5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWdTdHJpbmcpXHJcbiAgICAgICAgc3Bhbk5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpXHJcbiAgICAgICAgc3Bhbk5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWdcIilcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgICAgIGNvbnN0IHggPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgneCcpXHJcbiAgICAgICAgdGhpcy5hZGRDbG9zZShhTm9kZSlcclxuICAgICAgICB0aGlzLmFkZFZhbGlkYXRlRXZlbnQoYU5vZGUpXHJcbiAgICAgICAgYU5vZGUuYXBwZW5kQ2hpbGQoeClcclxuICAgICAgICBzcGFuTm9kZS5hcHBlbmRDaGlsZChhTm9kZSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRhZ0xpc3QucHVzaCh0YWdTdHJpbmcpXHJcbiAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUoc3Bhbk5vZGUsIGlucHV0KVxyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhZzogZnVuY3Rpb24odGFnTGlzdCwgdGFnU3RyaW5nKXtcclxuICAgICAgICBsZXQgdGFnSW5kZXggPSB0YWdMaXN0LmluZGV4T2YodGFnU3RyaW5nKVxyXG4gICAgICAgIHRhZ0xpc3Quc3BsaWNlKHRhZ0luZGV4LCAxKVxyXG4gICAgfSxcclxuICAgIG1vZGlmeVRhZzogZnVuY3Rpb24oaW5wdXRTdG5nLCBpbnB1dCA9IHRoaXMuaW5wdXQsIHRhZ0xpc3QgPSB0aGlzLnRhZ0xpc3Qpe1xyXG4gICAgICAgIGlmIChpbnB1dFN0bmcubGVuZ3RoID49IDEpIHJldHVybjsgIC8v6ri47J206rCAIDDsnbwg65WMIOuwseyKpO2OmOydtOyKpCwg65Sc66as7Yq46rCAIOuTpOyWtOyZlOycvOuptCDsnpHrj5ntlZzri6QuXHJcbiAgICAgICAgaWYgKHRhZ0xpc3QubGVuZ3RoIDw9MCApIHJldHVybjsgLy/sp4Dsmrgg64W465Oc6rCAIOyXhuuLpOuptCDsooXro4xcclxuXHJcbiAgICAgICAgbGV0IHNwYW5Ob2RlID0gdGhpcy53cmFwcGVyXHJcbiAgICAgICAgLmxhc3RDaGlsZFxyXG4gICAgICAgIC5wcmV2aW91c1NpYmxpbmdcclxuICAgICAgICBzcGFuTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNwYW5Ob2RlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0YWdTdHJpbmcgPSB0YWdMaXN0W3RhZ0xpc3QubGVuZ3RoLTFdXHJcbiAgICAgICAgY29uc29sZS5sb2codGFnU3RyaW5nKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlVGFnKHRhZ0xpc3QsIHRhZ1N0cmluZylcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHRhZ1N0cmluZ1xyXG4gICAgICAgIGlucHV0LnNpemUgPSB0YWdTdHJpbmcubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBpbml0SW5wdXQ6IGZ1bmN0aW9uIChpbnB1dCA9IHRoaXMuaW5wdXQpIHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIH0sXHJcbiAgICBpbml0U2l6ZTogZnVuY3Rpb24gKGlucHV0ID0gdGhpcy5pbnB1dCkge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInNpemVcIiwgdGhpcy5kZWZhdWx0U2l6ZSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaW50ZXJlc3QgPSB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHR4dE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludGVyZXN0XCIpXHJcbiAgICAgICAgbGV0IGV4Y2VwdGlvbktleSA9IFtcIkJhY2tzcGFjZVwiLCBcIkRlbGV0ZVwiLCBcIixcIl1cclxuICAgICAgICBcclxuICAgICAgICAvL+yJvO2RnOydvCDrlYzsnZgg7J2067Kk7Yq4IOy2lOqwgFxyXG4gICAgICAgIHR4dE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGlucHV0Q2hhcil7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50S2V5ID0gaW5wdXRDaGFyLmtleVxyXG4gICAgICAgICAgICBsZXQgaW5wdXRTdHJpbmcgPSB0YWdzLmlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIGlucHV0U3RyaW5nID0gaW5wdXRTdHJpbmcuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY3VycmVudEtleUluZGV4ID0gZXhjZXB0aW9uS2V5LmluZGV4T2YoY3VycmVudEtleSlcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRLZXlJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGFncy5hZGRUYWcoaW5wdXRTdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB0YWdzLmluaXRJbnB1dCgpXHJcbiAgICAgICAgICAgICAgICB0YWdzLmluaXRTaXplKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0YWdzKSlcclxuXHJcbiAgICAgICAgLy/rsLHsiqTtjpjsnbTsiqQsIOuUnOumrO2KuOydvCDrlYzsnZgg7J2067Kk7Yq4IOy2lOqwgFxyXG4gICAgICAgIHR4dE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oaW5wdXRDaGFyKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRLZXkgPSBpbnB1dENoYXIua2V5XHJcbiAgICAgICAgICAgIGxldCBpbnB1dFN0cmluZyA9IHRhZ3MuaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50S2V5SW5kZXggPSBleGNlcHRpb25LZXkuaW5kZXhPZihjdXJyZW50S2V5KVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudEtleUluZGV4ID09PSAwIHx8IGN1cnJlbnRLZXlJbmRleCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0YWdzLm1vZGlmeVRhZyhpbnB1dFN0cmluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0YWdzKSlcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCB0ZXJtID0ge1xyXG4gICAgc3RhdGU6IFwiZmFpbFwiLFxyXG4gICAgam9pbkVycm9yOiBcIuyVveq0gOydhCDsnb3qs6Ag64+Z7J2Y7ZW07KO87IS47JqULlwiLFxyXG4gICAgbWVzc2FnZTogYFxyXG4gICAgICAgIOygleuztO2GteyLoOunneuylSDqt5zsoJXsl5Ag65Sw6528IOu2gOyKpO2KuOy6oO2UhOyXkCDtmozsm5DqsIDsnoUg7Iug7LKt7ZWY7Iuc64qUIOu2hOq7mCDsiJjsp5HtlZjripQg6rCc7J247KCV67O07J2YIO2VreuqqSwg6rCc7J247KCV67O07J2YIOyImOynkSDrsI8g7J207Jqp66qp7KCBLCDqsJzsnbjsoJXrs7TsnZgg67O07JygIOuwjyDsnbTsmqnquLDqsITsnYQg7JWI64K0IOuTnOumrOyYpOuLiCDsnpDshLjtnogg7J297J2AIO2bhCDrj5nsnZjtlZjsl6wg7KO87Iuc6riwIOuwlOuejeuLiOuLpC5cclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHJvbmc+MS4g7IiY7KeR7ZWY64qUIOqwnOyduOygleuztOydmCDtla3rqqk8L3N0cm9uZz48YnI+XHJcbiAgICAgICAg7LWc7LSIIO2ajOybkOqwgOyehSDri7nsi5wg7JWE656Y7JmAIOqwmeydgCDstZzshoztlZzsnZgg6rCc7J247KCV67O066W8IO2VhOyImO2VreuqqeycvOuhnCDsiJjsp5HtlZjqs6Ag7J6I7Iq164uI64ukLjxicj5cclxuICAgICAgICAtIO2VhOyImO2VreuqqSA6IOyVhOydtOuUlCwg67mE67CA67KI7Zi4LCDsnbTrpoQsIOyDneuFhOyblOydvCwg7ISx67OELCDsnbTrqZTsnbwsIO2ctOuMgOyghO2ZlCwg6rSA7Ius7IKsPGJyPjxicj5cclxuICAgICAgICBcclxuICAgICAgICA8c3Ryb25nPjIuIOqwnOyduOygleuztOydmCDsiJjsp5Eg67CPIOydtOyaqSDrqqnsoIE8L3N0cm9uZz48YnI+XHJcbiAgICAgICAg6rCALiDsu6jthZDsuKAg7KCc6rO1LCDtirnsoJUg66ee7LakIOyEnOu5hOyKpCDsoJzqs7U8YnI+XHJcbiAgICAgICAg64KYLiDtmozsm5DsoJwg7ISc67mE7IqkIOygnOqztSwg6rCc7J247Iud67OELCDrtoDsiqTtirjsuqDtlIQg7J207Jqp7JW96rSAIOychOuwmCDtmozsm5Dsl5Ag64yA7ZWcIOydtOyaqeygnO2VnCDsobDsuZgsIOyEnOu5hOyKpOydmCDsm5DtmZztlZwg7Jq07JiB7JeQIOyngOyepeydhCDrr7jsuZjripQg7ZaJ7JyEIOuwjyDshJzruYTsiqQg67aA7KCV7J207JqpIO2WieychCDsoJzsnqxcclxuICAgICAgICA8YnI+PGJyPlxyXG5cclxuICAgICAgICA8c3Ryb25nPjMuIOqwnOyduOygleuztOydmCDrs7TsnKAg67CPIOydtOyaqeq4sOqwhDwvc3Ryb25nPjxicj5cclxuICAgICAgICDsnbTsmqnsnpDsnZgg6rCc7J247KCV67O064qUIOybkOy5meyggeycvOuhnCDqsJzsnbjsoJXrs7TsnZgg7IiY7KeRIOuwjyDsnbTsmqnrqqnsoIHsnbQg64us7ISx65CY66m0IOyngOyytCDsl4bsnbQg7YyM6riw7ZWp64uI64ukLiDri6gsIOuLpOydjOydmCDsoJXrs7Tsl5Ag64yA7ZW07ISc64qUIOyVhOuemOydmCDsnbTsnKDroZwg66qF7Iuc7ZWcIOq4sOqwhCDrj5nslYgg67O07KG07ZWp64uI64ukLlxyXG4gICAgICAgIDxicj48YnI+XHJcbiAgICAgICAg6rCALiDtmozsgqwg64K067aAIOuwqey5qOyXkCDsnZjtlZwg7KCV67O067O07JygIOyCrOycoDxicj5cclxuICAgICAgICAtIOu2gOygleydtOyaqeq4sOuhnSjrtoDsoJXqsIDsnoUsIOynleqzhOq4sOuhnSDrk7HsnZgg67mE7KCV7IOB7KCBIOyEnOu5hOyKpCDsnbTsmqnquLDroZ0pPGJyPlxyXG4gICAgICAgIOuztOyhtCDtla3rqqkgOiDqsIDsnoXsnbjspp0g7Zy064yA7Y+wIOuyiO2YuDxicj5cclxuICAgICAgICDrs7TsobQg7J207JygIDog67aA7KCVIOqwgOyehSDrsI8g7J207JqpIOuwqeyngDxicj5cclxuICAgICAgICDrs7TsobQg6riw6rCEIDogNuqwnOyblDxicj5cclxuICAgICAgICDigLsgJ+u2gOygleydtOyaqeq4sOuhnSfsnbTrnoAg67aA7KCVIOqwgOyehSDrsI8g7Jq07JiB7JuQ7LmZ7JeQIOychOuwsOuQmOuKlCDqsozsi5zquIAg7J6R7ISxIOuTseycvOuhnCDsnbjtlbQg7ZqM7IKs66Gc67aA7YSwIOydtOyaqeygnO2VnCDrk7HsnYQg64u57ZWcIOq4sOuhneyeheuLiOuLpC5cclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIOuCmC4g6rSA66Co67KV66C57JeQIOydmO2VnCDsoJXrs7Trs7TsnKAg7IKs7JygPGJyPlxyXG4gICAgICAgIOyDgeuylSwg7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpDrs7TtmLjsl5Ag6rSA7ZWcIOuyleuloCDrk7Eg6rSA6rOE67KV66C57J2YIOq3nOygleyXkCDsnZjtlZjsl6wg67O07KG07ZWgIO2VhOyalOqwgCDsnojripQg6rK97JqwIO2ajOyCrOuKlCDqtIDqs4TrspXroLnsl5DshJwg7KCV7ZWcIOydvOygle2VnCDquLDqsIQg64+Z7JWIIO2ajOybkOygleuztOulvCDrs7TqtIDtlanri4jri6QuIOydtCDqsr3smrAg7ZqM7IKs64qUIOuztOq0gO2VmOuKlCDsoJXrs7Trpbwg6re4IOuztOq0gOydmCDrqqnsoIHsnLzroZzrp4wg7J207Jqp7ZWY66mwIOuztOyhtOq4sOqwhOydgCDslYTrnpjsmYAg6rCZ7Iq164uI64ukLiBcclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIC0g6rOE7JW9IOuYkOuKlCDssq3slb3ssqDtmowg65Ox7JeQIOq0gO2VnCDquLDroZ08YnI+XHJcbiAgICAgICAg67O07KG0IOydtOycoCA6IOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6Q67O07Zi47JeQIOq0gO2VnCDrspXrpaA8YnI+XHJcbiAgICAgICAg67O07KG0IOq4sOqwhCA6IDXrhYRcclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIC0g7IaM67mE7J6Q7J2YIOu2iOunjCDrmJDripQg67aE7J+B7LKY66as7JeQIOq0gO2VnCDquLDroZ08YnI+XHJcbiAgICAgICAg67O07KG0IOydtOycoCA6IOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6Q67O07Zi47JeQIOq0gO2VnCDrspXrpaA8YnI+XHJcbiAgICAgICAg67O07KG0IOq4sOqwhCA6IDPrhYRcclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIC0g7Ju57IKs7J207Yq4IOuwqeusuOq4sOuhnTxicj5cclxuICAgICAgICDrs7TsobQg7J207JygIDog7Ya17Iug67mE67CA67O07Zi467KVPGJyPlxyXG4gICAgICAgIOuztOyhtCDquLDqsIQgOiAz6rCc7JuUPGJyPlxyXG4gICAgYCxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZmlsbFRlcm0oKVxyXG4gICAgICAgIHRoaXMuYWRkT3BlbkV2ZW50KClcclxuICAgICAgICB0aGlzLmFkZENsb3NlRXZlbnQoKVxyXG4gICAgICAgIHRoaXMuYWRkU2Nyb2xsRXZlbnQoKVxyXG4gICAgfSxcclxuXHJcbiAgICBmaWxsVGVybTogZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsX190ZXJtXCIpLmlubmVySFRNTCA9IHRoaXMubWVzc2FnZVxyXG4gICAgfSxcclxuICAgIGFkZE9wZW5FdmVudDogZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5qb2luLXRpdGxlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX292ZXJsYXlcIikucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRDbG9zZUV2ZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v7Ja065a76rKMIO2VtOyVvCDrsJTquaXsnYQg7YG066at7ZaI7J2EIOuVjCDqurzsp4Dqsowg7ZWY7KeAP1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNsaWNrRXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIC8vICAgICBpZihjbGlja0V2ZW50LnRhcmdldCAhPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jb250ZW50XCIpKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrRXZlbnQpXHJcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19vdmVybGF5XCIpLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbCBoaWRkZW5cIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1yb3cgYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19vdmVybGF5XCIpLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbCBoaWRkZW5cIilcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFkZFNjcm9sbEV2ZW50OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxfX3Rlcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsX190ZXJtXCIpXHJcbiAgICAgICAgICAgIGxldCB1c2VyU2Nyb2xsID0gc2Nyb2xsRGl2Lm9mZnNldEhlaWdodCArIHNjcm9sbERpdi5zY3JvbGxUb3AgKyAxXHJcbiAgICAgICAgICAgIGxldCBjbGVhclNjcm9sbCA9IHNjcm9sbERpdi5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh1c2VyU2Nyb2xsID49IGNsZWFyU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8v7Iqk7YGs66Gk7J2EIOuBneq5jOyngCDtlZwg7ZuELCDssrTtgazrsoTtirzsnYQg7YG066at7ZWY66m0XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlcm0tYnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v7JW96rSA7LC97J20IOuLq+2ejOuLpFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX292ZXJsYXlcIikucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsIGhpZGRlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8v7LK07YGs67CV7Iqk6rCAIOyytO2BrOuQnOuLpC5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlcm0tYm94X19jaGVja2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zdGF0ZeulvCBwYXNz66GcIOunjOuToOuLpC5cclxuICAgICAgICAgICAgICAgICAgICB0ZXJtLnN0YXRlID0gXCJwYXNzXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvL2NvbnN0YW50IHZhcmlhYmxlIG9iamVjdFxyXG5jb25zdCBjb25zdGFudCA9IHtcclxuICAgIGlkTWluTGVuZ3RoOiA1LFxyXG4gICAgcGFzc3dvcmRNaW5MZW5ndGg6IDgsXHJcbiAgICBcclxuICAgIHNldFN0YXRlOiBmdW5jdGlvbihzdGF0ZSwgY2FsbGVyKXtcclxuICAgICAgICBjYWxsZXIuc3RhdGUgPSBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG4vL09iamVjdCBMaXRlcmFsIGZvciBWYWxpZGF0aW9uXHJcbmNvbnN0IHZhbGlkYXRpb25Gb3JJZCA9IHtcclxuICAgIG1pbkxlbmd0aDogY29uc3RhbnQuaWRNaW5MZW5ndGgsXHJcbiAgICBzdGF0ZTogXCJlbXB0eVwiLFxyXG4gICAgam9pbkVycm9yOiBcIuyVhOydtOuUlOulvCDsoJXtmZXtnogg7J6F66Cl7ZW07KO87IS47JqULlwiLFxyXG5cclxuICAgIHJlZ0V4cDogL1teYS16MC05XFxfXFwtXS8sXHJcbiAgICBwcmludE1lc3NhZ2U6IHtcclxuICAgICAgICBlbXB0eTogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjaWQtbWVzc2FnZVwiLCBtZXNzYWdlLmVtcHR5TWVzc2FnZSk7IFxyXG4gICAgICAgICAgICBjb25zdGFudC5zZXRTdGF0ZShcImVtcHR5XCIsIHZhbGlkYXRpb25Gb3JJZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3M6ICgpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZFBhc3NNZXNzYWdlKFwiI2lkLW1lc3NhZ2VcIiwgbWVzc2FnZS5pZC5wYXNzKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwicGFzc1wiLCB2YWxpZGF0aW9uRm9ySWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZEZhaWxNZXNzYWdlKFwiI2lkLW1lc3NhZ2VcIiwgbWVzc2FnZS5pZC5mYWlsKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uRm9ySWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsX2R1cGxpY2F0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZEZhaWxNZXNzYWdlKFwiI2lkLW1lc3NhZ2VcIiwgbWVzc2FnZS5pZC5mYWlsX2R1cGxpY2F0aW9uKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uRm9ySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgbGV0IGlucHV0Rm9ySWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkXCIpO1xyXG4gICAgICAgIGRvbV91dGlsLnJlZ2lzdGVyQmx1ckV2ZW50KGlucHV0Rm9ySWQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXRpc2Z5TGVuZ3RoKGlkKSB7ICBcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5MZW5ndGggPD0gaWQubGVuZ3RoO1xyXG4gICAgfSwgICAgXHJcbiAgICBoYXNJbnZhbGlkQ2hhcmFjdGVyKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnRXhwLnRlc3QoaWQpO1xyXG4gICAgfSxcclxuICAgIGlzRHVwbGljYXRlZChpZCl7XHJcbiAgICAgICAgLy8g7J2R64u17JeQIOuMgO2VnCDrsJjsnZHtlajsiJgg7ISk7KCVXHJcbiAgICAgICAgbGV0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2VcclxuICAgICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvL+yEnOuyhOuhnOu2gO2EsCDsnZHri7XsnYQg67Cb7J2MXHJcbiAgICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUE9TVCDsmpTssq0g67O064K06riwXHJcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignUE9TVCcsIHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJy9kdXBsaWNhdGlvbi1jaGVjaycsIGZhbHNlKVxyXG4gICAgICAgIGh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKVxyXG4gICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoYGlkPSR7aWR9YClcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVJbnB1dChpZCkge1xyXG4gICAgICAgIGlmIChpc191dGlsLmlzRW1wdHkoaWQpKSByZXR1cm4gXCJlbXB0eVwiO1xyXG4gICAgICAgIGlmICh0aGlzLnNhdGlzZnlMZW5ndGgoaWQpID09PSBmYWxzZSkgcmV0dXJuIFwiZmFpbFwiXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSW52YWxpZENoYXJhY3RlcihpZCkgPT09IHRydWUpIHJldHVybiBcImZhaWxcIjtcclxuICAgICAgICBpZiAodGhpcy5pc0R1cGxpY2F0ZWQoaWQpID09PSB0cnVlKSByZXR1cm4gXCJmYWlsX2R1cGxpY2F0aW9uXCJcclxuICAgICAgICByZXR1cm4gXCJwYXNzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXNzd29yZCA9IHtcclxuICAgIG1pbkxlbmd0aDogY29uc3RhbnQucGFzc3dvcmRNaW5MZW5ndGgsXHJcbiAgICBzdGF0ZTogXCJlbXB0eVwiLFxyXG4gICAgam9pbkVycm9yOiBcIuu5hOuwgOuyiO2YuOulvCDsoJXtmZXtnogg7J6F66Cl7ZW07KO87IS47JqULlwiLFxyXG5cclxuICAgIHJlZ0V4cF9VcHBlckNhc2U6IC9bQS1aXS8sXHJcbiAgICByZWdFeHBfTnVtYmVyOiAvWzAtOV0vLFxyXG4gICAgcmVnRXhwX1NwZWNpYWw6IC9bXjAtOWEtekEtWlxcblxcdFxcc10vLFxyXG5cclxuICAgIHByaW50TWVzc2FnZToge1xyXG4gICAgICAgIGVtcHR5OiAoKSA9PiB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlVXRpbC5hZGRGYWlsTWVzc2FnZShcIiNwYXNzd29yZC1tZXNzYWdlXCIsIG1lc3NhZ2UuZW1wdHlNZXNzYWdlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZW1wdHlcIiwgdmFsaWRhdGlvblBhc3N3b3JkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzczogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkUGFzc01lc3NhZ2UoXCIjcGFzc3dvcmQtbWVzc2FnZVwiLCBtZXNzYWdlLnBhc3N3b3JkLnBhc3MpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25QYXNzd29yZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWxfbGVuZ3RoOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZEZhaWxNZXNzYWdlKFwiI3Bhc3N3b3JkLW1lc3NhZ2VcIiwgbWVzc2FnZS5wYXNzd29yZC5mYWlsX0xlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uUGFzc3dvcmQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsX2NoYXJhY3RlcjogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjcGFzc3dvcmQtbWVzc2FnZVwiLCBtZXNzYWdlLnBhc3N3b3JkLmZhaWxfQ2hhcmFjdGVyKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uUGFzc3dvcmQpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgbGV0IGlucHV0Rm9yUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xyXG4gICAgICAgIGRvbV91dGlsLnJlZ2lzdGVyQmx1ckV2ZW50KGlucHV0Rm9yUGFzc3dvcmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXRpc2Z5TGVuZ3RoKHBhc3N3b3JkKSB7ICBcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5MZW5ndGggPD0gcGFzc3dvcmQubGVuZ3RoO1xyXG4gICAgfSwgICAgXHJcbiAgICBoYXNVcHBlckNhc2UocGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWdFeHBfVXBwZXJDYXNlLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgfSxcclxuICAgIGhhc051bWJlcihwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0V4cF9OdW1iZXIudGVzdChwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgaGFzU3BlY2lhbChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0V4cF9TcGVjaWFsLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRlSW5wdXQocGFzc3dvcmQpIHtcclxuICAgICAgICBpZiAoaXNfdXRpbC5pc0VtcHR5KHBhc3N3b3JkKSkgcmV0dXJuIFwiZW1wdHlcIjtcclxuICAgICAgICBpZiAodGhpcy5zYXRpc2Z5TGVuZ3RoKHBhc3N3b3JkKSA9PT0gZmFsc2UpIHJldHVybiBcImZhaWxfbGVuZ3RoXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVXBwZXJDYXNlKHBhc3N3b3JkKSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgfHwgdGhpcy5oYXNOdW1iZXIocGFzc3dvcmQpID09PSBmYWxzZVxyXG4gICAgICAgICAgICB8fCB0aGlzLmhhc1NwZWNpYWwocGFzc3dvcmQpID09PSBmYWxzZSkgcmV0dXJuIFwiZmFpbF9jaGFyYWN0ZXJcIjtcclxuICAgICAgICByZXR1cm4gXCJwYXNzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25QYXNzd29yZFJlY29uZmlybSA9IHtcclxuICAgIHN0YXRlOiBcImVtcHR5XCIsXHJcbiAgICBqb2luRXJyb3I6IFwi67mE67CA67KI7Zi4IOyerO2ZleyduOydtCDsmKzrsJTrpbTsp4Ag7JWK7Iq164uI64ukLlwiLFxyXG4gICAgXHJcbiAgICBwcmludE1lc3NhZ2U6IHtcclxuICAgICAgICBlbXB0eTogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjcGFzc3dvcmQtcmVjb25maXJtLW1lc3NhZ2VcIiwgbWVzc2FnZS5lbXB0eU1lc3NhZ2UpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJlbXB0eVwiLCB2YWxpZGF0aW9uUGFzc3dvcmRSZWNvbmZpcm0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXNzOiAoKSA9PiB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlVXRpbC5hZGRQYXNzTWVzc2FnZShcIiNwYXNzd29yZC1yZWNvbmZpcm0tbWVzc2FnZVwiLCBtZXNzYWdlLnBhc3N3b3JkUmVjb25maXJtLnBhc3MpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25QYXNzd29yZFJlY29uZmlybSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICgpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZEZhaWxNZXNzYWdlKFwiI3Bhc3N3b3JkLXJlY29uZmlybS1tZXNzYWdlXCIsIG1lc3NhZ2UucGFzc3dvcmRSZWNvbmZpcm0uZmFpbCk7IFxyXG4gICAgICAgICAgICBjb25zdGFudC5zZXRTdGF0ZShcImZhaWxcIiwgdmFsaWRhdGlvblBhc3N3b3JkUmVjb25maXJtKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGxldCBpbnB1dEZvclBhc3N3b3JkUmVjb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZC1yZWNvbmZpcm1cIik7XHJcbiAgICAgICAgZG9tX3V0aWwucmVnaXN0ZXJCbHVyRXZlbnQoaW5wdXRGb3JQYXNzd29yZFJlY29uZmlybSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzRXF1YWwocGFzc3dvcmRSZWNvbmZpcm0pIHtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIikudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkID09PSBwYXNzd29yZFJlY29uZmlybTtcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZUlucHV0KHBhc3N3b3JkUmVjb25maXJtKSB7XHJcbiAgICAgICAgaWYgKGlzX3V0aWwuaXNFbXB0eShwYXNzd29yZFJlY29uZmlybSkpIHJldHVybiBcImVtcHR5XCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFcXVhbChwYXNzd29yZFJlY29uZmlybSkgPT09IGZhbHNlKSByZXR1cm4gXCJmYWlsXCI7XHJcbiAgICAgICAgcmV0dXJuIFwicGFzc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uTmFtZSA9IHtcclxuICAgIG1lc3NhZ2VOb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtbWVzc2FnZVwiKSxcclxuICAgIHN0YXRlOiBcImVtcHR5XCIsXHJcbiAgICBqb2luRXJyb3I6IFwi7J2066aE7J2EIOygle2Zle2eiCDsnoXroKXtlbTso7zshLjsmpQuXCIsXHJcbiAgICByZWdFeHA6IC9bXmEtekEtWuqwgC3tnqNdLyxcclxuXHJcbiAgICBwcmludE1lc3NhZ2U6IHtcclxuICAgICAgICBlbXB0eTogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjbmFtZS1tZXNzYWdlXCIsIG1lc3NhZ2UuZW1wdHlNZXNzYWdlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZW1wdHlcIiwgdmFsaWRhdGlvbk5hbWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXNzOiAoKSA9PiB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlVXRpbC5hZGRQYXNzTWVzc2FnZShcIiNuYW1lLW1lc3NhZ2VcIiwgbWVzc2FnZS5uYW1lLnBhc3MpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25OYW1lKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjbmFtZS1tZXNzYWdlXCIsIG1lc3NhZ2UubmFtZS5mYWlsKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uTmFtZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBsZXQgaW5wdXRGb3JOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xyXG4gICAgICAgIGRvbV91dGlsLnJlZ2lzdGVyQmx1ckV2ZW50KGlucHV0Rm9yTmFtZSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc0ludmFsaWRDaGFyYWN0ZXIobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0V4cC50ZXN0KG5hbWUpO1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRlSW5wdXQobmFtZSkge1xyXG4gICAgICAgIGlmIChpc191dGlsLmlzRW1wdHkobmFtZSkpIHJldHVybiBcImVtcHR5XCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSW52YWxpZENoYXJhY3RlcihuYW1lKSA9PT0gdHJ1ZSkgcmV0dXJuIFwiZmFpbFwiO1xyXG4gICAgICAgIHJldHVybiBcInBhc3NcIjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvbkdlbmRlciA9IHtcclxuICAgIG1lc3NhZ2VOb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlci1tZXNzYWdlXCIpLFxyXG4gICAgc3RhdGU6IFwiZW1wdHlcIixcclxuICAgIGpvaW5FcnJvcjogXCLshLHrs4TsnYQg7KCV7ZmV7Z6IIOyeheugpe2VtOyjvOyEuOyalC5cIixcclxuICAgIHByaW50TWVzc2FnZToge1xyXG4gICAgICAgIGVtcHR5OiAobWVzc2FnZU5vZGUpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLnNob3dNZXNzYWdlKG1lc3NhZ2VOb2RlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZW1wdHlcIiwgdmFsaWRhdGlvbkdlbmRlcilcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3M6IChtZXNzYWdlTm9kZSkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuaGlkZU1lc3NhZ2UobWVzc2FnZU5vZGUpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25HZW5kZXIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBsZXQgaW5wdXRGb3JHZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dlbmRlclwiKTtcclxuICAgICAgICBkb21fdXRpbC5yZWdpc3RlckJsdXJFdmVudChpbnB1dEZvckdlbmRlciwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkYXRlSW5wdXQoZ2VuZGVyKSB7XHJcbiAgICAgICAgaWYgKGlzX3V0aWwuaXNFbXB0eShnZW5kZXIpKSByZXR1cm4gXCJlbXB0eVwiO1xyXG4gICAgICAgIHJldHVybiBcInBhc3NcIjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvbkVtYWlsID0ge1xyXG4gICAgbWVzc2FnZU5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWwtbWVzc2FnZVwiKSxcclxuICAgIHN0YXRlOiBcImVtcHR5XCIsXHJcbiAgICBqb2luRXJyb3I6IFwi7J2066mU7J287J2EIOygle2Zle2eiCDsnoXroKXtlbTso7zshLjsmpQuXCIsXHJcbiAgICByZWdFeHBfRW1haWw6IC9eW1xcd1xcLV0rQFthLXpBLVpdK1xcLlthLXpBLVpdezIsfS8sXHJcbiAgICBcclxuICAgIHByaW50TWVzc2FnZToge1xyXG4gICAgICAgIGVtcHR5OiB1bmRlZmluZWQsXHJcbiAgICAgICAgcGFzczogZnVuY3Rpb24obWVzc2FnZU5vZGUpeyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuaGlkZU1lc3NhZ2UobWVzc2FnZU5vZGUpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25FbWFpbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChtZXNzYWdlTm9kZSkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuc2hvd01lc3NhZ2UobWVzc2FnZU5vZGUpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJmYWlsXCIsIHZhbGlkYXRpb25FbWFpbClcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgbGV0IGlucHV0Rm9yRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG4gICAgICAgIGRvbV91dGlsLnJlZ2lzdGVyQmx1ckV2ZW50KGlucHV0Rm9yRW1haWwsIHZhbGlkYXRpb25FbWFpbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc1ZhbGlkRm9ybShlbWFpbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0V4cF9FbWFpbC50ZXN0KGVtYWlsKTtcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZUlucHV0KGVtYWlsKSB7XHJcbiAgICAgICAgaWYgKGlzX3V0aWwuaXNFbXB0eShlbWFpbCkpIHJldHVybiBcImZhaWxcIjtcclxuICAgICAgICBpZiAodGhpcy5oYXNWYWxpZEZvcm0oZW1haWwpID09PSBmYWxzZSkgcmV0dXJuIFwiZmFpbFwiO1xyXG4gICAgICAgIHJldHVybiBcInBhc3NcIjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvblBob25lID0ge1xyXG4gICAgbWVzc2FnZU5vZGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtbWVzc2FnZVwiKSxcclxuICAgIHN0YXRlOiBcImVtcHR5XCIsXHJcbiAgICBqb2luRXJyb3I6IFwi7KCE7ZmU67KI7Zi466W8IOygle2Zle2eiCDsnoXroKXtlbTso7zshLjsmpQuXCIsXHJcbiAgICByZWdFeHBfMTBkaWdpdDogLygwMTApKFxcZHszfSkoXFxkezR9KS8sXHJcbiAgICByZWdFeHBfMTFkaWdpdDogLygwMTApKFxcZHs0fSkoXFxkezR9KS8sXHJcblxyXG4gICAgcHJpbnRNZXNzYWdlOiB7XHJcbiAgICAgICAgZW1wdHk6IHVuZGVmaW5lZCxcclxuICAgICAgICBwYXNzOiAobWVzc2FnZU5vZGUpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmhpZGVNZXNzYWdlKG1lc3NhZ2VOb2RlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwicGFzc1wiLCB2YWxpZGF0aW9uUGhvbmUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAobWVzc2FnZU5vZGUpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLnNob3dNZXNzYWdlKG1lc3NhZ2VOb2RlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uUGhvbmUpXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIGxldCBpbnB1dEZvclBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcclxuICAgICAgICBkb21fdXRpbC5yZWdpc3RlckJsdXJFdmVudChpbnB1dEZvclBob25lLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzVmFsaWRGb3JtKHBob25lKSB7XHJcbiAgICAgICAgaWYgKHBob25lLmxlbmd0aCA9PT0gMTApIHJldHVybiB0aGlzLnJlZ0V4cF8xMGRpZ2l0LnRlc3QocGhvbmUpO1xyXG4gICAgICAgIGlmIChwaG9uZS5sZW5ndGggPT09IDExKSByZXR1cm4gdGhpcy5yZWdFeHBfMTFkaWdpdC50ZXN0KHBob25lKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVJbnB1dChwaG9uZSkge1xyXG4gICAgICAgIGlmIChpc191dGlsLmlzRW1wdHkocGhvbmUpID09PSB0cnVlKSByZXR1cm4gXCJmYWlsXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsaWRGb3JtKHBob25lKSA9PT0gZmFsc2UpIHJldHVybiBcImZhaWxcIjtcclxuICAgICAgICByZXR1cm4gXCJwYXNzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25CaXJ0aERhdGUgPSB7XHJcbiAgICBtZXNzYWdlTm9kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiaXJ0aGRhdGUtbWVzc2FnZVwiKSxcclxuICAgIHN0YXRlOiBcImVtcHR5XCIsXHJcbiAgICBqb2luRXJyb3I6IFwi7IOd64WE7JuU7J287J2EIOygle2Zle2eiCDsnoXroKXtlbTso7zshLjsmpQuXCIsXHJcbiAgICByZWdFeHBfWWVhcjogL1xcZHs0fS8sXHJcblxyXG4gICAgcHJpbnRNZXNzYWdlOiB7XHJcbiAgICAgICAgZW1wdHk6IHVuZGVmaW5lZCxcclxuICAgICAgICBwYXNzOiAobWVzc2FnZU5vZGUpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmhpZGVNZXNzYWdlKG1lc3NhZ2VOb2RlKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwicGFzc1wiLCB2YWxpZGF0aW9uQmlydGhEYXRlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbF9yYW5nZTogKCkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuYWRkRmFpbE1lc3NhZ2UoXCIjYmlydGhkYXRlLW1lc3NhZ2VcIiwgbWVzc2FnZS5iaXJ0aERhdGUucmFuZ2UpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJmYWlsXCIsIHRoaXZhbGlkYXRpb25CaXJ0aERhdGVzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbF9pbnZhbGlkOiAoKSA9PiB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlVXRpbC5hZGRGYWlsTWVzc2FnZShcIiNiaXJ0aGRhdGUtbWVzc2FnZVwiLCBtZXNzYWdlLmJpcnRoRGF0ZS5pbnZhbGlkKTsgXHJcbiAgICAgICAgICAgIGNvbnN0YW50LnNldFN0YXRlKFwiZmFpbFwiLCB2YWxpZGF0aW9uQmlydGhEYXRlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbF9kYXk6ICgpID0+IHsgXHJcbiAgICAgICAgICAgIG1lc3NhZ2VVdGlsLmFkZEZhaWxNZXNzYWdlKFwiI2JpcnRoZGF0ZS1tZXNzYWdlXCIsIG1lc3NhZ2UuYmlydGhEYXRlLmRheSk7IFxyXG4gICAgICAgICAgICBjb25zdGFudC5zZXRTdGF0ZShcImZhaWxcIiwgdmFsaWRhdGlvbkJpcnRoRGF0ZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldElucHV0QXJyYXkobm9kZUFycmF5KXtcclxuICAgICAgICBjb25zdCBpbnB1dEFycmF5ID0gbm9kZUFycmF5Lm1hcChub2RlID0+IG5vZGUudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dEFycmF5O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgY29uc3Qgbm9kZUFycmF5ID0gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeXlcIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW1cIiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGRcIildOyBcclxuICAgICAgICBub2RlQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRBcnJheSA9IHRoaXMuZ2V0SW5wdXRBcnJheShub2RlQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VUeXBlID0gdGhpcy52YWxpZGF0ZUlucHV0KGlucHV0QXJyYXkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50TWVzc2FnZVttZXNzYWdlVHlwZV0odGhpcy5tZXNzYWdlTm9kZSk7XHJcbiAgICAgICAgICAgIH0uYmluZCh2YWxpZGF0aW9uQmlydGhEYXRlKSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBoYXM0ZGlnaXRZZWFyKHllYXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWdFeHBfWWVhci50ZXN0KHllYXIpO1xyXG4gICAgfSxcclxuICAgIGlzSW52YWxpZFllYXIoeWVhcil7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY29uc3QgY29tZUZyb21QYXN0ID0gKGN1cnJlbnRZZWFyIC0geWVhcikgPj0gMTAwO1xyXG4gICAgICAgIGNvbnN0IGNvbWVGcm9tRnV0dXJlID0gKGN1cnJlbnRZZWFyIC0geWVhcikgPCAxNTtcclxuICAgICAgICByZXR1cm4gKGNvbWVGcm9tUGFzdCB8fCBjb21lRnJvbUZ1dHVyZSk7XHJcbiAgICB9LFxyXG4gICAgaXNWYWxpZERheSh5ZWFyLCBtb250aCwgZGF5KXtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKTtcclxuICAgICAgICBjb25zdCBmaW5hbERheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICByZXR1cm4gKDEgPD0gZGF5ICYmIGRheSA8PSBmaW5hbERheSk7XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVJbnB1dChiaXJ0aERhdGUpIHtcclxuICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBiaXJ0aERhdGU7XHJcbiAgICAgICAgaWYgKGlzX3V0aWwuaXNFbXB0eSh5ZWFyKSA9PT0gdHJ1ZSkgcmV0dXJuIFwiZmFpbF9pbnZhbGlkXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzNGRpZ2l0WWVhcih5ZWFyKSA9PT0gZmFsc2UpIHJldHVybiBcImZhaWxfaW52YWxpZFwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZFllYXIoeWVhcikgPT09IHRydWUpIHJldHVybiBcImZhaWxfcmFuZ2VcIjtcclxuXHJcbiAgICAgICAgaWYgKGlzX3V0aWwuaXNFbXB0eShtb250aCkgPT09IHRydWUpIHJldHVybiBcImZhaWxfaW52YWxpZFwiO1xyXG5cclxuICAgICAgICBpZiAoaXNfdXRpbC5pc0VtcHR5KGRheSkgPT09IHRydWUpIHJldHVybiBcImZhaWxfaW52YWxpZFwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWREYXkoeWVhciwgbW9udGgsIGRheSkgPT09IGZhbHNlKSByZXR1cm4gXCJmYWlsX2RheVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gXCJwYXNzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHZhbGlkYXRpb25JbnRlcmVzdCA9IHtcclxuICAgIG1lc3NhZ2VOb2RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludGVyZXN0LW1lc3NhZ2VcIiksXHJcbiAgICBzdGF0ZTogXCJlbXB0eVwiLFxyXG4gICAgam9pbkVycm9yOiBcIuq0gOyLrOyCrOulvCDsoJXtmZXtnogg7J6F66Cl7ZW07KO87IS47JqULlwiLFxyXG4gICAgbWluaW11bjogMyxcclxuXHJcbiAgICBwcmludE1lc3NhZ2U6IHtcclxuICAgICAgICBlbXB0eTogdW5kZWZpbmVkLFxyXG4gICAgICAgIHBhc3M6IChtZXNzYWdlTm9kZSkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuaGlkZU1lc3NhZ2UobWVzc2FnZU5vZGUpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJwYXNzXCIsIHZhbGlkYXRpb25JbnRlcmVzdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChtZXNzYWdlTm9kZSkgPT4geyBcclxuICAgICAgICAgICAgbWVzc2FnZVV0aWwuc2hvd01lc3NhZ2UobWVzc2FnZU5vZGUpOyBcclxuICAgICAgICAgICAgY29uc3RhbnQuc2V0U3RhdGUoXCJmYWlsXCIsIHZhbGlkYXRpb25JbnRlcmVzdClcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgbGV0IGludGVyc3RXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRlcmVzdC1pbnB1dC13cmFwcGVyXCIpO1xyXG4gICAgICAgIGludGVyc3RXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy52YWxpZGF0ZUludGVyZXN0KHRhZ3MudGFnTGlzdClcclxuICAgICAgICAgICAgdGhpcy5wcmludE1lc3NhZ2VbdHlwZV0odGhpcy5tZXNzYWdlTm9kZSlcclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGVJbnRlcmVzdCh0YWdMaXN0KSB7XHJcbiAgICAgICAgaWYgKHRhZ0xpc3QubGVuZ3RoIDwgdGhpcy5taW5pbXVuKSByZXR1cm4gXCJmYWlsXCJcclxuICAgICAgICByZXR1cm4gXCJwYXNzXCJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdmFsaWRhdGlvbkxpc3QgPSBbXHJcbiAgICB2YWxpZGF0aW9uRm9ySWQsIHZhbGlkYXRpb25QYXNzd29yZCwgdmFsaWRhdGlvblBhc3N3b3JkUmVjb25maXJtLFxyXG4gICAgdmFsaWRhdGlvbk5hbWUsIHZhbGlkYXRpb25CaXJ0aERhdGUsIHZhbGlkYXRpb25HZW5kZXIsXHJcbiAgICB2YWxpZGF0aW9uRW1haWwsIHZhbGlkYXRpb25QaG9uZSwgdmFsaWRhdGlvbkludGVyZXN0XHJcbl1cclxuXHJcbiIsImNvbnN0IGlzX3V0aWwgPSB7XHJcbiAgICBpc0VtcHR5KGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIChpbnB1dCA9PT0gdW5kZWZpbmVkIHx8IGlucHV0ID09PSBudWxsIHx8IGlucHV0Lmxlbmd0aCA9PT0gMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFzeW5jX3V0aWwgPSB7XHJcbiAgICBzdWJtaXRBZnRlcjBTZWNvbmRzKGZvcm1Ob2RlKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybU5vZGUuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZG9tX3V0aWwgPSB7XHJcbiAgICByZWdpc3RlckJsdXJFdmVudChlbGVtZW50LCBjYWxsZXIpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZVR5cGUgPSB0aGlzLnZhbGlkYXRlSW5wdXQoaW5wdXRWYWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5wcmludE1lc3NhZ2VbbWVzc2FnZVR5cGVdKHRoaXMubWVzc2FnZU5vZGUpO1xyXG4gICAgICAgIH0uYmluZChjYWxsZXIpKVxyXG4gICAgfSxcclxuXHJcbiAgICAvL2FkZENsYXNzICYgcmVtb3ZlQ2xhc3Mg7Lac7LKYOiBodHRwczovL3VuaWt5cy50aXN0b3J5LmNvbS8zMDFcclxuICAgIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gbmV3IFJlZ0V4cChcIihcXFxcc3xeKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHN8JClcIik7XHJcbiAgICAgICAgaWYgKGNoZWNrLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpID09PSBmYWxzZSkgeyBcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hlY2sgPSBuZXcgUmVnRXhwKFwiKFxcXFxzfF4pXCIgKyBjbGFzc05hbWUgKyBcIihcXFxcc3wkKVwiKTsgXHJcbiAgICAgICAgaWYgKGNoZWNrLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpID09PSB0cnVlKSB7IFxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoY2hlY2ssIFwiIFwiKS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtZXNzYWdlID0ge1xyXG4gICAgZW1wdHlNZXNzYWdlOiBcIu2VhOyImCDsoJXrs7TsnoXri4jri6QuXCIsXHJcblxyXG4gICAgaWQ6IHtcclxuICAgICAgICBwYXNzOiBcIuyCrOyaqSDqsIDriqXtlZwg7JWE7J2065SU7J6F64uI64ukLlwiLFxyXG4gICAgICAgIGZhaWw6IFwiNX4yMOyekOydmCDsmIHrrLgg7IaM66y47J6QLCDsiKvsnpDsmYAg7Yq57IiY6riw7Zi4KF8pKC0pIOunjCDsgqzsmqkg6rCA64ql7ZWp64uI64ukLlwiLFxyXG4gICAgICAgIGZhaWxfZHVwbGljYXRpb246IFwi7J2066+4IOyhtOyerO2VmOuKlCDslYTsnbTrlJTsnoXri4jri6QuXCJcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHBhc3M6IFwi7JWI7KCE7ZWcIOu5hOuwgOuyiO2YuOyeheuLiOuLpC5cIixcclxuICAgICAgICBmYWlsX0xlbmd0aDogXCI47J6QIOydtOyDgSAxNuyekCDsnbTtlZjroZwg7J6F66Cl7ZW07KO87IS47JqULlwiLFxyXG4gICAgICAgIGZhaWxfQ2hhcmFjdGVyOiBcIuyYgeusuCDrjIDrrLjsnpAsIOyIq+yekCwg7Yq57IiY66y47J6Q66W8IOy1nOyGjCAx7J6QIOydtOyDgSDtj6ztlajtlbTso7zshLjsmpQuXCIsXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmRSZWNvbmZpcm06IHtcclxuICAgICAgICBwYXNzOiBcIuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlanri4jri6QuXCIsXHJcbiAgICAgICAgZmFpbDogXCLruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgcGFzczogXCLrqYvsp4Qg7J2066aE7J2064Sk7JqUIVwiLFxyXG4gICAgICAgIGZhaWw6IFwi7ZWc6riA6rO8IOyYgeusuCDrjIAg7IaM66y47J6Q66W8IOyCrOyaqe2VmOyEuOyalC4gKO2KueyImOq4sO2YuCwg6rO167CxLCDsiKvsnpAg7IKs7JqpIOu2iOqwgClcIlxyXG4gICAgfSxcclxuICAgIGJpcnRoRGF0ZToge1xyXG4gICAgICAgIHJhbmdlOiBcIuqwgOyehe2VoCDsiJgg7JeG64qUIOuCmOydtOyeheuLiOuLpCDso4TshqHtlbTsmpTjhaDjhaBcIixcclxuICAgICAgICBpbnZhbGlkOiBcIu2DnOyWtOuCnCDrgqDsp5zrpbwg7KCV7ZmV7ZWY6rKMIOyeheugpe2VmOyEuOyalC5cIixcclxuICAgICAgICBkYXk6IFwi7YOc7Ja064KcIOydvOydhCDsoJXtmZXtlZjqsowg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lc3NhZ2VVdGlsID0ge1xyXG4gICAgc2hvd01lc3NhZ2UoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsnKTtcclxuICAgIH0sXHJcbiAgICBoaWRlTWVzc2FnZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XHJcbiAgICB9LFxyXG4gICAgc2V0TWVzc2FnZVR5cGUoZWxlbWVudCwgdHlwZSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBtZXNzYWdlICR7dHlwZX1gKTtcclxuICAgIH0sXHJcbiAgICBzZXRNZXNzYWdlKGVsZW1lbnQsIG1lc3NhZ2UpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gICAgYWRkUGFzc01lc3NhZ2Uoc2VsZWN0b3IsIG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZU5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZVR5cGUobWVzc2FnZU5vZGUsIFwicGFzc1wiKTtcclxuICAgICAgICB0aGlzLnNldE1lc3NhZ2UobWVzc2FnZU5vZGUsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIGFkZEZhaWxNZXNzYWdlKHNlbGVjdG9yLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2VOb2RlKTtcclxuICAgICAgICB0aGlzLnNldE1lc3NhZ2VUeXBlKG1lc3NhZ2VOb2RlLCBcImZhaWxcIik7XHJcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKG1lc3NhZ2VOb2RlLCBtZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9