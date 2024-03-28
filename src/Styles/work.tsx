import styled, { css } from 'styled-components';
import { hexToRgb } from '../helper';
import { tablet, THEME_TEXT_COLOR } from './constants.styles';

export const WorkDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: auto;
	color: ${THEME_TEXT_COLOR};
	padding: 12px 0;
	margin-left: 1rem;
	justify-content: center;
`;

export const WorkNameWrapper = styled.span`
	font-size: 2.5rem;
	font-weight: 900;
	margin-left: 10px;
	text-align: left;
	margin-bottom: 1rem;
	${tablet(css`
		font-size: 2rem;
	`)}
`;

export const WorkDescWrapper = styled.div`
	display: flex;
	border-left: 1px solid	${(() => {
			const { r, g, b } = hexToRgb(THEME_TEXT_COLOR);
			return `rgba(${r}, ${g}, ${b}, 0.3)`;
		})()};
	flex-direction: column;
	padding-left: 1rem;
	min-height: 300px;
	font-size: 1rem;
`;
export const RoleWrapper = styled.span`
	border: 1px solid ${THEME_TEXT_COLOR};
	border-left: none;
	border-right: none;
	margin: 2rem 0px;
	padding: 10px 0;
	width: 90%;
	lineheight: 20px;
`;
