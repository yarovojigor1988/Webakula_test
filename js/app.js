$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    // $(".tour_carousel").slick('reinit');

    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).children().slick('reinit');
    console.log($(tabId).children());
    
    $(tabId).siblings('.tab_content').hide(400);
});

$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        dots: true,
        аccessibility: false
    });

    $('.tour_carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });

    $('.tour_carousel-pop').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });


  });