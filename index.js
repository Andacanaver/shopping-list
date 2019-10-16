$(document).ready(function() {
    $("button:submit").on('click', function(event){
        event.preventDefault();
        var listItem = $("#shopping-list-entry").val();
        var itemHtml = "<li><span class='shopping-item'>" + listItem + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>"
        if (listItem !== "") {
            $('.shopping-list').prepend(itemHtml);
        }
        $('#shopping-list-entry').val("");
    });
    
    $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
    
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
});