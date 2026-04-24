'use client';
import { type FC, type ReactNode } from 'react';

interface Props {
	children: ReactNode | ReactNode[];
	title: string | ReactNode;
}

const Section: FC<Props> = ({ children, title }) => {
	return (
		<section className='section-card'>
			{title && typeof title === 'string' ? (
				<h3 className='section-title'>{title}</h3>
			) : (
				title
			)}
			{children}
		</section>
	);
};

export default Section;
