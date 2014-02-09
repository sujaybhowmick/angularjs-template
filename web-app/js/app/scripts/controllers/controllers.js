'use strict';

var controllers = angular.module('qebms.controllers', ['qebms.services',
                                                    'qebms.directives']);


controllers.controller('HomeCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.message = "from home controller";
    }
]);

controllers.controller('MasterCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.message = "from master";
    }
]);

controllers.controller('TransactionCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.message = "from transactions";
    }
]);

controllers.controller('ResourceCtrl', ['$scope',
    function($scope){
        $scope.message = "from resource controller";
    }
]);

controllers.controller('Tab2Ctrl', ['$scope',
    function($scope){
        $scope.message = "from tab2 controller";
    }
]);