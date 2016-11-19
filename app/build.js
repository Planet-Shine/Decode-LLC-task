var todo =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var applicationModule = angular.module('todo', ['ngMaterial', 'ngResource', 'ngCookies']);
	
	__webpack_require__(4);
	
	// Сервисы.
	__webpack_require__(5)(applicationModule);
	__webpack_require__(7)(applicationModule);
	__webpack_require__(8)(applicationModule);
	
	__webpack_require__(9); // Собираем стили.
	
	__webpack_require__(29)(applicationModule);
	__webpack_require__(30)(applicationModule);
	__webpack_require__(39)(applicationModule);
	__webpack_require__(41)(applicationModule);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoResource = __webpack_require__(6);
	
	var AccountResource = function (_TodoResource) {
	    _inherits(AccountResource, _TodoResource);
	
	    function AccountResource($resource) {
	        _classCallCheck(this, AccountResource);
	
	        return _possibleConstructorReturn(this, (AccountResource.__proto__ || Object.getPrototypeOf(AccountResource)).call(this, $resource));
	    }
	
	    _createClass(AccountResource, [{
	        key: 'request',
	        value: function request(actionName, options) {
	            var host = 'https://api-test-task.decodeapps.io/',
	                $resource = this.$resource,
	                url,
	                method,
	                result;
	
	            if (actionName === 'signup') {
	                options = {};
	                url = host + actionName;
	                method = {
	                    'save': { method: 'POST' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'session' && options['session']) {
	                options = {
	                    'session': options['session']
	                };
	                url = host + actionName;
	                method = {
	                    'get': { method: 'GET' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'account' && options['session']) {
	                options = {
	                    'session': options['session']
	                };
	                url = host + actionName;
	                method = {
	                    'get': { method: 'GET' }
	                };
	                result = $resource(url, options, method);
	            } else {
	                throw new TypeError("Account access. Not legal request options.");
	            }
	
	            return result;
	        }
	    }]);
	
	    return AccountResource;
	}(TodoResource);
	
	module.exports = function (todoModule) {
	    todoModule.factory('$accountResource', ['$resource', function ($resource) {
	        return new AccountResource($resource);
	    }]);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function TodoResource($resource) {
	        _classCallCheck(this, TodoResource);
	
	        this.$resource = null;
	
	        this.$resource = $resource;
	    }
	
	    _createClass(TodoResource, [{
	        key: 'handleError',
	        value: function handleError(error) {
	            alert('Error : ' + JSON.stringify(error));
	        }
	    }, {
	        key: 'isError',
	        value: function isError(data) {
	            if (typeof data.message === 'string' || data.message instanceof Array) {
	                return true;
	            }
	            return false;
	        }
	    }]);
	
	    return TodoResource;
	}();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoResource = __webpack_require__(6);
	
	var ProjectResource = function (_TodoResource) {
	    _inherits(ProjectResource, _TodoResource);
	
	    function ProjectResource($resource) {
	        _classCallCheck(this, ProjectResource);
	
	        return _possibleConstructorReturn(this, (ProjectResource.__proto__ || Object.getPrototypeOf(ProjectResource)).call(this, $resource));
	    }
	
	    _createClass(ProjectResource, [{
	        key: 'request',
	        value: function request(actionName, options) {
	            var url = 'https://api-test-task.decodeapps.io/projects',
	                $resource = this.$resource,
	                method,
	                result;
	
	            if (actionName === 'fetch' && options.session && options.project_id === undefined) {
	                options = {
	                    'session': options.session
	                };
	                method = {
	                    'get': {
	                        method: 'GET'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'fetch' && options.session && options.project_id) {
	                options = {
	                    'session': options.session,
	                    'project_id': options.project_id
	                };
	                url = url + '/project';
	                method = {
	                    'get': {
	                        method: 'GET'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'update') {
	                url = url + '/project';
	                method = {
	                    'save': {
	                        method: 'POST'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'create') {
	                url = url + '/project';
	                method = {
	                    'save': {
	                        method: 'POST'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'delete' && options.session && options.project_id) {
	                options = {
	                    'session': options.session,
	                    'project_id': options.project_id
	                };
	                url = url + '/project';
	                method = {
	                    'delete': {
	                        method: 'DELETE'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else {
	                throw new TypeError("Projects access. Not legal request options.");
	            }
	
	            return result;
	        }
	    }]);
	
	    return ProjectResource;
	}(TodoResource);
	
	module.exports = function (todoModule) {
	    todoModule.factory('$projectResource', ['$resource', function ($resource) {
	        return new ProjectResource($resource);
	    }]);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoResource = __webpack_require__(6);
	
	var TaskResource = function (_TodoResource) {
	    _inherits(TaskResource, _TodoResource);
	
	    function TaskResource($resource) {
	        _classCallCheck(this, TaskResource);
	
	        return _possibleConstructorReturn(this, (TaskResource.__proto__ || Object.getPrototypeOf(TaskResource)).call(this, $resource));
	    }
	
	    _createClass(TaskResource, [{
	        key: 'request',
	        value: function request(actionName, options) {
	            var url = 'https://api-test-task.decodeapps.io/tasks',
	                $resource = this.$resource,
	                method,
	                result;
	
	            if (actionName === 'fetch' && options.session && options.project_id && options.paging_size && options.paging_offset) {
	
	                options = {
	                    session: options.session,
	                    project_id: options.project_id,
	                    paging_size: options.paging_size,
	                    paging_offset: options.paging_offset,
	                    condition_keywords: options.condition_keywords || ''
	                };
	                method = {
	                    'get': {
	                        method: 'GET'
	                    }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'fetch' && options.task_id) {
	                options = {
	                    'task_id': options['task_id']
	                };
	                url = url + '/task';
	                method = {
	                    'get': { method: 'GET' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'create') {
	                options = {};
	                url = url + '/task';
	                method = {
	                    'save': { method: 'POST' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'update' && options.session && options.Task && options.Task.id && options.Task.title) {
	                options = {
	                    'session': options.session,
	                    'Task': {
	                        'id': options.Task.id,
	                        'title': options.Task.title,
	                        'description': options.Task.description || ''
	                    }
	                };
	                url = url + '/task';
	                method = {
	                    'save': { method: 'POST' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'delete' && options.session && options.task_id) {
	                url = url + '/task';
	                method = {
	                    'delete': { method: 'DELETE' }
	                };
	                result = $resource(url, options, method);
	            } else if (actionName === 'complete' && options.session && options.Task && options.Task.id) {
	                options = {
	                    'session': options.session,
	                    'Task': {
	                        'id': options.Task.id
	                    }
	                };
	                url = url + '/task/complite'; // complite — это не ошибка, такой сервис.
	                method = {
	                    'save': { method: 'POST' }
	                };
	                result = $resource(url, options, method);
	            } else {
	                throw new TypeError("Tasks access. Not legal request options.");
	            }
	
	            return result;
	        }
	    }]);
	
	    return TaskResource;
	}(TodoResource);
	
	module.exports = function (todoModule) {
	    todoModule.factory('$taskResource', ['$resource', function ($resource) {
	        return new TaskResource($resource);
	    }]);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (applicationModule) {
	    applicationModule.config(['$mdThemingProvider', function ($mdThemingProvider) {
	        $mdThemingProvider.theme('grey');
	    }]);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (applicationModule) {
	    var ctrl, component;
	
	    ctrl = ['$scope', '$accountResource', '$projectResource', '$taskResource', '$cookies', '$mdSidenav', function ($scope, $accountResource, $projectResource, $taskResource, $cookies, $mdSidenav) {
	        var self = this,
	            session = $cookies.get('session'),
	            sessionGetTries = 0,
	            sessionGetMax = 5,
	            loaderModificators = {
	            'showed': 'page-cover_showed',
	            'hidden': 'page-cover_hidden',
	            'hiding': ''
	        },
	            loaderTimeout = 1000;
	
	        // Просачивающиеся значения.
	        $scope.account = {}; // Директива вывода информации о профайле.
	        this.projects = []; // Список проектов.
	
	        this.editingProjectName = '';
	        this.newProjectName = '';
	        this.searchText = '';
	        this.formName = '';
	        this.createTaskName = '';
	        this.createTaskDescription = '';
	        this.selectedProjectIndex = 0;
	        this.searchInputHidden = true;
	        this.loaderModificator = loaderModificators['showed'];
	
	        this.searchTodoByQuery = function (searchQuery) {
	            console.log(searchQuery);
	        };
	
	        this.startAddingProject = function () {
	            console.log('startAddingProject');
	        };
	
	        this.selectProject = function (project) {
	            console.log(project);
	        };
	
	        this.getCurrentProject = function () {
	            return this.projects[this.selectedProjectIndex];
	        };
	        /*
	        this.reselectProject = function (index) {
	            this.selectProject(this.selectedProjectIndex);
	        };
	        */
	
	        if (session) {
	            checkSession();
	        } else {
	            getSession();
	        }
	
	        function formatProjectItem(projectItem) {
	            return projectItem.Project;
	        }
	
	        function checkSession(callback) {
	            $accountResource.request('session', { 'session': session }).get().$promise.then(function (data) {
	                loadAppData();
	            }, function (error) {
	                getSession(callback);
	                // $accountResource.handleError(error);
	            });
	        }
	
	        function loadAppData() {
	            var requestCount = 0,
	                requestTarget = 2;
	
	            $accountResource.request('account', { 'session': session }).get().$promise.then(function (data) {
	                $scope.account = data.Account;
	                requestCount += 1;
	                next();
	            }, $accountResource.handleError);
	
	            $projectResource.request('fetch', { 'session': session }).get().$promise.then(function (data) {
	                self.projects = data.projects.map(formatProjectItem);
	                requestCount += 1;
	                next();
	            }, $projectResource.handleError);
	
	            function next() {
	                if (requestCount === requestTarget) {
	                    self.initializeGui();
	                }
	            }
	        }
	
	        function getSession(callback) {
	            $accountResource.request('signup', null).save().$promise.then(function (data) {
	                if ($accountResource.isError(data)) {
	                    $accountResource.handleError(data);
	                } else {
	                    session = data.session;
	                    $cookies.put('session', session);
	                    checkSession(callback);
	                }
	            }, function (error) {
	                sessionGetTries += 1;
	                if (sessionGetTries < sessionGetMax) {
	                    getSession(callback);
	                } else {
	                    $accountResource.handleError(error);
	                }
	            });
	        }
	
	        this.replaceProject = function (target, newProject) {
	            var index = this.projects.indexOf(target);
	            this.projects.splice(index, 1, newProject);
	            this.reselectProject();
	        };
	
	        this.initializeGui = function () {
	            this.loaderModificator = loaderModificators['hiding'];
	            setTimeout(function () {
	                self.loaderModificator = loaderModificators['hidden'];
	                $scope.$apply();
	            }, loaderTimeout);
	        };
	
	        this.toggleSidePanel = function () {
	            $mdSidenav('side-panel').toggle().then(function () {
	                console.log('ready!');
	            });
	        };
	
	        this.openCreateTaskForm = function () {
	            this.formName = 'createTask';
	            this.toggleSidePanel();
	        };
	
	        this.openCreateProjectForm = function () {
	            this.formName = 'createProject';
	            this.toggleSidePanel();
	        };
	
	        this.openEditProjectForm = function () {
	            console.log('openEditProjectForm!');
	            this.editingProjectName = this.getCurrentProject().Project.title;
	            this.formName = 'editProject';
	            this.toggleSidePanel();
	        };
	
	        this.fooValue = null;
	
	        this.addProjectToList = function (project) {
	            this.projects.push(project);
	        };
	
	        this.fetchProject = function (projectId) {
	            $projectResource.request('fetch', { 'session': session, 'project_id': projectId }).get().$promise.then(function (data) {
	                var ids = self.projects.map(function (item) {
	                    return item.Project.id;
	                }),
	                    indexOfProject;
	                if ($accountResource.isError(data)) {
	                    $accountResource.handleError(data);
	                } else {
	                    indexOfProject = ids.indexOf(data.Project.id);
	                    if (indexOfProject !== -1) {
	                        self.replaceProject(self.projects[indexOfProject], data.Project);
	                    } else {
	                        self.addProjectToList(data.Project);
	                    }
	                }
	            }, $projectResource.handleError);
	        };
	
	        this.editProject = function () {
	            var currentProject = self.getCurrentProject(),
	                projectName = this.editingProjectName;
	            this.toggleSidePanel();
	            $projectResource.request('update', {}).save({
	                'session': session,
	                'Project': {
	                    'id': self.getCurrentProject().Project.id,
	                    'title': projectName
	                }
	            }).$promise.then(function (data) {
	                if ($accountResource.isError(data)) {
	                    $accountResource.handleError(data);
	                } else {
	                    self.replaceProject(currentProject, {
	                        'Project': data.Project
	                    });
	                }
	            }, $projectResource.handleError);
	        };
	
	        this.createNewProject = function () {
	            var projectName = this.newProjectName;
	
	            this.newProjectName = '';
	            this.toggleSidePanel();
	
	            $projectResource.request('create', {}).save({
	                'session': session,
	                'Project': {
	                    'title': projectName
	                }
	            }).$promise.then(function (data) {
	                if ($accountResource.isError(data)) {
	                    $accountResource.handleError(data);
	                } else {
	                    self.fetchProject(data.Project.id);
	                }
	            }, $projectResource.handleError);
	        };
	
	        this.createNewTask = function () {
	            var createTaskName = this.createTaskName,
	                createTaskDescription = this.createTaskDescription,
	                currentProject = this.getCurrentProject();
	
	            $taskResource.request('create', {}).save({
	                'session': session,
	                'Project': {
	                    'id': currentProject.Project.id
	                },
	                'Task': {
	                    'title': createTaskName,
	                    'description': createTaskDescription || ''
	                }
	            }).$promise.then(function (data) {
	                if ($taskResource.isError(data)) {
	                    $taskResource.handleError(data);
	                } else {
	                    self.fetchProject(currentProject.Project.id);
	                    self.toggleSidePanel();
	                }
	            }, $projectResource.handleError);
	        };
	
	        this.deleteProject = function (project) {
	            var index = this.projects.indexOf(project);
	            this.projects.splice(index, 1);
	        };
	
	        this.deleteCurrentProject = function () {
	            console.log('deleteCurrentProject!');
	            if (project) {
	                $projectResource.request('create', { 'session': session, 'project_id': project.Project.id }).delete().$promise.then(function (data) {
	                    if ($accountResource.isError(data)) {
	                        $accountResource.handleError(data);
	                    } else {
	                        self.deleteProject(project);
	                    }
	                }, $projectResource.handleError);
	            }
	        };
	    }];
	
	    component = applicationModule.component('todoView', {
	        'controllerAs': '$todo',
	        'controller': ctrl,
	        'template': __webpack_require__(31)
	    });
	
	    __webpack_require__(32)(component);
	    __webpack_require__(34)(component);
	    __webpack_require__(36)(component);
	    __webpack_require__(38)(component);
	
	    return component;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<div class=\"content-box-hat\">\r\n    <div class=\"content-box\">\r\n        <div class=\"workspace\"> <!-- workspace_no-todo -->\r\n\r\n            <div class=\"workspace-inner\" layout=\"column\" flex>\r\n\r\n                <div class=\"toolbar\">\r\n                    <div class=\"toolbar__inner\">\r\n                        <search-view on-search-query-change=\"$todo.searchTodoByQuery(searchQuery)\"></search-view>\r\n                        <more-menu></more-menu>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"workspace-board\" flex>\r\n\r\n                    <div class=\"todo-list\">\r\n                        <md-list class=\"todo-list__items\">\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Today</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company Create a company Create a company Create a company Create a company Create a company Create a company Create a company\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Stories</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 2\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                            <md-subheader class=\"md-no-sticky todo-list__subheader\">Goodies</md-subheader>\r\n                            <div class=\"todo-list__group\">\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 3\r\n                                    </div>\r\n                                </md-list-item>\r\n                                <md-divider class=\"todo-list__divider\"></md-divider>\r\n                                <md-list-item class=\"md-1-line todo-list__item\">\r\n                                    <div class=\"todo-list__complete\">\r\n                                        <div class=\"todo-list__complete-circle\" ng-click=\"null\"></div>\r\n                                    </div>\r\n                                    <div class=\"todo-list__item-caption\">\r\n                                        Create a company 4\r\n                                    </div>\r\n                                </md-list-item>\r\n                            </div>\r\n                        </md-list>\r\n                    </div>\r\n\r\n                    <div class=\"no-todo\" layout=\"column\" layout-align=\"center center\">\r\n                        <div class=\"icons8-todo-list no-todo__caption-icon\"></div>\r\n                        <div class=\"no-todo__caption\">\r\n                            Have a good day\r\n                        </div>\r\n                    </div>\r\n                    <md-button ng-click=\"null\"\r\n                               class=\"md-fab bottom-right-button add-todo-button\"\r\n                               aria-label=\"Add todo\">\r\n                        <div class=\"icons8-plus\"></div>\r\n                    </md-button>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"right-col\">\r\n            <div class=\"right-col-inner\">\r\n                <profile-info></profile-info>\r\n                <project-list projects=\"$todo.projects\" on-start-adding-project=\"$todo.startAddingProject()\" on-select-project=\"$todo.selectProject(project)\"></project-list>\r\n            </div>\r\n        </div>\r\n\r\n        <md-sidenav\r\n                ng-class=\"{\r\n                    createProject : 'create-project-form-shown',\r\n                    editProject   : 'edit-project-form-shown',\r\n                    createTask    : 'create-task-form-shown'\r\n                }[$todo.formName]\"\r\n                class=\"md-sidenav-right side-panel\"\r\n                md-component-id=\"side-panel\">\r\n\r\n            <div class=\"create-project-form\">\r\n                <md-toolbar class=\"side-panel__toolbar\">\r\n                    <div class=\"side-panel__close-box\">\r\n                        <md-button ng-click=\"$todo.toggleSidePanel()\" class=\"md-fab side-panel__close\" aria-label=\"Close side panel\">\r\n                            <div class=\"side-panel__close-icon icons8-delete-2\"></div>\r\n                            <div>Esc</div>\r\n                        </md-button>\r\n                    </div>\r\n                    <h1 class=\"md-toolbar-tools side-panel__header\">\r\n                        Create new project\r\n                    </h1>\r\n                </md-toolbar>\r\n                <md-content class=\"side-panel__content\">\r\n                    <div class=\"side-panel__content-inner\">\r\n                        <md-input-container class=\"side-panel__input\">\r\n                            <label>Project name</label>\r\n                            <input ng-model=\"$todo.newProjectName\">\r\n                        </md-input-container>\r\n                    </div>\r\n                </md-content>\r\n                <md-button ng-click=\"$todo.createNewProject()\"\r\n                           class=\"md-fab bottom-right-button side-panel__confirm\"\r\n                           aria-label=\"Confirm edit\">\r\n                    <div class=\"icons8-checkmark\"></div>\r\n                </md-button>\r\n            </div>\r\n\r\n            <div class=\"edit-project-form\">\r\n                <md-toolbar class=\"side-panel__toolbar\">\r\n                    <div class=\"side-panel__close-box\">\r\n                        <md-button ng-click=\"$todo.toggleSidePanel()\" class=\"md-fab side-panel__close\" aria-label=\"Close side panel\">\r\n                            <div class=\"side-panel__close-icon icons8-delete-2\"></div>\r\n                            <div>Esc</div>\r\n                        </md-button>\r\n                    </div>\r\n                    <h1 class=\"md-toolbar-tools side-panel__header\">\r\n                        Edit task\r\n                    </h1>\r\n                </md-toolbar>\r\n                <md-content class=\"side-panel__content\">\r\n                    <div class=\"side-panel__content-inner\">\r\n                        <md-input-container class=\"side-panel__input\">\r\n                            <label>Task name</label>\r\n                            <input ng-model=\"$todo.editingProjectName\">\r\n                        </md-input-container>\r\n                    </div>\r\n                </md-content>\r\n                <md-button ng-click=\"$todo.editProject()\"\r\n                           class=\"md-fab bottom-right-button side-panel__confirm\"\r\n                           aria-label=\"Confirm edit\">\r\n                    <div class=\"icons8-checkmark\"></div>\r\n                </md-button>\r\n            </div>\r\n\r\n            <div class=\"create-task-form\">\r\n                <md-toolbar class=\"side-panel__toolbar\">\r\n                    <div class=\"side-panel__close-box\">\r\n                        <md-button ng-click=\"$todo.toggleSidePanel()\" class=\"md-fab side-panel__close\" aria-label=\"Close side panel\">\r\n                            <div class=\"side-panel__close-icon icons8-delete-2\"></div>\r\n                            <div>Esc</div>\r\n                        </md-button>\r\n                    </div>\r\n                    <h1 class=\"md-toolbar-tools side-panel__header\">\r\n                        Create new task\r\n                    </h1>\r\n                </md-toolbar>\r\n                <md-content class=\"side-panel__content\">\r\n                    <div class=\"side-panel__content-inner\">\r\n                        <md-input-container class=\"side-panel__input\">\r\n                            <label>Task name</label>\r\n                            <input ng-model=\"$todo.createTaskName\" >\r\n                        </md-input-container>\r\n                        <md-input-container class=\"side-panel__input\">\r\n                            <label>Description</label>\r\n                            <input ng-model=\"$todo.createTaskDescription\" >\r\n                        </md-input-container>\r\n                    </div>\r\n                </md-content>\r\n                <md-button ng-click=\"$todo.createNewTask()\"\r\n                           class=\"md-fab bottom-right-button side-panel__confirm\"\r\n                           aria-label=\"Confirm edit\">\r\n                    <div class=\"icons8-checkmark\"></div>\r\n                </md-button>\r\n            </div>\r\n\r\n        </md-sidenav>\r\n\r\n    </div>\r\n</div>\r\n<div ng-class=\"$todo.loaderModificator\" class=\"page-cover_showed page-cover\" layout=\"row\" layout-align=\"center center\">\r\n    <md-progress-circular\r\n            md-diameter=\"60\"\r\n            layout-align=\"center\"\r\n            md-mode=\"indeterminate\">\r\n    </md-progress-circular>\r\n</div>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (todoComponent) {
	    todoComponent.directive('moreMenu', function () {
	        return {
	            bindToController: true,
	            template: __webpack_require__(33)
	        };
	    });
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<md-menu>\r\n    <md-button class=\"md-fab toolbar__more\" aria-label=\"More\" ng-click=\"$mdOpenMenu($event)\">\r\n        <div class=\"icons8-more\"></div>\r\n    </md-button>\r\n    <md-menu-content class=\"toolbar__more-menu\" width=\"1\">\r\n        <md-menu-item class=\"toolbar__more-item\">\r\n            <md-button ng-click=\"$todo.openEditProjectForm()\"\r\n                       aria-label=\"Edit\" class=\"md-fab md-raised md-mini toolbar__more\">\r\n                <div class=\"icons8-edit\"></div>\r\n            </md-button>\r\n        </md-menu-item>\r\n        <md-menu-item class=\"toolbar__more-item\">\r\n            <md-button ng-click=\"$todo.deleteCurrentProject()\"\r\n                       aria-label=\"Delete\" class=\"md-fab md-raised md-mini toolbar__more\">\r\n                <div class=\"icons8-delete\"></div>\r\n            </md-button>\r\n        </md-menu-item>\r\n    </md-menu-content>\r\n</md-menu>"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (todoComponent) {
	    todoComponent.directive('profileInfo', function () {
	        return {
	            template: __webpack_require__(35)
	        };
	    });
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"profile-info\">\r\n    <div class=\"profile-info__avatar\">\r\n        <div class=\"profile-info__avatar-circle\">\r\n            <img class=\"profile-info__avatar-image\"\r\n                 alt=\"{{account.username}}\"\r\n                 ng-src=\"{{account.image_url}}\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"profile-info__user-name\">\r\n        {{account.username}}\r\n    </div>\r\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (todoComponent) {
	    todoComponent.directive('leftFooter', function () {
	        return {
	            template: __webpack_require__(37)
	        };
	    });
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"right-col-footer-inner\">\r\n    Log out\r\n</div>"

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (todoComponent) {
	    todoComponent.directive('focusOnCondition', ['$timeout', function ($timeout) {
	        var checkDirectivePrerequisites = function checkDirectivePrerequisites(attrs) {
	            if (!attrs.focusOnCondition && attrs.focusOnCondition !== "") {
	                throw "FocusOnCondition missing attribute to evaluate";
	            }
	        };
	
	        return {
	            restrict: "A",
	            link: function link(scope, element, attrs, ctrls) {
	                checkDirectivePrerequisites(attrs);
	
	                scope.$watch(attrs.focusOnCondition, function (currentValue, lastValue) {
	                    if (currentValue == true) {
	                        $timeout(function () {
	                            element.focus();
	                        });
	                    }
	                });
	            }
	        };
	    }]);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (applicationModule) {
	    var ctrl, component;
	
	    ctrl = ['$scope', function ($scope) {
	        this.selectedProject = null;
	        this.addProject = function () {
	            this.onStartAddingProject();
	        };
	
	        this.selectProject = function (project) {
	            this.selectedProject = project;
	            this.onSelectProject({
	                'project': project
	            });
	        };
	
	        this.watchProjects = function (newValue, oldValue) {
	            var initializeList = function () {
	                this.selectProject(this.projects[0]);
	            }.bind(this);
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
	        'bindings': {
	            'projects': '<',
	            'onStartAddingProject': '&',
	            'onSelectProject': '&'
	        },
	        'controller': ctrl,
	        'template': __webpack_require__(40)
	    });
	
	    return component;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"projects-list\">\r\n    <div class=\"projects-list__header\">\r\n        <div class=\"projects-list__caption\">\r\n            Projects\r\n        </div>\r\n        <md-button class=\"md-fab projects-list__add-button\"\r\n                   aria-label=\"Add project\"\r\n                   ng-click=\"$ctrl.addProject()\">\r\n            <div class=\"icons8-plus\"></div>\r\n        </md-button>\r\n    </div>\r\n    <div class=\"projects-list__items-box\" layout=\"column\" layout-align=\"center start\">\r\n        <md-list class=\"projects-list__items\" flex=\"85\">\r\n            <md-list-item ng-repeat=\"$project in $ctrl.projects\"\r\n                          ng-class=\"$project === $ctrl.selectedProject ? 'projects-list__item_selected' : ''\"\r\n                          class=\"md-1-line projects-list__item\"\r\n                          ng-click=\"$ctrl.selectProject($project)\">\r\n                <span data-id=\"{{$project.id}}\">{{$project.title}}</span>\r\n                <span class=\"projects-list__item-task-count\">{{$project.task_count}}</span>\r\n            </md-list-item>\r\n        </md-list>\r\n        <left-footer class=\"right-col-footer\" flex></left-footer>\r\n    </div>\r\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (applicationModule) {
	    var ctrl, component;
	
	    ctrl = ['$scope', function ($scope) {
	        this.isSearchInputHidden = true;
	        this.searchQuery = '';
	        this.searchClick = function () {
	            this.isSearchInputHidden = !this.isSearchInputHidden;
	            this.searchQuery = '';
	        };
	        $scope.$watch("$ctrl.searchQuery", function (newValue, oldValue) {
	            this.onSearchQueryChange({
	                'searchQuery': newValue
	            });
	        }.bind(this));
	    }];
	
	    component = applicationModule.component('searchView', {
	        'bindings': {
	            'onSearchQueryChange': '&'
	        },
	        'controller': ctrl,
	        'template': __webpack_require__(42)
	    });
	
	    return component;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<md-button class=\"md-fab toolbar__search\"\r\n           aria-label=\"Search todo\"\r\n           ng-click=\"$ctrl.searchClick()\">\r\n    <div class=\"icons8-search\"></div>\r\n</md-button>\r\n<md-input-container ng-class=\"$ctrl.isSearchInputHidden && 'toolbar__search-input_hidden'\" class=\"toolbar__search-input\">\r\n    <label></label>\r\n    <input ng-model=\"$ctrl.searchQuery\"\r\n           focus-on-condition=\"!$ctrl.isSearchInputHidden\">\r\n</md-input-container>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDc1NmZiMjdkNGRjYTNhMTc2YzIiLCJ3ZWJwYWNrOi8vLy4vZGV2LXRvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2UvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZS90b2RvUmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2UvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZS90YXNrLmpzIiwid2VicGFjazovLy8uL3N0eWwvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi90b2RvLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi90b2RvL3RvZG8uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3RvZG8vdG9kby5jb21wb25lbnQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi90b2RvL2RpcmVjdGl2ZXMvbW9yZU1lbnUuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3RvZG8vZGlyZWN0aXZlcy9tb3JlTWVudS5kaXJlY3RpdmUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi90b2RvL2RpcmVjdGl2ZXMvcHJvZmlsZUluZm8uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3RvZG8vZGlyZWN0aXZlcy9wcm9maWxlSW5mby5kaXJlY3RpdmUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi90b2RvL2RpcmVjdGl2ZXMvbGVmdEZvb3Rlci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vdG9kby9kaXJlY3RpdmVzL2xlZnRGb290ZXIuZGlyZWN0aXZlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdG9kby9kaXJlY3RpdmVzL2ZvY3VzT25Db25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdG9kby9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vdG9kby9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3RvZG8vc2VhcmNoVmlldy9zZWFyY2hWaWV3LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi90b2RvL3NlYXJjaFZpZXcvc2VhcmNoVmlldy5jb21wb25lbnQudGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6WyJhcHBsaWNhdGlvbk1vZHVsZSIsImFuZ3VsYXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiVG9kb1Jlc291cmNlIiwiQWNjb3VudFJlc291cmNlIiwiJHJlc291cmNlIiwiYWN0aW9uTmFtZSIsIm9wdGlvbnMiLCJob3N0IiwidXJsIiwibWV0aG9kIiwicmVzdWx0IiwiVHlwZUVycm9yIiwiZXhwb3J0cyIsInRvZG9Nb2R1bGUiLCJmYWN0b3J5IiwiZXJyb3IiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwibWVzc2FnZSIsIkFycmF5IiwiUHJvamVjdFJlc291cmNlIiwic2Vzc2lvbiIsInByb2plY3RfaWQiLCJ1bmRlZmluZWQiLCJUYXNrUmVzb3VyY2UiLCJwYWdpbmdfc2l6ZSIsInBhZ2luZ19vZmZzZXQiLCJjb25kaXRpb25fa2V5d29yZHMiLCJ0YXNrX2lkIiwiVGFzayIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsIiRtZFRoZW1pbmdQcm92aWRlciIsInRoZW1lIiwiY3RybCIsImNvbXBvbmVudCIsIiRzY29wZSIsIiRhY2NvdW50UmVzb3VyY2UiLCIkcHJvamVjdFJlc291cmNlIiwiJHRhc2tSZXNvdXJjZSIsIiRjb29raWVzIiwiJG1kU2lkZW5hdiIsInNlbGYiLCJnZXQiLCJzZXNzaW9uR2V0VHJpZXMiLCJzZXNzaW9uR2V0TWF4IiwibG9hZGVyTW9kaWZpY2F0b3JzIiwibG9hZGVyVGltZW91dCIsImFjY291bnQiLCJwcm9qZWN0cyIsImVkaXRpbmdQcm9qZWN0TmFtZSIsIm5ld1Byb2plY3ROYW1lIiwic2VhcmNoVGV4dCIsImZvcm1OYW1lIiwiY3JlYXRlVGFza05hbWUiLCJjcmVhdGVUYXNrRGVzY3JpcHRpb24iLCJzZWxlY3RlZFByb2plY3RJbmRleCIsInNlYXJjaElucHV0SGlkZGVuIiwibG9hZGVyTW9kaWZpY2F0b3IiLCJzZWFyY2hUb2RvQnlRdWVyeSIsInNlYXJjaFF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0YXJ0QWRkaW5nUHJvamVjdCIsInNlbGVjdFByb2plY3QiLCJwcm9qZWN0IiwiZ2V0Q3VycmVudFByb2plY3QiLCJjaGVja1Nlc3Npb24iLCJnZXRTZXNzaW9uIiwiZm9ybWF0UHJvamVjdEl0ZW0iLCJwcm9qZWN0SXRlbSIsIlByb2plY3QiLCJjYWxsYmFjayIsInJlcXVlc3QiLCIkcHJvbWlzZSIsInRoZW4iLCJsb2FkQXBwRGF0YSIsInJlcXVlc3RDb3VudCIsInJlcXVlc3RUYXJnZXQiLCJBY2NvdW50IiwibmV4dCIsImhhbmRsZUVycm9yIiwibWFwIiwiaW5pdGlhbGl6ZUd1aSIsInNhdmUiLCJpc0Vycm9yIiwicHV0IiwicmVwbGFjZVByb2plY3QiLCJ0YXJnZXQiLCJuZXdQcm9qZWN0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVzZWxlY3RQcm9qZWN0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsInRvZ2dsZVNpZGVQYW5lbCIsInRvZ2dsZSIsIm9wZW5DcmVhdGVUYXNrRm9ybSIsIm9wZW5DcmVhdGVQcm9qZWN0Rm9ybSIsIm9wZW5FZGl0UHJvamVjdEZvcm0iLCJmb29WYWx1ZSIsImFkZFByb2plY3RUb0xpc3QiLCJwdXNoIiwiZmV0Y2hQcm9qZWN0IiwicHJvamVjdElkIiwiaWRzIiwiaXRlbSIsImluZGV4T2ZQcm9qZWN0IiwiZWRpdFByb2plY3QiLCJjdXJyZW50UHJvamVjdCIsInByb2plY3ROYW1lIiwiY3JlYXRlTmV3UHJvamVjdCIsImNyZWF0ZU5ld1Rhc2siLCJkZWxldGVQcm9qZWN0IiwiZGVsZXRlQ3VycmVudFByb2plY3QiLCJkZWxldGUiLCJ0b2RvQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwiYmluZFRvQ29udHJvbGxlciIsInRlbXBsYXRlIiwiJHRpbWVvdXQiLCJjaGVja0RpcmVjdGl2ZVByZXJlcXVpc2l0ZXMiLCJhdHRycyIsImZvY3VzT25Db25kaXRpb24iLCJyZXN0cmljdCIsImxpbmsiLCJzY29wZSIsImVsZW1lbnQiLCJjdHJscyIsIiR3YXRjaCIsImN1cnJlbnRWYWx1ZSIsImxhc3RWYWx1ZSIsImZvY3VzIiwic2VsZWN0ZWRQcm9qZWN0IiwiYWRkUHJvamVjdCIsIm9uU3RhcnRBZGRpbmdQcm9qZWN0Iiwib25TZWxlY3RQcm9qZWN0Iiwid2F0Y2hQcm9qZWN0cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJpbml0aWFsaXplTGlzdCIsImJpbmQiLCJlcXVhbHMiLCJsZW5ndGgiLCIkd2F0Y2hDb2xsZWN0aW9uIiwiaXNTZWFyY2hJbnB1dEhpZGRlbiIsInNlYXJjaENsaWNrIiwib25TZWFyY2hRdWVyeUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsS0FBTUEsb0JBQW9CQyxRQUFRQyxNQUFSLENBQWUsTUFBZixFQUF1QixDQUM3QyxZQUQ2QyxFQUU3QyxZQUY2QyxFQUc3QyxXQUg2QyxDQUF2QixDQUExQjs7QUFNQSxvQkFBQUMsQ0FBUSxDQUFSOztBQUVBO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUixFQUE4QkgsaUJBQTlCO0FBQ0Esb0JBQUFHLENBQVEsQ0FBUixFQUE4QkgsaUJBQTlCO0FBQ0Esb0JBQUFHLENBQVEsQ0FBUixFQUEyQkgsaUJBQTNCOztBQUVBLG9CQUFBRyxDQUFRLENBQVIsRSxDQUE4Qjs7QUFFOUIsb0JBQUFBLENBQVEsRUFBUixFQUF5QkgsaUJBQXpCO0FBQ0Esb0JBQUFHLENBQVEsRUFBUixF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LEVBQW5CO0FBQ0EsY0FBS3VGLFdBQUwsR0FBbUIsWUFBWTtBQUMzQixrQkFBS0QsbUJBQUwsR0FBMkIsQ0FBQyxLQUFLQSxtQkFBakM7QUFDQSxrQkFBS3RGLFdBQUwsR0FBbUIsRUFBbkI7QUFDSCxVQUhEO0FBSUF4QixnQkFBTzhGLE1BQVAsQ0FBYyxtQkFBZCxFQUFvQyxVQUFVUyxRQUFWLEVBQW9CQyxRQUFwQixFQUE4QjtBQUM5RCxrQkFBS1EsbUJBQUwsQ0FBeUI7QUFDckIsZ0NBQWdCVDtBQURLLGNBQXpCO0FBR0gsVUFKa0MsQ0FJaENHLElBSmdDLENBSTNCLElBSjJCLENBQW5DO0FBS0gsTUFaTSxDQUFQOztBQWNBM0csaUJBQVl6QyxrQkFBa0J5QyxTQUFsQixDQUE0QixZQUE1QixFQUEwQztBQUNsRCxxQkFBYTtBQUNULG9DQUF3QjtBQURmLFVBRHFDO0FBSWxELHVCQUFlRCxJQUptQztBQUtsRCxxQkFBYSxtQkFBQXJDLENBQVEsRUFBUjtBQUxxQyxNQUExQyxDQUFaOztBQVFBLFlBQU9zQyxTQUFQO0FBQ0gsRUEzQkQsQzs7Ozs7O0FDQUEsa2YiLCJmaWxlIjoiYXBwXFxidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3NTZmYjI3ZDRkY2EzYTE3NmMyIiwiY29uc3QgYXBwbGljYXRpb25Nb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndG9kbycsIFtcclxuICAgICduZ01hdGVyaWFsJyxcclxuICAgICduZ1Jlc291cmNlJyxcclxuICAgICduZ0Nvb2tpZXMnXHJcbl0pO1xyXG5cclxucmVxdWlyZSgnLi9sYXlvdXQtZml4ZXMnKTtcclxuXHJcbi8vINCh0LXRgNCy0LjRgdGLLlxyXG5yZXF1aXJlKCcuL3Jlc291cmNlL2FjY291bnQnKShhcHBsaWNhdGlvbk1vZHVsZSk7XHJcbnJlcXVpcmUoJy4vcmVzb3VyY2UvcHJvamVjdCcpKGFwcGxpY2F0aW9uTW9kdWxlKTtcclxucmVxdWlyZSgnLi9yZXNvdXJjZS90YXNrJykoYXBwbGljYXRpb25Nb2R1bGUpO1xyXG5cclxucmVxdWlyZShcIi4vc3R5bC9pbmRleC5sZXNzXCIpOyAvLyDQodC+0LHQuNGA0LDQtdC8INGB0YLQuNC70LguXHJcblxyXG5yZXF1aXJlKCcuL3RvZG8uY29uZmlnJykoYXBwbGljYXRpb25Nb2R1bGUpO1xyXG5yZXF1aXJlKCcuL3RvZG8vdG9kby5jb21wb25lbnQnKShhcHBsaWNhdGlvbk1vZHVsZSk7XHJcbnJlcXVpcmUoJy4vdG9kby9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdC5jb21wb25lbnQnKShhcHBsaWNhdGlvbk1vZHVsZSk7XHJcbnJlcXVpcmUoJy4vdG9kby9zZWFyY2hWaWV3L3NlYXJjaFZpZXcuY29tcG9uZW50JykoYXBwbGljYXRpb25Nb2R1bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi10b2RvLmpzIiwidmFyIFRvZG9SZXNvdXJjZSA9IHJlcXVpcmUoXCIuL3RvZG9SZXNvdXJjZVwiKTtcclxuXHJcbmNsYXNzIEFjY291bnRSZXNvdXJjZSBleHRlbmRzIFRvZG9SZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2UpIHtcclxuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdChhY3Rpb25OYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnaHR0cHM6Ly9hcGktdGVzdC10YXNrLmRlY29kZWFwcHMuaW8vJyxcclxuICAgICAgICAgICAgJHJlc291cmNlID0gdGhpcy4kcmVzb3VyY2UsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb25OYW1lID09PSAnc2lnbnVwJykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIHVybCA9IGhvc3QgKyBhY3Rpb25OYW1lO1xyXG4gICAgICAgICAgICBtZXRob2QgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2F2ZScgOiB7bWV0aG9kOidQT1NUJ31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJHJlc291cmNlKHVybCwgb3B0aW9ucywgbWV0aG9kKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICdzZXNzaW9uJyAmJiBvcHRpb25zWydzZXNzaW9uJ10pIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICdzZXNzaW9uJyA6IG9wdGlvbnNbJ3Nlc3Npb24nXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB1cmwgICAgID0gaG9zdCArIGFjdGlvbk5hbWU7XHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JyA6IHttZXRob2Q6J0dFVCd9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCAgPSAkcmVzb3VyY2UodXJsLCBvcHRpb25zLCBtZXRob2QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ2FjY291bnQnICYmIG9wdGlvbnNbJ3Nlc3Npb24nXSkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Nlc3Npb24nIDogb3B0aW9uc1snc2Vzc2lvbiddXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHVybCAgICAgPSBob3N0ICsgYWN0aW9uTmFtZTtcclxuICAgICAgICAgICAgbWV0aG9kICA9IHtcclxuICAgICAgICAgICAgICAgICdnZXQnICA6IHttZXRob2QgOiAnR0VUJ31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ICA9ICRyZXNvdXJjZSh1cmwsIG9wdGlvbnMsIG1ldGhvZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFjY291bnQgYWNjZXNzLiBOb3QgbGVnYWwgcmVxdWVzdCBvcHRpb25zLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICh0b2RvTW9kdWxlKSA9PiB7XHJcbiAgICB0b2RvTW9kdWxlLmZhY3RvcnkoJyRhY2NvdW50UmVzb3VyY2UnLCBbJyRyZXNvdXJjZScsIGZ1bmN0aW9uICgkcmVzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFjY291bnRSZXNvdXJjZSgkcmVzb3VyY2UpO1xyXG4gICAgfV0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlL2FjY291bnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRvZG9SZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLiRyZXNvdXJjZSA9ICRyZXNvdXJjZTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVFcnJvciAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydCgnRXJyb3IgOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIH07XHJcbiAgICBpc0Vycm9yIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLm1lc3NhZ2UgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgICAgICAgICAgICBkYXRhLm1lc3NhZ2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgICRyZXNvdXJjZSA9IG51bGw7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2UvdG9kb1Jlc291cmNlLmpzIiwidmFyIFRvZG9SZXNvdXJjZSA9IHJlcXVpcmUoXCIuL3RvZG9SZXNvdXJjZVwiKTtcclxuXHJcbmNsYXNzIFByb2plY3RSZXNvdXJjZSBleHRlbmRzIFRvZG9SZXNvdXJjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2UpIHtcclxuICAgICAgICBzdXBlcigkcmVzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdChhY3Rpb25OYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL2FwaS10ZXN0LXRhc2suZGVjb2RlYXBwcy5pby9wcm9qZWN0cycsXHJcbiAgICAgICAgICAgICRyZXNvdXJjZSA9IHRoaXMuJHJlc291cmNlLFxyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICdmZXRjaCcgJiYgb3B0aW9ucy5zZXNzaW9uICYmIG9wdGlvbnMucHJvamVjdF9pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2Vzc2lvbicgOiBvcHRpb25zLnNlc3Npb25cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWV0aG9kID0ge1xyXG4gICAgICAgICAgICAgICAgJ2dldCcgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICRyZXNvdXJjZSh1cmwsIG9wdGlvbnMsIG1ldGhvZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAnZmV0Y2gnICYmIG9wdGlvbnMuc2Vzc2lvbiAmJiBvcHRpb25zLnByb2plY3RfaWQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICdzZXNzaW9uJyAgICA6IG9wdGlvbnMuc2Vzc2lvbixcclxuICAgICAgICAgICAgICAgICdwcm9qZWN0X2lkJyA6IG9wdGlvbnMucHJvamVjdF9pZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnL3Byb2plY3QnO1xyXG4gICAgICAgICAgICBtZXRob2QgPSB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJHJlc291cmNlKHVybCwgb3B0aW9ucywgbWV0aG9kKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICcvcHJvamVjdCc7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IHtcclxuICAgICAgICAgICAgICAgICdzYXZlJyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J1BPU1QnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICRyZXNvdXJjZSh1cmwsIG9wdGlvbnMsIG1ldGhvZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnL3Byb2plY3QnO1xyXG4gICAgICAgICAgICBtZXRob2QgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2F2ZScgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXN1bHQgPSAkcmVzb3VyY2UodXJsLCBvcHRpb25zLCBtZXRob2QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ2RlbGV0ZScgJiYgb3B0aW9ucy5zZXNzaW9uICYmIG9wdGlvbnMucHJvamVjdF9pZCkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Nlc3Npb24nIDogb3B0aW9ucy5zZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgJ3Byb2plY3RfaWQnIDogb3B0aW9ucy5wcm9qZWN0X2lkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICcvcHJvamVjdCc7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IHtcclxuICAgICAgICAgICAgICAgICdkZWxldGUnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidERUxFVEUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICRyZXNvdXJjZSh1cmwsIG9wdGlvbnMsIG1ldGhvZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb2plY3RzIGFjY2Vzcy4gTm90IGxlZ2FsIHJlcXVlc3Qgb3B0aW9ucy5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICh0b2RvTW9kdWxlKSA9PiB7XHJcbiAgICB0b2RvTW9kdWxlLmZhY3RvcnkoJyRwcm9qZWN0UmVzb3VyY2UnLCBbJyRyZXNvdXJjZScsIGZ1bmN0aW9uICgkcmVzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb2plY3RSZXNvdXJjZSgkcmVzb3VyY2UpO1xyXG4gICAgfV0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlL3Byb2plY3QuanMiLCJ2YXIgVG9kb1Jlc291cmNlID0gcmVxdWlyZShcIi4vdG9kb1Jlc291cmNlXCIpO1xyXG5cclxuY2xhc3MgVGFza1Jlc291cmNlIGV4dGVuZHMgVG9kb1Jlc291cmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xyXG4gICAgICAgIHN1cGVyKCRyZXNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0IChhY3Rpb25OYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL2FwaS10ZXN0LXRhc2suZGVjb2RlYXBwcy5pby90YXNrcycsXHJcbiAgICAgICAgICAgICRyZXNvdXJjZSA9IHRoaXMuJHJlc291cmNlLFxyXG4gICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgIHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICdmZXRjaCcgJiZcclxuICAgICAgICAgICAgb3B0aW9ucy5zZXNzaW9uICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMucHJvamVjdF9pZCAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLnBhZ2luZ19zaXplICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMucGFnaW5nX29mZnNldCkge1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb24gICAgICAgICAgICA6IG9wdGlvbnMuc2Vzc2lvbixcclxuICAgICAgICAgICAgICAgIHByb2plY3RfaWQgICAgICAgICA6IG9wdGlvbnMucHJvamVjdF9pZCxcclxuICAgICAgICAgICAgICAgIHBhZ2luZ19zaXplICAgICAgICA6IG9wdGlvbnMucGFnaW5nX3NpemUsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmdfb2Zmc2V0ICAgICAgOiBvcHRpb25zLnBhZ2luZ19vZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb25fa2V5d29yZHMgOiBvcHRpb25zLmNvbmRpdGlvbl9rZXl3b3JkcyB8fCAnJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBtZXRob2QgPSB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJHJlc291cmNlKHVybCwgb3B0aW9ucywgbWV0aG9kKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICdmZXRjaCcgJiZcclxuICAgICAgICAgICAgb3B0aW9ucy50YXNrX2lkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAndGFza19pZCcgOiBvcHRpb25zWyd0YXNrX2lkJ11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdXJsICAgICA9IHVybCArICcvdGFzayc7XHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JyA6IHttZXRob2Q6J0dFVCd9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCAgPSAkcmVzb3VyY2UodXJsLCBvcHRpb25zLCBtZXRob2QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICB1cmwgICAgID0gdXJsICsgJy90YXNrJztcclxuICAgICAgICAgICAgbWV0aG9kICA9IHtcclxuICAgICAgICAgICAgICAgICdzYXZlJyA6IHttZXRob2QgOiAnUE9TVCd9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCAgPSAkcmVzb3VyY2UodXJsLCBvcHRpb25zLCBtZXRob2QpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ3VwZGF0ZScgJiZcclxuICAgICAgICAgICAgb3B0aW9ucy5zZXNzaW9uICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuVGFzayAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLlRhc2suaWQgJiZcclxuICAgICAgICAgICAgb3B0aW9ucy5UYXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2Vzc2lvbicgOiBvcHRpb25zLnNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAnVGFzaycgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyA6IG9wdGlvbnMuVGFzay5pZCxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnIDogb3B0aW9ucy5UYXNrLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbicgOiBvcHRpb25zLlRhc2suZGVzY3JpcHRpb24gfHwgJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdXJsICAgICA9IHVybCArICcvdGFzayc7XHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2F2ZScgOiB7bWV0aG9kIDogJ1BPU1QnfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXN1bHQgID0gJHJlc291cmNlKHVybCwgb3B0aW9ucywgbWV0aG9kKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICdkZWxldGUnICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLnRhc2tfaWQpIHtcclxuICAgICAgICAgICAgdXJsICAgICA9IHVybCArICcvdGFzayc7XHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSB7XHJcbiAgICAgICAgICAgICAgICAnZGVsZXRlJyA6IHttZXRob2QgOiAnREVMRVRFJ31cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ICA9ICRyZXNvdXJjZSh1cmwsIG9wdGlvbnMsIG1ldGhvZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAnY29tcGxldGUnICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Vzc2lvbiAmJlxyXG4gICAgICAgICAgICBvcHRpb25zLlRhc2sgJiZcclxuICAgICAgICAgICAgb3B0aW9ucy5UYXNrLmlkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2Vzc2lvbicgOiBvcHRpb25zLnNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAnVGFzaycgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyA6IG9wdGlvbnMuVGFzay5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB1cmwgICAgID0gdXJsICsgJy90YXNrL2NvbXBsaXRlJzsgLy8gY29tcGxpdGUg4oCUINGN0YLQviDQvdC1INC+0YjQuNCx0LrQsCwg0YLQsNC60L7QuSDRgdC10YDQstC40YEuXHJcbiAgICAgICAgICAgIG1ldGhvZCAgPSB7XHJcbiAgICAgICAgICAgICAgICAnc2F2ZScgOiB7bWV0aG9kIDogJ1BPU1QnfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXN1bHQgID0gJHJlc291cmNlKHVybCwgb3B0aW9ucywgbWV0aG9kKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGFza3MgYWNjZXNzLiBOb3QgbGVnYWwgcmVxdWVzdCBvcHRpb25zLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKHRvZG9Nb2R1bGUpID0+IHtcclxuICAgIHRvZG9Nb2R1bGUuZmFjdG9yeSgnJHRhc2tSZXNvdXJjZScsIFsnJHJlc291cmNlJywgZnVuY3Rpb24gKCRyZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFza1Jlc291cmNlKCRyZXNvdXJjZSk7XHJcbiAgICB9XSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2UvdGFzay5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsL2luZGV4Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoYXBwbGljYXRpb25Nb2R1bGUpID0+IHtcclxuICAgIGFwcGxpY2F0aW9uTW9kdWxlLmNvbmZpZyhbXHJcbiAgICAgICAgJyRtZFRoZW1pbmdQcm92aWRlcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRtZFRoZW1pbmdQcm92aWRlcikge1xyXG4gICAgICAgICAgICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2dyZXknKTtcclxuICAgICAgICB9XSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby5jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IChhcHBsaWNhdGlvbk1vZHVsZSkgPT4ge1xyXG4gICAgdmFyIGN0cmwsXHJcbiAgICAgICAgY29tcG9uZW50O1xyXG5cclxuY3RybCA9IFsnJHNjb3BlJywgJyRhY2NvdW50UmVzb3VyY2UnLCAnJHByb2plY3RSZXNvdXJjZScsICckdGFza1Jlc291cmNlJywgJyRjb29raWVzJywgJyRtZFNpZGVuYXYnLFxyXG5mdW5jdGlvbiAoJHNjb3BlLCAkYWNjb3VudFJlc291cmNlLCAkcHJvamVjdFJlc291cmNlLCAkdGFza1Jlc291cmNlLCAkY29va2llcywgJG1kU2lkZW5hdikge1xyXG4gICAgdmFyIHNlbGYgICAgICAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgc2Vzc2lvbiAgICAgICAgICAgID0gJGNvb2tpZXMuZ2V0KCdzZXNzaW9uJyksXHJcbiAgICAgICAgc2Vzc2lvbkdldFRyaWVzICAgID0gMCxcclxuICAgICAgICBzZXNzaW9uR2V0TWF4ICAgICAgPSA1LFxyXG4gICAgICAgIGxvYWRlck1vZGlmaWNhdG9ycyA9IHtcclxuICAgICAgICAgICAgJ3Nob3dlZCcgOiAncGFnZS1jb3Zlcl9zaG93ZWQnLFxyXG4gICAgICAgICAgICAnaGlkZGVuJyA6ICdwYWdlLWNvdmVyX2hpZGRlbicsXHJcbiAgICAgICAgICAgICdoaWRpbmcnIDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRlclRpbWVvdXQgPSAxMDAwO1xyXG5cclxuICAgIC8vINCf0YDQvtGB0LDRh9C40LLQsNGO0YnQuNC10YHRjyDQt9C90LDRh9C10L3QuNGPLlxyXG4gICAgJHNjb3BlLmFjY291bnQgICA9IHt9OyAgLy8g0JTQuNGA0LXQutGC0LjQstCwINCy0YvQstC+0LTQsCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQv9GA0L7RhNCw0LnQu9C1LlxyXG4gICAgdGhpcy5wcm9qZWN0cyAgICA9IFtdOyAgLy8g0KHQv9C40YHQvtC6INC/0YDQvtC10LrRgtC+0LIuXHJcblxyXG4gICAgdGhpcy5lZGl0aW5nUHJvamVjdE5hbWUgPSAnJztcclxuICAgIHRoaXMubmV3UHJvamVjdE5hbWUgPSAnJztcclxuICAgIHRoaXMuc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5mb3JtTmFtZSA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGVUYXNrTmFtZSA9ICcnO1xyXG4gICAgdGhpcy5jcmVhdGVUYXNrRGVzY3JpcHRpb24gPSAnJztcclxuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0SW5kZXggPSAwO1xyXG4gICAgdGhpcy5zZWFyY2hJbnB1dEhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLmxvYWRlck1vZGlmaWNhdG9yID0gbG9hZGVyTW9kaWZpY2F0b3JzWydzaG93ZWQnXTtcclxuXHJcbiAgICB0aGlzLnNlYXJjaFRvZG9CeVF1ZXJ5ID0gZnVuY3Rpb24gKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoUXVlcnkpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0QWRkaW5nUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRBZGRpbmdQcm9qZWN0Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2VsZWN0UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0aGlzLmdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRQcm9qZWN0SW5kZXhdO1xyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICB0aGlzLnJlc2VsZWN0UHJvamVjdCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UHJvamVjdCh0aGlzLnNlbGVjdGVkUHJvamVjdEluZGV4KTtcclxuICAgIH07XHJcbiAgICAqL1xyXG5cclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgY2hlY2tTZXNzaW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFNlc3Npb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRQcm9qZWN0SXRlbSAocHJvamVjdEl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdEl0ZW0uUHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Nlc3Npb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgJGFjY291bnRSZXNvdXJjZS5yZXF1ZXN0KCdzZXNzaW9uJywgeydzZXNzaW9uJyA6IHNlc3Npb259KVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgbG9hZEFwcERhdGEoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgZ2V0U2Vzc2lvbihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIC8vICRhY2NvdW50UmVzb3VyY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRBcHBEYXRhICgpIHtcclxuICAgICAgICB2YXIgcmVxdWVzdENvdW50ICA9IDAsXHJcbiAgICAgICAgICAgIHJlcXVlc3RUYXJnZXQgPSAyO1xyXG5cclxuICAgICAgICAkYWNjb3VudFJlc291cmNlLnJlcXVlc3QoJ2FjY291bnQnLCB7J3Nlc3Npb24nIDogc2Vzc2lvbn0pXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAuJHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuYWNjb3VudCA9IGRhdGEuQWNjb3VudDtcclxuICAgICAgICAgICAgcmVxdWVzdENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICB9LCAkYWNjb3VudFJlc291cmNlLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICAgICAgJHByb2plY3RSZXNvdXJjZS5yZXF1ZXN0KCdmZXRjaCcsIHsnc2Vzc2lvbicgOiBzZXNzaW9ufSlcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5tYXAoZm9ybWF0UHJvamVjdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0sICRwcm9qZWN0UmVzb3VyY2UuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBuZXh0ICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDb3VudCA9PT0gcmVxdWVzdFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbml0aWFsaXplR3VpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNlc3Npb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgJGFjY291bnRSZXNvdXJjZS5yZXF1ZXN0KCdzaWdudXAnLCBudWxsKVxyXG4gICAgICAgICAgICAuc2F2ZSgpXHJcbiAgICAgICAgICAgIC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWNjb3VudFJlc291cmNlLmlzRXJyb3IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICRhY2NvdW50UmVzb3VyY2UuaGFuZGxlRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uID0gZGF0YS5zZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgJGNvb2tpZXMucHV0KCdzZXNzaW9uJywgc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICBjaGVja1Nlc3Npb24oY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25HZXRUcmllcyArPSAxO1xyXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbkdldFRyaWVzIDwgc2Vzc2lvbkdldE1heCkge1xyXG4gICAgICAgICAgICAgICAgZ2V0U2Vzc2lvbihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYWNjb3VudFJlc291cmNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVwbGFjZVByb2plY3QgPSBmdW5jdGlvbiAodGFyZ2V0LCBuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEsIG5ld1Byb2plY3QpO1xyXG4gICAgICAgIHRoaXMucmVzZWxlY3RQcm9qZWN0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZUd1aSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlck1vZGlmaWNhdG9yID0gbG9hZGVyTW9kaWZpY2F0b3JzWydoaWRpbmcnXTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5sb2FkZXJNb2RpZmljYXRvciA9IGxvYWRlck1vZGlmaWNhdG9yc1snaGlkZGVuJ107XHJcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCBsb2FkZXJUaW1lb3V0KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50b2dnbGVTaWRlUGFuZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJG1kU2lkZW5hdignc2lkZS1wYW5lbCcpXHJcbiAgICAgICAgICAgIC50b2dnbGUoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkhJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9wZW5DcmVhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZvcm1OYW1lID0gJ2NyZWF0ZVRhc2snO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU2lkZVBhbmVsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMub3BlbkNyZWF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybU5hbWUgPSAnY3JlYXRlUHJvamVjdCc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlUGFuZWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcGVuRWRpdFByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuRWRpdFByb2plY3RGb3JtIScpO1xyXG4gICAgICAgIHRoaXMuZWRpdGluZ1Byb2plY3ROYW1lID0gdGhpcy5nZXRDdXJyZW50UHJvamVjdCgpLlByb2plY3QudGl0bGU7XHJcbiAgICAgICAgdGhpcy5mb3JtTmFtZSAgICAgICAgICAgPSAnZWRpdFByb2plY3QnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU2lkZVBhbmVsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZm9vVmFsdWUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuYWRkUHJvamVjdFRvTGlzdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZldGNoUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0SWQpIHtcclxuICAgICAgICAkcHJvamVjdFJlc291cmNlLnJlcXVlc3QoJ2ZldGNoJywgeydzZXNzaW9uJyA6IHNlc3Npb24sICdwcm9qZWN0X2lkJyA6IHByb2plY3RJZH0pXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAuJHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgaWRzID0gc2VsZi5wcm9qZWN0cy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5Qcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBpbmRleE9mUHJvamVjdDtcclxuICAgICAgICAgICAgaWYgKCRhY2NvdW50UmVzb3VyY2UuaXNFcnJvcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgJGFjY291bnRSZXNvdXJjZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZGV4T2ZQcm9qZWN0ID0gaWRzLmluZGV4T2YoZGF0YS5Qcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleE9mUHJvamVjdCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcGxhY2VQcm9qZWN0KHNlbGYucHJvamVjdHNbaW5kZXhPZlByb2plY3RdLCBkYXRhLlByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZFByb2plY3RUb0xpc3QoZGF0YS5Qcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICRwcm9qZWN0UmVzb3VyY2UuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVkaXRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50UHJvamVjdCA9IHNlbGYuZ2V0Q3VycmVudFByb2plY3QoKSxcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPSB0aGlzLmVkaXRpbmdQcm9qZWN0TmFtZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNpZGVQYW5lbCgpO1xyXG4gICAgICAgICRwcm9qZWN0UmVzb3VyY2UucmVxdWVzdCgndXBkYXRlJywge30pXHJcbiAgICAgICAgICAgIC5zYXZlKHtcclxuICAgICAgICAgICAgICAgICdzZXNzaW9uJyA6IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAnUHJvamVjdCcgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyAgICA6IHNlbGYuZ2V0Q3VycmVudFByb2plY3QoKS5Qcm9qZWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZScgOiBwcm9qZWN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuJHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoJGFjY291bnRSZXNvdXJjZS5pc0Vycm9yKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAkYWNjb3VudFJlc291cmNlLmhhbmRsZUVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZXBsYWNlUHJvamVjdChjdXJyZW50UHJvamVjdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICdQcm9qZWN0JyA6IGRhdGEuUHJvamVjdFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAkcHJvamVjdFJlc291cmNlLmhhbmRsZUVycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGVOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm9qZWN0TmFtZSA9IHRoaXMubmV3UHJvamVjdE5hbWU7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5ld1Byb2plY3ROYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTaWRlUGFuZWwoKTtcclxuXHJcblxyXG4gICAgICAgICRwcm9qZWN0UmVzb3VyY2UucmVxdWVzdCgnY3JlYXRlJywge30pXHJcbiAgICAgICAgICAgIC5zYXZlKHtcclxuICAgICAgICAgICAgICAgICdzZXNzaW9uJyA6IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAnUHJvamVjdCcgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJyA6IHByb2plY3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICgkYWNjb3VudFJlc291cmNlLmlzRXJyb3IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICRhY2NvdW50UmVzb3VyY2UuaGFuZGxlRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZldGNoUHJvamVjdChkYXRhLlByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgJHByb2plY3RSZXNvdXJjZS5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNyZWF0ZVRhc2tOYW1lICAgICAgICA9IHRoaXMuY3JlYXRlVGFza05hbWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tEZXNjcmlwdGlvbiA9IHRoaXMuY3JlYXRlVGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCAgICAgICAgPSB0aGlzLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4gICAgICAgICR0YXNrUmVzb3VyY2UucmVxdWVzdCgnY3JlYXRlJywge30pXHJcbiAgICAgICAgICAgIC5zYXZlKHtcclxuICAgICAgICAgICAgICAgICdzZXNzaW9uJyA6IHNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAnUHJvamVjdCcgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyA6IGN1cnJlbnRQcm9qZWN0LlByb2plY3QuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnVGFzaycgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJyA6IGNyZWF0ZVRhc2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbicgOiBjcmVhdGVUYXNrRGVzY3JpcHRpb24gfHwgJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCR0YXNrUmVzb3VyY2UuaXNFcnJvcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgJHRhc2tSZXNvdXJjZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmV0Y2hQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LlByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVTaWRlUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICRwcm9qZWN0UmVzb3VyY2UuaGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVsZXRlQ3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZUN1cnJlbnRQcm9qZWN0IScpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICRwcm9qZWN0UmVzb3VyY2UucmVxdWVzdCgnY3JlYXRlJywgeydzZXNzaW9uJyA6IHNlc3Npb24sICdwcm9qZWN0X2lkJyA6IHByb2plY3QuUHJvamVjdC5pZH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlKClcclxuICAgICAgICAgICAgICAgIC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGFjY291bnRSZXNvdXJjZS5pc0Vycm9yKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGFjY291bnRSZXNvdXJjZS5oYW5kbGVFcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9LCAkcHJvamVjdFJlc291cmNlLmhhbmRsZUVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxufV07XHJcblxyXG4gICAgY29tcG9uZW50ID0gYXBwbGljYXRpb25Nb2R1bGUuY29tcG9uZW50KCd0b2RvVmlldycsIHtcclxuICAgICAgICAnY29udHJvbGxlckFzJyA6ICckdG9kbycsXHJcbiAgICAgICAgJ2NvbnRyb2xsZXInICAgOiBjdHJsLFxyXG4gICAgICAgICd0ZW1wbGF0ZScgICAgIDogcmVxdWlyZSgnLi90b2RvLmNvbXBvbmVudC50ZW1wbGF0ZS5odG1sJylcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9tb3JlTWVudS5kaXJlY3RpdmUuanMnKShjb21wb25lbnQpO1xyXG4gICAgcmVxdWlyZSgnLi9kaXJlY3RpdmVzL3Byb2ZpbGVJbmZvLmRpcmVjdGl2ZS5qcycpKGNvbXBvbmVudCk7XHJcbiAgICByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvbGVmdEZvb3Rlci5kaXJlY3RpdmUuanMnKShjb21wb25lbnQpO1xyXG4gICAgcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2ZvY3VzT25Db25kaXRpb24uanMnKShjb21wb25lbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby90b2RvLmNvbXBvbmVudC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50LWJveC1oYXRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWJveFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3b3Jrc3BhY2VcXFwiPiA8IS0tIHdvcmtzcGFjZV9uby10b2RvIC0tPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndvcmtzcGFjZS1pbm5lclxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiIGZsZXg+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvb2xiYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9vbGJhcl9faW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWFyY2gtdmlldyBvbi1zZWFyY2gtcXVlcnktY2hhbmdlPVxcXCIkdG9kby5zZWFyY2hUb2RvQnlRdWVyeShzZWFyY2hRdWVyeSlcXFwiPjwvc2VhcmNoLXZpZXc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vcmUtbWVudT48L21vcmUtbWVudT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid29ya3NwYWNlLWJvYXJkXFxcIiBmbGV4PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cXFwidG9kby1saXN0X19pdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgY2xhc3M9XFxcIm1kLW5vLXN0aWNreSB0b2RvLWxpc3RfX3N1YmhlYWRlclxcXCI+VG9kYXk8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgQ3JlYXRlIGEgY29tcGFueSBDcmVhdGUgYSBjb21wYW55IENyZWF0ZSBhIGNvbXBhbnkgQ3JlYXRlIGEgY29tcGFueSBDcmVhdGUgYSBjb21wYW55IENyZWF0ZSBhIGNvbXBhbnkgQ3JlYXRlIGEgY29tcGFueVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPlN0b3JpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgMlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtc3ViaGVhZGVyIGNsYXNzPVxcXCJtZC1uby1zdGlja3kgdG9kby1saXN0X19zdWJoZWFkZXJcXFwiPkdvb2RpZXM8L21kLXN1YmhlYWRlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgM1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cXFwidG9kby1saXN0X19kaXZpZGVyXFxcIj48L21kLWRpdmlkZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVxcXCJtZC0xLWxpbmUgdG9kby1saXN0X19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2NvbXBsZXRlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1saXN0X19jb21wbGV0ZS1jaXJjbGVcXFwiIG5nLWNsaWNrPVxcXCJudWxsXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b2RvLWxpc3RfX2l0ZW0tY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbXBhbnkgNFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tdG9kb1xcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnM4LXRvZG8tbGlzdCBuby10b2RvX19jYXB0aW9uLWljb25cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5vLXRvZG9fX2NhcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXZlIGEgZ29vZCBkYXlcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cXFwibnVsbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1kLWZhYiBib3R0b20tcmlnaHQtYnV0dG9uIGFkZC10b2RvLWJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiQWRkIHRvZG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25zOC1wbHVzXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicmlnaHQtY29sXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaWdodC1jb2wtaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cHJvZmlsZS1pbmZvPjwvcHJvZmlsZS1pbmZvPlxcclxcbiAgICAgICAgICAgICAgICA8cHJvamVjdC1saXN0IHByb2plY3RzPVxcXCIkdG9kby5wcm9qZWN0c1xcXCIgb24tc3RhcnQtYWRkaW5nLXByb2plY3Q9XFxcIiR0b2RvLnN0YXJ0QWRkaW5nUHJvamVjdCgpXFxcIiBvbi1zZWxlY3QtcHJvamVjdD1cXFwiJHRvZG8uc2VsZWN0UHJvamVjdChwcm9qZWN0KVxcXCI+PC9wcm9qZWN0LWxpc3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxtZC1zaWRlbmF2XFxyXFxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0IDogJ2NyZWF0ZS1wcm9qZWN0LWZvcm0tc2hvd24nLFxcclxcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2plY3QgICA6ICdlZGl0LXByb2plY3QtZm9ybS1zaG93bicsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrICAgIDogJ2NyZWF0ZS10YXNrLWZvcm0tc2hvd24nXFxyXFxuICAgICAgICAgICAgICAgIH1bJHRvZG8uZm9ybU5hbWVdXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWQtc2lkZW5hdi1yaWdodCBzaWRlLXBhbmVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBtZC1jb21wb25lbnQtaWQ9XFxcInNpZGUtcGFuZWxcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNyZWF0ZS1wcm9qZWN0LWZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtdG9vbGJhciBjbGFzcz1cXFwic2lkZS1wYW5lbF9fdG9vbGJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlLXBhbmVsX19jbG9zZS1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gbmctY2xpY2s9XFxcIiR0b2RvLnRvZ2dsZVNpZGVQYW5lbCgpXFxcIiBjbGFzcz1cXFwibWQtZmFiIHNpZGUtcGFuZWxfX2Nsb3NlXFxcIiBhcmlhLWxhYmVsPVxcXCJDbG9zZSBzaWRlIHBhbmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZS1wYW5lbF9fY2xvc2UtaWNvbiBpY29uczgtZGVsZXRlLTJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkVzYzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm1kLXRvb2xiYXItdG9vbHMgc2lkZS1wYW5lbF9faGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgbmV3IHByb2plY3RcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDwvbWQtdG9vbGJhcj5cXHJcXG4gICAgICAgICAgICAgICAgPG1kLWNvbnRlbnQgY2xhc3M9XFxcInNpZGUtcGFuZWxfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZS1wYW5lbF9fY29udGVudC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cXFwic2lkZS1wYW5lbF9faW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvamVjdCBuYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkdG9kby5uZXdQcm9qZWN0TmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC1jb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIG5nLWNsaWNrPVxcXCIkdG9kby5jcmVhdGVOZXdQcm9qZWN0KClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1kLWZhYiBib3R0b20tcmlnaHQtYnV0dG9uIHNpZGUtcGFuZWxfX2NvbmZpcm1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiQ29uZmlybSBlZGl0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25zOC1jaGVja21hcmtcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlZGl0LXByb2plY3QtZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxtZC10b29sYmFyIGNsYXNzPVxcXCJzaWRlLXBhbmVsX190b29sYmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGUtcGFuZWxfX2Nsb3NlLWJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cXFwiJHRvZG8udG9nZ2xlU2lkZVBhbmVsKClcXFwiIGNsYXNzPVxcXCJtZC1mYWIgc2lkZS1wYW5lbF9fY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlIHNpZGUgcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlLXBhbmVsX19jbG9zZS1pY29uIGljb25zOC1kZWxldGUtMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RXNjPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibWQtdG9vbGJhci10b29scyBzaWRlLXBhbmVsX19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgdGFza1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC10b29sYmFyPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtY29udGVudCBjbGFzcz1cXFwic2lkZS1wYW5lbF9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlLXBhbmVsX19jb250ZW50LWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVxcXCJzaWRlLXBhbmVsX19pbnB1dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UYXNrIG5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiR0b2RvLmVkaXRpbmdQcm9qZWN0TmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC1jb250ZW50PlxcclxcbiAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIG5nLWNsaWNrPVxcXCIkdG9kby5lZGl0UHJvamVjdCgpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtZC1mYWIgYm90dG9tLXJpZ2h0LWJ1dHRvbiBzaWRlLXBhbmVsX19jb25maXJtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkNvbmZpcm0gZWRpdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uczgtY2hlY2ttYXJrXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3JlYXRlLXRhc2stZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxtZC10b29sYmFyIGNsYXNzPVxcXCJzaWRlLXBhbmVsX190b29sYmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGUtcGFuZWxfX2Nsb3NlLWJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cXFwiJHRvZG8udG9nZ2xlU2lkZVBhbmVsKClcXFwiIGNsYXNzPVxcXCJtZC1mYWIgc2lkZS1wYW5lbF9fY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlIHNpZGUgcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlLXBhbmVsX19jbG9zZS1pY29uIGljb25zOC1kZWxldGUtMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RXNjPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibWQtdG9vbGJhci10b29scyBzaWRlLXBhbmVsX19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBuZXcgdGFza1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC10b29sYmFyPlxcclxcbiAgICAgICAgICAgICAgICA8bWQtY29udGVudCBjbGFzcz1cXFwic2lkZS1wYW5lbF9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaWRlLXBhbmVsX19jb250ZW50LWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyIGNsYXNzPVxcXCJzaWRlLXBhbmVsX19pbnB1dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UYXNrIG5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiR0b2RvLmNyZWF0ZVRhc2tOYW1lXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBjbGFzcz1cXFwic2lkZS1wYW5lbF9faW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiR0b2RvLmNyZWF0ZVRhc2tEZXNjcmlwdGlvblxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvbWQtY29udGVudD5cXHJcXG4gICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cXFwiJHRvZG8uY3JlYXRlTmV3VGFzaygpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtZC1mYWIgYm90dG9tLXJpZ2h0LWJ1dHRvbiBzaWRlLXBhbmVsX19jb25maXJtXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkNvbmZpcm0gZWRpdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uczgtY2hlY2ttYXJrXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8L21kLXNpZGVuYXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgbmctY2xhc3M9XFxcIiR0b2RvLmxvYWRlck1vZGlmaWNhdG9yXFxcIiBjbGFzcz1cXFwicGFnZS1jb3Zlcl9zaG93ZWQgcGFnZS1jb3ZlclxcXCIgbGF5b3V0PVxcXCJyb3dcXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIGNlbnRlclxcXCI+XFxyXFxuICAgIDxtZC1wcm9ncmVzcy1jaXJjdWxhclxcclxcbiAgICAgICAgICAgIG1kLWRpYW1ldGVyPVxcXCI2MFxcXCJcXHJcXG4gICAgICAgICAgICBsYXlvdXQtYWxpZ249XFxcImNlbnRlclxcXCJcXHJcXG4gICAgICAgICAgICBtZC1tb2RlPVxcXCJpbmRldGVybWluYXRlXFxcIj5cXHJcXG4gICAgPC9tZC1wcm9ncmVzcy1jaXJjdWxhcj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kby90b2RvLmNvbXBvbmVudC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICh0b2RvQ29tcG9uZW50KSA9PiB7XHJcbiAgICB0b2RvQ29tcG9uZW50LmRpcmVjdGl2ZSgnbW9yZU1lbnUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlciA6IHRydWUsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlIDogcmVxdWlyZSgnLi9tb3JlTWVudS5kaXJlY3RpdmUudGVtcGxhdGUuaHRtbCcpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8vZGlyZWN0aXZlcy9tb3JlTWVudS5kaXJlY3RpdmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG1kLW1lbnU+XFxyXFxuICAgIDxtZC1idXR0b24gY2xhc3M9XFxcIm1kLWZhYiB0b29sYmFyX19tb3JlXFxcIiBhcmlhLWxhYmVsPVxcXCJNb3JlXFxcIiBuZy1jbGljaz1cXFwiJG1kT3Blbk1lbnUoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uczgtbW9yZVxcXCI+PC9kaXY+XFxyXFxuICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICA8bWQtbWVudS1jb250ZW50IGNsYXNzPVxcXCJ0b29sYmFyX19tb3JlLW1lbnVcXFwiIHdpZHRoPVxcXCIxXFxcIj5cXHJcXG4gICAgICAgIDxtZC1tZW51LWl0ZW0gY2xhc3M9XFxcInRvb2xiYXJfX21vcmUtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cXFwiJHRvZG8ub3BlbkVkaXRQcm9qZWN0Rm9ybSgpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiRWRpdFxcXCIgY2xhc3M9XFxcIm1kLWZhYiBtZC1yYWlzZWQgbWQtbWluaSB0b29sYmFyX19tb3JlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnM4LWVkaXRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgPC9tZC1tZW51LWl0ZW0+XFxyXFxuICAgICAgICA8bWQtbWVudS1pdGVtIGNsYXNzPVxcXCJ0b29sYmFyX19tb3JlLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgIDxtZC1idXR0b24gbmctY2xpY2s9XFxcIiR0b2RvLmRlbGV0ZUN1cnJlbnRQcm9qZWN0KClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJEZWxldGVcXFwiIGNsYXNzPVxcXCJtZC1mYWIgbWQtcmFpc2VkIG1kLW1pbmkgdG9vbGJhcl9fbW9yZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25zOC1kZWxldGVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxcclxcbiAgICAgICAgPC9tZC1tZW51LWl0ZW0+XFxyXFxuICAgIDwvbWQtbWVudS1jb250ZW50PlxcclxcbjwvbWQtbWVudT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kby9kaXJlY3RpdmVzL21vcmVNZW51LmRpcmVjdGl2ZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICh0b2RvQ29tcG9uZW50KSA9PiB7XHJcbiAgICB0b2RvQ29tcG9uZW50LmRpcmVjdGl2ZSgncHJvZmlsZUluZm8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgOiByZXF1aXJlKCcuL3Byb2ZpbGVJbmZvLmRpcmVjdGl2ZS50ZW1wbGF0ZS5odG1sJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby9kaXJlY3RpdmVzL3Byb2ZpbGVJbmZvLmRpcmVjdGl2ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9fX2F2YXRhclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9fX2F2YXRhci1jaXJjbGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGUtaW5mb19fYXZhdGFyLWltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgYWx0PVxcXCJ7e2FjY291bnQudXNlcm5hbWV9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgIG5nLXNyYz1cXFwie3thY2NvdW50LmltYWdlX3VybH19XFxcIiAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9fX3VzZXItbmFtZVxcXCI+XFxyXFxuICAgICAgICB7e2FjY291bnQudXNlcm5hbWV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9kby9kaXJlY3RpdmVzL3Byb2ZpbGVJbmZvLmRpcmVjdGl2ZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICh0b2RvQ29tcG9uZW50KSA9PiB7XHJcbiAgICB0b2RvQ29tcG9uZW50LmRpcmVjdGl2ZSgnbGVmdEZvb3RlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA6IHJlcXVpcmUoJy4vbGVmdEZvb3Rlci5kaXJlY3RpdmUudGVtcGxhdGUuaHRtbCcpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8vZGlyZWN0aXZlcy9sZWZ0Rm9vdGVyLmRpcmVjdGl2ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyaWdodC1jb2wtZm9vdGVyLWlubmVyXFxcIj5cXHJcXG4gICAgTG9nIG91dFxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvL2RpcmVjdGl2ZXMvbGVmdEZvb3Rlci5kaXJlY3RpdmUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gKHRvZG9Db21wb25lbnQpID0+IHtcclxuICAgIHRvZG9Db21wb25lbnQuZGlyZWN0aXZlKCdmb2N1c09uQ29uZGl0aW9uJywgWyckdGltZW91dCcsXHJcbiAgICAgICAgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHZhciBjaGVja0RpcmVjdGl2ZVByZXJlcXVpc2l0ZXMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXR0cnMuZm9jdXNPbkNvbmRpdGlvbiAmJiBhdHRycy5mb2N1c09uQ29uZGl0aW9uICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJGb2N1c09uQ29uZGl0aW9uIG1pc3NpbmcgYXR0cmlidXRlIHRvIGV2YWx1YXRlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0RpcmVjdGl2ZVByZXJlcXVpc2l0ZXMoYXR0cnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuZm9jdXNPbkNvbmRpdGlvbiwgZnVuY3Rpb24gKGN1cnJlbnRWYWx1ZSwgbGFzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRWYWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICBdKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvL2RpcmVjdGl2ZXMvZm9jdXNPbkNvbmRpdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gKGFwcGxpY2F0aW9uTW9kdWxlKSA9PiB7XHJcbiAgICB2YXIgY3RybCxcclxuICAgICAgICBjb21wb25lbnQ7XHJcblxyXG4gICAgY3RybCA9IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFkZFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdGFydEFkZGluZ1Byb2plY3QoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RQcm9qZWN0KHtcclxuICAgICAgICAgICAgICAgICdwcm9qZWN0JyA6IHByb2plY3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaFByb2plY3RzID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbGl6ZUxpc3QgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQcm9qZWN0KHRoaXMucHJvamVjdHNbMF0pO1xyXG4gICAgICAgICAgICB9KS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5lcXVhbHMob2xkVmFsdWUsIG5ld1ZhbHVlKSAmJiBuZXdWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVMaXN0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUubGVuZ3RoID09PSAwICYmIG5ld1ZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaENvbGxlY3Rpb24oJyRjdHJsLnByb2plY3RzJywgdGhpcy53YXRjaFByb2plY3RzLmJpbmQodGhpcykpO1xyXG4gICAgfV07XHJcblxyXG4gICAgY29tcG9uZW50ID0gYXBwbGljYXRpb25Nb2R1bGUuY29tcG9uZW50KCdwcm9qZWN0TGlzdCcsIHtcclxuICAgICAgICAnYmluZGluZ3MnIDoge1xyXG4gICAgICAgICAgICdwcm9qZWN0cycgICAgICAgICAgICAgOiAnPCcsXHJcbiAgICAgICAgICAgJ29uU3RhcnRBZGRpbmdQcm9qZWN0JyA6ICcmJyxcclxuICAgICAgICAgICAnb25TZWxlY3RQcm9qZWN0JyAgICAgIDogJyYnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY29udHJvbGxlcicgOiBjdHJsLFxyXG4gICAgICAgICd0ZW1wbGF0ZScgICA6IHJlcXVpcmUoJy4vcHJvamVjdExpc3QudGVtcGxhdGUuaHRtbCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8vcHJvamVjdExpc3QvcHJvamVjdExpc3QuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInByb2plY3RzLWxpc3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0cy1saXN0X19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHMtbGlzdF9fY2FwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgUHJvamVjdHNcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cXFwibWQtZmFiIHByb2plY3RzLWxpc3RfX2FkZC1idXR0b25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkFkZCBwcm9qZWN0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwuYWRkUHJvamVjdCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uczgtcGx1c1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L21kLWJ1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3RzLWxpc3RfX2l0ZW1zLWJveFxcXCIgbGF5b3V0PVxcXCJjb2x1bW5cXFwiIGxheW91dC1hbGlnbj1cXFwiY2VudGVyIHN0YXJ0XFxcIj5cXHJcXG4gICAgICAgIDxtZC1saXN0IGNsYXNzPVxcXCJwcm9qZWN0cy1saXN0X19pdGVtc1xcXCIgZmxleD1cXFwiODVcXFwiPlxcclxcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gbmctcmVwZWF0PVxcXCIkcHJvamVjdCBpbiAkY3RybC5wcm9qZWN0c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5nLWNsYXNzPVxcXCIkcHJvamVjdCA9PT0gJGN0cmwuc2VsZWN0ZWRQcm9qZWN0ID8gJ3Byb2plY3RzLWxpc3RfX2l0ZW1fc2VsZWN0ZWQnIDogJydcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWQtMS1saW5lIHByb2plY3RzLWxpc3RfX2l0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwuc2VsZWN0UHJvamVjdCgkcHJvamVjdClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWlkPVxcXCJ7eyRwcm9qZWN0LmlkfX1cXFwiPnt7JHByb2plY3QudGl0bGV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2plY3RzLWxpc3RfX2l0ZW0tdGFzay1jb3VudFxcXCI+e3skcHJvamVjdC50YXNrX2NvdW50fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICA8bGVmdC1mb290ZXIgY2xhc3M9XFxcInJpZ2h0LWNvbC1mb290ZXJcXFwiIGZsZXg+PC9sZWZ0LWZvb3Rlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RvZG8vcHJvamVjdExpc3QvcHJvamVjdExpc3QudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoYXBwbGljYXRpb25Nb2R1bGUpID0+IHtcclxuICAgIHZhciBjdHJsLFxyXG4gICAgICAgIGNvbXBvbmVudDtcclxuXHJcbiAgICBjdHJsID0gWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaElucHV0SGlkZGVuICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hJbnB1dEhpZGRlbiA9ICF0aGlzLmlzU2VhcmNoSW5wdXRIaWRkZW47XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS4kd2F0Y2goXCIkY3RybC5zZWFyY2hRdWVyeVwiLCAoZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2VhcmNoUXVlcnlDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgJ3NlYXJjaFF1ZXJ5JyA6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLmJpbmQodGhpcykpO1xyXG4gICAgfV07XHJcblxyXG4gICAgY29tcG9uZW50ID0gYXBwbGljYXRpb25Nb2R1bGUuY29tcG9uZW50KCdzZWFyY2hWaWV3Jywge1xyXG4gICAgICAgICdiaW5kaW5ncycgOiB7XHJcbiAgICAgICAgICAgICdvblNlYXJjaFF1ZXJ5Q2hhbmdlJyA6ICcmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NvbnRyb2xsZXInIDogY3RybCxcclxuICAgICAgICAndGVtcGxhdGUnIDogcmVxdWlyZSgnLi9zZWFyY2hWaWV3LmNvbXBvbmVudC50ZW1wbGF0ZS5odG1sJylcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby9zZWFyY2hWaWV3L3NlYXJjaFZpZXcuY29tcG9uZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtZC1idXR0b24gY2xhc3M9XFxcIm1kLWZhYiB0b29sYmFyX19zZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJTZWFyY2ggdG9kb1xcXCJcXHJcXG4gICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5zZWFyY2hDbGljaygpXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaWNvbnM4LXNlYXJjaFxcXCI+PC9kaXY+XFxyXFxuPC9tZC1idXR0b24+XFxyXFxuPG1kLWlucHV0LWNvbnRhaW5lciBuZy1jbGFzcz1cXFwiJGN0cmwuaXNTZWFyY2hJbnB1dEhpZGRlbiAmJiAndG9vbGJhcl9fc2VhcmNoLWlucHV0X2hpZGRlbidcXFwiIGNsYXNzPVxcXCJ0b29sYmFyX19zZWFyY2gtaW5wdXRcXFwiPlxcclxcbiAgICA8bGFiZWw+PC9sYWJlbD5cXHJcXG4gICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5zZWFyY2hRdWVyeVxcXCJcXHJcXG4gICAgICAgICAgIGZvY3VzLW9uLWNvbmRpdGlvbj1cXFwiISRjdHJsLmlzU2VhcmNoSW5wdXRIaWRkZW5cXFwiPlxcclxcbjwvbWQtaW5wdXQtY29udGFpbmVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90b2RvL3NlYXJjaFZpZXcvc2VhcmNoVmlldy5jb21wb25lbnQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==