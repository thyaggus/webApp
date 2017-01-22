angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('autorizaEs', {
    url: '/page1',
    templateUrl: 'templates/autorizaEs.html',
    controller: 'autorizaEsCtrl'
  })

  .state('local', {
    url: '/page2',
    templateUrl: 'templates/local.html',
    controller: 'localCtrl'
  })

  .state('local2', {
    url: '/page3',
    templateUrl: 'templates/local2.html',
    controller: 'local2Ctrl'
  })

  .state('local3', {
    url: '/page4',
    templateUrl: 'templates/local3.html',
    controller: 'local3Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});