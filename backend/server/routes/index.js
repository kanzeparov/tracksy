const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth');

const router = Router();

router.get('/', (req, res) => { res.send('Hello world') }); // for test file, don't delete now
router.post('/signup', createUser);
router.post('/signin', loginUser);

module.exports = router;
