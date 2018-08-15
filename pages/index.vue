<template>
    <div>
        <header class="header">
            <userTop></userTop>
            <linkNav :regionList="region"></linkNav>
        </header>

        <!--banner栏目开始-->
        <div class="content">
            <div class="banner" v-banner>
                <div v-swiper:mySwiper="swiperOption" style="height: 100%;overflow: hidden;">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="banner in banners" style="overflow: hidden;">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" style="display: block;">
                        </div>
                    </div>
                </div>
                <div class="banner-search">
                    <div class="search-tab">
                        <ul class="search-header clearfix">
                            <li :class="{active: selectTab==1}" @click="selectTab=1">找二手房</li>
                            <li :class="{active: selectTab==2}" @click="selectTab=2">找新房</li>
                            <li :class="{active: selectTab==3}" @click="selectTab=3">找租房</li>
                            <li :class="{active: selectTab==4}" @click="selectTab=4">找学区房</li>
                            <li :class="{active: selectTab==5}" @click="selectTab=5">找小区</li>
                        </ul>
                        <div class="search-inputs">
                            <input type="text" :placeholder="placeText" v-model="searchText">
                            <span class="search-btn" @click="handleSearch">搜索</span>
                            <span class="map-find" v-if="selectTab<4">
                                <img src="/imgs/mapSearch.png">
                                地图找房
                            </span>
                            <ul class="pre-search" v-show="isSearch">
                                <li v-for="item in searchData" @click="handleFind">{{item.title}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom-slider" style="height: 30px">
                        <div class="headline-wrap" style="float: left;">
                            <img src="/imgs/toutiao.png">
                        </div>
                        <div v-swiper:headlineSwiper="headlineOption" style="line-height: 30px;overflow: hidden;float: left;height: 30px;margin-left: 15px;">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in headlineData">
                                    <nuxt-link to="#" class="swiper-link" key="index">{{item.title}}</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--banner栏目结束-->
        <!--快速链接开始-->
        <div class="quick-link">
            <!--小按钮链接-->
            <ul class="link-wrap clearfix">
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/store.png" alt="查门店">
                        <h2 class="link-title">查门店</h2>
                        <div>查优质门店</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/entrust.png" alt="在线委托">
                        <h2 class="link-title">在线委托</h2>
                        <div>有问题我们帮您</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/mapBlue.png" alt="地图找房">
                        <h2 class="link-title">地图找房</h2>
                        <div>地图找房</div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">
                        <img src="/imgs/encyclopedias.png" alt="福居百科">
                        <h2 class="link-title">福居百科</h2>
                        <div>看百科了解更多</div>
                    </nuxt-link>
                </li>
            </ul>
            <!--小按钮链接结束-->
            <!--大图标链接-->
            <ul class="features clearfix">
                <li v-for="(item,index) in features">
                    <img :src="'/imgs/'+(3-index)+'.png'" :alt="item.title">
                    <div class="desc">
                        {{item.title}}
                    </div>
                </li>
            </ul>
            <!--大图标链接结束-->
        </div>
        <!--快速链接结束-->
        <!--精品新房开始-->
        <div class="new-house main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">精品新房</h2>
                <nuxt-link to="#" class="more flr" >
                    更多新房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                在这里为您寻觅一个新家
            </p>
            <ul class="main-content clearfix">
               <li v-for="(item,index) in productData.new" v-if="index<3">
                   <div class="img-wrap">
                       <img :src="'/origin'+item.pic" >
                   </div>
                   <div class="img-desc-wrap clearfix">
                       <p class="img-desc fll">
                           {{item.title}}
                       </p>
                       <span class="price flr">
                            {{item.average_price}}元/平
                       </span>
                   </div>
               </li>
            </ul>
        </div>
        <!--精品新房结束-->
        <!--二手优品开始-->
        <div class="second-hand main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">二手优品</h2>
                <nuxt-link to="#" class="more flr" >
                    更多二手房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                生活因为宽广，才会不断延伸
            </p>
            <ul class="main-content clearfix">
                <li v-for="(item,index) in productData.used" v-if="index<3">
                    <div class="img-wrap">
                        <img :src="'/origin'+item.pic" alt="">
                    </div>
                    <div class="house-msg">
                        <div class="address">
                            {{item.title}}
                        </div>
                        <div class="area">
                            {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫{{item.built_area}}&nbsp;&nbsp;m²
                        </div>
                    </div>
                    <div class="fll-price">
                        {{item.total_price}}万
                    </div>
                </li>
            </ul>
        </div>
        <!--二手优品结束-->
        <!--广告栏-->
        <div class="ad-banner">
            <img src="/imgs/u764_state0.png" >
        </div>
        <!--广告栏结束-->
        <!--精品租房-->
        <div class="renting-house main-list">
            <div class="title-top clearfix">
                <h2 class="main-title fll">精品租房</h2>
                <nuxt-link to="#" class="more flr" >
                    更多租房
                    <i class="iconfont icon-mjiantou"></i>
                </nuxt-link>
            </div>
            <p class="main-desc">
                与其等待，不如坐享繁华
            </p>
            <ul class="main-content clearfix">
                <li v-for="(item,index) in productData.retal" v-if="index<3">
                    <div class="img-wrap">
                        <img :src="'/origin'+item.pic" alt="">
                    </div>
                    <div class="house-msg">
                        <div class="address">
                            {{item.title}}
                        </div>
                        <div class="area clearfix">
                            <span class="fll">
                                 {{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫{{item.built_area}}&nbsp;&nbsp;m²
                            </span>
                            <span class="month-price flr">
                                {{item.rent}}元/月
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--精品租房结束-->
        <!--友情链接-->
        <friend-link></friend-link>
        <!--友情链接结束-->
        <!--右侧浮动框-->
        <rightBox></rightBox>
        <!--右侧浮动框结束-->
        <i class="iconfont icon-wode"></i>

    </div>
</template>
<style lang="scss">

</style>

<script>
    import axios from '~/plugins/axios'
    import userTop from '~/components/index/userTop'
    import linkNav from '~/components/index/linkNav'
    import friendLink from '~/components/index/friendLink'
    import rightBox from '~/components/index/rightBox'
    import imgFit from '~/js/imgFit'
    import api from '~/api'


    export default {
        async asyncData() {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}))
            let res = await axios.get(api.regionListCopy)
            let headlineData = await axios.get(api.paramToUrl(api.encyTop, {page_num: 0,page_size:10}))
            let features = await axios.get(api.linkData)
            let productData = await axios.get(api.paramToUrl(api.productRecommend, {plat: 2,page_num:1,page_size: 3}))
            return {
                region: res.data.data,
                banners: bannerData.data.data,
                headlineData: headlineData.data.datas[0],
                features: features.data.datas,
                productData: productData.data
            }
        },
        head() {
            return {
                title: 'Users'
            }
        },
        directives: {
            "banner": {
                inserted(el,binding) {
                    console.log(this);
                    imgFit.dom = el;
                    imgFit.setBannerHeight();
                    imgFit.bindHandle();
                    setTimeout(() => {imgFit.setBannerHeight()},300)
                },
                unbind(el,binding) {
                    imgFit.unbindHandle();
                }
            }
        },
        components: {
            userTop,
            linkNav,
            friendLink,
            rightBox
        },
        data() {
            return {
                swiperOption: {
                    autoplay: false
                },
                selectTab: 1,
                headlineOption: {
                    autoplay: true,
                    direction: 'vertical',
                    loop: true
                },
                searchData: [],
                searchText: "",
                isSearch: false
            }
        },
        mounted() {

        },
        computed: {
            placeText() {
                switch (this.selectTab){
                    case 1: return "输入小区名查找二手房";
                    case 2: return "输入楼盘名进行搜索";
                    case 3: return "输入小区名可以查找出租的房屋";
                    case 4: return "输入小区名搜索学区房";
                    case 5: return "输入小区名搜索小区";
                }
            }
        },
        watch: {
            searchText(val) {
                if(val.trim()!=""){
                    this.isSearch = true;
                    axios.get(api.paramToUrl(api.used_lists, {title: val})).then(res => {
                        this.searchData = res.data.data;
                    }).catch(err => {
                        console.log(err)
                    })
                }
                else {
                    this.isSearch = false;
                }
            }
        },
        methods: {
            handleFind() {
                console.log('查找')
            },
            //点击按钮
            handleSearch() {
                let selected = this.selectTab;

                switch(selected){
                    case 1:
                        this.$router.push({name: "secondHand",query: {q: this.searchText}})
                }
            }

        }
    }
</script>

<style scoped lang="scss" src="~/style/index.scss"></style>
