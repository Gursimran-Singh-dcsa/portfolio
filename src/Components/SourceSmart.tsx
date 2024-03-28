import { Button, ComponentWrapper } from '../Styles/common.styles';
import { THEME_ALTER_COLOR } from '../Styles/constants.styles';
import { LeftWrapper, RightWrapper } from '../Styles/Header.styles';
import {
	RoleWrapper,
	WorkDescriptionWrapper,
	WorkDescWrapper,
	WorkNameWrapper,
} from '../Styles/work';
import { CounterText } from '../Styles/counter.styles';

export const SourceSmart = () => {
	return (
		<ComponentWrapper>
			<LeftWrapper>
				<WorkDescriptionWrapper>
					<span style={{ marginBottom: '0.5rem' }}>
						<CounterText>03.</CounterText>
						<WorkNameWrapper>Source-Smart</WorkNameWrapper>
					</span>
					<WorkDescWrapper>
						<div>
							This Project Aims to Automate the process of deciding Candidature
							of a candidate by using an AI tool for matching Resume of
							candidate with Job description
							<ul>
								<li>React JS</li>
								<li>WebSockets</li>
								<li>React Router</li>
								<li>Google Authentication</li>
								<li>Ant Design & Styled Components</li>
							</ul>
						</div>
						<RoleWrapper>
							<b>Role:</b> Creating Boilerplate code, Integrating API, Creating
							Screens from Figma design, Production Support, Routing etc
						</RoleWrapper>
						<div>
							<a href="https://supplierordermgmt.netlify.app/" target="_blank">
								<Button $type="themed"> Go To Website</Button>
							</a>
						</div>
					</WorkDescWrapper>
				</WorkDescriptionWrapper>
			</LeftWrapper>
			<RightWrapper $showNone>
				<img
					src="/source-smart-nobg.png"
					style={{ backgroundColor: THEME_ALTER_COLOR }}
				/>
			</RightWrapper>
		</ComponentWrapper>
	);
};
