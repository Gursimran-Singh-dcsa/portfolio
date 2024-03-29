import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { AboutMe } from './Components/About';
import ContactUs from './Components/ContactUs';
import Expertise from './Components/Expertise';
import { FloatingContent } from './Components/FloatingContent';
import Header from './Components/Header';
import Heading from './Components/Heading';
import HeadingReverse from './Components/HeadingReverse';
import { PNG } from './Components/PNG';
import { Redington } from './Components/Redington';
import { SourceSmart } from './Components/SourceSmart';
import Timelinecomp from './Components/Timeline';
import { Xataka } from './Components/Xataka';
import { ThemeContext } from './Contexts/ThemeContext';
import { BodySection } from './Styles/common.styles';
import { FloatingButton } from './Styles/floating.styles';
// import { LeftWrapper, RightWrapper } from './Styles/Header.styles';

function App() {
	const [openColorPicker, setOpenColorPicker] = useState(false);
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme}>
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
					<Timelinecomp />
					<HeadingReverse text="My Work" />
					<Xataka />
					<Redington />
					<SourceSmart />
					<PNG />
					<Expertise />
					<ContactUs />
					<FloatingButton
						onClick={() => {
							setOpenColorPicker((prev) => !prev);
						}}
					></FloatingButton>
					{openColorPicker ? <FloatingContent /> : ''}
				</div>
			</BodySection>
		</ThemeProvider>
	);
}

export default App;
