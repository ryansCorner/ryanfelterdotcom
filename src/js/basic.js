//******************************************************************************************************************* */
//
//
//INITIAL JS
//
const jQuery = require('jquery')

jQuery(document).ready(function ($) {
    //*********************************** *********************** */
    //              Fit Text Settings
    //*********************************** *********************** */

    // setTimeout(function () {
    //     $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' })
    // }, 100)

    //*********************************** *********************** */
    //              Smooth Scrolling
    //*********************************** *********************** */

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

    //*********************************** *********************** */
    //              HIghlight the current section in the Nav Bar
    //*********************************** *********************** */



    //*********************************** *********************** */
    //               Make sure #header-background-image height is equal to browser height
    //*********************************** *********************** */

    // $('header').css({ 'height': $(window).height() });
    // $(window).on('resize', function () {
    //     $('header').css({ 'height': $(window).height() });
    //     $('body').css({ 'width': $(window).width() });
    // })


    //*********************************** *********************** */
    //      Fade In/ Out Primary Navigation
    //*********************************** *********************** */


    $(window).on('scroll', function () {
        var h = $('welcome').height();
        var s = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if ((s > h * .20) && (s < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast')
        }
        else {
            if (s < h * .20) {
                nav.removeClass('opaque').fadeIn('fast')
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
    })

    //*********************************** *********************** */
    //          Modal Pop
    //*********************************** *********************** */



    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    //*********************************** *********************** */
    //              FlexSliders
    //*********************************** *********************** */


    // $('.flexslider').flexslider({
    //     namespace: "flex-",
    //     controlsContainer: ".flex-container",
    //     animation: 'slide',
    //     controlNav: true,
    //     directionNav: false,
    //     smoothHeight: true,
    //     slideshowSpeed: 7000,
    //     animationSpeed: 600,
    //     randomize: false,
    // })

})