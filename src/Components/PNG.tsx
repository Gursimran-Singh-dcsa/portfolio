import { Button, ComponentWrapper } from '../Styles/common.styles';
// import { (props) => props.theme.THEME_ALTER_COLOR } from '../Styles/constants.styles';
import { LeftWrapper, RightWrapper } from '../Styles/Header.styles';
import {
	RoleWrapper,
	WorkDescriptionWrapper,
	WorkDescWrapper,
	WorkNameWrapper,
} from '../Styles/work';
import { CounterText } from '../Styles/counter.styles';
import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { basePath } from '../constants';

export const PNG = () => {
	const {theme} = useContext(ThemeContext)
	return (
		<ComponentWrapper>
			<LeftWrapper>
				<WorkDescriptionWrapper>
					<span style={{ marginBottom: '0.5rem' }}>
						<CounterText>04.</CounterText>
						<WorkNameWrapper>PNG Software</WorkNameWrapper>
					</span>
					<WorkDescWrapper>
						<div>
							This Website is protfolio website for PNG Software Technologies
							<ul>
								<li>Next JS</li>
								<li>Express Js</li>
								<li>Styled Components</li>
							</ul>
						</div>
						<RoleWrapper>
							<b>Role:</b> API Integeration, Changes in UI as per Mockups,
							Websocket Integeration
						</RoleWrapper>
						<div>
							<a href="https://pngsoftware.in/" target="_blank">
								<Button $type="themed"> Go To Website</Button>
							</a>
						</div>
					</WorkDescWrapper>
				</WorkDescriptionWrapper>
			</LeftWrapper>
			<RightWrapper $showNone>
				<img
					src={`${basePath}png-nobg.png`}
					style={{ backgroundColor: theme.THEME_ALTER_COLOR }}
				/>
			</RightWrapper>
		</ComponentWrapper>
	);
};
