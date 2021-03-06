var ProfileService = function($http, $q){
  return {
    'list': function(){
      var defer = $q.defer();
      $http.get('/profile/list').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        console.log(err)
        defer.reject(err);
      });
      return defer.promise
    },
    'getOne': function(profile){
      var defer = $q.defer();
      $http.get('/profile/'+profile.id).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        console.log(err)
        defer.reject(err)
      });
        return defer.promise
    },
    'create': function(profile){
      console.log('service: ', profile)
      var defer = $q.defer();
      $http.post('/profile', profile).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        console.log(err)
        defer.reject(err);
      });
      return defer.promise
    },
    'update': function(profile){
      var defer = $q.defer();
      $http.post('/profile/'+profile.id, profile).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    },
    'remove': function(profile){
      var defer = $q.defer();
      $http.post('/profile/remove', profile).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        console.log(err)
        defer.reject(err);
      });
      return defer.promise
    },
    'getActive': function(){
      var defer = $q.defer();
      $http.get('/profile/active').success(function(res){
        defer.resolve(res);
      }).error(function(err){
        console.log(err)
        defer.reject(err);
      });
      return defer.promise
    },
    'setActive': function(profile){
      var defer = $q.defer();
      $http.post('/profile/active', profile).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
      return defer.promise
    }
  }
};
module.exports = ProfileService;