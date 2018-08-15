<template>
    <div class="right-box">
        <ul>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-rili"></i>
                    <div class="title">
                        日程
                    </div>
                    <div class="hover-box">
                        我的日程
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-shoucang1"></i>
                    <div class="title">
                        关注
                    </div>
                    <div class="hover-box">
                        在线卖房
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-fangzi"></i>
                    <div class="title">
                        卖房
                    </div>
                    <div class="hover-box">
                        房贷计算器
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-toolsbar"></i>
                    <div class="title">
                        工具
                    </div>
                    <div class="hover-box">
                        在线卖房
                    </div>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <i class="iconfont icon-z-phone"></i>
                    <div class="title">
                        APP
                    </div>
                    <div class="app-qrcode">
                        <img src="/imgs/app.png" >
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "rightBox"
    }
</script>

<style scoped lang="scss">
    .right-box {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        z-index: 1002;
        height: 480px;

        ul {
            width: 40px;
            text-align: center;

            li {
                .title {
                    font-size: 14px;
                }
            }
        }

        .iconfont {
            font-size: 25px;
        }
        a:first-child {
            margin-top: 25px;
        }
        a {
            position: relative;
            display: block;
            padding: 4px 0;
            margin-bottom: 45px;
        }
        a:hover {
            color: #fff;
            background: #5f1985;
        }
        a:hover>div {
            color: #fff;
        }
        a:hover .hover-box {
            display: block;
        }
        a:hover .app-qrcode {
            display: block;
        }
        .hover-box {
            position: absolute;
            right: 48px;
            top: 6px;
            background: #5f1985;
            width: 80px;
            padding: 10px;
            color: #fff;
            border-radius: 3px;
            display: none;
            &::after {
                content: "";
                display: block;
                position: absolute;
                top: 13px;
                right: -8px;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 8px solid #5f1985;
            }
        }
        .app-qrcode {
            display: none;
            position: absolute;
            right: 100%;
            width: 200px;
            height: 200px;
            top: 50%;
            margin-top: -100px;

            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }

</style>