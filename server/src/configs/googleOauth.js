const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },

    async function (accessToken, refreshToken, profile, cb) {
      //   console.log("profile:", profile);

      let user = await User.findOne({ email: profile?._json?.email })
        .lean()
        .exec();

      if (!user) {
        user = await User.create({
          firstName: profile._json.name.split(" ")[0],
          lastName: profile._json.name.split(" ")[1],
          email: profile._json.email,
          password: uuidv4(),
        });
      }
      console.log(user);
      return cb(null, { user });
    }
  )
);

module.exports = passport;
