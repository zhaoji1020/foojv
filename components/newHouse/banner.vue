<template>
    <div class="banner" v-banner v-cloak>
        <img src="/imgs/indexBg.jpg">
        <slot></slot>
    </div>
</template>

<script>
    import imgFit from '~/js/imgFit'
    export default {
        data() {
            return {

            }
        },
        directives: {
            banner: {
                inserted(el, binding, vnode) {
                    imgFit.dom = el;
                    imgFit.setBannerHeight();
                    imgFit.bindHandle();
                    setTimeout(() => {imgFit.setBannerHeight();},500)
                },
                unbind(el,binding) {
                    imgFit.unbindHandle();
                }
            }
        }
    }
</script>

<style scoped>
.banner {
    position: relative;
    overflow: hidden;
}
</style>