

function showpasswod() {
    const eye = document.getElementById('eye');
    const eyeslash = document.getElementById('eye-slash');
    const fieldpassword = document.getElementById('field-password');

    if (eye.style.display == 'none') {
        eye.style.display = 'block';
        eyeslash.style.display = 'none';
        fieldpassword.type = 'text'
    } else{
        eye.style.display = 'none';
        eyeslash.style.display = 'block';
        fieldpassword.type = 'password';
    }
}


document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    alert('Usuário Logado')
})