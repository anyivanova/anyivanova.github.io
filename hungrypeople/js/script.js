$('.specialties__slider').slick({
    dots: true,
    speed: 1500,
    arrows: false,
});

(function ($) {
    $(function () {

        $('ul.menu__tabs-caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.menu__tabs').find('div.menu__list').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);