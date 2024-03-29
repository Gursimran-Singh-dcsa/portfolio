import { THEME_TEXT_COLOR } from '../Styles/constants.styles';
import { ContactWrapper, FromWrapper } from '../Styles/contactus.styles';

const ContactUs = () => {
	return (
		<>
			<ContactWrapper id="contact">
				<FromWrapper>
					<span className="reachmetext"> Reach Out To Me</span>{' '}
					<form action="https://api.web3forms.com/submit" method="POST">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								flexWrap: 'wrap',
								rowGap: '5px',
							}}
						>
							<input
								type="hidden"
								name="access_key"
								value="596da3fb-4738-47fd-8245-d4f9bf52a0b7"
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									rowGap: '3px',
								}}
							>
								<label>Name*</label>

								<input
									type="text"
									name="name"
									required
									className="text-input"
								/>
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									rowGap: '3px',
								}}
							>
								<label>Phone</label>

								<input type="text" name="phone" className="text-input" />
							</div>
						</div>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								rowGap: '3px',
							}}
						>
							<label>Email*</label>

							<input
								type="Email"
								name="email"
								required
								className="text-input"
							/>
						</div>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								rowGap: '3px',
							}}
						>
							<label>Message*</label>

							<textarea name="message" required className="message"></textarea>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								columnGap: '3px',
							}}
						>
							<input type="checkbox" name="hireMe" />
							<label>Do You want to Hire Me?</label>
						</div>
						<input
							type="hidden"
							name="redirect"
							value="https://web3forms.com/success"
						/>
						<button className="submit" type="submit">
							Send Message
						</button>
					</form>
				</FromWrapper>
				<div className="mobile_links">
					<a
						href="https://www.linkedin.com/in/gursimran-singh-b83a3b126"
						target="_blank"
					>
						<img src="/linkedin.png" alt="linkedin" />
					</a>
					<a href="https://github.com/Gursimran-Singh-dcsa" target="_blank">
						<img src="/github.png" alt="github" />
					</a>
					<a href="https://wa.me/+918950848075" target="_blank">
						<img src="/whatsapp.png" alt="whatsapp" />
					</a>
					<a
						href="https://www.facebook.com/gursimran.singh.754"
						target="_blank"
					>
						<img src="/facebook.png" alt="facebook" />
					</a>
					<a
						href="https://www.instagram.com/gursimran__singh_/"
						target="_blank"
					>
						<img src="/instagram.png" alt="instagram" />
					</a>
					<a href="https://twitter.com/gursimransing23" target="_blank">
						<img src="/x.png" alt="x" />
					</a>
				</div>
				<div className="mobile_only" style={{ marginTop: '1rem' }}>
					<a target="_blank" href="/Resume.pdf">
						<span
							style={{ textDecoration: 'underline', color: THEME_TEXT_COLOR }}
						>
							Resume
						</span>
					</a>
				</div>
			</ContactWrapper>
		</>
	);
};
export default ContactUs;
