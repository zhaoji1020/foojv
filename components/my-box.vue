<template>
    <div>
        <div class="top">
            <slot>
                <h1 style="font-size: 30px;font-weight: 700;">我是顶部部分的内容</h1>
            </slot>
        </div>
        <div class="middle">
            <div style="height: 0;" class="flex-box" v-trans>
                <slot name="middle">
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                    <div>我是文字内容</div>
                </slot>
            </div>
        </div>
        <div class="bottom">
            <slot name="bottom">
                我是底部的内容
            </slot>
        </div>
        <button @click="handleShow">
            {{isShow?"收起选项":"更多选项"}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "my-box",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            handleShow() {
                this.isShow = !this.isShow
            }
        },
        directives: {
            trans: {
                update(el,biding, vnode) {
                    let isShow = vnode.context.$data.isShow;
                    if(!isShow){
                        el.style.height = 0;
                    }
                    else {
                        el.style.height = "auto";
                        let startHeight = 0;
                        let targetHeight = getComputedStyle(el).height;
                        el.style.transition = "none";
                        el.style.height = startHeight;
                        //类似于高度，宽度
                        //类似于
                        el.offsetWidth;
                        el.style.transition = "height ease .5s"
                        el.style.height = targetHeight;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .flex-box {
        transition: height ease 3s;
        overflow: hidden;
    }
</style>