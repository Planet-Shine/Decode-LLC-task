var $ = require('jquery');

module.exports = (todoComponent) => {
    todoComponent.directive('toBottomDistanceScrollCatch', ['$timeout', function ($timeout) {
            return function(scope, element, attrs) {
                var previousListHeight = 0,
                    previousScrollTop = null,
                    catchTimeoutDescriptor;



                element.bind("scroll", handler);
                handler();
                scope.$watch('items', function () {
                    var tryNumber   = 0,
                        countOfTrys = 30,
                        targetElement = $(element[0]).find('.todo-list__items');


                    function delayCatch () {
                        var listHeight = targetElement.height();
                        clearTimeout(catchTimeoutDescriptor);
                        if (listHeight !== previousListHeight) {
                            previousListHeight = listHeight;
                            scope.catchDistanceToBottomBeacon = !scope.catchDistanceToBottomBeacon;
                            handler(null);
                        } else {
                            if (tryNumber < countOfTrys) {
                                tryNumber += 1;
                                catchTimeoutDescriptor = setTimeout(delayCatch, 150);
                            }
                        }
                    }
                    delayCatch();
                });
                function handler (event) {
                    var distanceToBottom,
                        scrollTop,
                        clientHeight,
                        isCatchedDistanceToBottom = scope.isCatchedDistanceToBottom,
                        scrollHeight  = element[0].scrollHeight;

                    distanceToBottom = parseInt(attrs['toBottomDistanceScrollCatch'], 10);
                    scrollTop        = element[0].scrollTop;
                    clientHeight     = element[0].clientHeight;

                    if (distanceToBottom > scrollHeight - (scrollTop + clientHeight)) {
                        scope.isCatchedDistanceToBottom = true;
                        if (event) {
                            scope.catchDistanceToBottomBeacon = !scope.catchDistanceToBottomBeacon;
                        }
                    } else {
                        scope.isCatchedDistanceToBottom = false;
                        if (event) {
                            scope.catchDistanceToBottomBeacon = !scope.catchDistanceToBottomBeacon;
                        }
                    }
                    $timeout(function () {
                        scope.$apply();
                    });
                }
            };
        }]);
};