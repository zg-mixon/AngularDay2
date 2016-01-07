namespace AngularReviewDay2 {

    angular.module('AngularReviewDay2', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngApp/views/twitter.html',
                    controller: AngularReviewDay2.Controllers.TwitterController,
                    controllerAs: 'tweetFeed'
                });
        });
}