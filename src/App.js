import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getListUser } from './apollo/query';

class App extends Component {
	render() {
		console.log(this.props);
		return <div>hihi</div>;
	}
}

export default graphql(getListUser)(App);
