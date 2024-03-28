import styled, { css } from 'styled-components';
import { tablet, THEME_TEXT_COLOR } from './constants.styles';

export const CounterText = styled.span`
	color: ${THEME_TEXT_COLOR};
	font-size: 2.5rem;
	font-weight: 900;
  ${tablet(css`
    font-size: 2rem;
  `)}
`;
