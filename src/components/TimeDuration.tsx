'use client';
import { type FC } from 'react';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';

const durationOption: number[] = [7, 30, 90, 180, 365];

const TimeDuration: FC = () => {
	const { duration, setDuration } = useStore();
	return (
		<div className='mt-4 flex flex-row gap-4'>
			{durationOption.map((option) => (
				<button
					key={option}
					type='button'
					onClick={() => setDuration(option)}
					className={cn(
						'text-white focus:outline-none border px-5 py-2.5 rounded-md border-gray-700 transition duration-300 hover:border-sky-500',
						duration === option && 'bg-gray-900 border-gray-400'
					)}
				>
					<div className='flex flex-row align-middle'>{option} days</div>
				</button>
			))}
		</div>
	);
};

export default TimeDuration;
