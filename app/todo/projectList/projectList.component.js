module.exports = (applicationModule) => {
    var ctrl,
        component;

    ctrl = ['$scope', function ($scope) {
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

        this.watchProjects = function (newValue, oldValue) {
            var initializeList = (function () {
                this.selectProject(this.projects[0]);
            }).bind(this);
            if (angular.equals(oldValue, newValue) && newValue.length) {
                initializeList();
            } else {
                if (oldValue.length === 0 && newValue.length > 0) {
                    initializeList();
                }
            }
        };

        $scope.$watchCollection('$ctrl.projects', this.watchProjects.bind(this));
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