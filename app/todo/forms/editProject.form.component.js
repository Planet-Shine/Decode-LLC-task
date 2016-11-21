
module.exports = (applicationModule) => {
    applicationModule.component('editProjectForm', {
        'bindings'   : {
            'project'     : '<',
            'isDisplayed' : '<',
            'onSubmit'    : '&'
        },
        'controller' : require('./editProject.form'),
        'template'   : require('./editProject.form.template.html')
    })
};
