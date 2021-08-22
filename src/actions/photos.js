import toast from 'react-hot-toast';
import axios from 'axios';
import { types } from 'types/types';
import { setLoadingPhotos, showAddPhoto } from './ui';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;

export const startLoadingPhotosScrolling = () => {
	return async (dispatch, getState) => {
		const { page } = getState().photos;
		const limit = 5;

		// Multiplicar la pagina por la cantidad de resultados
		const skip = page * limit;

		try {
			const res = await axios.get(`${BASE_URL}/photos`, {
				params: {
					skip,
					limit,
				},
			});

			dispatch(addPhotosWhenScrolling(res.data.photos));
		} catch (error) {
			console.error(error);
			toast.error(
				'There was a problem trying to load the photos from the server.'
			);
		} finally {
		}
	};
};

export const startUploadingPhoto = (label, photo_url) => {
	return async (dispatch, getState) => {
		const { total } = getState().photos;

		const payload = {
			label,
			photo_url,
			timestamp: new Date().getTime(),
		};

		// Loading notification
		const toastId = toast.loading('Uploading photo...');

		try {
			const res = await axios.post(`${BASE_URL}/photos`, payload);

			// Notificación de éxito
			toast.success('Uploaded succesfully!', {
				id: toastId,
			});

			// Aumentar en uno el total
			dispatch(setTotalPhotos(total + 1));

			// Subir foto localmente
			dispatch(addPhoto(res.data));
		} catch (error) {
			// Notificación de error
			toast.error('Error uploading :(', {
				id: toastId,
			});
			console.error(error);
		} finally {
			dispatch(showAddPhoto(false));
		}
	};
};

export const startDeletingPhoto = (id) => {
	return async (dispatch) => {
		// Notificacion de loading
		const notificationId = toast.loading('Deleting photo...');

		try {
			const res = await axios.delete(`${BASE_URL}/photos/${id}`);

			// Eliminamos localmente
			dispatch(deletePhoto(res.data.id));

			// Notificacion success
			toast.success('Photo deleted successfully!', {
				id: notificationId,
			});
		} catch (error) {
			console.error(error);
			// Notificacion error
			toast.error('Error deleting photo.', {
				id: notificationId,
			});
		}
	};
};

export const startSearchingPhotos = (query) => {
	return async (dispatch, getState) => {
		try {
			const { page } = getState().photos;

			dispatch(setLoadingPhotos(true));
			const res = await axios.get(`${BASE_URL}/search?q=${query}`, {
				params: {
					skip: query === '' ? page : 0,
				},
			});

			dispatch(setTotalPhotos(res.data.total));
			dispatch(setPhotos(res.data.photos));
		} catch (error) {
			console.error(error);
		} finally {
			dispatch(setLoadingPhotos(false));
		}
	};
};

export const setPage = (page) => ({
	type: types.setPage,
	payload: page,
});

const setPhotos = (photos) => ({
	type: types.setPhotos,
	payload: photos,
});

const addPhoto = (photo) => ({
	type: types.addPhoto,
	payload: photo,
});

const setTotalPhotos = (total) => ({
	type: types.setTotalPhotos,
	payload: total,
});

const deletePhoto = (id) => ({
	type: types.deletePhoto,
	payload: id,
});

const addPhotosWhenScrolling = (photos) => ({
	type: types.addPhotosWhenScrolling,
	payload: photos,
});
