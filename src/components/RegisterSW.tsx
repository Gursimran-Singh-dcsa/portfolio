'use client';
import { useEffect } from 'react';

export const RegisterSW = () => {
	useEffect(() => {
		if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
			navigator.serviceWorker.register('/sw.js').catch(() => {});
		}
	}, []);
	return null;
};
