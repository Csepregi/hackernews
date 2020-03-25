import React from 'react';
import { ButtonInline } from './Button';
import './Story.css';
import { useDispatch } from 'react-redux';
import { doArchiveStory } from '../actions/archive';

const Story = ({ story, columns }) => {
	const dispatch = useDispatch()
	const {
		title,
		url,
		author,
		num_comments,
		points,
		objectID,
	} = story;

	return (
		<div className="story">
			<span style={{ width: columns.title.width }}>
				<a href={url}>{title}</a>
			</span>
			<span style={{ width: columns.author.width }}>
				{author}
			</span>
			<span style={{ width: columns.comments.width }}>
				{num_comments}
			</span>
			<span style={{ width: columns.points.width }}>
				{points}
			</span>
			<span style={{ width: columns.archive.width }}>
				<ButtonInline onClick={() => dispatch(doArchiveStory(objectID))}>
					Archive
        </ButtonInline>
			</span>
		</div>
	);
}


export default Story