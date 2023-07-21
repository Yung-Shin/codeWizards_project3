const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes'); // Correct the path here
const purchaseRoutes = require('./api/purchase-routes');
const rouletteRoutes = require('./api/roulette-routes');

// Use the userRoutes for /api/user
router.use('/api/user', userRoutes);
// purchase Tokens route
router.use('/api/purchase', purchaseRoutes);
// new roulette routes
router.use('/api/roulette', rouletteRoutes);

module.exports = router;
