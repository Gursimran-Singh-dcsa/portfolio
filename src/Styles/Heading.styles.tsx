import styled, { css } from 'styled-components';
import { tablet, THEME_ALTER_COLOR, THEME_BLACK_COLOR } from './constants.styles';

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
	background-color: ${THEME_BLACK_COLOR};
	.left {
		width: 5vw;
		${tablet(css`
			width: 0;
		`)}
	}
	.right {
		width: calc(85vw - 5px);
		padding: 30px 0px;
		border: 5px solid ${THEME_ALTER_COLOR};
		border-right: 0;
		${tablet(css`
			border: none;
		`)}
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		span {
			margin-left: 30px;
		}
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
	background-color: ${THEME_BLACK_COLOR};
	.left {
		width: 85vw;
		padding: 30px 0px;
		border: 5px solid ${THEME_ALTER_COLOR};
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
		`)}
	}
	.right {
		width: calc(5vw - 5px);
		${tablet(css`
			width: 0;
		`)}
	}
`;
