(function () {
    var memberService = ['$http', function ($http) {
        var serviceBase = "http://private-a73e-aquentuxsociety.apiary-mock.com/";

        var service = {
            getMembers: function () {
                var promise =
                $http.get(serviceBase + "members").then(function successCallback(response) {
                    //debugger;
                    return response.data;
                });
                return promise;
            }
        }

        return service;
    }];

    angular.module("UxSocietyDirectory").service("memberService", memberService);
})();