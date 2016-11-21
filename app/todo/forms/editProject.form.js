var Form = require('./form.js');

class EditProjectForm extends Form {
    constructor($scope) {
        super();
        $scope.$watch("$ctrl.project", (newValue) => {
            this.refresh(newValue || {});
        });
    }
    prepareSubmitData() {
        this.submitData = {
            'project' : {
                'title' : this.title
            },
            'targetProject' : this.project
        };
    }
    refresh(project) {
        project = project || this.project;
        this.title = project.title || '';
    }
    submit() {
        super.submit();
        this.refresh();
    }
    title = '';
    isDisplayed = false;
}

EditProjectForm.$inject = ['$scope'];

module.exports = EditProjectForm;