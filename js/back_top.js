$(function () {
    var  contact_h2Top = $('.contact-container h2 > span').offset().top,
        contact_h2H = $('.contact-container h2 > span').height();
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
    function contactShow() {
        var winTop = $(window).scrollTop();
        if (winTop + winH >= contact_h2Top + contact_h2H * 5){
            $('.contact-container h2>span').animate({
                opacity:1,
                marginTop:"-20px"
            },600).parent().next().children().animate({
                opacity:1,
                marginTop:"-6px"
            },600);
        }
    }
    contactShow();
    $(window).scroll(function () {
        back();
        contactShow();
    });
    //返回顶部 事件
    $('.back').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
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
