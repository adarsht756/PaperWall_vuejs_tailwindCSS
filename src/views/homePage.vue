<template>
    <div>
        <NetworkProblem :networkProb="networkProb"/>

        <NavBar @getRandomPhotos="getRandomPhotos" @search-category="searchCategory" @search-photo="searchPhoto"/>

        <PaperWallDescAndSearch @search-photo="searchPhoto"/>

        <div class="w-full mx-auto bg-gray-500 mt-10" style="width: 95%;height: 1px"></div>

        <WallpapersView :results="results" @download-image="download"/>

        <div class="flex mx-auto justify-center text-center mb-5" v-if="page">
            <div v-for="i in 10" class="text-white" :key="i">
                <button class="border font-bold md:rounded-tr-full md:rounded-bl-full md:px-10 -ml-1 lg:-ml-8 px-3 py-3 md:py-3 pagination_button transition-colors duration-300 focus:outline-none"
                        @click="goToPage(i)">
                    {{ i }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import NProgress from 'nprogress';
    import NavBar from "../components/NavBar";
    import WallpapersView from "../views/WallpapersView";
    import PaperWallDescAndSearch from "../components/PaperWallDescAndSearch";
    import NetworkProblem from "../components/NetworkProblem";

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

    export default {
        name: "homePage",
        components: {
            NavBar, PaperWallDescAndSearch, WallpapersView, NetworkProblem
        },
        data() {
            return {
                results: [],
                networkProb: true,
                searchedPhoto: false,
                searchedCategory: false,
                categorySearched: "",
                searchedPhotoKey: ""
            }
        },
        methods: {
            download(a) {
                this.networkProb = true;
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
            searchPhoto(category, seCat, sePic) {
                this.networkProb = true;
                document.body.scrollTop = 283.20001220703125;
                this.searchedPhoto = sePic;
                this.searchedCategory = seCat;
                this.searchedPhotoKey = category;
                if (category !== "") {
                    apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + category + "&per_page=21")
                        .then(response => {
                            this.results = response.data.results;
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
            searchCategory(category, seCat, sePic) {
                this.networkProb = true;
                this.categorySearched = category;
                document.body.scrollTop = 572;
                document.documentElement.scrollTop = 572;
                this.searchedPhoto = sePic;
                this.searchedCategory = seCat;
                this.searchedPhotoKey = "";
                apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + category + "&per_page=21")
                    .then(response => {
                        console.log("API called Successfully");
                        this.results = response.data.results;
                        this.searchKey = null;
                    })
                    .catch(error => {
                        console.log("error" + error);
                        setTimeout(function () {
                            NProgress.done();
                            document.getElementById("prob").style.display = 'flex';
                        }, 10000)
                    });

            },
            goToPage(i) {
                this.networkProb = true;
                document.body.scrollTop = 283.20001220703125;
                document.documentElement.scrollTop = 283.20001220703125;
                if (this.searchedPhoto) {
                    apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + this.searchedPhotoKey + "&page=" + i + "&per_page=21")
                        .then(response => {
                            this.results = response.data.results;
                        })
                        .catch(error => {
                            console.log("error" + error);
                            setTimeout(function () {
                                NProgress.done();
                                document.getElementById("prob").style.display = 'flex';
                            }, 10000)
                        });
                } else if (this.searchedCategory) {
                    apiclient.get("https://api.unsplash.com/search/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&query=" + this.categorySearched + "&page=" + i + "&per_page=21")
                        .then(response => {
                            this.results = response.data.results;
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
                            this.results = response.data;
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
            getRandomPhotos() {
                this.networkProb = true;
                this.searchedCategory = false;
                this.searchedPhoto = false;
                document.body.scrollTop = 283.20001220703125;
                document.documentElement.scrollTop = 283.20001220703125;
                apiclient.get("https://api.unsplash.com/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&per_page=21")
                    .then(response => {
                        this.results = response.data;
                    })
                    .catch(error => {
                        console.log("error" + error);
                        setTimeout(function () {
                            NProgress.done();
                            document.getElementById("prob").style.display = 'flex';
                        }, 10000)
                    })
            },
        },
        computed: {
            page() {
                if (this.results.length >= 21) {
                    return true;
                } else return false;
            }
        },
        // beforeMount() {
        //     apiclient.get("https://api.unsplash.com/photos/?client_id=sWZyXuW6Bvu-O5mUTYaTc4kwfr9PhkS47pZhWiaHB8M&utm_source=Paperwall&utm_medium=referral&per_page=21")
        //         .then(response => {
        //             this.results = response.data;
        //         })
        //         .catch(error => {
        //             console.log("error" + error);
        //             setTimeout(function () {
        //                 NProgress.done();
        //                 document.getElementById("prob").style.display = 'flex';
        //             }, 10000)
        //         })
        // }
    }
</script>

<style scoped>

</style>