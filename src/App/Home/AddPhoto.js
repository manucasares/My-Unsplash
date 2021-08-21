import React from 'react';
import { useDispatch } from 'react-redux';

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

export const AddPhoto = () => {
	const dispatch = useDispatch();

	const closeWindow = () => {
		dispatch(showAddPhoto(false));
	};

	return (
		<Overlay>
			<AddWindow>
				<Typography fz={theme.fz['500']} color={theme.colors.main}>
					Add a new photo
				</Typography>

				<InputsContainer>
					<div>
						<Typography
							as="label"
							for="input_label"
							mb=".5rem"
							fz={theme.fz['200']}
						>
							Label
						</Typography>
						<Input
							id="input_label"
							placeholder="Your photo label"
							borderColor={theme.colors.dark}
						/>
					</div>

					<div>
						<Typography
							as="label"
							for="input_url"
							mb=".5rem"
							fz={theme.fz['200']}
						>
							Photo URL
						</Typography>
						<Input
							id="input_url"
							placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
							borderColor={theme.colors.dark}
						/>
					</div>
				</InputsContainer>

				<Buttons>
					<GrayButton onClick={closeWindow}>Cancel</GrayButton>
					<Button>Submit</Button>
				</Buttons>
			</AddWindow>
		</Overlay>
	);
};
