'use client';
import { type FC } from 'react';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';

const durationOption: number[] = [7, 30, 90, 180, 365];

const TimeDuration: FC = () => {
	const { duration, setDuration } = useStore();
	return (
		<div className='option-row'>
			{durationOption.map((option) => (
				<button
					key={option}
					type='button'
					onClick={() => setDuration(option)}
					className={cn(
						'choice-button',
						duration === option && 'choice-button--active'
					)}
				>
					<span className='choice-button-content'>{option} days</span>
				</button>
			))}
		</div>
	);
};

export default TimeDuration;
