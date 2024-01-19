(function($) {

    "use strict";

    jQuery(document).ready(function(){

    
        //Submenu Dropdown Toggle
        if ($('.main-menu li.dropdown ul').length) {
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');

            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on('click', function() {
                $(this).prev('ul').slideToggle(500);
            });

            //Disable dropdown parent link
            $('.main-menu .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
                e.preventDefault();
            });
        }

        //Custom Seclect Box
        if ($('.custom-select-box').length) {
            $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
        }

        // Scroll to a Specific Div
        if ($('.scroll-target').length) {
            $(".scroll-target").on('click', function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1500);

            });
        }

        // When document is Scrollig, do
        $(window).on('scroll', function() {
            headerStyle();
        });

        // When document is loading, do

        $(window).on('load', function() {
            handlePreloader();
        });

        $('#contact-form').on('submit', function(e) {

            if (!e.isDefaultPrevented()) {
                var url = "contact.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function(data) {
                        var messageAlert = data.class;
                        var messageText = data.message;

                        var alertBox = '<div class="' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                        if (messageAlert && messageText) {
                            $('#contact-form').find('.messages').html(alertBox);
                            $('#contact-form')[0].reset();
                        }
                    }
                });
                return false;
            }
        });

    });


    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.ploting-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.ploting-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 200) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

})(jQuery);