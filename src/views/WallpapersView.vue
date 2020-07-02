<template>
    <div class="flex flex-col md:flex-row mt-10 mb-5 container mx-auto">

        <div class="flex flex-col mx-auto">
            <div v-for="result in results.slice(0,7)" :key="result"
                 :id="result.id" class="md:m-3 mx-0 my-3 relative conta">
                <div class="overflow-hidden" :style="{ background: result.color }">
                    <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                    <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                               :source="result.urls.regular"
                               :description="result.alt_description">
                    </imageComp>
                </div>
                <div>
                    <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                            @click="download(result.links.download_location)"> Download
                    </button>
                    <button @click="likeWallpaper(result)" class="like-btn z-10 text-white focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart-circle"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                             class=w-6>
                            <path fill="currentColor"
                                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm116-318.4c-41.9-36.3-89.5-8.4-104.9 7.7L248 172.9l-11.1-11.6c-26.6-27.9-72.5-35.9-104.9-7.7-35.3 30.6-37.2 85.6-5.6 118.7l108.9 114.1c7 7.4 18.4 7.4 25.5 0l108.9-114.1c31.5-33.2 29.7-88.1-5.7-118.7zm-17 96.5l-99 103.8-99-103.8c-16.7-17.5-20.4-51.6 3.4-72.1 22.2-19.3 50-6.8 61.9 5.7L248 219l33.7-35.3c8.7-9.2 37.5-26.8 61.9-5.7 23.8 20.5 20.1 54.5 3.4 72.1z"
                                  class=""></path>
                        </svg>
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

        <div class="flex flex-col mx-auto">
            <div v-for="result in results.slice(7,14)" :key="result"
                 class="md:m-3 mx-0 my-3 conta relative">
                <div class="overflow-hidden" :style="{ background: result.color }">
                    <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                    <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                               :sourceId="result.id" :source="result.urls.regular"
                               :description="result.alt_description">
                    </imageComp>
                </div>
                <div>
                    <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                            @click="download(result.links.download_location)"> Download
                    </button>
                    <button class="like-btn z-10 text-white focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart-circle"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                             class=w-6>
                            <path fill="currentColor"
                                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm116-318.4c-41.9-36.3-89.5-8.4-104.9 7.7L248 172.9l-11.1-11.6c-26.6-27.9-72.5-35.9-104.9-7.7-35.3 30.6-37.2 85.6-5.6 118.7l108.9 114.1c7 7.4 18.4 7.4 25.5 0l108.9-114.1c31.5-33.2 29.7-88.1-5.7-118.7zm-17 96.5l-99 103.8-99-103.8c-16.7-17.5-20.4-51.6 3.4-72.1 22.2-19.3 50-6.8 61.9 5.7L248 219l33.7-35.3c8.7-9.2 37.5-26.8 61.9-5.7 23.8 20.5 20.1 54.5 3.4 72.1z"
                                  class=""></path>
                        </svg>
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

        <div class="flex flex-col mx-auto">
            <div v-for="result in results.slice(14)" :key="result" class="md:m-3 mx-0 my-3 conta relative">
                <div class="overflow-hidden" :style="{ background: result.color }">
                    <!--                         :style="{ height: ((400/result.width)*result.height)+'px' }"-->
                    <imageComp class="wall_image mx-auto h-full w-full transition-all transform duration-500"
                               :sourceId="result.id" :source="result.urls.regular"
                               :description="result.alt_description">
                    </imageComp>
                </div>
                <div>
                    <button class="px-4 py-2 bg-gray-700 text-white rounded-t-md middle z-10 focus:outline-none"
                            @click="download(result.links.download_location)"> Download
                    </button>
                    <button class="like-btn z-10 text-white focus:outline-none">
                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart-circle"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                             class=w-6>
                            <path fill="currentColor"
                                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm116-318.4c-41.9-36.3-89.5-8.4-104.9 7.7L248 172.9l-11.1-11.6c-26.6-27.9-72.5-35.9-104.9-7.7-35.3 30.6-37.2 85.6-5.6 118.7l108.9 114.1c7 7.4 18.4 7.4 25.5 0l108.9-114.1c31.5-33.2 29.7-88.1-5.7-118.7zm-17 96.5l-99 103.8-99-103.8c-16.7-17.5-20.4-51.6 3.4-72.1 22.2-19.3 50-6.8 61.9 5.7L248 219l33.7-35.3c8.7-9.2 37.5-26.8 61.9-5.7 23.8 20.5 20.1 54.5 3.4 72.1z"
                                  class=""></path>
                        </svg>
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
</template>

<script>
    import imageComp from "../components/image";
    export default {
        name: "WallpapersView",
        components: {
            imageComp,
        },
        props: {
            results: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                appNameReferral: "?utm_source=Paperwall&utm_medium=referral",
                unsplashLink: "https://unsplash.com/",
            }
        },
        methods: {
            likeWallpaper(e){
                if(!this.$store.state.userIsLoggedIn)
                {
                    console.log(this.$store.state.userIsLoggedIn);
                    console.log("please login first")
                }
                else{
                console.log(this.$store.state.userIsLoggedIn);
                console.log(e);
                }
            },
            download(e){
                this.$emit('download-image',e)
            }
        }

    }
</script>

<style scoped>

</style>