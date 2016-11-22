
const angular = require('angular');

module.exports = (applicationModule) => {
    var ctrl,
        component;

    ctrl = [function () {
        this.selectedProject = null;
        this.addProject = function () {
            this.onStartAddingProject();
        };

        this.selectProject = function (project) {
            this.selectedProject = project;
            this.onSelectProject({
                'project' : project
            });
        };

    }];

    component = applicationModule.component('projectList', {
        'bindings' : {
           'selectedProject'      : '<',
           'projects'             : '<',
           'onStartAddingProject' : '&',
           'onSelectProject'      : '&'
        },
        'controller' : ctrl,
        'template'   : require('./projectList.template.html')
    });

    return component;
};