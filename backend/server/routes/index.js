const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth');

const router = Router();

router.post('/signup', createUser);
router.post('/signin', loginUser);

module.exports = router;
