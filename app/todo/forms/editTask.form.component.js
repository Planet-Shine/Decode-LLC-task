
module.exports = (applicationModule) => {

    applicationModule.component('editTaskForm', {
        'bindings'   : {
            'isDisplayed' : '<',
            'task'        : '<',
            'project'     : '<',
            'onSubmit'    : '&'
        },
        'controller' : require('./editTask.form'),
        'template'   : require('./editTask.form.template.html')
    });

};
