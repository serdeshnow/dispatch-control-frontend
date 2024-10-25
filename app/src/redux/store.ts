import { reducer as rootReducer } from './reducers/reducer.ts'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: rootReducer
});
