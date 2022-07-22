function validateForm(){
     var myForm = document.forms["mailingList"];
                var fname = myForm["fname"];
                var lname = myForm["lname"];
                var email= myForm["email"];
                var phone = myForm["phone"];
                var required=" <br> <i> *Required</i>"
                var isValid = new Boolean(true);
                if (fname.value === ""){
                    var fnameLabel = document.getElementById("fnameLabel");
                    fnameLabel.style.color = "Red";
                    fnameLabel.innerHTML = fnameLabel.innerHTML+ required;
                    
                    isValid = false;
                }
                if (lname.value === ""){
                    var lnameLabel = document.getElementById("lnameLabel");
                    lnameLabel.style.color = "Red";
                    lnameLabel.innerHTML = lnameLabel.innerHTML+ required;
                    
                    isValid = false;
                }
                if(email.value === "") {
                    var emailLabel = document.getElementById("emailLabel");
                    emailLabel.style.color = "Red";
                    emailLabel.style.borderinput="Red";
                    emailLabel.innerHTML = emailLabel.innerHTML+ required;
                    
                    isValid = false;
                }
               if(phone.value === "") {
                    var phoneNumber = document.getElementById("phoneNumber");
                    phoneNumber.style.color = "Red";
                    phoneNumber.style.borderinput="Red";
                    phoneNumber.innerHTML = phoneNumber.innerHTML+ required;
                    
                    isValid = false;
                }
          
                if(checkin.value === "") {
                    var checkinDate = document.getElementById("checkinDate");
                    checkinDate.style.color = "Red";
                    checkinDate.style.borderinput="Red";
                    checkinDate.innerHTML = checkinDate.innerHTML+ required;
                    
                    isValid = false;
                }
                
               if(checkout.value === "") {
                    var checkoutDate = document.getElementById("checkoutDate");
                    checkoutDate.style.color = "Red";
                    checkoutDate.style.borderinput="Red";
                    checkoutDate.innerHTML = checkoutDate.innerHTML+ required;
                    
                   isValid = false;
                }
                return isValid;
            
}
      