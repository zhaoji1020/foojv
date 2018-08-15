<template>
    <div>
        <regHeader></regHeader>
        <div class="mt-30">
            <findPwd></findPwd>
        </div>
        <copyRight></copyRight>
    </div>
</template>

<script>
    import regHeader from '~/components/register/regHeader'
    import findPwd from '~/components/forgetPwd/findPwd'
    import copyRight from '~/components/copyRight'

    export default {
        name: "forgetPwd",
        components: {
            regHeader,
            findPwd,
            copyRight
        }
    }
</script>


<style scoped>

</style>