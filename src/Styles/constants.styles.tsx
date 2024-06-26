import { css } from 'styled-components';

// export const getColors().THEME_BLACK_COLOR = 'rgba(0,0,0,0.85)';
// export const getColors().THEME_BLACK_COLOR = 'rgba(0,0,0,1)';
// export const getColors().THEME_BLACK_COLOR = '#36454F';
// export const getColors().(props) => props.theme.THEME_ALTER_COLOR = '#cf123d';
// export const getColors().(props) => props.theme.THEME_ALTER_COLOR = '#be8200';
// export const getColors().(props) => props.theme.THEME_ALTER_COLOR = '#FFA500';
export const FONT_SIZE_16 = '16px';
// export const getColors().THEME_TEXT_COLOR = '#ffffff';

export const getColors = () => {
	const defaultOptions = {
		id: 5,
		THEME_BLACK_COLOR: '#000000',
		THEME_ALTER_COLOR: 'rgb(254, 212, 58)',
		// text: '#ffffff',
		THEME_TEXT_COLOR: '#000000',
		active: false,
		invertIcons: true,
		skillButtonColor: '#000000',
	};
	// @ts-expect-error
	const theme = JSON.parse(sessionStorage.getItem('colors') ?? null);
	if (!theme) {
		return defaultOptions;
	}
	// const selectedOption = colorOptions.find((color: any) => color.active);
	// if (!selectedOption) return defaultOptions;
	return theme;
};
export const { THEME_BLACK_COLOR, THEME_ALTER_COLOR, THEME_TEXT_COLOR } =
	getColors();

export const SIZES = {
	SMALL_MOBILE: '320px',
	MOBILE: '576px',
	TABLET: '768px',
	LAPTOP: '1024px',
	DESKTOP: '2560px',
};
export const smallMobile = (inner: any) => css`
	@media (max-width: ${SIZES.SMALL_MOBILE}) {
		${inner};
	}
`;
export const mobile = (inner: any) => css`
	@media (max-width: ${SIZES.MOBILE}) {
		${inner};
	}
`;
export const tablet = (inner: any) => css`
	@media (max-width: ${SIZES.TABLET}) {
		${inner};
	}
`;
export const desktop = (inner: any) => css`
	@media (max-width: ${SIZES.DESKTOP}) {
		${inner};
	}
`;
export const laptop = (inner: any) => css`
	@media (max-width: ${SIZES.LAPTOP}) {
		${inner};
	}
`;
