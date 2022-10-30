const usersData = [
    {
        name: "rikai",
        pass: "rikaijapan",
    },
    {
        name: "vietdung",
        pass: "vietdung",
    }

];

let logOut = function () {
    document.getElementById('LogOut').style.display = "none";
    document.getElementById('header__username').style.display = "none";
    document.getElementById('logIn').style.display = "unset";
}

let logIn = function () {
    document.getElementById('modal').style.display = "unset";
    document.querySelector('#error_username').innerHTML = "";
    document.querySelector('#error_password').innerHTML = "";
    document.querySelector('#modal__inputPassword').value = "";
    document.querySelector('#modal__inputUsername').value = "";
}

// let isLogin = localStorage.getItem('checkLogin');
// console.log(isLogin)
let checkLogin = false;
let checkUser = function () {
    let name = document.getElementById('modal__inputUsername').value;
    let pass = document.getElementById('modal__inputPassword').value;
    //check 
    checkLogin = usersData.some(value => value.name === name && value.pass === pass);

    if (name.trim() === '' && pass.length < 8) {
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
    }else if(name.trim() === '' && pass.length >= 8){
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
        document.querySelector('#error_password').innerHTML = '';

    }else if(name.trim() !== '' && pass.length < 8){
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
        document.querySelector('#error_username').innerHTML = '';
    }
    
    else if (name.trim() === '') {
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
    } else if (pass.length < 8) {
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
    } else if (checkLogin) {
        document.getElementById('LogOut').style.display = "unset";
        document.getElementById('logIn').style.display = "none";
        document.getElementById('modal').style.display = "none";
        document.getElementById('header__username').innerHTML = `ユーザー${name}`;
        document.getElementById('header__username').style.display = "unset";
        document.getElementById('modal__inputUsername').value = '';
        document.getElementById('modal__inputPassword').value = '';
        // isLogin = true;
        // localStorage.setItem('checkLogin', checkLogin);
    } else {
        document.querySelector('#error_username').innerHTML = '';
        document.querySelector('#error_password').innerHTML = '';
        alert('ユーザーかパスワードが間違えます');
        // isLogin = false;
        // localStorage.setItem('checkLogin', checkLogin);
    }

}
document.getElementById('modal__inputUsername').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkUser();
    }
});

document.getElementById('modal__inputPassword').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkUser();
    }
});











