<template>
    <div>
        <top-links></top-links>
        <logoLink></logoLink>
        <div class="breadcrumb-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">福居网</el-breadcrumb-item>
                <el-breadcrumb-item>二手房</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!--搜索框-->
        <search></search>
        <!--搜索框结束-->

        <!--筛选盒子-->
        <div class="filter-box">
            <filterBox>
                <template>
                    <div class="region clearfix">
                        <!--区域-->
                        <span class="title">
                        区域
                    </span>
                        <el-checkbox class="fll" style="margin-right: 30px;" @change="handleClear('r_id')"
                                     v-model="isChecked.r_id">不限
                        </el-checkbox>
                        <el-checkbox-group v-model="formData.r_id" class="fll" data-key="r_id"
                                           @change="handleChange('r_id')">
                            <el-checkbox v-for="(item,index) in fillData2.r_idData" :key="index" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                        <!--区域-->
                    </div>
                    <div class="price clearfix mt-20">
                        <!--价格选择-->
                        <span class="title">价格</span>
                        <!--价格选择结束-->
                        <el-checkbox class="fll" style="margin-right: 30px;" @change="handleClear('total_price')"
                                     v-model="isChecked.total_price">不限
                        </el-checkbox>
                        <el-checkbox-group v-model="formData.total_price" @change="handleChange('total_price')">
                            <el-checkbox v-for="item in fillData.total_priceData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="custom-price clearfix mt-20">
                        <span class="title fll">&nbsp;</span>
                        <div class="custom-price-wrap fll">
                            <input type="text" class="min-price" v-model="formData.minPrice">
                            <span class="split">-</span>
                            <input type="text" class="max-price" v-model="formData.maxPrice">
                            <span class="units">万</span>
                            <button class="custom-btn" @click="handleCustom">确定</button>
                        </div>
                    </div>
                    <!--户型-->
                    <div class="house-type mt-20">
                        <span class="title">户型</span>
                        <el-checkbox-group v-model="formData.bedroom" class="fll">
                            <el-checkbox v-for="item in fillData.bedroomData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--户型结束-->
                </template>

                <template slot="middle">
                    <div class="type mt-20">
                        <span class="title">类型</span>
                        <el-checkbox-group v-model="formData.type">
                            <el-checkbox v-for="item in fillData.typeData" :key="item.id" :label="item">{{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>

                    </div>
                    <div class="Decoration mt-20">
                        <span class="title">
                            装修
                        </span>
                        <el-checkbox-group v-model="formData.decoration">
                            <el-checkbox v-for="item in fillData.decorationData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="directive mt-20">
                        <span class="title">
                            朝向
                        </span>
                        <el-checkbox-group v-model="formData.direction">
                            <el-checkbox v-for="item in fillData.directionData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="area mt-20">
                        <span class="title">
                            楼龄
                        </span>
                        <el-checkbox-group v-model="formData.built_area">
                            <el-checkbox v-for="item in fillData.built_areaData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>

                    <div class="area mt-20">
                        <span class="title">
                            楼层
                        </span>
                        <el-checkbox-group v-model="formData.floor_type">
                            <el-checkbox v-for="item in fillData.floor_typeData" :key="item.id" :label="item">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>

                    <div class="area mt-20">
                        <span class="title">
                            电梯
                        </span>
                        <el-checkbox-group v-model="formData.dianti">
                            <el-checkbox v-for="item in fillData.diantiData" :key="item.id" :label="item">{{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>

                    <div class="search-wrap mt-20">
                        <span class="title">
                            其他
                        </span>
                        <input type="text" class="search-input" placeholder="在结果中搜索">
                        <button class="search-btn">确定</button>
                    </div>

                </template>
                <template slot="bottom">
                    <div class="mt-30 clearfix">
                        <span class="title fll">
                            筛选分类
                        </span>
                        <div class="type-arr clearfix">
                            <span v-for="item in selectedData" class="select-item" @click="handleReduce(item)">
                                {{item.title}}
                                <i class="iconfont icon-cha fright"></i>
                            </span>
                            <span class="clear-all" @click="handleClearAll">
                                <i class="iconfont icon-lajitong"></i> 清除全部
                            </span>
                        </div>
                    </div>
                </template>
            </filterBox>
        </div>
        <!--筛选盒子结束-->



        <div class="house-list" style="width: 1100px;margin: 80px auto;">

            <div class="data-list-wrap">
                <div class="order-box clearfix">
                    <label v-for="item in fillData.orderData" class="order-label" :class="{active: params.order == item.id}">
                        {{item.title}}
                        <input type="radio"  name="order" :value="item.id" @change="getData" v-model="params.order">
                    </label>
                </div>
            </div>

            <!--<div class="filter-box clearfix">-->
                <!--<span class="title">-->
                   <!--筛选-->
                <!--</span>-->
                <!--<el-checkbox-group>-->
                    <!--<el-checkbox></el-checkbox>-->
                <!--</el-checkbox-group>-->
            <!--</div>-->

            <h2>共找到<span style="color: #c30d23; display: inline-block;margin: 0 5px;">{{houseCount}}个</span> 呼和浩特 二手房源</h2>
            <div :key="index" class="house-item clearfix" v-for="(item,index) in houseArr">
                <nuxt-link :to="{name: 'secondHand-id', params: {id: item.id}}" class="item-img fll">
                    <img :src="'/origin'+item.pic">
                </nuxt-link>
                <div class="item-msg fll">
                    <nuxt-link :to="{name: 'secondHand-id', params: {id: item.id}}" class="title">
                        {{item.title}}
                    </nuxt-link>
                    <div class="introduce">
                        <span>{{item.village}}
                            |
                            {{item.bedroom}}室
                            |
                            {{item.livingroom}}厅
                            |
                            {{item.wc}}卫生{{item.direction}}
                        </span>
                    </div>
                    <div class="build mt-20">
                        <span>
                            {{item.floor}}/{{item.floor_totle}}
                            |
                            {{item.decoration}}
                        </span>
                    </div>
                    <div class="construction-time mt-20">
                        <span>
                            {{item.age}}年建
                            |
                            {{item.type}}
                        </span>
                    </div>
                    <div class="attention mt-20">
                        <span>
                            {{item.guanzhu}}人关注
                            |
                            共{{item.guanzhu_num}}次带看
                            |
                            {{item.fabushijian>0?`${item.fabushijian}天前发布`:"今天发布"}}
                        </span>
                    </div>
                    <div class="good-point" v-if="item.lable">
                        <span v-if="item.lable" style="background:#5f1985;color:#FFFFFF;" v-for="label in item.lable">
                            {{label.name}}
                        </span>
                    </div>
                </div>
                <div class="price-box flr">
                    <div class="total-price">
                        {{item.total_price}} <span class="unit">万</span>
                    </div>
                    <div class="unit-price">
                        单价{{item.unit_price}}元/平米
                    </div>
                    <div class="follow cancel-follow" @click.stop="handleCancel(item.id)" v-if="item.guanzhu==1">
                        已关注
                    </div>
                    <div class="follow" @click.stop="handleCollect(item.id)" v-else>
                        关注
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination-wrap clearfix">
            <el-pagination class="flr"
                    background
                    layout="prev, pager, next"
                    :total="houseCount" @current-change="handleNext">
            </el-pagination>
        </div>
        <friendlyLink></friendlyLink>
    </div>
</template>


<script>
    import topLinks from '~/components/secondHand/header'
    import friendlyLink from '~/components/index/friendLink'
    import logoLink from '~/components/secondHand/logo-link'
    import filterBox from '~/components/filter-box'
    import search from '~/components/secondHand/search'
    import axios from '~/plugins/axios'
    import {mapState} from 'vuex'
    import api from '~/api'

    export default {
        name: "secondHand",
        components: {
            friendlyLink,
            topLinks,
            logoLink,
            filterBox,
            search
        },
        head() {
            return {
                title: "福居网二手房"
            }
        },
        async asyncData() {
            let r_idData = await axios.get(api.paramToUrl(api.regionLists, {city: "呼和浩特"}))
            r_idData.data.data = r_idData.data.data.map(item => {
                item.title = item.area;
                return item

            })
            return {
                fillData2: {
                    r_idData: r_idData.data.data
                }
            }
        },
        data() {
            return {
                formData: {
                    r_id: [],
                    total_price: [],
                    bedroom: [],  //户型
                    minPrice: "",
                    maxPrice: "",
                    type: [],
                    decoration: [],
                    direction: [],
                    built_area: [],
                    minCustom_bulit_area: "",
                    maxCustom_bulit_area: "",
                    dianti: [],
                    age: [],
                    floor_type: [],
                    search: "",
                    order: 1
                },
                fillData: {
                    total_priceData: [
                        {
                            title: "30万以下",
                            id: "0-30"
                        },
                        {
                            title: "30-40万",
                            id: '30-40'
                        },
                        {
                            title: "40-50万",
                            id: '40-50'
                        },
                        {
                            title: "50万以上",
                            id: '50'
                        }
                    ],
                    bedroomData: [
                        {title: "一室", id: 0},
                        {title: "两室", id: 1},
                        {title: "三室", id: 2},
                        {title: "四室", id: 3},
                        {title: "五室", id: 4}
                    ],
                    typeData: [
                        {title: '平层', id: 0},
                        {title: '复式', id: 1},
                        {title: '跃层', id: 2}
                    ],
                    decorationData: [
                        {title: '毛坯', id: 0},
                        {title: '豪装', id: 1},
                        {title: '精装', id: 2},
                        {title: '简装', id: 3},
                        {title: '中装', id: 4}
                    ],
                    directionData: [
                        {title: '东', id: 0},
                        {title: '西', id: 1},
                        {title: '南', id: 2},
                        {title: '北', id: 3},
                        {title: '南北', id: 4},
                        {title: '西南', id: 5},
                        {title: '东北', id: 6},
                        {title: '东北', id: 7},
                        {title: '西北', id: 8},
                        {title: '东西', id: 9}
                    ],
                    built_areaData: [
                        {title: '50平以下', id: 1},
                        {title: '50-70平', id: 2},
                        {title: '70-90平', id: 3},
                        {title: '90以上', id: 4}
                    ],
                    diantiData: [{id: 0, title: '是'}, {id: 1, title: '否'}],
                    ageData: [
                        {id: 1, title: '5年以内'},
                        {id: 2, title: '10年以内'},
                        {id: 3, title: '15年以内'},
                        {id: 4, title: '15年以上'}
                    ],
                    floor_typeData: [
                        {id: 1, title: "底层"},
                        {id: 2, title: "低楼层"},
                        {id: 3, title: "中层"},
                        {id: 4, title: "中高层"},
                    ],
                    orderData: [
                        {
                            title: "最新",
                            id: 1
                        },
                        {
                            title: "房屋总价",
                            id: 2
                        },
                        {
                            title: "房屋单价",
                            id: 6
                        },
                        {
                            title: "房屋面积",
                            id: 4
                        }
                    ]
                },
                isChecked: {
                    r_id: true,
                    total_price: true,
                    built_area: true,
                    floor_type: true
                },
                selectedObj: {},
                houseCount: 0,
                houseArr: [],
                orderComputed: {},
                params: {
                    page_size: 10,
                    page_num: 1,
                    order: 1
                }
            }
        },

        methods: {
            handleCustom() {

            },
            //不限制之后清空所选的数组
            handleClear(key) {
                if (this.isChecked[key]) {
                    this.formData[key].splice(0);
                }
            },
            //选择后条件后调整不限制复选框的选中与否
            handleChange(val) {
                if (this.formData[val].length > 0) {
                    this.isChecked[val] = false;
                }
                else {
                    this.isChecked[val] = true;
                }
            },
            //点击清除所有选择中已选中的单个条件
            handleReduce(item) {
                let index = this.formData[item._parentName].findIndex(val => val == item.id);
                this.formData[item._parentName].splice(index, 1)
            },
            //清除所有选中条件
            handleClearAll() {

                let formData = this.formData;
                for (let arr in formData) {
                    if (formData[arr] instanceof Array) {
                        formData[arr].splice(0);
                        this.handleChange(arr);
                    }
                }
            },
            getData() {
                let formData = this.formData;
                let params = {...this.params};

                for(let key in formData){
                    if(formData[key] instanceof Array&&formData[key].length>0){
                        params[key] = formData[key].map(item => item.id)
                    }
                }

                if(this.userid){
                    params.userid = this.userid
                }

                const loading = this.$loading({
                    lock: true,
                    text: '数据加载中...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                console.log(api.paramToUrl(api.used_lists,params));
                axios.get(api.paramToUrl(api.used_lists,params)).then(res => {
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                    loading.close()
                }).catch(err => {
                    loading.close()
                })
            },
            //取消关注
            handleCancel(id) {
                if(this.userid){
                    this.
                    $axios.post(api.houseCollectCancel,{type:1,user_id: this.userid,house_id: id})
                        .then(res => {
                            this.$message.success("取关成功");
                            this.getData();
                        })
                }
            },
            //关注
            handleCollect(id) {
                if(this.userid){
                    this.
                    $axios.post(api.houseCollect,{type:1,user_id: this.userid,house_id: id})
                        .then(res => {
                            this.$message.success("关注成功")
                            this.getData();
                        })
                }
            },
            handleNext(val) {
                console.log(val)
                this.params.page_num = val;
                this.getData();
            }
        },
        computed: {
            selectedData() {
                let formData = this.formData;
                let allData = [];
                for (let key in formData) {
                    if (formData[key] instanceof Array) {
                        formData[key].map(item => {
                            item._parentName = key;
                        })
                        allData.push(...formData[key]);
                    }
                }
                return allData;
            },
            ...mapState(['userid','username'])
        },
        watch:{
            selectedData() {
                this.getData();
            }
        },
        mounted() {
            this.getData();
        }
    }

</script>

<style lang="scss" scoped>
    header {
        height: 60px;
        background: #f1f1f1;
    }

    .breadcrumb-wrap {
        width: 1100px;
        margin: 20px auto 0;

    }

    .filter-box {
        width: 1100px;
        margin: 30px auto 0;
    }
</style>
<style lang="scss" scoped>
    .filter-box {
        .title {
            font-size: 14px;
            color: #333;
            float: left;
            width: 96px;
            font-weight: 400;
        }
        .custom-price-wrap {
            input {
                width: 56px;
                height: 16px;
                color: #999;
                font-size: 14px;
                border: 1px solid #ccc;
                outline: none;
                margin-left: 8px;
            }
            input:first-child {
                margin-left: 0;
            }
            .split, .units {
                margin-left: 8px;
            }
            .custom-btn {
                background: #c30d23;
                color: #fff;
                width: 55px;
                height: 25px;
                font-size: 13px;
                text-align: center;
                line-height: 23px;
                border: none;
                margin-left: 8px;
                outline: none;
            }
        }
    }
</style>
<style scoped lang="scss">
    .type-arr {
        width: 1004px;
        float: right;
    }

    .search-wrap input {
        float: left;
        width: 160px;
        font-size: 14px;
        height: 21px;
        line-height: 21px;
        outline: none;
    }

    .search-wrap .search-btn {
        outline: 0;
        background: #c30d23;
        color: #fff;
        width: 55px;
        height: 25px;
        font-size: 13px;
        text-align: center;
        line-height: 23px;
        border: none;
        margin-left: 8px;
    }

    .select-item {
        float: left;
        border: 1px solid #ccc;
        color: #c30d23;
        font-size: 14px;
        text-align: center;
        height: 26px;
        width: 110px;
        display: block;
        line-height: 26px;
        margin-right: 20px;
        margin-bottom: 20px;
        margin-top: -5px;
    }

    .select-item i {
        float: right;
        background: #ccc;
        color: #fff;
        width: 26px
    }

    .clear-all {
        float: left;
        margin-top: -5px;
        user-select: none;
        color: #666;
        border: none;
        cursor: pointer;
        i {
            margin-right: 10px;
            background: 0 0;
            color: #666;
            font-size: 20px
        }
    }
</style>
<style scoped lang="scss">
    .house-list{
        h2 {
            font-size: 30px;
            color: #333;
            margin-top: 32px;
            margin-bottom: 40px;
        }
        .house-item {
            display: block;
            margin-bottom: 40px;
            img {
                height: 214px;
                width: 285px;
            }
            .item-msg {
                margin-left: 30px;
                .title {
                    display: block;
                    font-size: 20px;
                    margin-bottom: 30px;
                    color: #333;
                    font-weight: 400;
                }
            }
            .good-point {
                margin-top: 12px;
                span {
                    display: inline-block;
                    color: #5f1985;
                    background: #efe8f3;
                    padding: 4px 10px;
                    border-radius: 4px;
                    margin-right: 10px;
                }
            }
            .price-box {
                text-align: right;
                color: #c30d23;
                font-size: 40px;
                .unit {
                    font-size: 20px;
                }

                .unit-price {
                    margin-top: 20px;
                    color: #666;
                    font-size: 14px;
                }
                .follow{
                    float: right;
                    width: 100px;
                    line-height: 36px;
                    height: 36px;
                    background: #fff;
                    color: #c30d23;
                    border: 1px solid #c30d23;
                    border-radius: 4px;
                    margin-top: 40px;
                    text-align: center;
                    font-size: 16px;
                    cursor: pointer;
                    user-select: none;
                    margin-right: 0;
                    box-sizing: border-box;
                }
                .cancel-follow {
                    color: #666;
                    border: 1px solid #ccc;
                }
            }

        }
    }
    .data-list-wrap label.active {
        background: #c30d23;
        color: #fff;
    }
    .data-list-wrap label {
        float: left;
        font-size: 18px;
        cursor: pointer;
        padding: 10px 20px;
        margin-right: 20px;
        background: #fff;
        color: #c30d23;
        border-radius: 20px;
        border: 1px solid #c30d23;

        input {
            display: none;
        }
    }

    .pagination-wrap {
        width: 1100px;
        margin: 0 auto;
    }
</style>

