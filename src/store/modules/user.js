import axios from 'axios';
import router from "../../router";
var instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const state = {
    userIsLoggedIn: false,
    signedUpSuccess: false
}

export const mutations = {
    LOGIN_USER(state) {
        state.userIsLoggedIn = true
    },
    SIGN_UP(state) {
        state.signedUpSuccess = true
    }
}

export const actions = {
    userSign({commit}, user) {
        instance.post('/user/login', {
            email: user.email,
            password: user.password
        })
            .then((response) => {
                commit('LOGIN_USER')
                if (user.rememberMe) {
                    localStorage.keepUserLoggedIn = true
                }
                console.log(response)
            })
            .then(() => {
                router.push({
                    name: 'HomePage'
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    },
    userSignUp({commit}, user) {
        instance.post('/user/register', {
            name: user.newUserFirstName + " " + user.newUserLastName,
            email: user.newUserEmail,
            password: user.UserPassword
        })
            .then(function (response) {
                commit('SIGN_UP')
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
}
