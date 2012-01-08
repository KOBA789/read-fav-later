var config = require('./config.json');

var mongoose = require('mongoose');
mongoose.connect(config.MONGODB);
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var User = new Schema({
  screen_name: String,
  twitter_uid: Number,
  token: String,
  accessToken: String  
});
module.exports.User =
  mongoose.model('User', User);

var ConsumerKey = new Schema({
  name: String,
  key: String,
  secret: String
});
module.exports.Keychain =
  mongoose.model('ConsumerKey', ConsumerKey);
