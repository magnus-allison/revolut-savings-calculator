'use client';
import { type FC } from 'react';
import useStore from '@/utils/store';

interface Props {}

const SavingsInput: FC<Props> = () => {
	const { currency, currencyChar, balance, setBalance } = useStore();

	const handleAmountChange = (rawValue: string) => {
		const cleanedValue = rawValue.replace(/,/g, '').replace(/[^\d.]/g, '');
		const [whole, ...decimals] = cleanedValue.split('.');
		const normalized = decimals.length > 0 ? `${whole}.${decimals.join('')}` : whole;
		setBalance(normalized || null);
	};

	return (
		<div className='input-field'>
			<div className='input-prefix'>
				<p className='input-prefix-badge'>
					{currency}
					{currencyChar}
				</p>
			</div>
			<input
				type='text'
				value={balance || ''}
				onChange={(e) => handleAmountChange(e.target.value)}
				className='text-input'
				inputMode='decimal'
				aria-label='Savings amount'
				placeholder='5000'
			/>
		</div>
	);
};

export default SavingsInput;
