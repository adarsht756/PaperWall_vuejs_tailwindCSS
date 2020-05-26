<!--Before using this app please generate your personal API access key
    for making API calls. You can generate it from https://unsplash.com/ .
    Again, kindly remove key used in this component and generate your API access key !!
-->

<template>
    <div id="app">
        <transition name="slideDown">
            <div v-show="networkProb"
                 class="px-5 py-3 shadow-2xl justify-between items-center hidden font-light text-white mb-20 ml-4 md:ml-10 bottom-0 fixed z-40"
                 style="background: #232323" id="prob">
                <div>
                    You are having network Problem
                    Please reload page.
                </div>
                <button @click="networkProb = false" class="focus:outline-none">
                    <svg class="h-5 w-5 ml-3" fill="white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                         focusable="false">
                        <g>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </transition>
        <transition name="slideRight">
            <div v-show="sideBar"
                 class="flex lg:hidden flex-col min-h-screen fixed overflow-y-scroll left-0 top-0 z-50 bg-black text-white w-56 items-center text-center">
                <div class="mt-6">
                    <h1 class="text-2xl gradient-text font-semibold">PaperWall</h1>
                    <div class="mt-5 pr-0 md:pr-10">
                        <div class="relative">
                            <button class="absolute flex inset-y-0 left-0 pl-3 items-center focus:outline-none"
                                    @click="searchPhoto,sideBar=false">
                                <svg class="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                                    <path stroke="black" stroke-width="2" stroke-linecap="round"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </button>
                            <input v-model="searchKey" @keyup.enter="searchPhoto(),sideBar=false"
                                   class="block w-48 md:w-full border border-gray-700 pl-10 pr-4 py-2 text-sm text-black rounded-full shadow-lg font-semibold placeholder-black focus:outline-none"
                                   placeholder="Search">
                        </div>
                    </div>
                    <div class="flex flex-col mt-5">
                        <div class="leading-8" v-for="category in categories" :key="category">
                            <button class="focus:outline-none" @click="searchCategory(category),sideBar = false">{{
                                category }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <nav class="flex flex-row justify-between md:justify-start h-auto bg-black text-white items-center px-3 md:px-10 py-1 md:py-3 fixed w-full top-0 z-30">
            <h1 class="text-2xl md:text-3xl gradient-text font-semibold">PaperWall</h1>

            <div class="hidden lg:flex items-center justify-center ml-20">
                <div class="mx-3" v-for="category in categories" :key="category">
                    <button class="focus:outline-none" @click="searchCategory(category)">{{ category }}</button>
                </div>
            </div>

            <button @click="sideBar = !sideBar"
                    class="text-gray-600 absolute mr-5 right-0 lg:hidden focus:outline-none">
                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" focusable="false"
                     data-prefix="fad" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <g class="fa-group">
                        <path fill="currentColor"
                              d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
                              class="fa-secondary"></path>
                        <path fill="currentColor"
                              d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
                              class="fa-primary"></path>
                    </g>
                </svg>
            </button>

            <div class="hidden lg:block absolute right-0 pr-0 md:pr-6">
                <button class="ml-6">
                    <img class="h-8 border h-8 rounded-full object-cover"
                         src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=60"
                         alt="">
                </button>
            </div>
        </nav>

        <div class="relative bg-gray-200 mt-16 flex flex-col" id="carousel">

            <div class="absolute text-white flex flex-col ml-4 md:ml-20 lg:ml-40 xl:ml-56">
                <h2 class="font-semibold mt-40 text-4xl">PaperWall</h2>
                <p class="text-xl">The internet’s source of freely usable images. <br>
                    Powered by creators everywhere.</p>
                <div class="relative mt-10">
                    <button class="absolute flex inset-y-0 left-0 pl-3 items-center" @click="searchPhoto">
                        <svg class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none">
                            <path stroke="black" stroke-width="2" stroke-linecap="round"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                    <input v-model="searchKey" @keyup.enter="searchPhoto" id="search"
                           class="w-48 shadow-lg text-black font-semibold border focus:border-black pl-12 pr-4 py-2 rounded-sm text-sm md:text-lg placeholder-black"
                           placeholder="Search high resolution images...">
                </div>
            </div>
            <div class="bottom-0 absolute text-white right-0 mr-2 md:mr-4 italic text-xs md:text-sm">
                <span>All the photos are retrieved from <a target="_blank"
                                                           :href=unsplashLink+appNameReferral>Unsplash</a></span>
            </div>
        </div>
        <div class="w-full mx-auto bg-gray-500 mt-10" style="width: 95%;height: 1px"></div>
        <div class="flex flex-col md:flex-row mt-10 container mx-auto">

            <div class="flex flex-col">
                <div v-for="result in results.slice(0,7)" :key="result"
                     class="md:m-3 mx-0 my-3 conta bg-black relative">
                    <div class="overflow-hidden">
                        <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                        <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                                   :source="result.urls.small" :description="result.alt_description"></imageComp>
                    </div>
                    <div>
                        <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                                @click="download(result.links.download_location)"> Download
                        </button>
                        <div class="absolute flex justify-between items-center w-full z-10 -mt-10 profile_info opacity-0 transition-opacity duration-500">
                            <div class="flex items-center">
                                <img class="rounded-full mx-2" :src="result.user.profile_image.small" alt="">
                                <a target="_blank" :href="result.user.links.html+appNameReferral">
                                    <span
                                            class="text-white"> {{ result.user.first_name }} {{ result.user.last_name }} </span>
                                </a>
                            </div>
                            <a target="_blank" :href=unsplashLink+appNameReferral><span
                                    class="text-sm font-hairline text-white mr-4">Unsplash</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div v-for="result in results.slice(7,14)" :key="result"
                     class="md:m-3 mx-0 my-3 conta bg-black relative">
                    <div class="overflow-hidden">
                        <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                        <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                                   :source="result.urls.small" :description="result.alt_description"></imageComp>
                    </div>
                    <div>
                        <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                                @click="download(result.links.download_location)"> Download
                        </button>
                        <div class="absolute flex justify-between items-center w-full z-10 -mt-10 profile_info opacity-0 transition-opacity duration-500">
                            <div class="flex items-center">
                                <img class="rounded-full mx-2" :src="result.user.profile_image.small" alt="">
                                <a target="_blank" :href="result.user.links.html+appNameReferral">
                                    <span
                                            class="text-white"> {{ result.user.first_name }} {{ result.user.last_name }} </span>
                                </a>
                            </div>
                            <a target="_blank" :href=unsplashLink+appNameReferral><span
                                    class="text-sm font-hairline text-white mr-4">Unsplash</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col">
                <div v-for="result in results.slice(14)" :key="result" class="md:m-3 mx-0 my-3 conta bg-black relative">
                    <div class="overflow-hidden">
                        <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                        <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                                   :source="result.urls.small" :description="result.alt_description"></imageComp>
                    </div>
                    <div>
                        <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                                @click="download(result.links.download_location)"> Download
                        </button>
                        <div class="absolute flex justify-between items-center w-full z-10 -mt-10 profile_info opacity-0 transition-opacity duration-500">
                            <div class="flex items-center">
                                <img class="rounded-full mx-2" :src="result.user.profile_image.small" alt="">
                                <a target="_blank" :href="result.user.links.html+appNameReferral">
                                    <span
                                            class="text-white"> {{ result.user.first_name }} {{ result.user.last_name }} </span>
                                </a>
                            </div>
                            <a target="_blank" :href=unsplashLink+appNameReferral><span
                                    class="text-sm font-hairline text-white mr-4">Unsplash</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex mx-auto justify-center text-center my-5">
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

    const apiclient = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 5000,
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

    import imageComp from './components/image.vue';

    export default {
        components: {
            imageComp
        },
        data() {
            return {
                sideBar: false,
                results: [],
                searchedPhoto: false,
                searchedCategory: false,
                categorySearched: " ",
                networkProb: true,
                source: "",
                description: "",
                appNameReferral: "?utm_source=FIZZ&utm_medium=referral",
                unsplashLink: "https://unsplash.com/",
                // randomPhoto: { },
                searchKey: "",
                categories: ["Nature", "Wallpapers", "Textures & Patterns", "People",
                    "Business & Work", "Travel", "Technology", "Animals", "Interiors"]
            }
        },
        methods: {
            download(a) {
                apiclient.get(a + "?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral")
                    .then(response => {
                        window.open(response.data.url, "_blank");

                    })
            },
            searchPhoto() {
                document.body.scrollTop = 283.20001220703125;
                document.documentElement.scrollTop = 283.20001220703125;
                this.searchedCategory = false
                this.searchedPhoto = true;
                apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&query=" + this.searchKey + "&per_page=21")
                    .then(response => {
                        this.results = response.data.results;
                    });
            },
            searchCategory(category) {
                this.categorySearched = category;
                document.body.scrollTop = 572;
                document.documentElement.scrollTop = 572;
                this.searchedPhoto = false;
                this.searchedCategory = true;
                apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&query=" + category + "&per_page=21")
                    .then(response => {
                        console.log("API called Successfully");
                        this.results = response.data.results;
                        this.searchKey = null;
                    });

            },
            goToPage(i) {
                document.body.scrollTop = 283.20001220703125;
                document.documentElement.scrollTop = 283.20001220703125;
                if (this.searchedPhoto) {
                    apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&query=" + this.searchKey + "&page=" + i + "&per_page=21")
                        .then(response => {
                            console.log(this.searchKey)
                            this.results = response.data.results;
                        });
                } else if (this.searchedCategory) {
                    apiclient.get("https://api.unsplash.com/search/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&query=" + this.categorySearched + "&page=" + i + "&per_page=21")
                        .then(response => {
                            console.log(this.categorySearched)
                            this.results = response.data.results;
                        });
                } else {
                    apiclient.get("https://api.unsplash.com/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&per_page=21&page=" + i)
                        .then(response => {
                            this.results = response.data;
                        });
                }
            },
        },
        mounted() {
            apiclient.get("https://api.unsplash.com/photos/?client_id=J3fTdcbKTEm-IUjcWz8MseJaQEtCWEilFo8ODyEuVrU&utm_source=FIZZ&utm_medium=referral&per_page=21")
                .then(response => {
                    this.results = response.data;
                    console.log(this.results);
                })
                .catch(error => {
                    console.log("error" + error);
                    setTimeout(function () {
                        NProgress.done();
                        document.getElementById("prob").style.display = 'flex';
                    }, 5000)
                })

        }
    }
</script>

<style>
    * {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }

    #search {
        width: 8cm;
    }

    @media screen and  (min-width: 640px) {
        #search {
            width: 12cm;
        }
    }

    @media screen and  (min-width: 768px) {
        #search {
            width: 17cm;
        }
    }

    @media screen and  (min-width: 1024px) {
        #search {
            width: 23cm;
        }
    }

    #carousel {
        height: 620px;
        background: url('https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80') no-repeat;
        background-size: cover;
        background-position: center;
    }

    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .conta:hover .profile_info {
        opacity: 1;
    }

    .conta:after {
        content: '\A';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
    }

    .conta:hover .wall_image {
        --transform-scale-x: 1.1;
        --transform-scale-y: 1.1;
    }

    .conta:hover:after {
        opacity: 1;
    }

    .conta:hover .middle {
        opacity: 1;
    }

    .pagination_button {
        background-color: #3f3f3f;
    }

    .pagination_button:hover {
        background-color: rgba(73, 189, 220, 0.97);
    }

    .gradient-text {
        background-color: #f3ec78;
        background-image: linear-gradient(45deg, #f3ec78, #2daf98);
        background-size: 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

    .slideRight-enter {
        opacity: 0;
        transform: translateX(-100%);
    }

    .slideRight-enter-active,
    .slideRight-leave-active {
        transition: all .3s ease-in;
    }

    .slideRight-leave-to {
        transform: translateX(-100%);
    }

    .slideDown-enter {
        opacity: 0;
        transform: translateY(100%);
    }

    .slideDown-enter-active,
    .slideDown-leave-active {
        transition: all .3s ease-in;
    }

    .slideDown-leave-to {
        transform: translateY(100%);
    }
</style>
