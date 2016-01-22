(function () {
    var memberController = ['$scope', '$http', 'memberService', function ($scope, $http, memberService) {

        //debugger;
        $scope.members = [];
        $scope.pagination = {
            current: 1,
            itemsPerPage: 10
        }

        getMembers = function () {
            memberService.getMembers().then(function successCallback(data) {
                //debugger;
                $scope.members = data;
            })
        }
        
        getMembers();

        $scope.setSelectedMember = function (selectedMember) {
            $scope.selectedMember = selectedMember;
            $scope.showMemberDetails = true;
        };

        $scope.dismissDetails = function () {
            $scope.showMemberDetails = false;
        };

    }];

    angular.module("UxSocietyDirectory").controller('memberController', memberController);
})();