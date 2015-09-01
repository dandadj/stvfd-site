angular.module('firePage').service("incidentService", function($http, $q)
    {
        var deferred = $q.defer();
        $http.get('http://localhost:8080/api/incidents')
            .then(function(data){
                deferred.resolve(data);
            });

            this.getIncidents = function()
            {
                return deferred.promise;
            }
    })
    .controller("IncidentController", function ($scope, incidentService) {

        var promise = incidentService.getIncidents();
        var foo = promise.then(function(data){
            for(i = 0; i < data.data.length; i++){
                data.data[i].Date = Date.parse(data.data[i].Date);
                data.data[i].Units = data.data[i].Units.split(",");
            }
            $scope.incidents = data.data;
        });
    });
