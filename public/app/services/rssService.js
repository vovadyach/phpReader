/**
 * Created by Vladimir Dyachenko on 21.02.16.
 */
angular.module('rssService', [])
    .factory('Rss', function($http){
        return {
            get : function() {
                return $http.get('api/rss');
            },
            show : function(id) {
                return $http.get('api/rss' + id);
            },
            save : function(rssData) {
                return $http({
                    method: 'POST',
                    url: 'api/rss',
                    headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
                    data : $.param(rssData)
                });
            },
            destroy : function(id) {
                return $http.delete('api/rss' + id);
            }
        }
    });