import { createContext, useState } from 'react';
import { getColors } from '../Styles/constants.styles';

const ThemeContext = createContext({
	theme: getColors(),
	// @ts-expect-error
	setTheme: (props: any) => {},
});

const ThemeProvider = ({ children }: any) => {
	const [currentTheme, setCurrentTheme] = useState<any>(getColors());
	return (
		<ThemeContext.Provider
			value={{ theme: currentTheme, setTheme: setCurrentTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
};
export { ThemeContext, ThemeProvider };
