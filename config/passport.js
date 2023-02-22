const LocalStrategy = require('passport-local')
const mongoose = require('mongoose')
const config = require('../config/config')
const User = require('../models/user')

module.exports = function (passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
      ));
}