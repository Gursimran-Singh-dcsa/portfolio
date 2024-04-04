import {
	SkillButton,
	SkillHeading,
	SkillSetWrapper,
	SkillWrapper,
} from '../Styles/expertise.styles';

const Expertise = () => {
	return (
		<SkillWrapper>
			{/* Frontend Tech */}
			<div>
				<SkillHeading>Frontend Technologies I have Expertise In:</SkillHeading>
				<SkillSetWrapper>
					{[
						'React JS',
						'Next JS',
						'TypeScript',
						'Ant Design',
						'Prime React',
						'MUI',
						'JQuery',
						'Javascript',
						'HTML5',
						'CSS3',
						'Sass/Scss',
						'Styled Components',
					].map((skillset) => {
						return <SkillButton key={skillset}>{skillset}</SkillButton>;
					})}
				</SkillSetWrapper>
			</div>
			{/* Backend tech  */}
			<div>
				<SkillHeading>Backend Technologies I have Expertise In:</SkillHeading>
				<SkillSetWrapper>
					{['Node JS', 'Express JS', 'Php', 'Symfony', 'MySql', 'MongoDB'].map(
						(skillset) => {
							return <SkillButton key={skillset}>{skillset}</SkillButton>;
						}
					)}
				</SkillSetWrapper>
			</div>
			{/* libraries */}
			<div>
				<SkillHeading>Usefull Libraries I have Expertise In:</SkillHeading>
				<SkillSetWrapper>
					{[
						'Mongoose',
						'Sequelize',
						'Jest',
						'Enzyme',
						'Recharts',
						'Chart JS',
						'lodash',
						'Morgan',
						'JsonWebToken',
						'react-infinite-scroll-component',
					].map((skillset) => {
						return <SkillButton key={skillset}>{skillset}</SkillButton>;
					})}
				</SkillSetWrapper>
			</div>
			{/* Tools  */}
			<div>
				<SkillHeading>Tools & Softwares I have Expertise In:</SkillHeading>
				<SkillSetWrapper>
					{[
						'Git',
						'Docker',
						'Jenkins',
						'Bitbucket',
						'AWS S3',
						'AWS EC2',
						'Nginx',
						'Ubuntu',
						'PM2',
						'MongoDB Compass',
						'MySql Server',
						'Postman',
						'Github Pages',
						'Webpack',
						'Gulp',
						'Vite',
						'Composer',
					].map((skillset) => {
						return <SkillButton key={skillset}>{skillset}</SkillButton>;
					})}
				</SkillSetWrapper>
			</div>
		</SkillWrapper>
	);
};
export default Expertise;
