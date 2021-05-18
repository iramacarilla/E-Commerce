<template>
    <div v-if="isVisible">
        <h1>Title Directives</h1>
    </div>
</template>

<script>
    export default {
        name: 'DirectiveTest',
        data(){
            return {
                isVisible: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>