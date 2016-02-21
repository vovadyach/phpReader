/**
 * Created by Vladimir Dyachenko on 21.02.16.
 */
angular.module('mainController', [])

    .controller('mainController', function($scope, $http, Rss) {
        // object to hold all the data for the new rss
        $scope.rssData = {};

        // loading variable to show the spinning loading icon
        $scope.loading = true;

        // get all the comments first and bind it to the $scope.rss object
        Rss.get()
            .success(function(data) {
                $scope.rss = data;
                $scope.loading = false;
            });


        // function to handle submitting the form
        $scope.submitRss = function() {
            $scope.loading = true;

            // save the rss. pass in rss data from the form
            Rss.save($scope.rssData)
                .success(function(data) {
                    $scope.rssData = {};
                    // if successful, we'll need to refresh the rss list
                    Rss.get()
                        .success(function(getData) {
                            $scope.rss = getData;
                            $scope.loading = false;
                        });

                })
                .error(function(data) {
                    console.log(data);
                });
        };

        // function to handle deleting an rss
        $scope.deleteRss = function(id) {
            $scope.loading = true;

            Rss.destroy(id)
                .success(function(data) {

                    // if successful, we'll need to refresh the rss list
                    Rss.get()
                        .success(function(getData) {
                            $scope.rss = getData;
                            $scope.loading = false;
                        });

                });
        };

    });