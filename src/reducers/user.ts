import { ActionTypes } from '../constants';
import { UserAction } from '../actions';

export interface UserState {
	name: string;
	addressList: Array<string>;
}

export const initialState: UserState = {
	name: '',
	addressList: []
};

export default function user(state: UserState = initialState, action: UserAction): UserState {
	switch (action.type) {
		case ActionTypes.UPDATE_USER:
			return { ...state, ...action.user };
		default:
			return initialState;
	}
}