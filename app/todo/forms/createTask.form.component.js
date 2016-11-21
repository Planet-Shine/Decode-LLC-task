
module.exports = (applicationModule) => {
    applicationModule.component('createTaskForm', {
        'bindings'   : {
            'isDisplayed' : '<',
            'project'     : '<',
            'onSubmit'    : '&'
        },
        'controller' : require('./createTask.form'),
        'template'   : require('./createTask.template.html')
    });
};
