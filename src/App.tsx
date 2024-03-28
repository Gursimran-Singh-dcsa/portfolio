import './App.css';
import { AboutMe } from './Components/About';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import Heading from './Components/Heading';
import HeadingReverse from './Components/HeadingReverse';
import { PNG } from './Components/PNG';
import { Redington } from './Components/Redington';
import { SourceSmart } from './Components/SourceSmart';
import Timeline from './Components/Timeline';
import { Xataka } from './Components/Xataka';
import { BodySection } from './Styles/common.styles';
// import { LeftWrapper, RightWrapper } from './Styles/Header.styles';

function App() {
	return (
		<BodySection>
			<Header />
			<div
				style={{
					maxHeight: '100vh',
					overflowY: 'scroll',
				}}
			>
				<AboutMe />
				<Heading text="My Journey" />
				<Timeline />
				<HeadingReverse text="My Work" />
				<Xataka />
				<Redington />
				<SourceSmart />
				<PNG />
				<ContactUs />
			</div>
		</BodySection>
	);
}

export default App;
