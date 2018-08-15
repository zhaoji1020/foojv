<template>
    <div class="house-photo">
        <h2 class="title">房源照片</h2>
        <ul class="img-list clearfix" ref="imgList">
            <li v-for="(item,index) in imgList">
                <img :src="'/origin'+item.pic">
                <span class="desc">{{item.type}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '~/api'
    import 'viewerjs/dist/viewer.css'
    import Viewer from 'viewerjs'

    export default {
        data() {
            return {
                viewer: null,
                imgList: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                let houseId = this.$route.params.id
                this.$axios.get(`api.php?s=Product/used_pic/id/${houseId}/h_type/used`).then(res => {
                    let arr = res.data.data;
                    let newArr = []
                    arr.map(type => {
                        let typeArr = type.lists.map(item => {
                            newArr.push({...item})
                        })
                    })
                    this.imgList = newArr;
                    this.initPicList();
                })
            },
            initPicList() {
                let options = {
                    title: false,
                    toolbar: false,
                    tooltip: true,
                    movable: false,
                    rotatable: false,
                    zoomable: true,
                    scalable: false,
                    loading: false,
                    navbar: 2
                }

                //初始化图片切换控件
                this.$nextTick(()=> {
                    this.viewer = new Viewer(this.$refs.imgList,options)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.house-photo {
    margin-top: 80px;
    
    .title {
        font-size: 30px;
        color: #333;
    }
    .img-list {
        margin-top: 40px;

        li {
            position: relative;
            margin-top: 20px;
            margin-right: 20px;
            float: left;
            width: 540px;
            height: 405px;
            &:nth-child(even){
                margin-right: 0;
            }
            .desc {
                position: absolute;
                left: 0;
                top: 0;
                width: 70px;
                height: 40px;
                font-size: 16px;
                color: rgb(255,255,255);
                background-color: rgba(0,0,0,.5);
                line-height: 40px;
                text-align: center;
            }
        }
        img {
            display: block;
            width: 540px;
            height: 405px;
        }
    }
}
</style>