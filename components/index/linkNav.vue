<template>
    <div>
        <div class="header-content clearfix">
            <h1 class="logo">
                <nuxt-link to="/" target="_blank">
                    <img src="/imgs/logo.png">
                </nuxt-link>
            </h1>
            <div class="select-city" @click="showMark = true"><span>{{selectText}} <i class="iconfont icon-jiantouxia"></i></span></div>
            <div class="nav clearfix">
                        <span class="nav-item active" >
                            <nuxt-link to="/" target="_blank">首页</nuxt-link>
                        </span>
                <span class="nav-item" >
                            <a href="/secondHand" target="_blank" >二手房</a>
                        </span>
                <span class="nav-item">
                            <a href="newHouseIndex" >新房</a>
                        </span>
                <span class="nav-item">
                            <a href="rentalList.html" target="_blank">租房</a>
                        </span>
                <span class="nav-item">
                            <a href="secondSchoolHomesList.html" target="_blank">学区房</a>
                        </span>
                <span class="nav-item">
                            <a href="residentialQuartersList.html" target="_blank">小区</a>
                        </span>
                <span class="nav-item">
                            <a href="brokerList.html" target="_blank">经纪人</a>
                        </span>
                <span class="nav-item">
                            <a href="encyclopedias.html" target="_blank">百科</a>
                        </span>
                <span class="nav-item spinner" >
                            <a class="toggle" target="_blank" >在线委托</a>
                            <div class="spinner-content">
                                <div>
                                    <a href="homeOwer.html" target="_blank">我是业主</a>
                                </div>
                                <div>
                                    <a href="huntHouse.html" target="_blank">帮我找房</a>
                                </div>
                            </div>
                        </span>
                <span class="nav-item">
                            <a href="tool.html" target="_blank">工具</a>
                        </span>
                <span class="nav-item">
                            <a href="special.html" target="_blank">专题</a>
                        </span>
            </div>
        </div>
        <div class="mark" v-show="showMark" @click="showMark = false">
            <div class="select-box">
                <div class="box-title">
                    <span>选择区县</span>
                    <i class="iconfont icon-chahao" @click="showMark = false"></i>
                </div>
                <div class="select-content clearfix">
                    <div class="current-item">
                        <span @click="handleChangeArea('呼和浩特')">呼和浩特</span>
                    </div>
                    <ul>
                        <li v-for="item in regionList">
                            <span class="item-char fll">
                                {{item.key}}
                            </span>
                            <span class="item-text" @click="handleChangeArea(item.list[0].area)">
                                {{item.list[0].area}}
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from '~/plugins/axios'
    import api from '~/api'
    export default {
        name: "linkNav",
        props: {
            regionList: {
                type: Array
            }
        },
        data() {
            return {
                selectText: "呼和浩特",
                showMark: false
            }
        },
        methods: {
            handleChangeArea(area) {
                localStorage.setItem("area", area);
                this.selectText = area;
                this.showMark = false;
            }
        },
        mounted() {
            let area = localStorage.getItem("area");
            if(!area){
                this.selectText = "呼和浩特";
            }
            else {
                this.selectText = area;
            }

        }
    }
</script>

<style src="~/style/linkNav.scss" lang="scss">

</style>