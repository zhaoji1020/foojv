<template>
    <div>
        <div class="top">
            <slot name="default"></slot>
        </div>
        <div class="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slotCom"
    }
</script>

<style scoped>
.my-btn {
    line-height: 50px;
    width: 100px;
    text-align: center;
    height: 50px;
    border: 1px solid #eee;
    background: #f00;
    color: #fff;
}
    .top {
        margin: 0 auto;
        width: 1100px;
        height: 100px;
        line-height: 100px;
        background: skyblue;
    }
    .bottom {
        margin: 0 auto;
        width: 1100px;
        height: 300px;
        line-height: 300px;
        background: #ff0;
    }
</style>