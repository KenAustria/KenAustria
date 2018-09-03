const mongoose = require('mongoos');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
