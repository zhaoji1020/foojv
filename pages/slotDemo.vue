<template>
    <div>
        <my-box></my-box>
    </div>
</template>

<script>
    // import btn from '~/components/slotCom'
     import myBox from '~/components/my-box'

    export default {
        name: "slotDemo",
        components: {
            myBox
        }
    }
</script>

<style scoped>

</style>