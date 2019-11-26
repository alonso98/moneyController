$(function(){
    $('.sidebar-section a').click(function(){
        $('.sidebar-section a').removeClass('active-menu-option');
        $(this).addClass('active-menu-option');
    });
});