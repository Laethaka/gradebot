const express = require('express'),
      router = express.Router(),
      ltiCtrl = require('../controllers/ltiCtrl.js');

router.post('/:id', ltiCtrl.post)
router.post('/grade', ltiCtrl.submit)
// router.get('/:challengeId/:sessionId', ltiCtrl.get)
router.get('/', ltiCtrl.get)



module.exports = router







