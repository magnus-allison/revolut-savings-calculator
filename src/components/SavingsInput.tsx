'use client';
import { type FC } from 'react';
import useStore from '@/utils/store';

interface Props {}

const SavingsInput: FC<Props> = () => {
	const { currency, currencyChar, balance, setBalance } = useStore();
	return (
		<div>
			<div className='relative mt-4 max-w-60'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<div className='flex align-middle flex-row'>
						<p className='bg-gray-700 py-0.5 px-2 rounded-sm'>
							{currency}
							{currencyChar}
						</p>
					</div>
				</div>
				<input
					type='text'
					value={balance || ''}
					onChange={(e) => setBalance(e.target.value)}
					className='border border-gray-700 text-white text-sm rounded-md focus:border-sky-500 focus:outline-none block w-full ps-20 p-2.5 placeholder-gray-400 bg-transparent'
					placeholder='5,000'
				/>
			</div>
		</div>
	);
};

export default SavingsInput;
