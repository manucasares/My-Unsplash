import React from 'react';
import Masonry from 'react-masonry-css';

import { Typography } from 'shared/Typography';

const fakePhotos = [
	{
		id: 0,
		src: 'https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg',
		label: 'Some label',
	},
	{
		id: 1,
		src: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg',
		label: 'Some label',
	},
	{
		id: 2,
		src: 'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
		label: 'Some label',
	},
	{
		id: 3,
		src: 'https://ladefinicion.com/wp-content/uploads/2019/08/paisaje-natural.jpg',
		label: 'Some label',
	},
	{
		id: 4,
		src: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg',
		label: 'Some label',
	},
	{
		id: 5,
		src: 'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
		label: 'Some label',
	},
	{
		id: 6,
		src: 'https://www.blogartesvisuales.net/wp-content/uploads/2012/04/foto-paisaje-barca.jpg',
		label: 'Some label',
	},
	{
		id: 7,
		src: 'https://www.blogartesvisuales.net/wp-content/uploads/2012/04/foto-paisaje-barca.jpg',
		label: 'Some label',
	},
];

const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1,
};

export const Gallery = () => {
	return (
		<>
			{fakePhotos.length === 0 ? (
				<Typography align="center">
					There are no photos yet... <br />
					Upload one!
				</Typography>
			) : (
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{fakePhotos.map((photo) => (
						<img
							key={photo.id}
							src={photo.src}
							alt={photo.label}
						/>
					))}
				</Masonry>
			)}
		</>
	);
};
