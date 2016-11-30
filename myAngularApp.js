 (function() {
  var app = angular.module('myApp', []);

  app.controller('AppController', function(){
  	this.helloMessage="Hello World!";
   
  });
  app.controller('TabController',function(){
  	this.tab=1;
  	this.selectTab=function(setTab){
  		this.tab=setTab;
  	};
  	this.selected=function(checkTab){
  		return this.tab===checkTab;
  	};

  });
  app.directive('weatherApp',function(){
  	return{
  		restrict:'E',
  		templateUrl:'weather-app.html'
  	};
  });

  })();