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

function logOut() {
    document.getElementById('LogOut').style.display = "none";
    document.getElementById('header__username').style.display = "none";
    document.getElementById('logIn').style.display = "unset";
    isLogin = false;
    localStorage.setItem('isLogin', isLogin);
    localStorage.setItem('name', '');
}

function logIn() {
    document.getElementById('modal').style.display = "unset";
    document.querySelector('#error_username').innerHTML = "";
    document.querySelector('#error_password').innerHTML = "";
    document.querySelector('#modal__inputPassword').value = "";
    document.querySelector('#modal__inputUsername').value = "";
}



let checkUser = function () {
    let name = document.getElementById('modal__inputUsername').value;
    let pass = document.getElementById('modal__inputPassword').value;
    //check 
    let checkLogin = usersData.some(value => value.name === name && value.pass === pass);

    if (name.trim() === '' && pass.length < 8) {
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
    } else if (name.trim() === '' && pass.length >= 8) {
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
        document.querySelector('#error_password').innerHTML = '';

    } else if (name.trim() !== '' && pass.length < 8) {
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
        document.querySelector('#error_username').innerHTML = '';
    } else if (name.trim() === '') {
        document.querySelector('#error_username').innerHTML = 'ユーザーを入力して下さい';
    } else if (pass.length < 8) {
        document.querySelector('#error_password').innerHTML = 'パスワードは８桁からです';
    } else if (checkLogin) {
        handleLogin(name);
        isLogin = true;
        localStorage.setItem('isLogin', isLogin);
        localStorage.setItem('name', name)
    } else {
        document.querySelector('#error_username').innerHTML = '';
        document.querySelector('#error_password').innerHTML = '';
        alert('ユーザーかパスワードが間違えます');

    }

}

// checkUser(); 

function handleLogin(name) {
    document.getElementById('LogOut').style.display = "unset";
    document.getElementById('logIn').style.display = "none";
    document.getElementById('modal').style.display = "none";
    document.getElementById('header__username').innerHTML = `ユーザー${name}`;
    document.getElementById('header__username').style.display = "unset";
    document.getElementById('modal__inputUsername').value = '';
    document.getElementById('modal__inputPassword').value = '';
}


let isLogin;

if (localStorage.getItem('isLogin') === 'true') {
    isLogin = true;
} else isLogin = false;

console.log('1 isLogin', isLogin);

function checkLoginStatus() {
    let name = localStorage.getItem('name');
    if (isLogin) {
        handleLogin(name);
        console.log('login ok')
    } else { console.log('login fail')}
}

checkLoginStatus();


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




// let a = true

// if(a=== true){
//     console.log('true');

// }else console.log('false');






