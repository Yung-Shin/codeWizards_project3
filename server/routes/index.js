const express = require('express');
const router = express.Router();

const userRoutes = require('./api/user-routes');
const purchaseRoutes = require('./api/purchase-routes');
const rouletteRoutes = require('./api/roulette-routes');



// Use the signupRoutes for /api/signup
router.use('/api/user', userRoutes);
// purchase Tokens rout

// new roulette routes
router.use('roulette', purchase);

module.exports = router;
