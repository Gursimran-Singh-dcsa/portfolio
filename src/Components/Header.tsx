import { THEME_TEXT_COLOR } from '../Styles/constants.styles';
import { StyledHeader } from '../Styles/Header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<img
				className="me"
				src="/me.png"
				alt="me"
			/>
				<span className="mobile_about_me">
					Proudly <span style={{ fontSize: '20px' }}>🇮🇳</span>
				</span>
			<div className="desktop_aboutme">
				<span>
					Proudly <span style={{ fontSize: '20px' }}>🇮🇳</span>
				</span>
				<span>
					{(() => {
						let nov2K18 = new Date('12/01/2018').getTime();
						const ageMs = Date.now() - nov2K18;
						const age = new Date(ageMs);
						return (
							Math.floor(Math.abs(age.getUTCFullYear() - 1970)) +
							'+ years experince'
						);
					})()}
				</span>
				<span>MCA</span>
				<a target="_blank" href="/Resume.pdf">
					<span
						style={{ textDecoration: 'underline', color: THEME_TEXT_COLOR }}
					>
						Resume
					</span>
				</a>
			</div>
			<div
				className="desktop_links"
			>
				<a
					href="https://www.linkedin.com/in/gursimran-singh-b83a3b126"
					target="_blank"
				>
					<img src="/linkedin.png" alt="linkedin" />
				</a>
				<a
					href="https://github.com/Gursimran-Singh-dcsa"
					target="_blank"
				>
					<img src="/github.png" alt="github" />
				</a>
				<a href="https://wa.me/+918950848075" target="_blank">
					<img src="/whatsapp.png" alt="whatsapp" />
				</a>
				<a href="https://www.facebook.com/gursimran.singh.754" target="_blank">
					<img src="/facebook.png" alt="facebook" />
				</a>
				<a href="https://www.instagram.com/gursimran__singh_/" target="_blank">
					<img src="/instagram.png" alt="instagram" />
				</a>
				<a href="https://twitter.com/gursimransing23" target="_blank">
					<img src="/x.png" alt="x" />
				</a>
			</div>
		</StyledHeader>
	);
};
export default Header;
