module.exports = (applicationModule) => {
    var ctrl,
        component;

ctrl = ['$scope', '$accountResource', '$projectResource', '$taskResource', '$cookies', '$mdSidenav', '$timeout', 'dateFormatFilter',
function ($scope, $accountResource, $projectResource, $taskResource, $cookies, $mdSidenav, $timeout, dateFormatFilter) {
    var self               = this,
        taskPagingSize     = 10,
        taskPageNumber     = null,
        totalTaskCount     = null,
        session            = $cookies.get('session'),
        sessionGetTries    = 0,
        sessionGetMax      = 5,
        loaderModificators = {
            'showed' : 'page-cover_showed',
            'hidden' : 'page-cover_hidden',
            'hiding' : ''
        },
        loaderTimeout = 1000,
        queryTimeoutDescriptor = null;

    // Просачивающиеся значения.
    $scope.account       = {};   // Директива вывода информации о профайле.
    this.projects        = [];   // Список проектов.
    this.selectedProject = null; // Выбранный проект. Подсачивается в компонент редактирования проекта.
    this.tasks           = [];   // Задачи текущего проекта.
    this.selectedTask    = null;

    this.loaderModificator = loaderModificators['showed'];
    this.currentTaskFetchPromise = null;
    this.lastSearchQuery = '';

    this.searchTodoByQuery = function (searchQuery) {
        this.lastSearchQuery   = searchQuery;
        if (!queryTimeoutDescriptor) {
            queryTimeoutDescriptor = setTimeout(() => {
                queryTimeoutDescriptor = null;
                this.loadTaskPage(1);
            }, 1000);
        }
    };

    this.nextTaskPage = function () {
        this.loadTaskPage(taskPageNumber + 1);
    };

    this.loadTaskPage = function (pageNumber, project) {
        var promise,
            isReplaceTasks = false,
            searchQuery = this.lastSearchQuery;
        project = project || this.selectedProject;
        // Делаем запрос только если не все загрузили.
        if (project && (pageNumber === 1 ||
                (totalTaskCount !== null ? (pageNumber - 1) * taskPagingSize < totalTaskCount : true))) {

            taskPageNumber = pageNumber;
            if (pageNumber === 1) {
                isReplaceTasks = true;
            }

            // Подгружаем список тасков.
            this.currentTaskFetchPromise = promise = $taskResource.request('fetch', {
                    'session'            : session,
                    'project_id'         : project.id,
                    'paging_size'        : taskPagingSize,
                    'paging_offset'      : taskPagingSize * (taskPageNumber - 1),
                    'condition_keywords' : searchQuery
                })
                .get()
                .$promise;
            this.currentTaskFetchPromise.then((response) => {
                var tasks;
                if (searchQuery === this.lastSearchQuery) {
                    tasks = response.tasks.map(function (task) {
                        return task.Task;
                    });
                    totalTaskCount = response['total_count'];
                    tasks = dateFormatFilter(tasks, 'created_at');
                    if (isReplaceTasks) {
                        this.tasks = tasks;
                    } else {
                        this.tasks = this.tasks.concat(tasks);
                    }
                }
            }, $taskResource.handleError);
        }
    };

    // Project list
    this.projectChange = function (project) {
        this.loadTaskPage(1, project);
    };

    this.selectProject = function (project) {
        var selectedProject = this.selectedProject,
            isChanged;
        if ((!selectedProject && project) || (project && selectedProject && (project.id !== selectedProject.id))) {
            isChanged = true;
        }
        this.selectedProject = project;
        if (isChanged) {
            this.projectChange(project);
        }
    };

    // End project list



    // Project create form.

    this.isCreateProjectFormDisplayed = false; // Показана ли форма "Создать проект".

    this.openCreateProjectForm = function () {
        this.hideAllContentOfSidePanel();
        this.isCreateProjectFormDisplayed = true;
        this.openSidePanel();
    };

    this.createProject = function (formData) {
        this.closeSidePanel();
        $projectResource.request('create', {})
            .save({
                'session' : session,
                'Project' : {
                    'title' : formData.title
                }
            })
            .$promise.then(function (response) {
                self.fetchProject(response.Project.id);
            }, $projectResource.handleError);

    };

    this.fetchProject = function (projectId) {
        $projectResource.request('fetch', {'session' : session, 'project_id' : projectId})
            .get()
            .$promise.then((data) => {
                var ids = this.projects.map((item) => {
                        return item.id;
                    }),
                    indexOfProject;

                indexOfProject = ids.indexOf(data.Project.id);
                if (indexOfProject !== -1) {
                    this.replaceProject(this.projects[indexOfProject], data.Project);
                } else {
                    this.addProjectToList(data.Project);
                }
            }, $projectResource.handleError);
    };

    // End project create form.

    this.isEditProjectFormDisplayed = false; // Показана ли форма "Создать проект".// Project edit form.

    this.editProject = function (formData) {
        this.closeSidePanel();
        $projectResource
            .request('update', {})
            .save({
                'session' : session,
                'Project' : {
                    'id'    : formData.targetProject.id,
                    'title' : formData.project.title
                }
            })
            .$promise.then(function (response) {
                self.replaceProject(formData.targetProject, response.Project);
            }, $projectResource.handleError);
    };

    this.openEditProjectForm = function () {
        this.hideAllContentOfSidePanel();
        this.isEditProjectFormDisplayed = true;
        this.openSidePanel();
    };

    // End project edit form.



    // Create task.

    this.isCreateTaskFormDisplayed = false;

    this.fetchTask = function (taskId, callback) {
        $taskResource.request('fetch', {
                'session' : session,
                'task_id' : taskId
            })
            .get()
            .$promise
            .then(function (data) {
                callback(data.Task);
            });
    };

    this.createTask = function (formData) {
        this.closeSidePanel();
        $taskResource.request('create', {})
            .save({
                'session' : session,
                'Project' : {
                    'id' : formData.project.id
                },
                'Task' : {
                    'title'       : formData.task.title,
                    'description' : formData.task.description
                }
            })
            .$promise
            .then((data) => {
                this.fetchProject(formData.project.id);
                this.loadTaskPage(1);
                /*
                    this.fetchTask(data.Task.id, (task) => {
                        task['created_at'] = new Date();
                        this.tasks.unshift(dateFormatFilter([task], 'created_at')[0]);
                    });
                */
            }, $projectResource.handleError);
    };

    this.openCreateTaskForm = function () {
        this.hideAllContentOfSidePanel();
        this.isCreateTaskFormDisplayed = true;
        this.openSidePanel();
    };

    // End create task.


    // Task list.

    this.isTaskInfoDisplayed = false;

    this.openTask = function (data) {
        this.hideAllContentOfSidePanel();
        this.isTaskInfoDisplayed = true;
        this.selectedTask = data.task;
        this.openSidePanel();
    };

    this.removeTaskFromList = function (taskId) {
        var ids = this.tasks.map((item) => {
                return item.id;
            }),
            index = ids.indexOf(taskId);
        this.tasks.splice(index, 1);
    };

    this.completeTask = function (data) {
        var selectedProject = this.selectedProject;
        $taskResource.request('complete', {})
            .save({
                'session' : session,
                'Task' : {
                    'id' : data.task.id
                }
            })
            .$promise
            .then((data) => {
                this.removeTaskFromList(data.Task.id);
                this.fetchProject(selectedProject.id);
            }, $taskResource.errorHandler);
    };

    this.deleteTask = function (task) {
        var selectedProject = this.selectedProject;
        this.closeSidePanel();
        $taskResource.request('delete', {
                'session' : session,
                'task_id' : task.id
            })
            .delete()
            .$promise
            .then((data) => {
                this.removeTaskFromList(task.id);
                this.fetchProject(selectedProject.id);
            }, $taskResource.errorHandler);
    };

    this.isEditTaskFormDisplayed = false;

    this.openEditTaskForm = function (data) {
        this.hideAllContentOfSidePanel();
        this.isEditTaskFormDisplayed = true;
        this.openSidePanel();
    };

    this.editTask = function (data) {
        var task    = data['task'],
            project = data['project'];

        this.closeSidePanel();

        $taskResource.request('update', {})
            .save({
                'session' : session,
                'Task' : {
                    'id'          : task.id,
                    'title'       : task.title,
                    'description' : task.description
                }
            })
            .$promise
            .then((data) => {
                this.updateTaskInList(data.Task);
            }, $taskResource.errorHandler);
        
    };

    this.updateTaskInList = function (task) {
        var ids = this.tasks.map((task) => {
                return task.id;
            }),
            indexOfTask = ids.indexOf(task.id),
            targetTask;
        if (indexOfTask !== -1) {
            targetTask = this.tasks[indexOfTask];
            this.tasks[indexOfTask] = dateFormatFilter([{
                'id' : task['id'],
                'description' : task['description'],
                'title' : task['title'],
                'created_at' : targetTask['created_at']
            }], 'created_at')[0];
            if (targetTask === this.selectedTask) {
                this.selectedTask = this.tasks[indexOfTask];
            }
        }
    };



    // End task list.

    this.hideAllContentOfSidePanel = function () {
        this.isCreateProjectFormDisplayed = false;
        this.isEditProjectFormDisplayed   = false;
        this.isCreateTaskFormDisplayed    = false;
        this.isTaskInfoDisplayed          = false;
        this.isEditTaskFormDisplayed      = false;
    };


    if (session) {
        checkSession();
    } else {
        getSession();
    }

    function checkSession (callback) {
        $accountResource.request('session', {'session' : session})
            .get()
            .$promise.then(function (data) {
                loadAppData();
            }, function (error) {
                getSession(callback);
                // $accountResource.handleError(error);
            });
    }

    function loadAppData () {
        var requestCount  = 0,
            requestTarget = 2;

        $accountResource.request('account', {'session' : session})
            .get()
            .$promise.then(function (data) {
            $scope.account = data.Account;
            requestCount += 1;
            next();
        }, $accountResource.handleError);

        $projectResource.request('fetch', {'session' : session})
            .get()
            .$promise.then(function (data) {
                self.projects = data.projects.map((projectItem) => {
                    return projectItem.Project;
                });
                requestCount += 1;
                next();
            }, $projectResource.handleError);

        function next () {
            if (requestCount === requestTarget) {
                self.initializeGui();
            }
        }

    }

    function getSession (callback) {
        $accountResource.request('signup', null)
            .save()
            .$promise.then(function (data) {
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
        if (index !== -1) {
            this.projects.splice(index, 1, newProject);
            this.selectProject(this.projects[index]);
        }
    };

    this.initializeGui = function () {
        this.loaderModificator = loaderModificators['hiding'];
        setTimeout(function () {
            self.loaderModificator = loaderModificators['hidden'];
            $scope.$apply();
        }, loaderTimeout);
    };

    this.openSidePanel = function () {
        $mdSidenav('side-panel')
            .open();
    };

    this.closeSidePanel = function (callback) {
        var sidePanel = $mdSidenav('side-panel').close();
        if (callback) {
            sidePanel.then(callback);
        }
    };



    this.addProjectToList = function (project) {
        this.projects.push(project);
    };

    this.deleteProject = function (project) {
        var index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            if (this.selectedProject && project.id === this.selectedProject.id) {
                this.selectProject(null);
            }
        }
    };

    this.deleteCurrentProject = function () {
        var project = this.selectedProject;
        if (project) {
            $projectResource.request('create', {'session' : session, 'project_id' : project.id})
                .delete()
                .$promise.then(() => {
                    this.deleteProject(project);
                }, $projectResource.handleError);
        }
    };

}];

    component = applicationModule.component('todoView', {
        'controllerAs' : '$todo',
        'controller'   : ctrl,
        'template'     : require('./todo.template.html')
    });

    require('./directives/moreMenu.directive.js')(component);
    require('./directives/profileInfo.directive.js')(component);
    require('./directives/leftFooter.directive.js')(component);
    require('./directives/focusOnCondition.js')(component);
    require('./directives/toBottomDistanceScrollCatch.directive.js')(component);

    return component;
};