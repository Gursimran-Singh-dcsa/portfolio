import { StyledHeadingReverse } from '../Styles/Heading.styles';

const HeadingReverse = ({ text }: { text: string }) => {
	return (
		<StyledHeadingReverse>
			<div className="left">
				<span>{text}</span>
			</div>
			<div className="right"></div>
		</StyledHeadingReverse>
	);
};
export default HeadingReverse;
