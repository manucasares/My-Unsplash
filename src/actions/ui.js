import { types } from 'types/types';

export const showAddPhoto = (boolean) => ({
	type: types.showAddPhoto,
	payload: boolean,
});

export const setLoadingPhotos = (boolean) => ({
	type: types.setLoadingPhotos,
	payload: boolean,
});
