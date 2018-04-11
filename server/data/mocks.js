import casual from 'casual';

const mocks = {
	String: () => 'PONG',
	Query: () => ({
		author: (root, args) => {
			return { firstName: args.firstName, lastName: args.lastName };
		}
	}),
	Author: () => ({
		firstName: () => casual.first_name,
		lastName: () => casual.last_name
	}),
	Post: () => ({
		title: casual.title,
		content: casual.sentences(3)
	})
};

export default mocks;
