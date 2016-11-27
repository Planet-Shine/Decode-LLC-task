var $ = require('jquery');

$(function () {
    var doc                 = $(document),
        workspaceBoard      = $(".workspace-board-inner"),
        startBottomPosition = 30;

    function setNewPositionOfAddButton () {
        var scrollTop      = workspaceBoard.scrollTop(),
            addTodoButton  = $('.add-todo-button');
        addTodoButton.css('bottom', (startBottomPosition - scrollTop) + 'px');
    }

    workspaceBoard.scroll(function () {
        setNewPositionOfAddButton();
    });
    setNewPositionOfAddButton();
});