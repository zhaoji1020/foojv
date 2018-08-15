<template>
    <div class="user-top">
        <span class="login">
            <nuxt-link to="/personalCenter" v-if="username">{{username}}</nuxt-link>
            <nuxt-link to="/login"  v-else>请登录</nuxt-link>
        </span>
        <span class="register">
            <a href="javascript:" v-if="username" @click="logOut">退出</a>
            <nuxt-link to="/register" v-else>立即注册</nuxt-link>
        </span>
    </div>
</template>

<script>
    import cookies from 'js-cookie'
    import common from '~/js/common'
    import {mapState} from 'vuex'

    export default {
        name: "userTop",
        data() {
            return {

            }
        },
        methods: {
            getLoginStatus: common.getLoginStatus,
            logOut: common.logOut
        },
        created() {
            this.getLoginStatus();
        },
        computed: {
            ...mapState([
                'userid',
                'username',
                'userpic',
                'userphone',
            ])
        }
    }
</script>

<style scoped>
.user-top {
    width: 1100px;
    margin: 0 auto;
    text-align: right;
    font-size: 12px;
    color: #333;
    padding: 15px 0 5px;
}
    .user-top .login {
        border-right: 1px solid #333;
    }

    .user-top .login, .user-top .register {
        display: inline-block;
        padding: 0 10px;
    }
</style>