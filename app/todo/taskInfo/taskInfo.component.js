

module.exports = (module) => {
    module.component('taskInfo', {
        'bindings' : {
            'task'         : '<',
            'isDisplayed'  : '<',
            'onDeleteTask' : '&',
            'onEditTask'   : '&'
        },
        'template' : require('./taskInfo.template.html'),
        'controller' : require('./taskInfo')
    });
};
