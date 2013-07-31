$(function() {

  $('body').iOSCheck('iPhone');

  var $module = $('.module');

  $module.hover(function() {

    $(this).find('.module_photo').animate({opacity: .1}, 200);
    $(this).find('.module_caption').fadeIn(200);

  }, function() {

    $(this).find('.module_photo').animate({opacity: 1}, 200);
    $(this).find('.module_caption').fadeOut(200);

  });

  var
      $menu  = $('.menu_main'),
      $brand = $('.menu_brand');

  $menu.find('.menu_a').click(function() {
    $menu.find('.menu_a__current').removeClass('menu_a__current');
    $(this).addClass('menu_a__current');
    return false;
  });

  $brand.find('.menu_a').click(function() {
    $brand.find('.menu_a__current').removeClass('menu_a__current');
    $(this).addClass('menu_a__current');
    return false;
  });

  $('.modules').masonry({
    itemSelector: '.masonry-item',
     isAnimated: true
  });  

});