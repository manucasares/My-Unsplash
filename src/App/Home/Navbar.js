import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from 'hooks/useForm';
import { Logo, NavbarEl } from './Navbar.elements';
import { Button, Input } from 'shared';
import { AiOutlineSearch } from 'react-icons/ai';
import { showAddPhoto } from 'actions/ui';
import { setPage, startSearchingPhotos } from 'actions/photos';

export const Navbar = () => {
	const dispatch = useDispatch();
	const [{ search }, handleInputChange] = useForm({
		search: '',
	});

	useEffect(() => {
		dispatch(setPage(0));
		dispatch(startSearchingPhotos(search));
	}, [search, dispatch]);

	const handleOpenAddPhoto = () => {
		dispatch(showAddPhoto(true));
	};

	return (
		<NavbarEl>
			<Logo />
			<Input
				placeholder="Search by name"
				Icon={AiOutlineSearch}
				onChange={handleInputChange}
				value={search}
				name="search"
			/>
			<Button onClick={handleOpenAddPhoto}> Add a photo </Button>
		</NavbarEl>
	);
};
