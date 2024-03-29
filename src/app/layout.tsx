import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inconsolata } from 'next/font/google';
import './globals.css';

const fira = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Revolut Savings Calculator',
	description: 'Calculate your savings with Revolut Savings Calculator'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={fira.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
