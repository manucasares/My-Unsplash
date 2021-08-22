import { types } from '../types/types';

export const uiReducer = (state = {}, action) => {
	switch (action.type) {
		case types.showAddPhoto:
			return {
				...state,
				showAddPhoto: action.payload,
			};

		case types.setLoadingPhotos:
			return {
				...state,
				loading_photos: action.payload,
			};
		default:
			return state;
	}
};
