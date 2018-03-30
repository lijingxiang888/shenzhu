$(function () {
    var  contact_h2Top = $('.contact-container h2 > span').offset().top,
        contact_pTop = $('.contact-container p > span').offset().top;
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
    if($(window).scrollTop()>contact_h2Top/2){
        $('.contact-container h2>span').animate({
            opacity:1,
            marginTop:"-20px"
        },600)
    }
    if($(window).scrollTop()>contact_pTop/2){
        $('.contact-container p>span').animate({
            opacity:1,
            marginTop:"-6px"
        },600)
    }

    $(window).scroll(function () {
        if($(window).scrollTop()>contact_h2Top/2){
            $('.contact-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600)
        }
        if($(window).scrollTop()>contact_pTop/2){
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
});

//产品&服务 切换动画
$(function () {
    var flag = false;
        $('.sn-box').hide();
        $('.sn-title').click(function () {
            if (!flag){
                $('.sn-box').show();
                flag = true;
            }else {
                $('.sn-box').hide();
                flag = false;
            }
        })
});
