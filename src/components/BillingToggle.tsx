'use client';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';
import { type FC } from 'react';

const BillingToggle: FC = () => {
	const { billing, setBilling } = useStore();
	return (
		<div>
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					type='checkbox'
					value={billing}
					className='sr-only peer'
					checked={billing === 'annual'}
					onChange={() => setBilling(billing === 'annual' ? 'monthly' : 'annual')}
				/>

				<div className="w-7 h-4 bg-transparent border border-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-gray-700 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-700 after:border-gray-700 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-gray-900"></div>
				<h3
					className={cn(
						'text-xs ml-2 uppercase text-gray-500',
						billing === 'annual' && 'text-gray-300'
					)}
				>
					Annual Billing
				</h3>
			</label>
		</div>
	);
};

export default BillingToggle;
