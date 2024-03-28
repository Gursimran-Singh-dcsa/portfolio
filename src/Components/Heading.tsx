import { StyledHeading } from '../Styles/Heading.styles';

const Heading = ({ text }: { text: string }) => {
	return (
		<StyledHeading>
			<div className="left"></div>
			<div className="right">
				<span>{text}</span>
			</div>
		</StyledHeading>
	);
};
export default Heading;
