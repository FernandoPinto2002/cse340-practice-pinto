const express = require('express');
const router = express.Router();

const pagesController = require('../controllers/pagesController');

router.get('/', pagesController.homePage);
router.get('/about', pagesController.aboutPage);

module.exports = router;