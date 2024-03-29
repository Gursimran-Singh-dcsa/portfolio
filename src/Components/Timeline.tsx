import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { getColors } from '../Styles/constants.styles';
const Timelinecomp = () => {
	const { THEME_ALTER_COLOR, THEME_BLACK_COLOR, THEME_TEXT_COLOR } =
		getColors();
	return (
		<div style={{ background: THEME_BLACK_COLOR }}>
			<VerticalTimeline lineColor={THEME_ALTER_COLOR}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="Dec 8, 1995"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Birth</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Ambala City, India{' '}
					</h4>
					<p>
						A little Enthuastic took Birth on Dec 8<sup>th</sup> and parents
						decided to call him "Gursimran Singh". BTW you can call him GURSI
						for short.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="May 2011"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">
						Seconday Education
					</h3>
					<h4 className="vertical-timeline-element-subtitle">HBSE, Bhiwani</h4>
					<p>Completed Secondary Education</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="May 2013"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">
						Senior Seconday Education
					</h3>
					<h4 className="vertical-timeline-element-subtitle">HBSE, Bhiwani</h4>
					<p>
						Completed Senior Secondary Education (Physics, Chemistry &
						Mathematics)
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="2013 - 2016"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Graduation</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Kurukshetra University, Kurukshetra
					</h4>
					<p>
						Completed Graduation in B.Sc Computer science from Kurukshetra
						University.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="Nov 2018 - May 2019"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Internship</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Agile Media Lab, Chandigarh
					</h4>
					<p>Worked As Intern and worked with following technologies</p>
					<p>HTML, CSS, PHP-Symfony, React JS, Jquery, Backbone JS</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="2016 - 2019"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Post Graduation</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Panjab University, Chandigarh
					</h4>
					<p>
						Completed Post Graduation in Masters of Computer Application from
						Panjab University University.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="May 2019 - Jan 2021"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">
						Junior Software Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Agile Media Lab, Chandigarh
					</h4>
					<p>
						Worked As Junior Software Engineer and worked with following
						technologies
					</p>
					<p>
						HTML, CSS, PHP-Symfony, Doctrine, MySql, React JS, Jquery, Backbone
						JS
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="Feb 2021 - Sept 2021"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">
						Senior Software Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Aristeia Services, Singapore
					</h4>
					<p>
						Worked As Senior Software Engineer and worked with following
						technologies
					</p>
					<p>
						HTML, CSS, PHP-Symfony, Doctrine, MySql, React JS, Jquery, Backbone
						JS
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: THEME_ALTER_COLOR,
						color: THEME_TEXT_COLOR,
					}}
					contentArrowStyle={{ borderRight: `7px solid  ${THEME_ALTER_COLOR}` }}
					date="Sept 2021 - Current"
					iconStyle={{ background: THEME_ALTER_COLOR, color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">
						Senior Software Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Trantor Software, Chandigarh
					</h4>
					<p>
						Worked As Senior Software Engineer and worked with following
						technologies
					</p>
					<p>HTML, CSS, Express JS, MySql, React JS, Backbone JS, Next JS</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};
export default Timelinecomp;
