require('./config/passport');
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import path from 'path';
import express from 'express';
import session from 'express-session';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import compression from 'compression';
import bodyParser from 'body-parser';
import schema from './data/schema';
import cors from 'cors';
import passport from 'passport';

const authAPI = require('./auth/authRoutes');

const config = require('./config/config');

const GRAPHQL_PORT = config.port;

const graphQLServer = express();

graphQLServer.use(
	session({
		secret: config.secrets.session,
		resave: true,
		saveUninitialized: true
	})
);
graphQLServer.use(passport.initialize());
graphQLServer.use(passport.session());
graphQLServer.use(compression());
graphQLServer.use('/auth', authAPI);
graphQLServer.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress(req => {
		return {
			schema,
			tracing: false,
			context: {
				user: req.session.user
			}
		};
	})
);
graphQLServer.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql',
		subscriptionsEndpoint: `ws://postup.pagekite.me/subscriptions`
	})
);
graphQLServer.use('*', cors({ origin: 'http://localhost:4200' }));
graphQLServer.use('*', cors({ origin: 'http://localhost:3000' }));
graphQLServer.use('*', cors({ origin: 'http://postup.pagekite.me/' }));

// Point static path to compiled app directory
graphQLServer.use(express.static(path.join(__dirname, 'app')));

// Catch all other routes and return the index file
graphQLServer.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'app/index.html'));
});

// graphQLServer.listen(GRAPHQL_PORT, () =>
// 	console.log(
// 		`GraphiQL is now running at http://localhost:${GRAPHQL_PORT}/graphiql`
// 	)
// );

// Wrap the Express server
const ws = createServer(graphQLServer);

ws.listen(GRAPHQL_PORT, () => {
	console.log(
		`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
	);
	// Set up the WebSocket for handling GraphQL subscriptions
	new SubscriptionServer(
		{
			execute,
			subscribe,
			schema
		},
		{
			server: ws,
			path: '/subscriptions'
		}
	);
});
