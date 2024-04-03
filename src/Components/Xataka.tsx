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

export const Xataka = () => {
	const { theme }: any = useContext(ThemeContext);
	return (
		<ComponentWrapper id="work">
			<LeftWrapper>
				<WorkDescriptionWrapper>
					<span style={{ marginBottom: '0.5rem' }}>
						<CounterText>01.</CounterText>
						<WorkNameWrapper>LP Backend</WorkNameWrapper>
					</span>
					<WorkDescWrapper>
						<div>
							This Project is to develop and maintain <b>Webedia</b> websites
							using various technologies including
							<ul>
								<li>Symfony - php</li>
								<li>Jquery</li>
								<li>Backbone JS</li>
								<li>React Js</li>
							</ul>
						</div>
						<RoleWrapper>
							<b>Role:</b> API Integeration, Changes in UI as per Mockups,
							Production Support
						</RoleWrapper>
						<div>
							<a href="https://www.xataka.com" target="_blank">
								{' '}
								<Button $type="themed"> Go To Website</Button>
							</a>
						</div>
					</WorkDescWrapper>
				</WorkDescriptionWrapper>
			</LeftWrapper>
			<RightWrapper $showNone>
				<img
					src={`${basePath}xataka-nobg.png`}
					style={{ backgroundColor: theme.THEME_ALTER_COLOR }}
				/>
			</RightWrapper>
		</ComponentWrapper>
	);
};
