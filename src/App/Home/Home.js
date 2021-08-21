import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from 'shared';
import { AddPhoto } from './AddPhoto';
import { Gallery } from './Gallery';
import { Navbar } from './Navbar';

export const Home = () => {
	const { showAddPhoto } = useSelector((state) => state.ui);

	return (
		<Container>
			<Navbar />
			<Gallery />

			{showAddPhoto && <AddPhoto />}
		</Container>
	);
};
