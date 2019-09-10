const button = require('./todo_join_button.js')
const interest = require('./todo_join_interest.js')
const modal = require('./todo_join_modal.js')
const validation = require('./todo_join_validation.js')
const util = require('./util.js')


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