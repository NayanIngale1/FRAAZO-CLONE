require("dotenv").config();
const express = require("express");
const Insta = require("instamojo-nodejs");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

const API_KEY = process.env.INSTAMOJO_API_KEY;
const AUTH_KEY = process.env.INSTAMOJO_AUTH_KEY;

router.post("/pay", authenticate, async (req, res) => {
  try {
    const paymentData = {};

    Insta.setKeys(API_KEY, AUTH_KEY);
    Insta.isSandboxMode(true);

    const data = new Insta.PaymentData();
    data.purpose = req.body.desc;
    data.amount = req.body.amount;
    data.buyer_name = req.user.nickName;
    data.redirect_url = "www.example.com/payment/successful";
    // frontend deployed link
    (data.email = req.user.email),
      (data.phone = req.user.phone || "9999999999");
    data.send_email = false;
    data.send_sms = false;
    data.webhook = `http://www.example.com/payment/webhook`;
    data.allow_repeated_payments = false;

    Insta.createPayment(data, function (error, response) {
      if (error) {
        // some error
      } else {
        // Payment redirection link at response.payment_request.longurl
        const responseData = JSON.parse(response);
        res.status(200).send(responseData);
      }
    });
  } catch (err) {
    res.status(500).send(err.massage);
  }
});

module.exports = router;
