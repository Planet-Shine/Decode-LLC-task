module.exports = (todoComponent) => {
    todoComponent.directive('leftFooter', function () {
        return {
            template : require('./leftFooter.directive.template.html')
        };
    });
};