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
$(document).ready(function(){
    $('.b-points-toggle.one').click(function(){
        var active = $(this).attr("data-text-after");
        var notActive = $(this).attr("data-text-before");
        var count = $(this).attr("data-click-count"); 
        if(count == 1){
            $(".b-points-toggle.one").addClass('text-active')
        }
        if('.text-active'){
            $(".text-active").text(active);
            $(this).attr("data-click-count", "2")
        }
        if(count == 2){
            $('.b-points-toggle').removeClass('text-active')
            $(this).text(notActive)
            $(this).attr("data-click-count", "1")
        }
    })
})
$(document).ready(function(){
    $('.b-points-toggle.two').click(function(){
        var active = $(this).attr("data-text-after");
        var notActive = $(this).attr("data-text-before");
        var count = $(this).attr("data-click-count"); 
        if(count == 1){
            $(".b-points-toggle.two").addClass('text-active')
        }
        if('.text-active'){
            $(".text-active").text(active);
            $(this).attr("data-click-count", "2")
        }
        if(count == 2){
            $('.b-points-toggle').removeClass('text-active')
            $(this).text(notActive)
            $(this).attr("data-click-count", "1")
        }
    })
})
$(document).ready(function(){
    $('.b-points-toggle.three').click(function(){
        var active = $(this).attr("data-text-after");
        var notActive = $(this).attr("data-text-before");
        var count = $(this).attr("data-click-count"); 
        if(count == 1){
            $(".b-points-toggle.three").addClass('text-active')
        }
        if('.text-active'){
            $(".text-active").text(active);
            $(this).attr("data-click-count", "2")
        }
        if(count == 2){
            $('.b-points-toggle').removeClass('text-active')
            $(this).text(notActive)
            $(this).attr("data-click-count", "1")
        }
    })
})
/* 
Смотри
Тебе надо создать в html 2 атрибута
Засунуть в один текст до активности, а в другой после активности.
При нажатии на кнопку дать класс актив, и в него условие, если Актив, то возьми текст из нужного атрибута и замени текст главный.
А если нет актива, то возьми текст с другого атрибута и замени главный текст.
*/