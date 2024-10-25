import type { IAction } from '../../interfaces';

export interface IStoreState {
	text: string,
	isShowing: boolean,
}

const initialState: IStoreState = {
	text: 'Hello World',
	isShowing: false,
}

export const reducer = (state: IStoreState = initialState, action: IAction): IStoreState => {
	switch (action.type) {
		case "SET_SHOWING":
			if( typeof action.payload === "boolean" ) {
				return { ...state, isShowing: action.payload };
			}
			return state;
		case "SET_TEXT":
			if( typeof action.payload === "string" ) {
			return { ...state, text: action.payload };
		}
			return state;
		default:
			return state;
	}
}
