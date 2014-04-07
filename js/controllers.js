angular.module('gallery.controllers', [])
	.controller("MainCtrl", ['$scope', function ($scope)
	{
		$scope.keydownCallback = function($event)
		{
			$scope.$broadcast('keyPressed', $event.keyCode);
		}
	}])

	.controller("GalleryCtrl", ['$scope', 'imgList', function ($scope, imgList)
	{
		var array = imgList;
		var index = new Index(0, array.length - 1);
		var LEFT = 37;
		var RIGHT = 39;
		var handler = new EventHandler();

		handler.push(LEFT, function(){index.previous()});
		handler.push(RIGHT, function(){index.next()});
		$scope.getImage = function()
		{
			return array[index.get()];
		}
		
		$scope.$on('keyPressed', function(event, keyCode)
		{
			handler.trigger(keyCode);
		});
	}]);