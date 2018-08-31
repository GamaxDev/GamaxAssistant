// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('Gamax', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/side_menu/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: "/main",
    views: {
      'tab-main': {
        templateUrl: "templates/main/main.html"/*,
        controller: 'MainCtrl',
        controllerAs: 'Main'*/
      }
    }
  })

  .state('app.objetivos', {
    url: "/objetivos",
    views: {
      'tab-objetivos': {
        templateUrl: "templates/objetivos/objetivos.html"
      }
    }
  })

  .state('app.dispositivo', {
    url: "/dispositivo",
    views: {
      'tab-dispositivo': {
        templateUrl: "templates/dispositivo/dispositivo.html"
      }
    }
  })
  .state('app.notificaciones', {
    url: "/notificaciones",
    views: {
      'tab-notificaciones': {
        templateUrl: "templates/notificaciones/notificaciones.html"
      }
    }
  })


    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'tab-playlists': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
