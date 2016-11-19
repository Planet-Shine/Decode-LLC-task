module.exports = (todoComponent) => {
    todoComponent.directive('profileInfo', function () {
        return {
            template : require('./profileInfo.directive.template.html')
        };
    });
};