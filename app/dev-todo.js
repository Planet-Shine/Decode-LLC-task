const applicationModule = angular.module('todo', [
    'ngMaterial',
    'ngResource',
    'ngCookies'
]);

require('./layout-fixes');

// Сервисы.
require('./resource/account')(applicationModule);
require('./resource/project')(applicationModule);
require('./resource/task')(applicationModule);

require("./styl/index.less"); // Собираем стили.

require('./todo.config')(applicationModule);
require('./todo/todo.component')(applicationModule);
require('./todo/projectList/projectList.component')(applicationModule);
require('./todo/searchView/searchView.component')(applicationModule);
require('./todo/forms/createProject.form.component')(applicationModule);