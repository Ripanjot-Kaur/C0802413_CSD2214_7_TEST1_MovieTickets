"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var Payment_Form = function () {
    var first_name = $("First Name");
    var last_name = $("Last Name");
    var mobile_number = $("Mobile Number");
    var email_address = $("Email-Address");
    var confirm_email = $("Confirm Email");
    var confirm_last_name = $("Confirm Last Name");
    var isValid = true;
    

    if(first_name.value == ""){
        first_name.nextElementSibling.firstChild.nodeValue =
        "This field is required.";
        isValid = false;
    } else {
        first_name.nextElementSibling.firstChild.nodeValue = "";
    }
    if(last_name.value == ""){
        last_name.nextElementSibling.firstChild.nodeValue =
        "This field is required.";
        isValid = false;
    } else {
        last_name.nextElementSibling.firstChild.nodeValue = "";
    }
    
    if(mobile_number.value == ""  ) {
        mobile_number.nextElementSibling.firstChild.nodeValue =
        "This field is required and fill 10 digits.";
        isValid = false;
    }  else {
        mobile_number.nextElementSibling.firstChild.nodeValue = "";
    }
    if(email_address.value == ""){
        email_address.nextElementSibling.firstChild.nodeValue =
        "This field is required.";
        isValid = false;
    } else {
        email_address.nextElementSibling.firstChild.nodeValue = "";
    }
    if(confirm_email.value == ""){
        confirm_email.nextElementSibling.firstChild.nodeValue =
        "This field is required.";
        isValid = false;
    } else if(email_address.value != confirm_email.value){
        confirm_email.nextElementSibling.firstChild.nodeValue =
        "This field must match with email field.";
        isValid = false;
    } else {
        confirm_email.nextElementSibling.firstChild.nodeValue = "";
    }
    if (isValid) {
        $("form").submit();
    }
 window.onload = function() {
        $("Pay").onclick = payment_form;
        $("First Name").focus();
    } 
