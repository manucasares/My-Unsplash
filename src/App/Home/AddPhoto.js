import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from 'hooks/useForm';
import { showAddPhoto } from 'actions/ui';
import { Button, Input } from 'shared';
import { GrayButton } from 'shared/Button';
import { Typography } from 'shared/Typography';
import { theme } from 'styles/themes';
import {
	AddWindow,
	Buttons,
	InputsContainer,
	Overlay,
} from './AddPhoto.elements';
import { startUploadingPhoto } from 'actions/photos';
import toast from 'react-hot-toast';

export const AddPhoto = () => {
	const [{ label, photo_url }, handleInputChange] = useForm({
		label: '',
		photo_url: '',
	});

	const dispatch = useDispatch();

	const closeWindow = () => {
		dispatch(showAddPhoto(false));
	};

	const uploadPhoto = () => {
		if (!label.trim() || !photo_url.trim()) {
			toast.error('There are empty fields.');
			return;
		}

		dispatch(startUploadingPhoto(label, photo_url));
	};

	return (
		<Overlay>
			<AddWindow>
				<Typography fz={theme.fz['400']} color={theme.colors.main}>
					Add a new photo
				</Typography>

				<InputsContainer>
					<div>
						<Typography
							as="label"
							htmlFor="input_label"
							mb=".5rem"
							fz={theme.fz['200']}
						>
							Label
						</Typography>
						<Input
							id="input_label"
							placeholder="Your photo label"
							dark={true}
							name="label"
							onChange={handleInputChange}
							value={label}
						/>
					</div>

					<div>
						<Typography
							as="label"
							htmlFor="input_url"
							mb=".5rem"
							fz={theme.fz['200']}
						>
							Photo URL
						</Typography>
						<Input
							id="input_url"
							placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
							dark={true}
							name="photo_url"
							onChange={handleInputChange}
							value={photo_url}
						/>
					</div>
				</InputsContainer>

				<Buttons>
					<GrayButton onClick={closeWindow}>Cancel</GrayButton>
					<Button onClick={uploadPhoto}>Submit</Button>
				</Buttons>
			</AddWindow>
		</Overlay>
	);
};
