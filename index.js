
$(document).ready(function() {

    //adding user's item to the end of the list
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const UserItem = $('#shopping-list-entry').val();
      $('.shopping-list').append(
        '<li>' +
        '<span class="shopping-item">' + UserItem + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' + 
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
        '</li>'
        );
    });

    //toggle checking/unchecking items on the list
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    //remove items on the list when delete is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove()
    });
})