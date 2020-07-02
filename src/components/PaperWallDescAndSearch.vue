<template>
    <div class="relative bg-gray-200 mt-16 flex flex-col" id="carousel">

        <div class="absolute text-white flex flex-col ml-4 md:ml-20 lg:ml-40 xl:ml-56">
            <h2 class="font-semibold mt-40 text-4xl">PaperWall</h2>
            <p class="text-xl">The online platform of commercially free images. <br>
                Captured by best photographer's with their creation.</p>
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
                <span>All the photos are retrieved from
                    <a target="_blank" :href=unsplashLink+appNameReferral>Unsplash</a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaperWallDescAndSearch",
        data() {
            return {
                searchKey: "",
                appNameReferral: "?utm_source=Paperwall&utm_medium=referral",
                unsplashLink: "https://unsplash.com/",
            }
        },
        methods: {
            searchPhoto() {
                this.$emit('search-photo', this.searchKey, false, true)
                this.searchKey = ""
            }
        }

    }
</script>
