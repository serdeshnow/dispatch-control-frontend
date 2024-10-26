import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { useSSE } from '../../hooks/use-sse.ts';

export const Chat: React.FC = () => {
	const messages = useSelector((state: RootState) => state.chat.messages);

	useSSE('http://localhost:5000/events');

	return (
		<div>
			<h1>Chat Messages</h1>
			<ul>
				{messages.map((msg, index) => (
					<li key={index}>{msg}</li>
				))}
			</ul>
		</div>
	);
};
