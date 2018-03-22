//标题栏实现跑马灯效果

var myMarquee = (function () {
    function TitleMarquee (dir) {
        var title = document.title; //获取当前网页标题，字符串类型
        var firstCh,leftChs,lastCh;  // 第一个字符,剩下的字符和最后一个字符
         if(dir === 'left' || dir == null){
            firstCh = title.charAt(0);
            leftChs = title.substring(1,title.length);
            document.title = leftChs + firstCh; //把第一字符放在整个标题后面，重新覆盖标题
        }
        else if(dir === 'right'){
            lastCh = title.charAt(title.length - 1);
            leftChs = title.substring(0,title.length - 1);
            document.title = lastCh + leftChs;
        }
    }
    return {
        TitleMarquee : TitleMarquee
    }
})();
window.onload = function () {
    setInterval(function () {
        myMarquee.TitleMarquee()
    },500)
};