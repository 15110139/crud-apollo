import gql from 'graphql-tag';

export const getListUser = gql`
	query listUser {
		users {
			id
			name
		}
	}
`;
