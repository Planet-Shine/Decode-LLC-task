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
        loaderTimeout = 1000;

    // Просачивающиеся значения.
    $scope.account       = {};   // Директива вывода информации о профайле.
    this.projects        = [];   // Список проектов.
    this.selectedProject = null; // Выбранный проект. Подсачивается в компонент редактирования проекта.
    this.tasks           = [];   // Задачи текущего проекта.

    this.selectedProjectIndex = 0;
    this.loaderModificator = loaderModificators['showed'];

    this.searchTodoByQuery = function (searchQuery) {
        console.log(searchQuery);
    };

    this.nextTaskPage = function () {
        this.loadTaskPage(taskPageNumber + 1);
    };


    this.loadTaskPage = function (pageNumber, project) {
        project = project || this.selectedProject;
        // Делаем запрос только если не все загрузили.
        if (project && (pageNumber === 1 ||
                (totalTaskCount !== null ? (pageNumber - 1) * taskPagingSize < totalTaskCount : true))) {

            taskPageNumber = pageNumber;
            if (pageNumber === 1) {
                this.tasks = [];
            }

            // Подгружаем список тасков.
            $taskResource.request('fetch', {
                    'session'       : session,
                    'project_id'    : project.id,
                    'paging_size'   : taskPagingSize,
                    'paging_offset' : taskPagingSize * (taskPageNumber - 1)
                })
                .get()
                .$promise
                .then((response) => {
                    var tasks = response.tasks.map(function (task) {
                        return task.Task;
                    });
                    totalTaskCount = response['total_count'];
                    tasks = dateFormatFilter(tasks, 'created_at');
                    this.tasks = this.tasks.concat(tasks);
                });
        }
    };

    // Project list
    this.projectChange = function (project) {
        this.loadTaskPage(1, project);
    };

    this.selectProject = function (project) {
        var selectedProject = this.selectedProject,
            isChanged;
        if ((!selectedProject && project) || (project.id !== selectedProject.id)) {
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
                    this.replaceProject(self.projects[indexOfProject], data.Project);
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
            .$promise.then(function (data) {
                self.fetchProject(formData.project.id);
            }, $projectResource.handleError);
    };

    this.openCreateTaskForm = function () {
        this.hideAllContentOfSidePanel();
        this.isCreateTaskFormDisplayed = true;
        this.openSidePanel();
    };

    // End create task.


    // Task list.

    this.openTask = function (data) {
        console.log(data);
    };

    this.completeTask = function (data) {
        console.log(data);
    };

    this.deleteTask = function (data) {
        console.log(data);
    };

    this.openEditTaskForm = function (data) {
        console.log(data);
    };

    this.editTask = function (data) {
        console.log(data);
    };

    // End task list.

    this.hideAllContentOfSidePanel = function () {
        this.isCreateProjectFormDisplayed = false;
        this.isEditProjectFormDisplayed   = false;
        this.isCreateTaskFormDisplayed    = false;
    };


    this.getCurrentProject = function () {
        return this.projects[this.selectedProjectIndex];
    };

    if (session) {
        checkSession();
    } else {
        getSession();
    }

    function formatProjectItem (projectItem) {
        return projectItem.Project;
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
                self.projects = data.projects.map(formatProjectItem);
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
            if (target === this.selectedProject) {
                this.selectProject(this.projects[index]);
            }
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


/*
    this.openCreateTaskForm = function () {
        this.formName = 'createTask';
        this.openSidePanel();
    };
    */



    /*
    this.openEditProjectForm = function () {
        console.log('openEditProjectForm!');
        this.editingProjectName = this.getCurrentProject().Project.title;
        this.formName           = 'editProject';
        this.toggleSidePanel();
    };
    */

    this.fooValue = null;

    this.addProjectToList = function (project) {
        this.projects.push(project);
    };

    /*
    this.editProject = function () {
        var currentProject = self.getCurrentProject(),
            projectName = this.editingProjectName;
        this.toggleSidePanel();
        $projectResource.request('update', {})
            .save({
                'session' : session,
                'Project' : {
                    'id'    : self.getCurrentProject().Project.id,
                    'title' : projectName
                }
            })
            .$promise.then(function (data) {
            if ($accountResource.isError(data)) {
                $accountResource.handleError(data);
            } else {
                self.replaceProject(currentProject, {
                    'Project' : data.Project
                });
            }
        }, $projectResource.handleError);
    };
    */
/*
    this.createNewProject = function () {
        var projectName = this.newProjectName;

        this.newProjectName = '';
        this.openSidePanel();

        $projectResource.request('create', {})
            .save({
                'session' : session,
                'Project' : {
                    'title' : projectName
                }
            })
            .$promise.then(function (data) {
            if ($accountResource.isError(data)) {
                $accountResource.handleError(data);
            } else {
                self.fetchProject(data.Project.id);
            }
        }, $projectResource.handleError);

    };
    */

    /*
    this.createNewTask = function () {
        var createTaskName        = this.createTaskName,
            createTaskDescription = this.createTaskDescription,
            currentProject        = this.getCurrentProject();

        $taskResource.request('create', {})
            .save({
                'session' : session,
                'Project' : {
                    'id' : currentProject.Project.id
                },
                'Task' : {
                    'title' : createTaskName,
                    'description' : createTaskDescription || ''
                }
            })
            .$promise.then(function (data) {
                if ($taskResource.isError(data)) {
                    $taskResource.handleError(data);
                } else {
                    self.fetchProject(currentProject.Project.id);
                    self.openSidePanel();
                }
            }, $projectResource.handleError);
    };
    */

    this.deleteProject = function (project) {
        var index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    };

    this.deleteCurrentProject = function () {
        var project = this.selectedProject;
        if (project) {
            $projectResource.request('create', {'session' : session, 'project_id' : project.id})
                .delete()
                .$promise.then(function () {
                    self.deleteProject(project);
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