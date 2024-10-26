import chatReducer from './reducers/chat-reducer.ts';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		chat: chatReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
