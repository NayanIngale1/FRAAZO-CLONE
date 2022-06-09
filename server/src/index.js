const express = require("express");
const {
  register,
  login,
  generateToken,
} = require("./controllers/authController");
const User = require("./models/user.model");
const { body, validationResult } = require("express-validator");
var cors = require("cors");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");

// const passport = require("./configs/googleOauth");

app.use(cors());
app.use(express.json());

const fraazoController = require("./controllers/fraazo.controller");

const paymentController = require("./controllers/payment.controller");

const userController = require("./controllers/user.controller");

app.use("/fraazo", fraazoController);
app.use("/user", userController);
app.use("/payment", paymentController);

app.post(
  "/register",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    // .isLength({ min: 4 })
    // .withMessage("First Name must be at least 4 characters"),
    .isLength({ min: 3 })
    .withMessage("First Name must be at least 4 characters"),
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    // .custom((value, { req }) => {
    //   if (value !== req.body.confirmPassword) {
    //     throw new Error("Password and confirm password should match");
    //   }
    //   return true;
  // })
  ,
  body("phone").custom((value) => {
    if (value && value.length != 10) {
      throw new Error("phone number should have 10 digits");
    }
    return true;
  }),
  register
);

app.post(
  "/login",
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (!user) {
        throw new Error("Email is not registered");
      }
      return true;
    }),
  body("password").not().isEmpty().withMessage("Password is required"),
  login
);


// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );



// //google oauth
// passport.serializeUser(function(user, done){
//     done(null, user);
// })

// passport.deserializeUser(function(user, done){
//     done(null, user);
// })



// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false,
//   }),
//   function (req, res) {
//     const token = generateToken(req.user);

//     // return res.status(200).send({ token: token, user: req.user });
//     // Successful authentication, redirect home.
//     const user = req.user;
//     res.redirect(
//       `/google-oauth2success?token=${token}&firstName=${user.firstName}&lastName=${user.lastName}&email=${user.email}&id=${user.id}`
//     );
//   }
// );


app.use("/", (req, res) => {
  res.send(
    `<h1 style="color:#C7AA8D;font-size:46px;margin:20px auto;">Welcome to Fraazo-Clone API</h1>`
  );
});

module.exports = app;
