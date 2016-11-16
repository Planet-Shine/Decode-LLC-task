export default function (applicationModule) {
    var TodoCtrl = ['$scope', '$accountResource', '$projectResource', '$cookies', '$mdSidenav', function ($scope, $accountResource, $projectResource, $cookies, $mdSidenav) {
        var self               = this,
            session            = $cookies.get('session'),
            sessionGetTries    = 0,
            sessionGetMax      = 5,
            loaderModificators = {
                'showed' : 'page-cover_showed',
                'hidden' : 'page-cover_hidden',
                'hiding' : ''
            },
            loaderTimeout = 1000;

        $scope.account  = {};


        this.searchText = '';
        this.selectedProjectIndex = 0;
        this.searchInputHidden = true;
        this.projects = [];
        this.loaderModificator = loaderModificators['showed'];
        this.selectProject = function (index) {
            self.selectedProjectIndex = index;
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
                    self.projects = data.projects;
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

        this.initializeGui = function () {
            this.loaderModificator = loaderModificators['hiding'];
            setTimeout(function () {
                self.loaderModificator = loaderModificators['hidden'];
                $scope.$apply();
            }, loaderTimeout);
        };

        this.openSidePanel = function () {
            $mdSidenav('side-panel')
                .toggle()
                .then(function () {
                    console.log('ready!');
                });
        };

    }],
        ctrl     = applicationModule.controller('TodoCtrl', TodoCtrl);


    require('./profileInfo.directive.js')(ctrl);
};