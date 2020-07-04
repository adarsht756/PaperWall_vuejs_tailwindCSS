<template>
    <div class="flex mx-auto justify-center text-center mb-5" v-if="havePagination">
        <div v-for="i in 10" class="text-white" :key="i">
            <button class="border font-bold md:rounded-tr-full md:rounded-bl-full md:px-10 -ml-1 lg:-ml-8 px-3 py-3 md:py-3 pagination_button transition-colors duration-300 focus:outline-none"
                    @click="goToPage(i)">
                {{ i }}
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "pagination",
        methods: {
            goToPage(i) {
                this.$store.dispatch('goToPage', i)
            }
        },
        computed: {
            havePagination() {
                return this.event.resultLength >= 21
            },
            ...mapState(['event'])
        }
    }
</script>

<style scoped>

</style>