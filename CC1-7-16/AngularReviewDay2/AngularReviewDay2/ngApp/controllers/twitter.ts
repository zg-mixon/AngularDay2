namespace AngularReviewDay2.Controllers {
    
    export class TwitterController{
 
        public tweets: Array<any> = [
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

        public incrementLikes(tweet): void {
            tweet.likes++;
        }
        public retweet(tweet): void {
            this.tweets.unshift({
                profilePicture: tweet.profilePicture,
                username: tweet.username,
                message:`RE: ${tweet.message}`,
                likes: 0
            });
        }
        public addTweet(message): void {
            this.tweets.unshift({
                profilePicture: 'http://orig05.deviantart.net/f4cf/f/2010/352/2/5/headshot_by_bokogreat_stock-d355wtj.jpg',
                username: 'Model Zack Braff',
                message: message,
                likes: 0
            });
        }
    }
}

