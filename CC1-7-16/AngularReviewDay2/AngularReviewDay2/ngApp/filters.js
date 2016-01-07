var AngularReviewDay2;
(function (AngularReviewDay2) {
    var Filters;
    (function (Filters) {
        function retweetFilter() {
            return function (input) {
                return input.filter(function (tweet) {
                    return tweet.message.startsWith('RE: ');
                });
            };
        }
        angular.module('AngularReviewDay2').filter('retweet', retweetFilter);
    })(Filters = AngularReviewDay2.Filters || (AngularReviewDay2.Filters = {}));
})(AngularReviewDay2 || (AngularReviewDay2 = {}));
