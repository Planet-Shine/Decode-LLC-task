var Form = require('./form.js');

class CreateProjectForm extends Form {
    constructor() {
        super();
    }
    prepareSubmitData() {
        this.submitData = {
            'title' : this.title
        };
    }
    submit() {
        super.submit();
        this.clear();
    }
    clear() {
        this.title = '';
    }
    title = '';
}
CreateProjectForm.$inject = [];

module.exports = CreateProjectForm;