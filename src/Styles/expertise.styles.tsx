import styled from 'styled-components';
import { hexToRgb } from '../helper';

export const SkillWrapper = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	background-color: ${(props) => props.theme.THEME_BLACK_COLOR};
	border-top: 30px solid ${(props) => props.theme.THEME_ALTER_COLOR};
	// border-left: 30px solid ${(props) => props.theme.THEME_ALTER_COLOR};
	// border-bottom: 30px solid ${(props) => props.theme.THEME_ALTER_COLOR};
`;

export const SkillHeading = styled.div`
	font-size: 1.5rem;
	padding: 10px 0px;
`;
export const SkillButton = styled.button`
	background-color: ${(props) =>
		(() => {
			const { r, g, b } = hexToRgb(props.theme.THEME_ALTER_COLOR);
			return `rgba(${r}, ${g}, ${b}, 0.8)`;
		})()};
	border: none;
	padding: 5px 10px;
	font-weight: 700;
	font-size: 1.25rem;
	color: ${(props) => props.theme.skillButtonColor};
`;
export const SkillSetWrapper = styled.div`
	display: flex;
	column-gap: 1.5rem;
	row-gap: 1.5rem;
	flex-wrap: wrap;
`;
