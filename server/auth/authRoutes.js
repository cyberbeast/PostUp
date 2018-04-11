const router = require('express').Router();
const passport = require('passport');
const config = require('./../config/config');

// Facebook auth route
router
	.route('/facebook')
	.get(
		passport.authenticate('facebook', { scope: ['email', 'user_location'] })
	);

// Facebook callback route
router
	.route('/facebook/callback')
	.get(passport.authenticate('facebook'), (req, res) => {
		if (req.user) {
			req.session.user = req.user;
			res.redirect('/posts');
		} else {
			res.redirect('/error');
		}
	});

// Logout route
router.route('/logout').get((req, res) => {
	console.log('Destroying user session now...');
	req.session.destroy(function(err) {
		res.json('Logout Success');
	});
});

module.exports = router;
