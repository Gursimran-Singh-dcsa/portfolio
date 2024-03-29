import styled, { css } from 'styled-components';
import { tablet } from './constants.styles';

export const TimelineDiv = styled.div`
  max-width: 90vw;
  overflow: hidden;
  ${tablet(
		css`
			max-width: 100vw;
		`
	)}
  position: relative;
  background: ${(props) => props.theme.THEME_BLACK_COLOR};
  height: auto;
  color: ${(props) => props.theme.THEME_TEXT_COLOR};
}
h1 {
  font-weight: 700;
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: ${(props) => props.theme.THEME_ALTER_COLOR};
  top: 0;
  bottom: 0;
  left: 50%;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 250px;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: ${(props) => props.theme.THEME_BLACK_COLOR};
  border: 4px solid ${(props) => props.theme.THEME_ALTER_COLOR};
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: calc(45vw - 346px);
  ${tablet(
		css`
			left: 0;
		`
	)}
}

/* Place the container to the right */
.right {
  left: 44vw;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid ${(props) => props.theme.THEME_ALTER_COLOR};
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent ${(props) => {
		console.log('ethe', props.theme.THEME_ALTER_COLOR);
		return props.theme.THEME_ALTER_COLOR;
	}};
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid ${(props) => props.theme.THEME_ALTER_COLOR};
  border-width: 10px 10px 10px 0;
  border-color: transparent ${(props) =>
		props.theme.THEME_ALTER_COLOR} transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 10px 20px;
  background-color: ${(props) => props.theme.THEME_BLACK_COLOR};
  border: 1px solid ${(props) => props.theme.THEME_ALTER_COLOR};
  color: ${(props) => props.theme.THEME_TEXT_COLOR} !important;
  position: relative;
  border-radius: 6px;

  ${tablet(
		css`
			width: 180px;
		`
	)}

}

/* Media queries - Responsive timeline on screens less than 600px wide */
${tablet(css`
	/* Place the timelime to the left */
	.timeline::after {
		left: 31px;
	}

	/* Full-width containers */
	.container {
		width: 100%;
		padding-left: 70px;
		padding-right: 25px;
	}

	/* Make sure that all arrows are pointing leftwards */
	.container::before {
		left: 60px;
		border: medium solid white;
		border-width: 10px 10px 10px 0;
		border-color: transparent ${(props) => props.theme.THEME_ALTER_COLOR}
			transparent transparent;
	}

	/* Make sure all circles are at the same spot */
	.left::after,
	.right::after {
		left: 15px;
	}

	/* Make all right containers behave like the left ones */
	.right {
		left: 0%;
	}
`)}

}
`;
