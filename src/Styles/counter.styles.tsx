import styled, { css } from 'styled-components';
import { tablet } from './constants.styles';

export const CounterText = styled.span`
	color: white;
	font-size: 2.5rem;
	font-weight: 900;
	${tablet(css`
		font-size: 2rem;
	`)}
`;
