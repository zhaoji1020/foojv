<template>
    <div>
        <input type="text" class="my-input" v-model="value">
        <h2>{{value}}</h2>
        <button @click="handleReduce">----</button>
    </div>
</template>

<script>
    export default {
        name: "btn",
        props: {
            value: {
                type: [String, Number]
            }
        },
        data() {
            return {
                // first: "",
                // second: "",
                // end: "",
                // myData: ""
                currentValue: this.value
            }
        },
        methods: {
            // handleAdd() {
            //     this.end = this.first + this.second;
            //
            //     this.$emit("computedData", this.end);
            // }
            // handleChange(val) {
            //     console.log(this)
            //     this.myData = val.data;
            // }
            handleReduce() {
                this.currentValue--;
            }
        },
        watch: {
            // myData(val) {
            //     console.log(`改变后的值${val}`)
            // }
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$emit("input", val);
            }
        }

    }
</script>

<style>
    .btn {
        width: 100px;
        height: 50px;
        border-radius: 4px;
        text-align: center;
        color: #fff;
        background: skyblue;
    }

    .my-input {
        width: 300px;
        height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        font-size: 14px;
        padding: 6px;
        outline: none;
    }
</style>