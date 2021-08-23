import { types } from 'types/types';

const initialState = {
	photos: [],
	page: 0,
};

export const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.setPhotos:
			return {
				...state,
				photos: action.payload,
			};

		case types.addPhotosWhenScrolling:
			return {
				...state,
				photos: [...state.photos, ...action.payload],
			};

		case types.addPhoto:
			return {
				...state,
				photos: [action.payload, ...state.photos],
			};

		case types.deletePhoto:
			return {
				...state,
				photos: state.photos.filter((p) => p.id !== action.payload),
			};

		case types.setTotalPhotoResults:
			return {
				...state,
				total_results: action.payload,
			};

		case types.setTotalPhotos:
			return {
				...state,
				total: action.payload,
			};

		case types.setPage:
			return {
				...state,
				page: action.payload,
			};

		default:
			return state;
	}
};
