/**
 * 地底部导航定位
 * 每次改变 body 的高度时都要执行一次 ifheight() 方法
 * 比如加载更多信息之后需要执行一次 ifheight()
 */
$(function(){
	$('.gotop').click(function (){
    $('body,html').animate({ scrollTop: 0 });
});
function ifheight(){
    $('.marber-borrom-mrap').removeClass('positinon-mrap');
    $('body').height()<$(window).height()?$('.marber-borrom-mrap').addClass('positinon-mrap'):false;
};
$(function(){ifheight();});
$(window).resize(function(){ifheight();});
})
