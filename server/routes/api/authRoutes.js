const passport = require('passport');
const express = require('express');
const router = require('express').Router();
module.exports = router;

router.get(
  '/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/surveys');
});
