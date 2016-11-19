module.exports = (applicationModule) => {
    var ctrl,
        component;

    ctrl = ['$scope', function ($scope) {
        this.isSearchInputHidden  = true;
        this.searchQuery = '';
        this.searchClick = function () {
            this.isSearchInputHidden = !this.isSearchInputHidden;
            this.searchQuery = '';
        };
        $scope.$watch("$ctrl.searchQuery", (function (newValue, oldValue) {
            this.onSearchQueryChange({
                'searchQuery' : newValue
            });
        }).bind(this));
    }];

    component = applicationModule.component('searchView', {
        'bindings' : {
            'onSearchQueryChange' : '&'
        },
        'controller' : ctrl,
        'template' : require('./searchView.component.template.html')
    });

    return component;
};