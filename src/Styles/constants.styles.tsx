import { css } from 'styled-components';

// export const THEME_BLACK_COLOR = 'rgba(0,0,0,0.85)';
// export const THEME_BLACK_COLOR = 'rgba(0,0,0,1)';
export const THEME_BLACK_COLOR = '#36454F';
// export const THEME_ALTER_COLOR = '#cf123d';
export const THEME_ALTER_COLOR = '#be8200';
// export const THEME_ALTER_COLOR = '#FFA500';
export const FONT_SIZE_16 = '16px';
export const THEME_TEXT_COLOR = '#ffffff';

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
