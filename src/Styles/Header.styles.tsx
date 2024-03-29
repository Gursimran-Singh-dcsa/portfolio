import styled, { css } from 'styled-components';
import { tablet, THEME_BLACK_COLOR } from './constants.styles';

export const StyledHeader = styled.header`
	width: 10vw;
	height: 100vh;
	flex-direction: column;
	justify-content: space-between;
	color: ${THEME_BLACK_COLOR};
	img {
		cursor: pointer;
	}
	.mobile_about_me {
		display: none;
		${tablet(css`
			display: block;
		`)}
	}
	.me {
		width: 8vw;
		height: 8vw;
		border-radius: 100%;
		${tablet(css`
			width: 64px;
			height: 64px;
		`)}
	}
	.desktop_aboutme {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		align-items: center;
		font-size: 1rem;
		${tablet(css`
			display: none;
		`)}
	}
	.desktop_links {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
		${(props) => (props.theme.invertIcons ? 'filter: invert(1)' : '')};
		${tablet(css`
			display: none;
		`)}
	}
	${tablet(css`
		width: auto;
		min-height: 64px;
		flex-direction: row;
	`)}

	background-color: ${(props) => props.theme.THEME_ALTER_COLOR};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 20px;
`;

export const LeftWrapper = styled.section`
	background: ${(props) => props.theme.THEME_BLACK_COLOR};
	color: ${(props) => props.theme.THEME_ALTER_COLOR};
	width: 45vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${tablet(css`
		width: 100vw;
	`)}
	.intro_text {
		float: none;
		clear: none;
		font-size: 4rem;
		letter-spacing: -2px;
		font-weight: 700;
		overflow: visible;
		color: ${(props) => props.theme.THEME_BLACK_COLOR};
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: #ffffff;
		${tablet(css`
			font-weight: 400;
			font-size: 2rem;
			letter-spacing: 2px;
		`)}
	}
`;

export const RightWrapper = styled.section<{ $showNone?: boolean }>`
	background: ${(props) => props.theme.THEME_ALTER_COLOR};
	color: ${(props) => props.theme.THEME_BLACK_COLOR};
	width: 45vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${tablet(css`
		width: 100vw;
		${(props: any) =>
			props.$showNone
				? css`
						border: 1px solid ${(props) => props.theme.THEME_ALTER_COLOR};
						* {
							display: none;
						}
				  `
				: ''}
	`)}
	}
`;
