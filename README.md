# PostUp
A simple end-to-end content publishing and subscription system with real-time comments, replies and user-interactions.
  + Real-time updates and automatic subscriptions.
    + New posts show up on feed almost instantaneously on every client's Post View.
    + New comments/replies (and subsequent updates) reflect on every client that is viewing the corresponding post/comment.
  + Open and Extensible GraphQL Schema for a content publishing system.
    + Adding features is as simple as extending the existing schema and defining the resolution logic using GraphQL specifications. 
  + Freedom to use ANY data-source for data-storage with the GraphQL Resolver + Connector layer.
  + Scalable and Cloud-first design

![](https://www.lucidchart.com/publicSegments/view/b189e027-c0f5-4cb2-829f-ba6a48f3982d/image.png)
![](https://www.lucidchart.com/publicSegments/view/3bb2e660-51a7-47fa-9449-10f9ba379bb7/image.png)

### Build & Run Instructions

PostUp requires at-least node.js, npm, angular-cli and babel-node to run. Other dependencies are installed using npm. PostUp also requires the provisioning of a database. I recommend MongoDB, but any database can be used. However, if a database other than MongoDB is used, you'll need to modify the logic in atleast the following files - `connectors.js`, `passport.js` and `resolvers.js`.

Add your GraphQL server and GraphQL Subscription server URL in `graphql.module.ts`.
```javascript
...
const http = httpLink.create({
      uri: 'URL HERE'
    });

    // Create a WebSocket link
    const ws = new WebSocketLink({
      uri: `ws://URL_HERE/subscriptions`,
      options: {
        reconnect: true
      }
    });
...
```
Install the angular app dependencies.

```sh
$ cd PostUp/PostUpApp
$ npm install && ng build
```

Create a file called `.env` in `PostUp/server/` and specify the following environment variables.
```
# FACEBOOK AUTH CONFIG
FACEBOOK_APP_ID=<<YOUR FB APP ID>>
FACEBOOK_APP_SECRET=<<YOUR FB APP SECRET>>
FACEBOOK_CALLBACK_URL=<<YOUR FB CALLBACK URL>>

# SERVER PORT
PORT=<<YOUR SERVER PORT>>

# SESSION SECRET
SESSION_SECRET=<<YOUR SESSION SECRET>>
```

Create a file called `development.js` in `PostUp/server/config/` and specify the following keys.
```javascript
module.exports = {
	db: {
		URL: '<<YOUR DATABASE URL>>'
	}
};

```
Install the server dependencies and launch the dev server.

```sh
$ cd PostUp/server
$ npm install
$ npm start
```
