import { useEffect, useState } from 'react';
import { TimelineDiv } from '../Styles/Timeline.styles';

const Timeline = () => {
	const [removeStyles, setRemoveStyles] = useState(false);
	useEffect(() => {
		setRemoveStyles(true);
		setTimeout(() => {
			setRemoveStyles(false);
		}, 0);
	}, []);
	if (removeStyles) {
		return (
			<style>{`
		.timeline::after {content: none}
		.timeline::before {content: none}
		.left::before {content: none}
		.left::after {content: none}
		.right::after {content: none}
		.right::before {content: none}
		`}</style>
		);
	}
	return (
		<TimelineDiv className="timeline">
			<div className={`container left`}>
				<div className="content">
					<h1>1995</h1>
					<p>
						A little Enthuastic took Birth on Dec 8<sup>th</sup> and parents
						decided to call him "Gursimran Singh". BTW you can call him GURSI
						for short.
					</p>
				</div>
			</div>
			<div className="container right">
				<div className="content">
					<h1>2011</h1>
					<p>I passed my Secondary Examination with 95% marks from HBSE</p>
				</div>
			</div>
			<div className="container left">
				<div className="content">
					<h1>2013</h1>
					<p>
						I passed my Senio Secondary Examination (Physics, Chemistry &
						Mathematics) with 82.6% marks from HBSE
					</p>
				</div>
			</div>
			<div className="container right">
				<div className="content">
					<h1>2016</h1>
					<p>
						I Completed my Degree in B.Sc Compute science from Kurukshetra
						University with 75% marks.
					</p>
				</div>
			</div>
			<div className="container left">
				<div className="content">
					<h1>Nov 2018</h1>
					<p>
						I started Internship and then Full Time as Junior software Engineer
						in Agile media labs Private limited, Chandigarh.
					</p>
				</div>
			</div>
			<div className="container right">
				<div className="content">
					<h1>May 2019</h1>
					<p>
						I Completed my Masters Degree in Masters of Compute Applications
						from Panjab University Chandigarh with 70% marks.
					</p>
				</div>
			</div>
			<div className="container left">
				<div className="content">
					<h1>Feb 2021</h1>
					<p>
						Agile Media lab Turend to Aristeia Services and I got promoted to
						Senior Software Engineer.
					</p>
				</div>
			</div>
			<div className="container right">
				<div className="content">
					<h1>Sept 2021</h1>
					<p>
						I joined Trantor Software Inc, Chandigarh as Senior Software
						Engineer and I am working there till Today.
					</p>
				</div>
			</div>
		</TimelineDiv>
	);
};
export default Timeline;
