import { basePath } from '../constants';
import { Button, ComponentWrapper } from '../Styles/common.styles';
import { THEME_BLACK_COLOR } from '../Styles/constants.styles';
import { LeftWrapper, RightWrapper } from '../Styles/Header.styles';

export const AboutMe = () => {
	return (
		<ComponentWrapper>
			<LeftWrapper>
				<div
					style={{
						padding: '30px 30px',
						fontSize: '3.3rem',
						fontWeight: 700,
						color: THEME_BLACK_COLOR,
					}}
				>
					<div className="intro_text">Hi there, I'm </div>
					<div style={{ color: 'white' }}>
						{/* Gursimran Singh */}
						<h1 style={{ margin: 0, fontSize: 'inherit' }}>
							{' '}
							Gursimran Singh
						</h1>{' '}
					</div>
					<div className="intro_text">
						Full Stack Developer & learning enthusiast{' '}
					</div>
				</div>
				<div
					style={{
						color: 'white',
						padding: '0px 30px 30px ',
						fontSize: '2rem',
					}}
				>
					With a wealth of industry experience, I specialize in developing
					complex web applications
				</div>
				<div style={{ display: 'flex', padding: '10px 30px 30px' }}>
					<a href="#contact">
						<Button $type="themed">Reach Out to Me</Button>
					</a>
				</div>
			</LeftWrapper>
			<RightWrapper>
				<div style={{ padding: '100px 30px 30px ', textAlign: 'center' }}>
					<img src={`${basePath}about-sticker.png`} alt="sticker" />
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						paddingBottom: '30px',
					}}
				>
					<a href="#work">
						<Button style={{ color: 'white' }} $type="simple">
							See My Work
						</Button>
					</a>
				</div>
			</RightWrapper>
		</ComponentWrapper>
	);
};
