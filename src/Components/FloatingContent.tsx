import { useContext, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getColors } from '../Styles/constants.styles';

export const FloatingContent = () => {
	const { setTheme, theme } = useContext(ThemeContext);
	let [colorOptions, setColorOptions] = useState([
		{
			id: 0,
			dark: '#36454F',
			light: '#be8200',
			text: '#ffffff',
			active: false,
			skillButtonColor: '#36454F',
		},
		{
			id: 1,
			dark: '#000000',
			light: '#FFA500',
			text: '#ffffff',
			active: false,
			skillButtonColor: '#000000',
		},
		{
			id: 2,
			dark: '#000000',
			light: '#be8200',
			text: '#ffffff',
			skillButtonColor: '#000000',
			active: false,
		},
		{
			id: 3,
			dark: '#36454F',
			light: '#FFA500',
			text: '#ffffff',
			active: false,
			skillButtonColor: '#36454F',
		},
		{
			id: 4,
			dark: '#000000',
			light: '#cf123d',
			text: '#ffffff',
			active: true,
			skillButtonColor: '#000000',
		},
		{
			id: 5,
			dark: '#000000',
			light: 'rgb(254, 212, 58)',
			// text: '#ffffff',
			text: '#000000',
			active: false,
			invertIcons: true,
			skillButtonColor: '#000000',
		},
	]);

	return (
		<div
			style={{
				position: 'absolute',
				bottom: '12vh',
				right: '2vw',
				// backgroundImage:
				// 	'url("https://static.canva.com/web/images/788ee7a68293bd0264fc31f22c31e62d.png")',
				// backgroundSize: '100% 100%',
				// background: theme?.THEME_ALTER_COLOR,
				background: 'transparent',
				padding: '10px 10px',
				rowGap: '6px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{colorOptions.map((option: any) => {
				const otherOptions: any = {
					checked: false,
				};
				if (option.id === getColors().id) {
					otherOptions.checked = true;
				}
				return (
					<div
						key={option.id}
						style={{
							display: 'flex',
							columnGap: '6px',
							width: 'auto',
							alignItems: 'center',
						}}
						onClick={() => {
							let newTheme = null;
							const newColors = colorOptions.map((color: any) => {
								if (color.id === option.id) {
									newTheme = {
										THEME_BLACK_COLOR: color.dark,
										THEME_ALTER_COLOR: color.light,
										THEME_TEXT_COLOR: color.text,
										id: color.id,
										active: color.id === option.id ? true : false,
										invertIcons: option.invertIcons ?? false,
										skillButtonColor: color.skillButtonColor,
									};
								}
								return {
									...color,
									active: color.id === option.id ? true : false,
								};
							});
							sessionStorage.setItem('colors', JSON.stringify(newTheme));
							setTheme(newTheme);
							setColorOptions(newColors);
						}}
					>
						<span>
							{otherOptions.checked ? (
								'✔️'
							) : (
								<span style={{ color: theme.THEME_ALTER_COLOR }}>
									&nbsp;&nbsp;&nbsp;&nbsp;
								</span>
							)}
						</span>
						<span
							style={{
								width: '16px',
								height: '16px',
								background: option.dark,
								border: '0.1px solid black',
								borderRadius: '100%',
							}}
						></span>
						<span
							style={{
								width: '16px',
								height: '16px',
								background: option.light,
								border: '0.1px solid black',
								borderRadius: '100%',
							}}
						></span>
					</div>
				);
			})}
		</div>
	);
};
