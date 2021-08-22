import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store/store';
import { theme } from 'styles/themes';
import { Home } from 'App/Home/Home';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Toaster />
				<Home />
			</Provider>
		</ThemeProvider>
	);
};
