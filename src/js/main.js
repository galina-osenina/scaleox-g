//= ../../node_modules/@fortawesome/fontawesome-free/js/all.js
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/jquery-validation/dist/jquery.validate.js

$(function() {

  $('.header__nav-list').find('.nav-list__link').each(function() {
      $(this).toggleClass('nav-list__link_active', $(this).attr('href') == window.location.pathname);
  });

  $('.menu-button').on('click', function () {
    $(this).toggleClass('menu-button_open');
    $('.header__nav').toggleClass('header__nav_visible');
    $('body').toggleClass('body_fixed');
  });

  function changeHeader(){
    var _height = $('.header_animate').height();
    if ($(window).scrollTop() > _height){
      $('.header_animate').addClass('header_bg_dark');
    } else {
      $('.header_animate').removeClass('header_bg_dark');
    }
  }

  function submitForm () {
      $.ajax({
          url: '',
          type: 'POST',
          dataType: 'json',
          success: function () {
              $('.form__input').val('');
              $('.form__input').blur();
              $('.form__footer').append('<div class="form__output">Your message has been sent.</div>');
              setTimeout(function() {
                  $('.form__output').remove();
              }, 3000);
          },
          error: function (jqXHR, textStatus, errorThrown) {
              $('.form__footer').append('<div class="form__output form__output_error">Something went wrong. Please try again later</div>');
          }
      })
  };

  changeHeader();

  $(window).on('scroll', function() {
    changeHeader();
  });

  $('.js-form-control').on('change focus', function(){
    $(this).parent().find('.form__placeholder').addClass('form__placeholder_active');
  });

  $('.js-form-control').on('blur', function(){
    if (!$(this).val()){
      $(this).parent().find('.form__placeholder').removeClass('form__placeholder_active');
    }
  });

  $('.js-contact-btn').on('click', function (e) {
      var _target = $('.js-section-form');

      if( _target.length ) {
          e.preventDefault();

          if ($('.header__nav_visible').length) {
              $('.menu-button').toggleClass('menu-button_open');
              $('.header__nav').toggleClass('header__nav_visible');
              $('body').toggleClass('body_fixed');
          }

          $('html, body').animate({
              scrollTop: _target.offset().top
          }, 800);
      }
  });

    $(".js-form-contact").validate({
        rules: {
            name: "required",
            email: "required"
        },
        messages: {
            name: "This field is required",
            email: "This field is required"
        },
        errorClass: 'error-form',
        highlight: function(element, errorClass) {
            return false;
        },
        submitHandler: function () {
            $('.form__input').val('');
            $('.form__input').blur();
            $('.form__footer').append('<div class="form__output">Your message has been sent.</div>');
            setTimeout(function() {
                $('.form__output').remove();
            }, 3000);
            //submitForm();
        }
    });

  $('[data-carousel-item]').on('click', function(e) {
    e.preventDefault();
    $('.carousel__item_active').removeClass('carousel__item_active');
    $("[data-carousel-panel]").fadeOut();
    $(this).parent('.carousel__item').addClass('carousel__item_active');
    $("[data-carousel-panel='" + $(this).data('carousel-item') + "']").fadeIn();
  });

  $('.js-button-flip').on('click', function(e){
      e.preventDefault();
      $(this).closest('.flip-wrap').toggleClass('is-flipped');
  });

  $('.js-more-btn').on('click', function() {
     $(this).parent('.card__text').find('.card__text_more').slideDown();
      $(this).addClass('js-more-btn_hidden');
  });

  $('.js-more-hide-btn').on('click', function() {
     $(this).parent('.card__text_more').slideUp();
     $('.js-more-btn').removeClass('js-more-btn_hidden');
  });

});
