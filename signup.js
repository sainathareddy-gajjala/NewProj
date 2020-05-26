document.onload = function () {
    console.log('page loaded');
}

function SIGNUP() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let gmail = document.getElementById("gmail").value;
    let createPassword = document.getElementById("createPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (firstname != "") {
        alert("firstName can't be empty");
        return;
    }

    if (createPassword != confirmPassword) {
        alert("password does'nt match");
        return;

    }

    let result = `{
         firstName : ${firstName}
         lastName : ${lastName}
         gmail : ${gmail}
         createPassword : ${createPassword}
         confirmPassword :${confirmPassword}
    }`;
    alert(result);

}