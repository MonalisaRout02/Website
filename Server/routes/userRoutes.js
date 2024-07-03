const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-account', userController.createAccount);
router.get('/get-user/:phoneNumber', userController.getUserByPhoneNumber);
router.put('/update-user', userController.updateUser);

module.exports = router;
