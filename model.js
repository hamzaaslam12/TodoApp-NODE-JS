const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModel = new Schema({
          // user: String,
          // id: Number
          name: String,
});
// module.exports = User = mongoose.model('user', UserModel);
module.exports = mongoose.model('User', UserModel);
// module.exports = mongoose.model('users', UserModel);