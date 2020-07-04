<template>
    <div>
        <NetworkProblem :networkProb="networkProb"/>

        <NavBar/>

        <PaperWallDescAndSearch/>

        <div class="w-full mx-auto bg-gray-500 mt-10" style="width: 95%;height: 1px"></div>

        <router-view :key="$route.fullPath"/>

        <pagination/>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import pagination from "../components/pagination";
    import PaperWallDescAndSearch from "../components/PaperWallDescAndSearch";
    import NetworkProblem from "../components/NetworkProblem";
    import {mapState} from 'vuex';

    export default {
        name: "homePage",
        components: {
            NavBar, PaperWallDescAndSearch, NetworkProblem, pagination
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
        beforeCreate() {
            if (localStorage.keepUserLoggedIn) {
                this.$store.state.userIsLoggedIn = localStorage.keepUserLoggedIn
            }
        },
        computed: {
            ...mapState(['user', 'event'])
        },
        beforeMount() {
            this.$store.dispatch('getRandomWallpapers')
        },
    }
</script>

<style scoped>

</style>