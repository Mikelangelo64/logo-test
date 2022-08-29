$(document).ready(function(){

    setTimeout(() => {
        $('.preloader').addClass('_preloader-active')
    }, 1000);
    

    setTimeout(() => {
        $('.preloader').addClass('_close-preloader')
    }, 7000);
    setTimeout(() => {
        $('.preloader').css('display', 'none')
    }, 7500);
})