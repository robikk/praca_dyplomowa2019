import { authHeader } from '../_helpers';

export const userServices = {
    login,
    registration,
    logout
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`https://localhost:44339/api/ApplicationUser/SignIn`, requestOptions)
        .then(handleResponseLogin)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function registration(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };
    return fetch(`https://localhost:44339/api/ApplicationUser/SignUp`, requestOptions).then(handleResponse)
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);;
        if (data.succeeded === false) {
            if (response.status === 401) {
                logout();
                window.location.reload();
            }
            const error = data.errors.map((error) => error.description);
            return Promise.reject(error);
        }
        return data;
    });
}

function handleResponseLogin(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}