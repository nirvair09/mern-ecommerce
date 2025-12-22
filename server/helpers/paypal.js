const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET || process.env.PAYPAL_SECRET_ID,
});

console.log("PayPal Config Debug:", {
  mode: process.env.PAYPAL_MODE,
  clientIdLength: process.env.PAYPAL_CLIENT_ID?.length,
  secretLength: (process.env.PAYPAL_CLIENT_SECRET || process.env.PAYPAL_SECRET_ID)?.length,
  clientIdFirst4: process.env.PAYPAL_CLIENT_ID?.substring(0, 4),
});

module.exports = paypal;
