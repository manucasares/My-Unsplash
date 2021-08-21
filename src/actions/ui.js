import { types } from 'types/types';

export const showAddPhoto = (boolean) => ({
	type: types.showAddPhoto,
	payload: boolean,
});
