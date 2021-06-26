import RegisterController from './controller/RegisterController.js';
import RegisterView from './view/RegisterView.js';

let Registerview = new RegisterView();

let Registercontroller = new RegisterController();

const profie_load = window.location.pathname;
const btn_load = document.getElementById('reg');
const btn_login = document.getElementById('log_submit');

if(btn_load) {
    btn_load.addEventListener('click', {
        handleEvent: function (event) {
            Registercontroller.register_form();
        }
    });
}

if(btn_login) {
    btn_login.addEventListener('click', {
        handleEvent: function (event) {
            Registercontroller.login_form();
        }
    });
}

if(profie_load === "/html/profile.html") {
    Registerview.view_profile(Registercontroller.get_profile_info());
}