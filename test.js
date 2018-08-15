/**
 * Created by wzk on 2017/8/4.
 */
$(function () {
    setTimeout(function () {
        /*头条列表*/
        $.getJSON(api.paramToUrl(api.encyTop,{
            page_num:0,
            page_size:10
        }),function (data) {
            var str = '<div class="swiper-slide" data-adId="{id}">{title}</div>';
            var html="";
            if(data.code===200){
                $.each(data.datas,  function (index,item) {
                    $.each(item,function (index,item) {
                        html+=str.replace(/\{id\}/,item.id).replace(/\{title\}/,item.title).replace(/\{rent_type\}/,item.rent_type);
                    })
                })
                $(".headline .swiper-wrapper").html(html);
                initSwiper();
            }
        })
        api.duilian(0);
    },2000)
    /*头条点击跳转*/
    $(".headline").click(function () {
        var id=  $(this).find(".swiper-slide-active").attr("data-adid");
        window.location.href="./wikipediaDetails.html?id="+id
    });
    /*首页轮播图点击效果*/
    $(".mask").click(function () {
        var id = $(".top-ad-swiper .swiper-slide-active").attr("data-id")
        api.to(id)
    })

    function tonglan(position,location,callback) {
        $.getJSON(api.paramToUrl(api.indexLeaderboard,{
            position:position,
            platform:1,
        }),function (data) {
            callback(data)
        })
    }
    setTimeout(function () {
        tonglan(0,1,function (data) {
            var data= data.datas;
            var $indexLeaderboard=$(".leaderboard");
            var str=""
            $.each(data.top,function (index,item) {
                str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;display: inline-block;z-index: 2;width: 100%;' href='"+item.ad_url+"'></a></div>";
                //str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;' href='"+item.ad_url+"'></a></div>";
                //str+=  "<a target='_blank' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"</a>";
            })
            $indexLeaderboard.eq(0).html(str);
            str="";
            $.each(data.middle,function (index,item) {
                str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;display: inline-block;z-index: 2;width: 100%;' href='"+item.ad_url+"'></a></div>";
                //str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;' href='"+item.ad_url+"'></a></div>";
                //str+=  "<a target='_blank' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"</a>";
            })
            $indexLeaderboard.eq(1).html(str);
            str="";
            $.each(data.bottom,function (index,item) {
                str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;display: inline-block;z-index: 2;width: 100%;' href='"+item.ad_url+"'></a></div>";
                //str+= "<div style='position: relative;' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"<a style='height: 100%;position: absolute;top: 0;left: 0;' href='"+item.ad_url+"'></a></div>";
                // str+=  "<a target='_blank' href='"+item.ad_url+"'>"+api.createFlashOrImg(api.serverUrl+item.picurl,"100%",110)+"</a>";
            })
            $indexLeaderboard.eq(2).html(str);
            removeHref();
        })
    },1000)

});
