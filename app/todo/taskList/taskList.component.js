
class TaskList {
    constructor() {
        this.tasks = [];
    }
    onTaskClick(task) {
        this.onOpenTask({
            data : {
                'task' : task
            }
        });
    }
    onCompleteClick(task) {
        this.onCompleteTask({
            data : {
                'task' : task
            }
        });
    }
    tasks = null;
}

TaskList.$inject = [];

module.exports = (applicationModule) => {
    applicationModule.component('taskList', {
        'bindings' : {
            'tasks'          : '<',
            'onOpenTask'     : '&',
            'onCompleteTask' : '&'
        },
        'controller' : TaskList,
        'template'   : require('./taskList.template.html')
    });
};
