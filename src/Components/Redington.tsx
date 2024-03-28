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

export const Redington = () => {
	return (
		<ComponentWrapper>
			<LeftWrapper>
				<WorkDescriptionWrapper>
					<span style={{ marginBottom: '0.5rem' }}>
						<CounterText>02.</CounterText>
						<WorkNameWrapper>Supplier Order Management</WorkNameWrapper>
					</span>
					<WorkDescWrapper>
						<div>
							This Project is to digitalize approval of the suppliers who
							applied to be part the group and verify documents of the suppliers
							<ul>
								<li>Next JS</li>
								<li>WebSockets</li>
								<li>Microsoft SSO - msal</li>
								<li>Prime React & tailwind</li>
							</ul>
						</div>
						<RoleWrapper>
							<b>Role:</b> API Integeration, Changes in UI as per Mockups,
							Websocket Integeration
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
					src="/Redington-nobg.png"
					style={{ backgroundColor: THEME_ALTER_COLOR }}
				/>
			</RightWrapper>
		</ComponentWrapper>
	);
};
