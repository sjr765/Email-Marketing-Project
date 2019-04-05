const express = require('express');

const router = express.Router();

module.exports = router;

router.use('/auth', require('./authRoutes'));
router.use('/stripe', require('./billingRoutes'));
router.use('/surveys', require('./surveyRoutes'));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});
