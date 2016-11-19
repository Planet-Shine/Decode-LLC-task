module.exports = class TodoResource {
    constructor($resource) {
        this.$resource = $resource;
    };
    handleError (error) {
        alert('Error : ' + JSON.stringify(error));
    };
    isError (data) {
        if (typeof data.message === 'string' ||
                data.message instanceof Array) {
            return true;
        }
        return false;
    };
    $resource = null;
};