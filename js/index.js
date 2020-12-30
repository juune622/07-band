var swiper = new Swiper('.swiper-container',{
  slidesPerView: 1,
		loop: 'true',
		autoplay: {
			delay : 2000,
			},
});

$('header a.bars').click(function(){
  $('header ul.moNavi').slideToggle()
});

$('header ul.pcNavi li').eq(4).mouseenter(function(){
  $(this).find('ul.sub').show();
})
$('header ul.pcNavi li').eq(4).mouseleave(function(){
  $(this).find('ul.sub').hide();
})