<template>
    <div class="friend-link-wrap">
        <div class="friend-link">
            <div class="title">
                友情链接
            </div>
            <ul class="clearfix">
                <li v-for="item in links">
                    <a :href="item.url">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    .friend-link-wrap {
        margin-top: 60px;
        background: #f4f4f4;
        padding: 60px 0;
        .friend-link {
            width: 1100px;
            margin: 0 auto;

            .title {
                font-size: 30px;
                font-weight: 700;
                margin-bottom: 30px;
            }
            ul>li {
                width: 122px;
                float: left;
                color: #666;
                font-size: 14px;
                margin-bottom: 10px;

                a {
                    color: #666;
                }
            }
        } 
    }
</style>
<script>
    import axios from '~/plugins/axios'
    import api from '~/api'
    export default {
        name: "friendLink",
        data() {
            return {
                links: []
            }
        },
        methods: {
            getData() {
                axios.get(api.bottomLists).then(res => {
                    this.links = res.data.data;
                    // console.log(this.links)
                })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>