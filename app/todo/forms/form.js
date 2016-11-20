
class Form {
    submitData = {};
    constructor() {

    }
    prepareSubmitData() {
        this.submitData = {};
    }
    submit() {
        this.prepareSubmitData();
        this.onSubmit({
            'data' : this.submitData
        });
    }
}

module.exports = Form;