import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './Contexts/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
