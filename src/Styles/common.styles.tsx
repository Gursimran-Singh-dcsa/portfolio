import styled, { css } from 'styled-components';
import {
	tablet,
	THEME_ALTER_COLOR,
	THEME_BLACK_COLOR,
	THEME_TEXT_COLOR,
} from './constants.styles';

export const BodySection = styled.section`
	display: flex;
	max-height: 100vh;
	overflow-y: scroll;
	${tablet(css`
		flex-direction: column;
		height: auto;
	`)}
	.display_laptop {
		${tablet(css`
			display: none;
		`)}
	}
`;

export const ComponentWrapper = styled.div`
	display: flex;
	height: 100vh;
	${tablet(css`
		flex-direction: column;
		height: auto;
	`)}
`;

export const Button = styled.button<{ $type: 'themed' | 'simple' }>`
	padding: 16px 36px;
	background-color: ${(props) =>
		props.$type === 'themed' ? THEME_ALTER_COLOR : THEME_BLACK_COLOR};
	color: ${THEME_TEXT_COLOR};
	cursor: pointer;
	border: none;
`;
