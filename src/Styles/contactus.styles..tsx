import styled, { css } from 'styled-components';
import {
	tablet,
	THEME_ALTER_COLOR,
	THEME_BLACK_COLOR,
	THEME_TEXT_COLOR,
} from './constants.styles';

export const ContactWrapper = styled.div`
	background: ${THEME_ALTER_COLOR};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5rem 0;
	.mobile_only {
		display: none;
		${tablet(
			css`
				display: block;
			`
		)}
	}
	.mobile_links {
		display: none;
		width: 100vw;
		${tablet(css`
			display: flex;
			justify-content: center;
			column-gap: 10px;
			margin-top: 30px;
			img {
				cursor: pointer;
				width: 30px;
				height: 30px;
			}
		`)}
	}
`;
export const FromWrapper = styled.div`
	flex-wrap: wrap;
	min-height: 50vh;
	width: 60vw;
	padding: 10px 10px;
	border: 10px solid ${THEME_TEXT_COLOR};
	background: ${THEME_BLACK_COLOR};
	display: flex;
	flex-direction: column;
	rowgap: 1.5rem;
	justify-content: space-around;
	align-items: center;
	padding: 3rem 0;
	${tablet(css`
		border: 0;
		width: 90vw;
	`)}
	.reachmetext {
		font-size: 3rem;
		font-weight: 700;
		${tablet(css`
			font-size: 1.5rem;
		`)}
	}
	form {
		width: 40vw;
		display: flex;
		flex-direction: column;
		padding: 4rem 0;
		row-gap: 2rem;
		${tablet(css`
			border: 0;
			width: 80vw;
		`)}
		.text-input,
		.message {
			color: #cecece;
			letter-spacing: 0.1px;
			background-color: #353535;
			border: 1px solid #636363;
			font-size: 16px;
			font-weight: 500;
			min-height: 24px;
			${tablet(css`
				border: 0;
				width: 80vw;
			`)}
		}
		.text-input {
			min-width: 18vw;
		}
		.message {
			height: 48px;
		}
		.submit {
			width: 100%;
			background-color: ${THEME_ALTER_COLOR};
			color: ${THEME_TEXT_COLOR};
			text-align: center;
			text-transform: none;
			justify-content: center;
			align-self: auto;
			align-items: center;
			padding: 16px 36px;
			font-family: Neuemontreal, sans-serif;
			font-size: 1.125rem;
			font-weight: 700;
			transition: all 0.3s;
			display: flex;
			position: relative;
			border: 0;
			cursor: pointer;
			border: 1px solid ${THEME_ALTER_COLOR};
		}
		.submit:hover {
			background-color: ${THEME_BLACK_COLOR};
			color: ${THEME_ALTER_COLOR};
			border: 1px solid ${THEME_ALTER_COLOR};
		}
	}
`;
