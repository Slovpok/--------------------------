$(document).ready(function() {
    $('.nav a[href^="#"]').click(function() {//выбираем ссылки из меню
        var offset = $('.nav').innerHeight();//высота меню получаем динамически
        var target = $(this).attr('href');//сохраняем значение атрибута href
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset //вычитаем высоту меню
        }, 700);//время анимации
        //$('.nav a[href^="#"]').removeClass('active')//удалить класс active у всех пунктов меню
        //$(this).addClass('active')//добавить класс active активной ссылке
        //return false;
    });
});