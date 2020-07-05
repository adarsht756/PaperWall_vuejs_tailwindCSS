<template>
    <div>
        <transition name="slideRight">

            <div v-show="sideBar"
                 class="flex lg:hidden flex-col min-h-screen fixed overflow-y-auto left-0 top-0 z-50 bg-black text-white w-56 items-center text-center">
                <div class="mt-6">
                    <button class="text-2xl gradient-text font-semibold focus:outline-none"
                            @click="getRandomPhotos(),sideBar=false">PaperWall
                    </button>
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

        <nav class="flex flex-row justify-between md:justify-start h-16 md:h-auto bg-green-gradient text-white items-center px-3 md:px-10 py-1 md:py-3 fixed w-full top-0 z-30">
            <button class="text-2xl md:text-3xl gradient-text font-semibold focus:outline-none"
                    @click="getRandomPhotos">PaperWall
            </button>

            <div class="hidden lg:flex items-center justify-center ml-20">
                <div class="mx-3" v-for="category in categories" :key="category">
                    <button class="focus:outline-none transition-colors duration-300 hover:text-gray-400"
                            @click="searchCategory(category)">{{ category }}
                    </button>
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

            <div class="hidden lg:block absolute right-0 pr-0 md:pr-6" @click="loginSignupDialog = !loginSignupDialog">
                <button class="ml-6 focus:outline-none">
                    <img class="h-8 border h-8 rounded-full object-cover"
                         src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=60"
                         alt="Avatar">
                </button>
            </div>
        </nav>

        <div v-show="loginSignupDialog">
            <div class="hidden md:block fixed top-0 mt-12 right-0 py-2 text-white mr-10 z-30 rounded-md"
                 style="background: #333333">
                <div id="in" class="flex-col" :class="[ userLog ? 'hidden' : 'flex' ]">
                    <router-link :to="{ name: 'SignUp' }">
                        <button class="w-full my-1 px-10 focus:outline-none">Sign
                            Up
                        </button>
                    </router-link>
                    <router-link :to="{ name: 'SignIn' }">
                        <button class="w-full my-1 px-10 focus:outline-none">Sign
                            In
                        </button>
                    </router-link>
                </div>
                <div id="out" :class="[ userLog ? 'flex' : 'hidden' ]">
                    <button class="w-full my-1 px-10 focus:outline-none" @click="logOut"> Log Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "NavBar",
        data() {
            return {
                sideBar: false,
                categories: ["Nature", "Wallpapers", "Textures & Patterns", "People",
                    "Business & Work", "Travel", "Technology", "Animals", "Interiors"],
                searchKey: "",
                loginSignupDialog: false
            }
        },
        methods: {
            getRandomPhotos() {
                this.$store.dispatch('getRandomWallpapers')
            },
            searchCategory(key) {
                document.body.scrollTop = 283.20001220703125;
                let object = {
                    searchedCategory: true,
                    searchedPhoto: false,
                    key: key
                }
                this.$store.dispatch('searchPhoto', object)
            },
            searchPhoto() {
                document.body.scrollTop = 283.20001220703125;
                let object = {
                    searchedCategory: false,
                    searchedPhoto: true,
                    key: this.searchKey
                }
                this.$store.dispatch('searchPhoto', object)
            },
            logOut() {
                this.user.userIsLoggedIn = false;
                this.loginSignupDialog = false;
                localStorage.keepUserLoggedIn = false;
                document.getElementById("in").style.display = "flex";
                document.getElementById("out").style.display = "none";
            }
        },
        computed:{
            userLog(){
                return localStorage.keepUserLoggedIn
            },
            ...mapState(['user']) }
    }
</script>


