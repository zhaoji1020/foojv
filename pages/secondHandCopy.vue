<template>
    <div>
        <header class="secondhand-header">
            <top-links></top-links>
        </header>
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
                    <div class="clearfix">
                        <span class="title">
                            区域
                        </span>
                        <el-checkbox v-model="isChecked.r_id" class="fll" @change="handleClear('r_id')">
                            不限
                        </el-checkbox>
                        <el-checkbox-group v-model="formData.r_id" @change="handleChange('r_id')">
                            <el-checkbox v-for="item in fillData2.r_idData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="price mt-30 clearfix">
                        <span>
                            价格
                        </span>
                        <el-checkbox v-model="isChecked.total_price" class="fll" @change="handleClear('total_price')">
                            不限
                        </el-checkbox>
                        <el-checkbox-group v-model="formData.total_price" @change="handleChange('total_price')">
                            <el-checkbox v-for="item in fillData.total_priceData" :label="item" :key="item.id">
                                {{item.title}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <!--价格选择结束-->
                </template>

                <template slot="middle">

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
        <div class="house-list" style="width: 1100px;margin: 30px auto;">
            <h2>共找到{{houseCount}}房源</h2>
            <div class="house-item clearfix" v-for="item in houseArr">
                <div class="item-img fll">
                    <img :src="'/origin'+item.pic" alt="">
                </div>
                <div class="item.msg fll">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="price flr">
                        {{item.total_price}}
                    </div>
                </div>
            </div>
        </div>


        <friendlyLink></friendlyLink>
    </div>
</template>

<style scoped lang="scss">
    .house-item {

        img {
            height: 214px;
            width: 285px;
        }
    }
</style>

<script>
    import topLinks from '~/components/secondHand/header'
    import friendlyLink from '~/components/index/friendLink'
    import logoLink from '~/components/secondHand/logo-link'
    import filterBox from '~/components/filter-box'
    import search from '~/components/secondHand/search'
    import axios from '~/plugins/axios'
    import api from '~/api'

    export default {
        name: "secondHand",
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
                    search: ""

                },
                fillData: {
                    total_priceData: [
                        {
                            title: "30万以下",
                            id: '0-30'
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
                            id: '50-99999'
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
                houseArr: []
            }
        },
        components: {
            friendlyLink,
            topLinks,
            logoLink,
            filterBox,
            search
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
            handleChange(key) {
                this.isChecked[key] = this.formData[key].length>0?false:true;
            },
            //点击清除所有选择中已选中的单个条件
            handleReduce(item) {
                let index = this.formData[item._parentName].findIndex(val => item.id == val.id)
                this.formData[item._parentName].splice(index, 1);
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
                let params = {
                    page_size: 10,
                    page_num: 1,
                    order: 1,
                    r_id: 0,
                    userid: 653
                };

                for (let key in formData) {
                    if (formData[key].length > 0) {
                        params[key] = formData[key].map(item => item.id)
                    }
                }
                axios.get(api.paramToUrl(api.used_lists, params)).then(res => {
                    this.houseCount = res.data.count;
                    this.houseArr = res.data.data;
                })
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
                            allData.push(item);
                        })
                    }
                }

                return allData;
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
