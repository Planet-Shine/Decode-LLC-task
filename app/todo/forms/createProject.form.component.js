
module.exports = (applicationModule) => {
    applicationModule.component('createProjectForm', {
        'bindings'   : {
            'isCreateProjectFormDisplayed' : '<',
            'onSubmit'                     : '&'
        },
        'controller' : require('./createProject.form'),
        'template'   : require('./createProject.form.teamplate.html')
    })
};
