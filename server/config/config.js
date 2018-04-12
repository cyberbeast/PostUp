require('dotenv').config({ silent: true });
import _ from 'lodash';

const config = {
	dev: 'development',
	test: 'test',
	prod: 'production',
	port: process.env.PORT || 3000,
	host: '0.0.0.0',
	secrets: {
		session: process.env.SESSION_SECRET,
		facebookAuth: {
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: process.env.FACEBOOK_CALLBACK_URL
		}
	}
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
const envConfig = require(`./${process.env.NODE_ENV}`) || {};

module.exports = _.merge(config, envConfig);
