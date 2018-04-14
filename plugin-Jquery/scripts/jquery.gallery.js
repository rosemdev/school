(function ($) {

    $.fn.gallery = function (options) {
        if (this.length === 0) return this;

        var settings = $.extend({

            /**Below are the default settings. */

            fontFamily: "'Libre Franklin', sans-serif",
            transform: 'scale(1.2)',
            color: "tomato",
            menu: false,
            cards: false,
            heading: false,
            downArrow: false,
            menuItem: false


        }, options);

        // console.log(settings);


        var currElement = this[0];


        this.each(function (index, element) {


            /**Change active class for menu item */

            if (settings.menuItem) {

                var activeItem = $(element).find(".menu").find("a.active"),
                    item = $(element).find(".menu").find("a");


                $(".menu").each(function (index) {
                    // console.log(item[index + 1]);

                    $(document).ready(function () {
                        $(window).scroll(function () {
                            if ($(window).scrollTop() > 200) {
                                $(activeItem).removeClass("active");
                                $(item[index + 1]).addClass("active");
                                // console.log(item[index + 1]);
                                // console.log(scrolledY);

                            } else {
                                $(item[index]).addClass("active");
                                $(item[index + 1]).removeClass("active");
                            }

                        });


                    });
                });


            }

            if (settings.heading) {

                $(element).find("h4").hover(function () {
                    $(this).css({
                        color: settings.color,
                        transition: "transform .4s"
                    });

                });
            }

            /**menu*/

            if (settings.menu === true) {

                var nav = $(element).find(".menu"),
                    submenus = nav.find(".submenu");


                nav.find("a").each(function (index) {
                    $(this).click(function () {
                        if (submenus[index]) {
                            $(submenus[index]).slideToggle(1000);
                        }
                    });

                });
            }

            /**mobile menu*/

            if($( window ).width() < 769) {
                $(element).find(".menu").fadeToggle();

                console.log($( window ).width());

            }



            /** Add image effects*/

            if (settings.cards) {
                var cards = $(element).find(".img-wrapper");

                $(cards).each(function (index, card) {
                    var $card = $(card);
                    var image = $card.find('img');

                    image.css({
                        position: 'relative',
                        transition: 'all .4s'
                    });

                    image.hover(function () {
                        $(this).css({
                            zIndex: '1',
                            transform: settings.transform
                        });
                    }, function () {
                        $(this).css({
                            zIndex: '0',
                            transform: 'scale(1)'
                        });
                    });

                    image.click(function () {
                        $(this).toggleClass("filter");

                    });


                    var $description = $card.find('.description');

                    $description.hover(function () {
                        image.css({
                            height: '100%'
                        });

                        $(this).css({
                            top: '-100%',
                            height: '100%'
                        })
                    }, function () {
                        image.css({
                            height: '65%'
                        });

                        $(this).css({
                            top: '0',
                            height: '35%'
                        })
                    });


                });

            }

            /** Arrow*/

            if (settings.downArrow) {

                var arrowBtn = $(element).find(".arrow"),
                    newBlock = $(element).find(".notDisplayed");




                arrowBtn.click(function () {
                    newBlock.slideToggle(1500);


                })

            }

        });
    };

})(jQuery);