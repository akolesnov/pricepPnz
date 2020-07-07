
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    arrows: false,

});
});

//---карусель поставщиков
$(document).ready(function(){
  $('.providers-carousel').slick({
    	autoplay: false,
    	slidesToShow: 4,
			responsive: [
					{
							breakpoint: 1024,
							settings: {
									slidesToShow: 3,
									slidesToScroll: 3
							}
					},
					{
							breakpoint: 750,
							settings: {
									slidesToShow: 2,
									slidesToScroll: 2
							}
					}
			]
  });
});

//---карусель дополнительное оборудование
$(document).ready(function(){
		$('.other-product__carousel').slick({
				autoplay: false,
				slidesToShow: 3,
				responsive: [
						{
								breakpoint: 1024,
								settings: {
										slidesToShow: 2,
								}
						},
						{
								breakpoint: 750,
								settings: {
										slidesToShow: 1,
								}
						}
				]
		});
});

//табы в товарах
document.getElementById("defaultOpen").click();
function openTabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs__block");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabs__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


