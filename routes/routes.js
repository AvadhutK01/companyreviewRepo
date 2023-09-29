const express = require('express');
const router = express.Router();
const datacontroller = require('../controllers/datacontroller');

router.get('/', datacontroller.getIndex);

router.post("/post-data", datacontroller.postdata);

router.get("/post-search/:companyname", datacontroller.getData);

module.exports = router;
