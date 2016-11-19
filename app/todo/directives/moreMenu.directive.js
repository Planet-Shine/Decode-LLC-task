module.exports = (todoComponent) => {
    todoComponent.directive('moreMenu', function () {
        return {
            bindToController : true,
            template : require('./moreMenu.directive.template.html')
        };
    });
};