var TodoResource = require("./todoResource");

class AccountResource extends TodoResource {
    constructor($resource) {
        super($resource);
    }
    request(actionName, options) {
        var host = 'https://api-test-task.decodeapps.io/',
            $resource = this.$resource,
            url,
            method,
            result;

        if (actionName === 'signup') {
            options = {};
            url = host + actionName;
            method = {
                'save' : {method:'POST'}
            };
            result = $resource(url, options, method);
        } else if (actionName === 'session' && options['session']) {
            options = {
                'session' : options['session']
            };
            url     = host + actionName;
            method  = {
                'get' : {method:'GET'}
            };
            result  = $resource(url, options, method);
        } else if (actionName === 'account' && options['session']) {
            options = {
                'session' : options['session']
            };
            url     = host + actionName;
            method  = {
                'get'  : {method : 'GET'}
            };
            result  = $resource(url, options, method);
        } else {
            throw new TypeError("Account access. Not legal request options.");
        }

        return result;
    };
}

module.exports = (todoModule) => {
    todoModule.factory('$accountResource', ['$resource', function ($resource) {
        return new AccountResource($resource);
    }]);
};