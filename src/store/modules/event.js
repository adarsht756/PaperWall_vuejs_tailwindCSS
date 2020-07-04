import axios from "axios";
import NProgress from "nprogress";
import router from "../../router";

export const state = {
    results: [],
    resultLength: 0,
    ab: false,
    searchedPhoto: false,
    searchedCategory: false,
    searchedPhotoKey: '',
    searchedCategoryKey: ''
}

const apiclient = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});

apiclient.interceptors.request.use(config => {
    NProgress.start();
    return config;
});
apiclient.interceptors.response.use(response => {
    NProgress.done();
    return response;
});

export const mutations = {
    SET_EVENTS(state, res) {
        state.results = res
    },
    DOWNLOADING_PIC(state) {
        state.ab = true
    },
    CHECK_ID(state, val) {
        state.searchedPhotoKey = val
        if (typeof (val) != "undefined") {
            apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + val + "&per_page=21")
                .then(response => {
                    state.results = response.data.results
                    state.resultLength = response.data.results.length
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                });
        } else {
            apiclient.get("https://api.unsplash.com/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&per_page=21")
                .then((response) => {
                    state.results = response.data
                    state.resultLength = response.data.length
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                })
        }
    },
    RESULT_LENGTH(state, val) {
        state.resultLength = val
    }
}

export const actions = {
    getRandomWallpapers({commit}) {
        apiclient.get("https://api.unsplash.com/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&per_page=21")
            .then((response) => {
                commit('SET_EVENTS', response.data)
                console.log(response.data.length)
                commit('RESULT_LENGTH', response.data.length)
            })
            .catch(error => {
                console.log("error" + error);
                setTimeout(function () {
                    NProgress.done();
                    document.getElementById("prob").style.display = 'flex';
                }, 10000)
            })
    },
    downloadPhoto({commit}, a) {
        commit('DOWNLOADING_PIC')
        apiclient.get(a + "?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral")
            .then(response => {
                window.open(response.data.url, "_blank");
            })
            .catch(error => {
                console.log("error" + error);
                setTimeout(function () {
                    NProgress.done();
                    document.getElementById("prob").style.display = 'flex';
                }, 10000)
            })
    },
    searchPhoto({commit}, object) {
        state.searchedPhoto = object.searchedPhoto;
        state.searchedCategory = object.searchedCategory;
        if (object.searchedPhoto) {
            state.searchedPhotoKey = object.key;
            state.searchedCategoryKey = ''
        } else {
            state.searchedCategoryKey = object.key;
            state.searchedPhotoKey = ''
        }
        if (object.category !== "") {
            apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + object.key + "&per_page=21")
                .then(response => {
                    commit('SET_EVENTS', response.data.results)
                    commit('RESULT_LENGTH', response.data.results.length)
                })
                .then(() => {
                    router.push({
                        name: '/Home',
                        params: {
                            key: object.key
                        }
                    })
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                });
        }
    },
    goToPage({commit}, i) {
        console.log(i);
        this.networkProb = true;
        document.body.scrollTop = 283.20001220703125;
        document.documentElement.scrollTop = 283.20001220703125;
        if (state.searchedPhoto) {
            state.searchedCategoryKey = '';
            apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + state.searchedPhotoKey + "&page=" + i + "&per_page=21")
                .then(response => {
                    commit('SET_EVENTS', response.data.results)
                    commit('RESULT_LENGTH', response.data.results.length)
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                });
        } else if (state.searchedCategory) {
            state.searchedPhotoKey = '';
            apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + state.searchedCategoryKey + "&page=" + i + "&per_page=21")
                .then(response => {
                    commit('SET_EVENTS', response.data.results)
                    commit('RESULT_LENGTH', response.data.results.length)
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                });
        } else {
            apiclient.get("https://api.unsplash.com/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&per_page=21&page=" + i)
                .then(response => {
                    commit('SET_EVENTS', response.data)
                    commit('RESULT_LENGTH', response.data.length)
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 10000)
                });
        }
    }
}
