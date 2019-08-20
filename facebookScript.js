var fnameValidationStatus;
var fnameValidation={};
var lnameValidation= {};
var lnameValidationStatus;
var check;



function fValidation(event){
    var keydownValue= event.which;
    var vlength=(event.target.value.length)+1;
    
    //console.log(vlength);
    if(event.target.value.length == 0){
        if((keydownValue >90 || keydownValue < 65)&& keydownValue!=8 && 
            keydownValue!=16) {
            fnameValidation[vlength]= false;
        }
        else{
            fnameValidation[vlength]= true;
        }
    }
    else{
        if((keydownValue >90 || keydownValue < 65)&& (keydownValue!=32 && 
            keydownValue !=8 && keydownValue!=9)){
                fnameValidation[vlength]= false;
            }
            else{
                if(keydownValue == 32 ){
                    if ((vlength-1)== check){
                       fnameValidation[vlength]=false; 
                    }
                    else{
                        fnameValidation[vlength]= true;
                    }
                    check = vlength;  
                }
                else {
                    fnameValidation[vlength]= true;
                }
            }
        }
    //console.log(fnameValidation);
}

function lValidation(event){
    var keydownValue= event.which;
    //console.log(event.target.value.length);
    var vlength=(event.target.value.length)+1;
    //console.log(vlength);
    if(event.target.value.length == 0){
        if((keydownValue >90 || keydownValue < 65)&& keydownValue!=8 && 
            keydownValue!=16) {
            lnameValidation[vlength]= false;
        }
        else{
            lnameValidation[vlength]= true;
        }
    }
    else{
        console.log(vlength);
        if((keydownValue >90 || keydownValue < 65) &&( keydownValue!=32 &&
            keydownValue!=8 && keydownValue!=9 )){
                lnameValidation[vlength]= false;
            } 
            else if (keydownValue == 32){
                check = vlength;
                lnameValidation[vlength]=false;
                }
            else if(keydownValue== 8){
                if ((vlength-1)== check){
                    vlength -=1;
                    lnameValidation[vlength]=true;
                }
            }
            else {
                lnameValidation[vlength]= true;
            }
                
            }
   // console.log(lnameValidation);
}



document.getElementById("signbutton").onclick = function() {
   var radioValue = document.getElementsByName('sex');
   var radioCount;
   var dayCount= document.getElementById("day");
   var dayVal =  dayCount.options[dayCount.selectedIndex].value;
   var monthCount = document.getElementById("month");
   var monthVal =  monthCount.options[monthCount.selectedIndex].value;
   var yearCount = document.getElementById("year");
   var yearVal =  yearCount.options[yearCount.selectedIndex].value;
   var currentDate = new Date();
   var currentDay = currentDate.getDate();
   var currentMonth= currentDate.getMonth();
   var currentYear= currentDate.getFullYear();
   var mailVal= document.getElementById("maildet").value;
   var mailCheck= /^[a-zA-Z]+(|([0-9]+|((\.|_)[a-zA-Z]+)))(@[a-zA-Z]+\.[a-zA-Z]+)$/;
   var fnameCheck= /(\s)$/;
   var passwordCheck = document.getElementById("passdet").value;
   var smallLetter = /[a-z]/;
   var capLetter=/[A-Z]/;
   var num=/[0-9]/;
   var specialChar= /[!@#$%^&*(),.?":{}|<>]/;
    if (document.getElementById("fnamesize").value == ""){
        alert("Firstname can't be empty");
        return;
    }
    if (document.getElementById("lnamesize").value == ""){
        alert("Surname can't be empty");
        return;
    }

    if (mailVal == ""){
        alert("Mail address can't be empty");
        return;
    }
    if(document.getElementById("passdet").value == ""){
        alert("Password Can't be empty");
        return;
    }
    for(var valid in fnameValidation){
        if(fnameValidation[valid]== false){
            alert("You haven't entered valid First name. please make necessary changes");
            return;
        }
        else if(fnameCheck.test(document.getElementById("fnamesize").value)== true){
            alert("You haven't entered valid First name. please make necessary changes");
            return;
        }
    }
    for(var valid in lnameValidation){
        if(lnameValidation[valid]== false){
        alert("You haven't entered valid Surname. please make necessary changes");
        return;
        }
    }
    if (mailCheck.test(mailVal) == false){
        alert("Not a valid mail address enter a valid mail address");
        return;
    }

    if(passwordCheck.length>=8){
        if(smallLetter.test(passwordCheck) && capLetter.test(passwordCheck) &&
        num.test(passwordCheck) && specialChar.test(passwordCheck)){
        }
     else {
       alert("Password should contain atleast one capital alphabet, one small alphabet, one number and one specail character");
       return;
     }
    }
    else{
        alert("password length should be atlease 8 characters");
        return;
    }

    if(currentYear-yearVal>=18) {
        if(currentMonth-monthVal>=0) {
            if(currentDay-dayVal<0){
                alert("Age should be 18 or above");
            return; 
            }
        }
        else{
            alert("Age should be 18 or above");
            return; 
        }
    }
    else{
        alert("Age should be 18 or above");
        return;
    }

    for (var i = 0, length = radioValue.length; i < length; i++){
        if (radioValue[i].checked){
            radioCount= true;
            break;
        }
        else{
            radioCount=false;
        }
    }
    if(radioCount == false){
        alert("enter the Gender");
        return;
    }
   

}
