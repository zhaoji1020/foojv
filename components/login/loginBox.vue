<template>
    <div>
        <div class="main-content">
            <div class="main-content-top clearfix">
                <span>登录</span>
                <nuxt-link to="/register">没有账号,立即注册</nuxt-link>
            </div>
            <div class="main-content-middle">
                <form @submit.prevent>
                    <div class="phone">
                        <i class="iconfont icon-z-phone"></i>
                        <input type="tel" placeholder="请输入手机号" v-model="mobile" autocomplete="on">
                    </div>
                    <div class="pwd">
                        <i class="iconfont icon-mima"></i>
                        <input type="password" placeholder="请输入密码" v-model="pwd">
                    </div>
                    <div class="reg-button">
                        <button @click="login">登录</button>
                    </div>
                </form>
                <div class="forget-link">
                    <nuxt-link to="/forgetPwd">忘记密码？</nuxt-link>
                </div>
                <div class="third-login clearfix">
                    <a class="qq fll" href="#">
                        <img src="/imgs/u336.png">
                        <div class="desc" id="qqLogin">qq登录</div>
                    </a>
                    <a class="wx fll" href="#">
                        <img src="/imgs/u326.png">
                        <div class="desc">微信登录</div>
                    </a>
                    <a class="wb fll" href="#">
                        <img src="/imgs/u331.png">
                        <div class="desc">微博登录</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import md5 from 'md5'
    import axios from '~/plugins/axios'
    import cookies from 'js-cookie'
    export default {
        name: "loginBox",
        data() {
            return {
                mobile: 18611507465,
                pwd: "yjr1923521"
            }
        },
        methods: {
            login() {
                let params = {
                    mobile: this.mobile,
                    password: md5(md5(this.pwd))+"fujuwang"
                }

                this.$axios.post("/api.php?s=Login/login", params).then(res => {
                    console.log(res);
                    if(res.data.code == 200){
                        cookies.set("userid", res.data.data.id, {expires: 10});
                        cookies.set("username", res.data.data.username, {expires: 10})
                        cookies.set("userpic", res.data.data.face, {expires: 10})
                        cookies.set("userphone", res.data.data.mobile, {expires: 10})
                        this.$message.success("登录成功，正在为您跳转......");
                        // setTimeout(() => {
                        //     this.$router.push("/")
                        // },500)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss" src="~/style/regContent.scss"></style>
<style scoped lang="scss">

    .forget-link {
        color: #666;
        text-align: center;
        padding-bottom: 20px;
        display: block;
        font-size: 14px;
        margin-top: 30px;
    }
    .third-login {
        text-align: center;
        margin: 0 auto;
        width: 300px;
        font-size: 14px;
        color: #666;
    }
    .third-login>a {
        width: 60px;
        margin: 0 20px;
        text-align: center;
    }
    .third-login img {
        width: 40px;
        height: 40px;
        margin-bottom: 6px;
    }
</style>