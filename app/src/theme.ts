// import { createContext, useState, useMemo } from 'react'; // switch to dark variation
import { createTheme } from '@mui/material/styles';

// could be design tokens

declare module '@mui/material/styles' {
	interface Palette {
		tertiary?: Palette['primary'];
	}

	interface PaletteOptions {
		tertiary?: PaletteOptions['primary'];
	}
}

export const themeSettings = () => {

};

export const theme = createTheme({
	palette: {
		primary: {
			main: '#E21A1A',
		},
		secondary: {
			main: '#19857b',
		},
		tertiary: {
			main: '#ff0000',
		},
		grey: {
			500: '#9e9e9e',
		},
	},

	typography: {
		fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 12,

		h1: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h2: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h3: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h4: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h5: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},
		h6: {
			fontFamily: '"RRG", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 42,
		},


	},

	// spacing: 8,
});
