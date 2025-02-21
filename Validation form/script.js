var Nameerror = document.getElementById("name-error")
var Phoneeerror = document.getElementById("phone-error")
var Emailerror = document.getElementById("email-error")
var Messageerror = document.getElementById("msg-error")
var Fixerror = document.getElementById("fix-error")

function ValidateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        Nameerror.innerHTML = "Name is required";
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        Nameerror.innerHTML = "Write full name";
        return false
    }
    Nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        Phoneeerror.innerHTML = "Phone no. is required";
        return false
    }
    if(phone.length !== 10){
        Phoneeerror.innerHTML = "Phone no. should be 10 digits";
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        Phoneeerror.innerHTML = "Only digits please";
        return false
    }
    Phoneeerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        Emailerror.innerHTML = "Email is required";
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        Emailerror.innerHTML = "Email Invalid";
        return false
    }
    Emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateMsg(){
    var message = document.getElementById("contact-msg").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        Messageerror.innerHTML = left + ' more characters required';
        return false;
    }
    Messageerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function ValidateForm(){
    if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMsg()){
        Fixerror.style.display = "block"
        Fixerror.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            Fixerror.style.display = "none"
        }, 3000);
        return false;
    }
}