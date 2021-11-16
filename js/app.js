$(document).ready(function () {

    $('.b-point-title.one').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.b-point-title-one').not(this).removeClass('in').next().slideUp();
    });

});
$(document).ready(function () {

    $('.b-point-title.two').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.b-point-title.two').not(this).removeClass('in').next().slideUp();
    });

});
$(document).ready(function () {

    $('.b-point-title.three').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.b-point-title.three').not(this).removeClass('in').next().slideUp();
    });

});
$(document).ready(function () {

    $('.b-points .b-point-title i').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.b-point-title.three').not(this).removeClass('active').next().slideUp();
    });

});

$(document).ready(function () {
    $('.b-points-toggle.one').click(function () {
        $('.b-checkbox-item.none.one').slideToggle(300);
        return false;
    });
});
$(document).ready(function () {
    $('.b-points-toggle.two').click(function () {
        $('.b-checkbox-item.none.two').slideToggle(300);
        return false;
    });
});
$(document).ready(function () {
    $('.b-points-toggle.three').click(function () {
        $('.b-checkbox-item.none.three').slideToggle(300);
        return false;
    });
});
