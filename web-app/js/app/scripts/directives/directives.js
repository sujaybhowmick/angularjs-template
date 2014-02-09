'use strict';

var directives = angular.module('qebms.directives', []);

directives.directive(
    'activeTab', function($location){
        return {
            link: function postLink(scope, element, attrs){
                scope.$on('$routeChangeSuccess', function(event, current, previous){
                    var pathLevel = attrs.activeTab || 1,
                        pathToCheck = $location.path().split('/')[pathLevel],
                        tabLink = attrs.href.split('/')[pathLevel];
                        console.log(pathLevel);
                        console.log(tabLink);
                    if (pathToCheck === tabLink) {
                        element.addClass("active");
                    }
                    else {
                        element.removeClass("active");
                    }
                });
            }
        }
    }
);