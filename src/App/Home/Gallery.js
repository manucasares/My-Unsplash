import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useWindowSize } from 'hooks/useWindowSize';
import {
	startDeletingPhoto,
	setPage,
	startLoadingPhotosScrolling,
} from 'actions/photos';
import { Typography } from 'shared/Typography';
import { Photo, PhotoContainer, DeleteButton } from './Gallery.elements';
import { Spinner } from 'shared';

const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1,
};

export const Gallery = () => {
	const { photos, total, total_results, page } = useSelector(
		(state) => state.photos
	);
	const { loading_photos } = useSelector((state) => state.ui);

	const dispatch = useDispatch();
	const { width } = useWindowSize();
	const [galleryText, setGalleryText] = useState('');

	useEffect(() => {
		if (!total) {
			setGalleryText(
				<>
					There are no photos yet... <br />
					Upload one!
				</>
			);
		} else {
			setGalleryText(<>There are no results for that query.</>);
		}
	}, [total_results, total]);

	const handleNext = () => {
		dispatch(setPage(page + 1));
		dispatch(startLoadingPhotosScrolling());
	};

	const handleDeletePhoto = (id) => {
		dispatch(startDeletingPhoto(id));
	};

	return (
		<>
			{loading_photos ? (
				<Spinner />
			) : photos.length === 0 ? (
				<Typography align="center">{galleryText}</Typography>
			) : (
				<InfiniteScroll
					dataLength={total_results} //This is important field to render the next data
					next={handleNext}
					hasMore={photos.length !== total_results}
					loader={<Spinner />}
				>
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{photos.map(({ id, photo_url, label }) => (
							<PhotoContainer key={id} data-label={label}>
								<DeleteButton
									onClick={() => handleDeletePhoto(id)}
									window_width={width}
								>
									delete
								</DeleteButton>
								<Photo photo_url={photo_url} />
							</PhotoContainer>
						))}
					</Masonry>
				</InfiniteScroll>
			)}
		</>
	);
};
