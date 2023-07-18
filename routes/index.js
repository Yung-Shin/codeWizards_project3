const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// send any api request with /api to the apiRoutes
router.use('/api', apiRoutes)


module.exports = router;