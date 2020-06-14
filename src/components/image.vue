<template>
    <div>
        <img :src="source" :alt="description" :id="sourceId">
    </div>
</template>

<script>
    export default {
        props: {
            source: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            sourceId: {
                type: String,
                required: false
            }
        },
        name: "imageComp",
    }
</script>

<style scoped>

    @media screen and (min-width: 1024px) {
        img {
            width: 402.667px;
        }
    }

    @media screen and (max-width: 640px) {
        img {
            width: 360px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            width: 402.667px;
        }
    }
</style>