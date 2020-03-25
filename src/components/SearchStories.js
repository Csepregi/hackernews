import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { doFetchStories } from '../actions/story';


const SearchStories = () => {

	const dispatch = useDispatch()
	const [query, setNewQuery] = useState('')


	const onSubmit = (event) => {
		if (query) {
			dispatch(doFetchStories(query))
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


export default SearchStories;