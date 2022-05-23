/*

require("dotenv").config();
const User = require("../models/user.model");
var GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const { v4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?.email }).lean().exec();
      // console.log(profile);
      if (!user) {
        user = await User.create({
          firstName: profile._json.name.split(" ")[0],
          lastName: profile._json.name.split(" ")[1],
          email: profile._json.email,
          password: uuidv4(),
        });
      }
      console.log(user);
      return done(null, user);
    }
  )
);

module.exports = passport;

*/