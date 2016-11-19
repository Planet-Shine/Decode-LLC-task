var TodoResource = require("./todoResource");

class ProjectResource extends TodoResource {
    constructor($resource) {
        super($resource);
    }
    request(actionName, options) {
        var url = 'https://api-test-task.decodeapps.io/projects',
            $resource = this.$resource,
            method,
            result;

        if (actionName === 'fetch' && options.session && options.project_id === undefined) {
            options = {
                'session' : options.session
            };
            method = {
                'get' : {
                    method:'GET'
                }
            };
            result = $resource(url, options, method);
        } else if (actionName === 'fetch' && options.session && options.project_id) {
            options = {
                'session'    : options.session,
                'project_id' : options.project_id
            };
            url = url + '/project';
            method = {
                'get' : {
                    method:'GET'
                }
            };
            result = $resource(url, options, method);
        } else if (actionName === 'update') {
            url = url + '/project';
            method = {
                'save' : {
                    method:'POST'
                }
            };
            result = $resource(url, options, method);
        } else if (actionName === 'create') {
            url = url + '/project';
            method = {
                'save' : {
                    method:'POST'
                }
            };
            result = $resource(url, options, method);
        } else if (actionName === 'delete' && options.session && options.project_id) {
            options = {
                'session' : options.session,
                'project_id' : options.project_id
            };
            url = url + '/project';
            method = {
                'delete': {
                    method:'DELETE'
                }
            };
            result = $resource(url, options, method);
        } else {
            throw new TypeError("Projects access. Not legal request options.");
        }

        return result;
    }
}

module.exports = (todoModule) => {
    todoModule.factory('$projectResource', ['$resource', function ($resource) {
        return new ProjectResource($resource);
    }]);
};