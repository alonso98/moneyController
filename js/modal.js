$(function(){
    $('button.cancel,i').click(function(){
        $(this).parent().parent().parent().addClass('hide-modal');
    });
});

(function( $ ){
    $.fn.modal = function() {
       $(this).removeClass('hide-modal');
       return this;
    }; 
 })( jQuery );