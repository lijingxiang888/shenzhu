$(function () {
    //动画
    //检测当前元素距离body上部的偏移量
    var server_h2Top = $('.server-container h2>span').offset().top,
        server_pTop = $('.server-container p>span').offset().top,
        team_h2Top = $('.team-container h2>span').offset().top,
        team_pTop = $('.team-container p>span').offset().top,
        flow_h2Top = $('.flow-container h2>span').offset().top,
        flow_pTop = $('.flow-container p>span').offset().top,
        info_h2Top = $('.info-container h2>span').offset().top,
        info_pTop = $('.info-container p>span').offset().top,
        partner_h2Top = $('.partner-container h2>span').offset().top,
        partner_pTop = $('.partner-container p>span').offset().top,
        contact_h2Top = $('.contact-container h2>span').offset().top,
        contact_pTop = $('.contact-container p>span').offset().top;


    if($(window).scrollTop()>server_h2Top/3){
        $('.server-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>server_pTop/3){
        $('.server-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }
    if($(window).scrollTop()>team_h2Top/2 +250){
        $('.team-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>team_pTop/2 +250){
        $('.team-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }
    if($(window).scrollTop()>flow_h2Top/2 +450){
        $('.flow-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>flow_pTop/2 +550){
        $('.flow-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
        $('.flow-container .flow-pic').animate({
            opacity:1
        },2000)
    }
    if($(window).scrollTop()>info_h2Top/2 +250){
        $('.info-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>info_pTop/2 +250){
        $('.info-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }
    if($(window).scrollTop()>partner_h2Top/2+850){
        $('.partner-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>partner_pTop/2+850){
        $('.partner-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }
    if($(window).scrollTop()>contact_h2Top/2+1250){
        $('.contact-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>contact_pTop/2+1250){
        $('.contact-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }
    if($(window).scrollTop()>600){
        $('.back').addClass('show')
    }else {
        $('.back').removeClass('show')
    }
    //返回顶部 事件
    $('.back').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $(window).scroll(function () {
        if($(window).scrollTop()>server_h2Top/3){
            $('.server-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>server_pTop/3){
            $('.server-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600)
        }
        if($(window).scrollTop()>team_h2Top/2 +250){
            $('.team-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>team_pTop/2 +250){
            $('.team-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600)
        }
        if($(window).scrollTop()>flow_h2Top/2 +450){
            $('.flow-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>flow_pTop/2 +550){
            $('.flow-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600);
            $('.flow-container .flow-pic').animate({
                opacity:1
            },2000)
        }
        if($(window).scrollTop()>info_h2Top/2+650){
            $('.info-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>info_pTop/2+650){
            $('.info-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600)
        }
        if($(window).scrollTop()>partner_h2Top/2+850){
            $('.partner-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>partner_pTop/2+850){
            $('.partner-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600)
        }
        if($(window).scrollTop()>contact_h2Top/2+1250){
            $('.contact-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>contact_pTop/2+1250){
            $('.contact-container p>span').animate({
                opacity:1,
                marginTop:"-6px"
            },600)
        }
        if($(window).scrollTop() > 600){
            $('.back').addClass('show')
        }else {
            $('.back').removeClass('show')
        }

    });

    //服务导航 动画
    $('.server-nav li').click(function () {
        var $liIndex = $(this).index();
        $(this).addClass('active1').siblings().removeClass('active1');
        $(this).parent().next().children().each(function (index,item) {
            index == $liIndex? $(item).addClass('active2'):$(item).removeClass('active2')
        })

    });


});

$(function () {
    var $banner = $('#banner'),
        $wrap = $('#banner .banner-wrap'),
        $focusList = $('#focus li'),
        $oImgs = $('#banner img');
    $banner.step = 0;
    $banner.timer = setInterval(autoMove,3000);
    $banner.lastInd = $oImgs.last().index();

    //轮播方法
    function autoMove(n) {
        !isNaN(n) ? $banner.step = n : $banner.step++;

        $banner.step > $banner.lastInd ? $banner.step = 0 : null;

        $oImgs.stop().eq($banner.step).fadeIn(300).siblings().fadeOut();
        
        $focusList.eq($banner.step).addClass('selected').siblings().removeClass('selected');
    }
    
    //移入移出动画
    // $banner.hover(function () {
    //     clearInterval($banner.timer);
    // },function () {
    //     $banner.timer = setInterval(autoMove,3000);
    // });
    
    //绑定焦点点击事件
    // function bindSelectEvent() {
    //     $focusList.each(function () {
    //         $(this).click(function () {
    //             autoMove($(this).index());
    //         })
    //     })
    // }
    // bindSelectEvent();

});

$(function () {
    var $input = $('.sign-in input');
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    /*RGB颜色转换为16进制*/
    String.prototype.colorHex = function () {
        var that = this;
        if (/^(rgb|RGB)/.test(that)) {
            var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            var strHex = "#";
            for (var i = 0; i < aColor.length; i++) {
                var hex = Number(aColor[i]).toString(16);
                if (hex === "0") {
                    hex += hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = that;
            }
            return strHex;
        } else if (reg.test(that)) {
            var aNum = that.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return that;
            } else if (aNum.length === 3) {
                var numHex = "#";
                for (var i = 0; i < aNum.length; i += 1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                return numHex;
            }
        } else {
            return that;
        }
    };
    $input.focus(function () {
        var $color = $(this).css('color');
        var $colorHex = $color.colorHex().toString();//string，但ie8及其以下是对象数据类型，需要toString转换为字符串
        if ('#989898' === $colorHex){
            $(this).val('');
            $(this).css({'color':'#000'})
        }
    });
    $input.blur(function () {
        if ($(this).val() === ''){
            var $dataVal = $(this).attr('data-value');
            $(this).css({'color':'#989898'});
            $(this).val($dataVal);
        }
    })
});