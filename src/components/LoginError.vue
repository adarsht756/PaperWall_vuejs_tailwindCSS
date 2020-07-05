<template>
    <transition name="slideDown">
        <div class="px-5 py-3 shadow-2xl justify-between items-center hidden font-light text-white mb-20 ml-4 md:ml-10 bottom-0 fixed z-40"
             style="background: #232323" id="loginError">
            <div>
                Please Login First to like Wallpaper
            </div>
            <button @click="closeBox()" class="focus:outline-none">
                <svg class="h-5 w-5 ml-3" fill="white" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                     focusable="false">
                    <g>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </g>
                </svg>
            </button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "LoginError",
        data() {
            return {
                loginProb: true
            }
        },
        methods: {
            closeBox() {
                document.getElementById("loginError").style.display = 'none';
            }
        }
    }
</script>

<style scoped>

</style>