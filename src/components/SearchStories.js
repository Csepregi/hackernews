import React, { useState } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';


const SearchStories = (props) => {
	const [query, setNewQuery] = useState('')


	const onSubmit = (event) => {
		if (query) {
			props.onFetchStories(query)
			setNewQuery('');
		}
		event.preventDefault();
	}

	const onChange = (event) => {
		const { value } = event.target;
		setNewQuery(value);
	}


	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				value={query}
				onChange={onChange}
			/>
			<Button type="submit">
				Search
        </Button>
		</form>
	);
}


const mapDispatchToProps = (dispatch) => ({
	onFetchStories: query => dispatch(doFetchStories(query)),
});
export default connect(
	null,
	mapDispatchToProps
)(SearchStories);