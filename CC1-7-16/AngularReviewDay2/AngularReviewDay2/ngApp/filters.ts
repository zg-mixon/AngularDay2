namespace AngularReviewDay2.Filters {

    function retweetFilter() {
        return function (input) {
            return input.filter(function (tweet) {
                return tweet.message.startsWith('RE: ');
            });
        }

    }
    angular.module('AngularReviewDay2').filter('retweet', retweetFilter);
}