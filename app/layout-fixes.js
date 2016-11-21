var $ = require('jquery');

$(function () {
    var doc                 = $(document),
        workspaceBoard      = $(".workspace-board-inner"),
        addTodoButton       = $('.add-todo-button'),
        startBottomPosition = 30;

    function setNewPositionOfAddButton () {
        var scrollTop = workspaceBoard.scrollTop();
        addTodoButton.css('bottom', (startBottomPosition - scrollTop) + 'px');
    }

    workspaceBoard.scroll(function () {
        setNewPositionOfAddButton();
    });
    setNewPositionOfAddButton();
});