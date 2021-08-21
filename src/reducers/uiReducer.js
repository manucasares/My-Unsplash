import { types } from '../types/types';

export const uiReducer = (state = {}, action) => {
	switch (action.type) {
		case types.showAddPhoto:
			return {
				...state,
				showAddPhoto: action.payload,
			};

		default:
			return state;
	}
};
