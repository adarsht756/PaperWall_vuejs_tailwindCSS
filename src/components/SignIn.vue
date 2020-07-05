<template>
    <div class="py-2 h-screen w-screen bg-black text-white mr-10">
        <router-link :to="{ name: '/Home' }">
            <button class="absolute right-0 mr-10 mt-3 focus:outline-none"
            >
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                     class="w-6">
                    <path fill="currentColor"
                          d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                          class=""></path>
                </svg>
            </button>
        </router-link>
        <div class="mx-auto justify-between mt-32" style="width: 35%;">
            <div class="flex flex-col">
                <div id="options" class="border-b py-3">
                    <router-link :to="{ name: 'SignUp' }">
                        <button class="w-1/2 text-2xl border-r focus:outline-none">
                            Sign Up
                        </button>
                    </router-link>
                    <router-link :to="{ name: 'SignIn' }">
                        <button class="w-1/2 text-2xl focus:outline-none">Sign In
                        </button>
                    </router-link>
                </div>
                <div id="view">
                    <transition name="slideRightSignup" mode="out-in">
                        <div class="px-10 mt-8 text-center flex flex-col">
                            <input type="text" placeholder="Enter username"
                                   class="pl-3 focus:outline-none my-2 border-b w-full placeholder-gray-400 bg-transparent text-2xl">
                            <input v-model="user.email" type="email" placeholder="Enter Email"
                                   class="pl-3 focus:outline-none my-2 border-b w-full placeholder-gray-400 bg-transparent text-2xl">
                            <input v-model="user.password" type="password" placeholder="Enter password"
                                   class="pl-3 focus:outline-none my-2 border-b w-full placeholder-gray-400 bg-transparent text-2xl">

                            <div v-show="wrongCredentials" class="flex flex-col text-center mt-3 select-none">
                                <span class="text-red-500">Oops. You have entered wrong credentials</span>
                                <span class="text-red-500">Please renter credentials</span>
                            </div>
                            <span class="inline mt-2"><input v-model="user.rememberMe"
                                                             type="checkbox"> Remember Me</span>
                            <button @click="usersignin"
                                    class="focus:outline-none text-2xl text-gray-200 border-gray-600 border-2 px-4 py-1 rounded-md mt-6">
                                Sign In
                            </button>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SignIn",
        data() {
            return {
                user: this.User(),
                wrongCredentials: false,
            }
        },
        methods: {
            User() {
                return {
                    email: '',
                    password: '',
                    rememberMe: false
                }
            },
            usersignin() {
                console.log(this.user.rememberMe);
                this.$store.dispatch('userSign', this.user)
                    .then(this.user = this.User())
            },
            userPassIsWrong() {
                this.wrongCredentials = true;
            },
            loggedIn() {
                this.$store.commit('LOGIN_USER');
            }
        },
    }
</script>

<style scoped>

</style>