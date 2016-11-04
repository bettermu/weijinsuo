/**
 * Created by Administrator on 2016/9/17.
 */

$(function(){

    function resize(){
        var windowWidth=$(window).width();
        var isSmallScreen=windowWidth<768;
        $('#main_ad>.carousel-inner>.item').each(function(i,item){
            var imgSrc=$(item).data(isSmallScreen?'image-xs':'image-lg');
            $(item).css('backgroundImage','url('+imgSrc+')');
            if(isSmallScreen){
                $(item).html('<img src="'+imgSrc+'"/>');
            }else {
                $(item).empty();
            }
        });
        /*根据标签内容高度添加自适应滚动条*/
        var ulContainer=$('.nav-tabs');
        var width=20;
        ulContainer.children().each(function(index,element){
            width+=element.clientWidth;
        });
        if(width>ulContainer.parent().width()){
            ulContainer.css('width',width).parent().css('overflow-x','scroll');
        }
        else {
            ulContainer.css('width','auto').parent().css('overflow-x','hidden');
        }
    }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    var oTitle=$('#news .news-title');
    var oUl=$('#news .nav-stacked');
    oUl.on('click','li',function(){
        oTitle.html($(this).data('message'));
    });


    /*轮播图左右滑动切换效果（模拟移动端）*/

    var carousel=$('.carousel');
    var startX,endX,distance,offset=50;

    /*注册滑动事件*/
    carousel.on('touchstart',function(e){
        startX= e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        endX= e.originalEvent.touches[0].clientX;
    }).on('touchend',function(e){
        distance=Math.abs(endX-startX);
        if(distance>offset){
            $(this).carousel(startX>endX? 'next':'prev');  //当界面上有多个轮播图组建的时候，此行需用$(this)指向当前触发事件的轮播图对象。
        }
    });



});



