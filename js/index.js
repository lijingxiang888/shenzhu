$(function () {
    //动画
    var server_h2Top = $('.server-container h2>span').offset().top,
        server_h2H = $('.server-container p>span').height(),
        team_h2Top = $('.team-container h2>span').offset().top,
        team_h2H = $('.team-container p>span').height(),
        flow_h2Top = $('.flow-container h2>span').offset().top,
        flow_h2H = $('.flow-container p>span').height(),
        info_h2Top = $('.info-container h2>span').offset().top,
        info_h2H = $('.info-container p>span').height(),
        partner_h2Top = $('.partner-container h2>span').offset().top,
        partner_h2H = $('.partner-container p>span').height(),
        contact_h2Top = $('.contact-container h2>span').offset().top,
        contact_h2H = $('.contact-container p>span').height();
    var winH = $(window).height();

    function back() {
        var winTop = $(window).scrollTop();
        if(winTop > winH){
            $('.back').addClass('show')
        }else {
            $('.back').removeClass('show')
        }
    }
    back();
    function myshow() {
        var winTop = $(window).scrollTop();
        if (winTop + winH >= server_h2Top + server_h2H*5){
            $('.server-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);

        }
        if (winTop + winH >= team_h2Top + team_h2H*5){
            $('.team-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);

        }
        if (winTop + winH >= flow_h2Top + flow_h2H*5){
            $('.flow-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);
            $('.flow-container .flow-pic').animate({
                opacity:1
            },2000)

        }
        if (winTop+ winH >= info_h2Top + info_h2H*5){
            $('.info-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);
        }
        if (winTop + winH >= partner_h2Top + partner_h2H*5){
            $('.partner-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);
        }
        if (winTop + winH >= contact_h2Top + contact_h2H*5){
            $('.contact-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);
        }
    }
    myshow();
    
    //返回顶部 事件
    $('.back').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $(window).scroll(function () {
        myshow();
        back();
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