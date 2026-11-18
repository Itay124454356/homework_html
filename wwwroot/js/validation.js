function validate() {
    var fname = document.fNameOK();
    var femail = document.fEmailOK();
    var result = fname && femail;
    if (result) {
        alert("Validation OK");
    }
    return false;
}

function fNameOK() {
    var fname = document.getElementById("firstName");
    if (fname.value.length==0) {
        alert("Please enter your first name");
        return false;
    }
    return true;
}

function fEmailOK() {
    var email = document.getElementById("userEmail");
    if (email.value.length == 0) {
        alert("Please enter your email");
        return false;
    }
    return true;
}
