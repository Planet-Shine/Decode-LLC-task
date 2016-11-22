
var Form = require('./form.js');

class EditTaskForm extends Form {
    constructor($scope) {
        $scope.$watch("$ctrl.task", (newValue) => {
            this.refresh(newValue || {});
        });
        super();
    }
    prepareSubmitData() {
        this.submitData = {
            'task' : {
                'title'       : this.title,
                'description' : this.description,
                'id'          : this.task.id
            },
            'project'     : this.project
        };
    }
    refresh(task) {
        task = task || this.task;
        this.title       = task.title;
        this.description = task.description;
    }
    submit() {
        super.submit();
        this.refresh();
    }
    project = null;
    title = '';
    description = '';
    isDisplayed = false;
}

EditTaskForm.$inject = ['$scope'];

module.exports = EditTaskForm;
