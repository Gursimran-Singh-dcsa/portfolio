import styled, { css } from 'styled-components';
import { tablet } from './constants.styles';

export const StyledHeading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5rem;
	font-weight: 700;
	${tablet(css`
		font-size: 2rem;
		text-align: center;
		border: none;
	`)}
	background-color: ${(props) => props.theme.THEME_BLACK_COLOR};
	.left {
		width: 5vw;
		${tablet(css`
			width: 0;
		`)}
	}
	.right {
		width: calc(85vw - 5px);
		padding: 30px 0px;
		border: 5px solid ${(props) => props.theme.THEME_ALTER_COLOR};
		border-right: 0;
		${tablet(css`
			border: none;
			width: 100vw;
		`)}
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		span {
			margin-left: 30px;
		}
	}

	.children {
		width: calc(85vw - 5px);
		font-size: 1rem;
		padding: 30px 3.5rem;
		border: 5px solid ${(props) => props.theme.THEME_ALTER_COLOR};
		border-right: 0;
		${tablet(css`
			border: none;
		`)}
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		display: flex;
		flex-wrap: wrap;
		column-gap: 3.5rem;
	}
`;

export const StyledHeadingReverse = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 5rem;
	font-weight: 700;
	${tablet(css`
		font-size: 2rem;
		text-align: center;
		border: none;
	`)}
	background-color: ${(props) => props.theme.THEME_BLACK_COLOR};
	.left {
		width: 85vw;
		padding: 30px 0px;
		border: 5px solid ${(props) => props.theme.THEME_ALTER_COLOR};
		border-left: 0;

		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		display: flex;
		justify-content: flex-end;
		span {
			margin-right: 30px;
		}
		${tablet(css`
			border: none;
			justify-content: center;
			width: 100vw;
		`)}
	}
	.right {
		width: calc(5vw - 5px);
		${tablet(css`
			width: 0;
		`)}
	}
`;
