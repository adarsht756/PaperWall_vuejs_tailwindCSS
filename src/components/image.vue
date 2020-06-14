<template>
    <div>
        <img :src="source" :alt="description" :id="sourceId">
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

</style>