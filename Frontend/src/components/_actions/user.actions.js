import { userServices } from '../_services';
import { history } from '../_helpers';

export const userActions = {
    login,
    registration,
    logout,
}

function login (email, password) {
    userServices.login(email, password)
        .then(
            _user => {
                history.push('/');
                console.log('Git logowanie')
            },
            error => {
                console.log(error.toString())
            },
        );
}

function registration(user) {
    userServices.registration(user)
        .then(
            _user => {
                history.push('/Login');
                console.log('Rejestracja pomyślna!')
            },
            error => {
                console.log(error.toString())
            },
        );
}

function logout() {
    userServices.logout();
    console.log('wylogowano')
}