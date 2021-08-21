import React from 'react';
import { useDispatch } from 'react-redux';

import { Logo, NavbarEl } from './Navbar.elements';
import { Button, Input } from 'shared';
import { AiOutlineSearch } from 'react-icons/ai';
import { showAddPhoto } from 'actions/ui';

export const Navbar = () => {
	const dispatch = useDispatch();

	const handleOpenAddPhoto = () => {
		dispatch(showAddPhoto(true));
	};

	return (
		<NavbarEl>
			<Logo />
			<Input placeholder="Search by name" Icon={AiOutlineSearch} />
			<Button onClick={handleOpenAddPhoto}> Add a photo </Button>
		</NavbarEl>
	);
};
