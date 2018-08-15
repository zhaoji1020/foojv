<template>
    <div class="search-input">
        <input type="text" v-model="searchText" class="input fll"><button class="btn fll">搜索</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: ""
            }
        }

    }
</script>

<style scoped lang="scss">
    .search-input {
        display: table-cell;
        vertical-align: middle;
        width: 402px;

        .input {
            border: 1px solid #ccc;
            font-size: 100%;
            outline: none;
            width: 300px;
            height: 40px;
            box-sizing: border-box;

        }
        .btn {
            border: 1px solid #c30d23;
            font-size: 16px;
            height: 40px;
            padding: 0 32px;
            background: #c30d23;
            color: #fff;
            box-sizing: border-box;

        }
    }
</style>