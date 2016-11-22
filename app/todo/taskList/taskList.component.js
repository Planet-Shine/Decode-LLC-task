
class TaskList {
    constructor($scope, $timeout) {
        this.tasks = [];

        $scope.$watch('catchDistanceToBottomBeacon', () => {
            if ($scope.isCatchedDistanceToBottom) {
                this.onCatchedDistanceToBottom();
            }
        });

        $scope.$watch('$ctrl.tasks', (newValue) => {
            $timeout(function () {
                $scope.items = newValue;
                $scope.$apply()
            });
        });

        $scope.isCatchedDistanceToBottom = null;
        $scope.catchDistanceToBottomBeacon = false;
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
    project = null;
    tasks = null;
}

TaskList.$inject = ['$scope', '$timeout'];

module.exports = (applicationModule) => {
    applicationModule.component('taskList', {
        'bindings' : {
            'tasks'                     : '<',
            'project'                   : '<',
            'onOpenTask'                : '&',
            'onCompleteTask'            : '&',
            'onCatchedDistanceToBottom' : '&',
            'onStartCreatingTask'       : '&'
        },
        'controller' : TaskList,
        'template'   : require('./taskList.template.html')
    });
};
