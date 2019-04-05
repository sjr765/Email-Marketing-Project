const mongoose = require('mongoose');
const requireLogin = require('../../middlewares/requireLogin');
const requireCredits = require('../../middlewares/requireCredits');
const Survey = mongoose.model('surveys');
const express = require('express');
const router = express.Router();
module.exports = router;

router.post('/', requireLogin, requireCredits, (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now(),
  });
  res.json(survey);
});
