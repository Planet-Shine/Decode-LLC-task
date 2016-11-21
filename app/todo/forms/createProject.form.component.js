
module.exports = (applicationModule) => {
    applicationModule.component('createProjectForm', {
        'bindings'   : {
            'isDisplayed' : '<',
            'onSubmit'    : '&'
        },
        'controller' : require('./createProject.form'),
        'template'   : require('./createProject.form.teamplate.html')
    })
};
