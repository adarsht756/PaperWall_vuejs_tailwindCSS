<template>
    <div>
        <img :src="source" :alt="description">
    </div>
</template>

<script>
    export default {
        props:{
            source: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            }
        },
        name: "imageComp",
    }
</script>

<style scoped>

</style>