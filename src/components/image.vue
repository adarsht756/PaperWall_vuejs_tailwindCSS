<template>
    <div>
        <img :src="source" :alt="altDescription">
    </div>
</template>

<script>
    export default {
        props:{
            source: {
                type: String,
                required: true
            },
            altDescription: {
                type: String,
                required: true
            }
        },
        name: "imageComp",
    }
</script>

<style scoped>

</style>