var AngularReviewDay2;
(function (AngularReviewDay2) {
    var Controllers;
    (function (Controllers) {
        var TwitterController = (function () {
            function TwitterController() {
                this.tweets = [
                    {
                        profilePicture: 'http://orig05.deviantart.net/f4cf/f/2010/352/2/5/headshot_by_bokogreat_stock-d355wtj.jpg',
                        username: 'Model Zack Braff',
                        message: 'This is my first tweet!',
                        likes: 0
                    },
                    {
                        profilePicture: 'http://orig05.deviantart.net/f4cf/f/2010/352/2/5/headshot_by_bokogreat_stock-d355wtj.jpg',
                        username: 'Model Zack Braff',
                        message: 'This is my first tweet!',
                        likes: 0
                    },
                ];
            }
            TwitterController.prototype.incrementLikes = function (tweet) {
                tweet.likes++;
            };
            TwitterController.prototype.retweet = function (tweet) {
                this.tweets.unshift({
                    profilePicture: tweet.profilePicture,
                    username: tweet.username,
                    message: "RE: " + tweet.message,
                    likes: 0
                });
            };
            TwitterController.prototype.addTweet = function (message) {
                this.tweets.unshift({
                    profilePicture: 'http://orig05.deviantart.net/f4cf/f/2010/352/2/5/headshot_by_bokogreat_stock-d355wtj.jpg',
                    username: 'Model Zack Braff',
                    message: message,
                    likes: 0
                });
            };
            return TwitterController;
        })();
        Controllers.TwitterController = TwitterController;
    })(Controllers = AngularReviewDay2.Controllers || (AngularReviewDay2.Controllers = {}));
})(AngularReviewDay2 || (AngularReviewDay2 = {}));
