// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('bibliophile', ['ionic', 'bibliophile.modules'])

.run(['$ionicPlatform',function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  // .state('app.home', {
  //   url: "/home",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/home.html"
  //     }
  //   }
  // })

  // .state('app.bucketlist', {
  //   url: "/bucketlist",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/bucketlist.html"
  //     }
  //   }
  // })

  // .state('app.favourites', {
  //   url: "/favourites",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/favourites.html"
  //     }
  //   }
  // })
  // .state('app.library', {
  //   url: "/library",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/library.html",
  //       controller: 'PlaylistsCtrl'
  //     }
  //   }
  // })

  // .state('app.requests', {
  //   url: "/requests",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/requests.html",
  //       controller: 'PlaylistsCtrl'
  //     }
  //   }
  // })

  // .state('app.settings', {
  //   url: "/settings",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/settings.html",
  //       controller: 'PlaylistsCtrl'
  //     }
  //   }
  // })

  // .state('app.single', {
  //   url: "/playlists/:playlistId",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlist.html",
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
}]);
