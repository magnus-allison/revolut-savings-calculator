import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Revolut Savings Calculator',
	description: 'Calculate your savings with Revolut Savings Calculator'
};

export const viewport: Viewport = {
	themeColor: '#050d1b'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
