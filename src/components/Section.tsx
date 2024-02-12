'use client';
import { useState, type FC, type ReactNode } from 'react';

interface Props {
	children: ReactNode | ReactNode[];
	title: string | ReactNode;
}

const Section: FC<Props> = ({ children, title }) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<section className='mt-6 rounded-md p-4 drop-shadow-lg border border-[#ffffff12]'>
			{title && typeof title === 'string' ? (
				<h3 className='text-xs text-gray-200 uppercase'>{title}</h3>
			) : (
				title
			)}
			{children}
		</section>
	);
};

export default Section;
