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

//登录验证
$(function () {
    var $btn = $('.sign-in button');

    $btn.click(function () {
        var userpas = $('.sign-in input[type=password]').val(),
            userName = $('.sign-in input[type=text]').val(),
            pasReg = /^[a-zA-Z]\w{5,17}$/,
            nameReg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (userName && userpas){
            if (nameReg.test(userName)){
                if (pasReg.test(userpas)){
                    console.log('输入正确，发送ajax');
                }else {
                    alert('密码格式不正确')
                }
            }else {
                alert('用户名格式不正确')
            }
        }else if (userName === '' && userpas === ''){
            alert('请填写用户名和密码')
        }else if (userName === ''){
            alert('用户名不能为空')
        }else {
            alert('密码不能为空')
        }
    });
});

//placeholder插件使用
$(function () {
    $('input').placeholder();
});