var Form = require('./form.js');

class CreateProjectForm extends Form {
    constructor($scope) {
        $scope.$watch('$ctrl.isCreateProjectFormDisplayed', (newValue) => {
            if (newValue === false) {
                this.clear();
            }
            this.isDisplayed = newValue;
        });
        super();
    }
    prepareSubmitData() {
        this.submitData = {
            'projectName' : this.projectName
        };
    }
    clear() {
        this.projectName = '';
    }
    isDisplayed = false;
    projectName = '';
    isCreateProjectFormDisplayed = false;
}
CreateProjectForm.$inject = ['$scope'];

module.exports = CreateProjectForm;