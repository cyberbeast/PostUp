import passport from 'passport';
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config');
import { Author } from '../data/connectors';

// Passport user serializer
passport.serializeUser(function(user, done) {
	done(null, user);
});

// Passport user deserializer
passport.deserializeUser(function(user, done) {
	done(null, user);
});

// Configuration for the Facebook Strategy
passport.use(
	new FacebookStrategy(
		{
			clientID: config.secrets.facebookAuth.clientID,
			clientSecret: config.secrets.facebookAuth.clientSecret,
			callbackURL: config.secrets.facebookAuth.callbackURL,
			profileFields: ['id', 'emails', 'name', 'picture', 'location', 'gender']
		},
		(accessToken, refreshToken, profile, done) => {
			process.nextTick(function() {
				// console.log();
				const newAuthor = {
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					profileImage: profile._json.picture.data.url,
					email: profile.emails[0].value
				};

				Author.findOneAndUpdate({ email: profile.emails[0].value }, newAuthor, {
					upsert: true
				})
					.select('firstName lastName email profileImage _id ')
					.then(savedAuthor => {
						console.log(savedAuthor);
						done(null, { token: accessToken, user: savedAuthor });
					});
			});
		}
	)
);
