<template>
    <div>
        <div class="main-content">
            <div class="main-content-top clearfix">
                <span>找回密码</span>
                <nuxt-link to="/login">返回登录</nuxt-link>
            </div>
            <div class="main-content-middle">
                <form @submit.prevent>
                    <div class="phone">
                        <i class="iconfont icon-z-phone"></i>
                        <input type="tel" placeholder="请输入手机号" v-model="mobile">
                    </div>
                    <div class="verify clearfix">
                        <i class="iconfont icon-mima"></i>
                        <input type="text" placeholder="请输入短信验证码" class="fll verify-input" v-model="verify">
                        <button class="flr" :disabled="canSend" @click="sendSms" v-text="btnText"></button>
                    </div>
                    <div class="reg-button">
                        <button @click="handleNext">下一步</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        name: "findPwd",
        data() {
            return {
                mobile: "",
                pwd: "",
                verify: "",
                btnText: "获取验证码",
                isSending: false
            }
        },
        methods: {
            handleNext() {

            },
            sendSms() {
                if(!this.isSending){
                    this.handleBtnText();
                    axios.get(`/api.php?s=Msg/send_msg/mobile/${this.mobile}`).then(res => {
                        if(res.data.code !== 200){
                            alert(res.data.msg)
                        }
                    })
                }

            },
            handleBtnText() {
                this.isSending = true;
                let time = 10;
                this.btnText = time + "s";
                let timer = setInterval(()=> {
                    time--;
                    this.btnText = time + "s";
                    if(time <= 0){
                        clearInterval(timer)
                        this.btnText = "重新获取"
                        this.isSending = false;
                    }
                }, 1000)
            }
        },
        computed: {
            canSend() {
                let mobile = this.mobile;
                let mobileReg = /^1\d{10}$/

                if(mobileReg.test(mobile)&&!this.isSending){
                    return false
                }
                else {
                    return true
                }
            }
        }
    }
</script>

<style scoped lang="scss" src="~/style/regContent.scss"></style>
<style scoped>

</style>