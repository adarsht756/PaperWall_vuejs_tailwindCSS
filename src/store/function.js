import axios from 'axios';
import NProgress from 'nprogress';

const apiclient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 5000
});
apiclient.interceptors.request.use(config => {
    NProgress.start();
    return config;
});
apiclient.interceptors.response.use(response => {
    NProgress.done();
    return response;
});
function download(a) {
    apiclient.get(a + "?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU")
        .then(response => {
            window.open(response.data.url, "_blank");

        })
}
function searchPhoto() {
    document.body.scrollTop = 283.20001220703125;
    document.documentElement.scrollTop = 283.20001220703125;
    this.searchedCategory = false
    this.searchedPhoto = true;
    apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&query=" + this.searchKey + "&per_page=21")
        .then(response => {
            this.results = response.data.results;
        });
}
function searchCategory(category) {
    this.categorySearched = category;
    document.body.scrollTop = 572;
    document.documentElement.scrollTop = 572;
    this.searchedPhoto = false;
    this.searchedCategory = true;
    apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&query=" + category + "&per_page=21")
        .then(response => {
            console.log("API called Successfully");
            this.results = response.data.results;
            this.searchKey = null;
        });

}
function goToPage(i) {
    document.body.scrollTop = 283.20001220703125;
    document.documentElement.scrollTop = 283.20001220703125;
    if (this.searchedPhoto) {
        apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&query=" + this.searchKey + "&page=" + i + "&per_page=21")
            .then(response => {
                console.log(this.searchKey)
                this.results = response.data.results;
            });
    } else if (this.searchedCategory) {
        apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&query=" + this.categorySearched + "&page=" + i + "&per_page=21")
            .then(response => {
                console.log(this.categorySearched)
                this.results = response.data.results;
            });
    } else {
        apiclient.get("https://api.unsplash.com/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&per_page=21&page=" + i)
            .then(response => {
                this.results = response.data;
            });
    }
}

function mount() {
    apiclient.get("https://api.unsplash.com/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&per_page=21")
        .then(response => {
            this.results = response.data;
            console.log(this.results);
        })
        .catch(error => {
            console.log("Error" + error);
        })
}

export default functions;