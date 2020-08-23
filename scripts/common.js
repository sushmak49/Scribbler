var hideSignUpModal = function(){
    var signup_modal = document.getElementById('signUp-modal');
    signup_modal.style.display = "none";
}

var showSignUpModal = function() {
    var signup_modal = document.getElementById('signUp-modal');
    signup_modal.style.display = "flex";
}

function showSignInModal(){
    var modal = document.getElementById("signIn-modal");
    modal.style.display = "flex";
}
  
  function hideSignInModal(){
    var modal = document.getElementById("signIn-modal");
    modal.style.display = "none";
}