function validate() {
    var fname = fNameOK();
    var lname = lNameOK();
    var email = EmailOK();
    var password = PasswordOK();
    var password2 = Password2OK();
    var phone = PhoneOK();
    var pref = PrefOK();
    var day = birthDayOK();
    var month = birthMonthOK();
    var year = birthYearOK();
    var gender = GenderOK();
    var terms = TermsOK();

    var result = fname && lname && email && password &&
        password2 && phone && pref && day && month &&
        year && gender && terms;

    if (result) {
        alert("Validation OK");
    }

    return result;
}


// בדיקת שם פרטי
function fNameOK() {
    var fname = document.getElementById("firstName");

    if (fname.value.length == 0) {
        fname.style.color = "red";
        fname.style.borderColor = "red";
        return false;
    }

    fname.style.color = "black";
    fname.style.borderColor = "";
    return true;
}


// בדיקת שם משפחה
function lNameOK() {
    var lname = document.getElementById("lastName");

    if (lname.value.length == 0) {
        lname.style.color = "red";
        lname.style.borderColor = "red";
        return false;
    }

    lname.style.color = "black";
    lname.style.borderColor = "";
    return true;
}


// בדיקת אימייל
function EmailOK() {
    var email = document.getElementById("userEmail");

    if (email.value.length == 0 || email.validity.valid == false) {
        email.style.color = "red";
        email.style.borderColor = "red";
        return false;
    }

    email.style.color = "black";
    email.style.borderColor = "";
    return true;
}


// בדיקת סיסמה
function PasswordOK() {
    var password = document.getElementById("userpassword");

    if (password.value.length == 0) {
        password.style.color = "red";
        password.style.borderColor = "red";
        return false;
    }

    password.style.color = "black";
    password.style.borderColor = "";
    return true;
}


// בדיקת אימות סיסמה
function Password2OK() {
    var password = document.getElementById("userpassword");
    var password2 = document.getElementById("userpassword2");

    if (password2.value.length == 0 || password2.value != password.value) {
        password2.style.color = "red";
        password2.style.borderColor = "red";
        return false;
    }

    password2.style.color = "black";
    password2.style.borderColor = "";
    return true;
}


// הצגת והסתרת סיסמה
function ShowPassword() {
    var show = document.getElementById("showPassword");
    var password = document.getElementById("userpassword");

    if (show.checked == true) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}


// בדיקת מספר טלפון
function PhoneOK() {
    var phone = document.getElementById("userPhone");

    if (phone.value.length != 7 || isNaN(phone.value)) {
        phone.style.color = "red";
        phone.style.borderColor = "red";
        return false;
    }

    phone.style.color = "black";
    phone.style.borderColor = "";
    return true;
}


// בדיקת קידומת טלפון
function PrefOK() {
    var pref = document.getElementById("pref");

    if (pref.value.length == 0) {
        pref.style.color = "red";
        pref.style.borderColor = "red";
        return false;
    }

    pref.style.color = "black";
    pref.style.borderColor = "";
    return true;
}


// בדיקת יום לידה
function birthDayOK() {
    var day = document.getElementById("birthDay");

    if (day.value < 1 || day.value > 31) {
        day.style.color = "red";
        day.style.borderColor = "red";
        return false;
    }

    day.style.color = "black";
    day.style.borderColor = "";
    return true;
}


// בדיקת חודש לידה
function birthMonthOK() {
    var month = document.getElementById("birthMonth");

    if (month.value < 1 || month.value > 12) {
        month.style.color = "red";
        month.style.borderColor = "red";
        return false;
    }

    month.style.color = "black";
    month.style.borderColor = "";
    return true;
}


// בדיקת שנת לידה
function birthYearOK() {
    var year = document.getElementById("birthYear");

    if (year.value < 2015 || year.value > 2026) {
        year.style.color = "red";
        year.style.borderColor = "red";
        return false;
    }

    year.style.color = "black";
    year.style.borderColor = "";
    return true;
}


// בדיקת מגדר
function GenderOK() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if (male.checked == false && female.checked == false) {
        male.style.outline = "1px solid red";
        female.style.outline = "1px solid red";
        return false;
    }

    male.style.outline = "";
    female.style.outline = "";
    return true;
}


// בדיקת אישור תנאי שימוש
function TermsOK() {
    var terms = document.getElementById("terms");

    if (terms.checked == false) {
        terms.style.outline = "1px solid red";
        return false;
    }

    terms.style.outline = "";
    return true;
}