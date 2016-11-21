
var Form = require('./form.js');

class EditProjectForm extends Form {
    constructor() {
        super();
    }
    prepareSubmitData() {
        this.submitData = {
            'task' : {
                'title'       : this.title,
                'description' : this.description
            },
            'project'     : this.project
        };
    }
    clear() {
        this.title       = '';
        this.description = '';
    }
    submit() {
        super.submit();
        this.clear();
    }
    project = null;
    title = '';
    description = '';
    isDisplayed = false;
}

EditProjectForm.$inject = [];

module.exports = EditProjectForm;
