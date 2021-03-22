const express = require('express');
const router = express.Router();

// Main Page
router.get('/', (req, res) => {
    res.render('./layouts/index', {active: {Home: true}});
});

// Events Page
router.get('/pricing', (req, res) => {
    res.render('./layouts/pricing', {active: {Pricing: true}});
});

// FAQ Page
router.get('/demo', (req, res) => {
    res.render('./layouts/demo', {active: {Demo: true}});
});

module.exports = router;