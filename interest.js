const interest = {

    init(){
        const txtareaNode = document.querySelector("#interest")
        txtareaNode.addEventListener("keydown", (pressEvent) => {
            const inputCharacter = pressEvent.key;
            
            //줄이 변경될 때마다 15px씩 늘리면 됨
            let text = txtareaNode.value;
            let previousHeight = txtareaNode.offsetHeight;
            let newDom = document.createElement('textarea');
            newDom.setAttribute('name', 'interest');
            newDom.setAttribute('id', 'interest');
            newDom.setAttribute('class', 'txtarea');
            //실제 코드에는 상위돔에 집어넣어주세요.
        
            // var inputWidth =  $('#virtual_dom').width() + 10; // 글자 하나의 대략적인 크기 
        
            // $(input).css('width', inputWidth); 
            // $('#virtual_dom').remove();
        })
    }
}

interest.init();