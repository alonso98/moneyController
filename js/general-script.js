$(function(){
    $('#add-new-wish').click(function(){
        $('.modal').modal();
    });

    $('.container > .main > .main-content > .part-main-saving-and-option > .wish-options > .section-wishes-buttons > form').submit(function(){
        var result = confirm("Are you sure, bitch?")
        if(!result) return false;
    });
});