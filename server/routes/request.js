const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");

const {
    getUserRequests,
    createRequests,
    updateRequest,
  } = require('../controllers/request');

router.route("/").get(protect, getUserRequests );
router.route('/request').post(createRequests);
router.route('/update').put(updateRequest);

module.exports = router;