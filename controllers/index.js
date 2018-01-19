var express = require('express')
    ,router = express.Router();

router.use('/row', require('./row'));
router.use('/session', require('./session'));

router.get('/', function(req, res) {
    res.sendFile('index.html', {root: './public'});
});

router.get('/history', function(req, res) {
    res.sendFile('history.html', {root: './public'});
});

module.exports = router;