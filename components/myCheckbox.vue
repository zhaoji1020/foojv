<template>
    <div>
        <label v-for="item in currentOptions" class="label-item">
            <input type="checkbox" v-model="currentValue" :value="item.value" name="test" style="display: none">
            <span class="box-border"></span>
            <span class="title">{{item.label}}</span>
        </label>
    </div>
</template>
<style>
    .label-item {
        margin-right: 30px;
    }
    .box-border {
        position: relative;
        display: inline-block;
        margin-right: 6px;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        vertical-align: middle;
    }
    .title {
        font-size: 14px;
        color: #333;
        font-weight: 400;
    }
    .label-item input:checked + .box-border {
        background: #c30d23;
    }
    .box-border::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 44%;
        transform: translate(-50%,-50%) rotateZ(-45deg) scale(0);
        width: 8px;
        height: 4px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
    }
    .label-item input:checked + .box-border::after {
        transition: all .2s ease-in-out;
       transform: translate(-50%,-50%) rotateZ(-45deg) scale(1);
    }
</style>

<script>
    export default {
        name: "myCheckbox",
        props: {
            options: {
                type: Array
            },
            value: {
                type: Array
            }
        },
        data() {
            return {
                currentOptions: this.options,
                currentValue: this.value
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            options(val) {
                this.currentOptions = val;
            },
            currentValue(val) {
                this.$emit("input",val)
            }
        }

    }
</script>

<style scoped>

</style>