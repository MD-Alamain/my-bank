document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if( userEmail == 'mybank@gmail.com' && userPassword == 'alamin123'){
        window.location.href = 'bank.html'
    }
})
