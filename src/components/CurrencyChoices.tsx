'use client';
import { type FC } from 'react';
import useStore from '@/utils/store';
import { cn } from '@/utils/cn';

export type CurrencyChar = '£' | '$' | '€';
export type Currency = 'USD' | 'EUR' | 'GBP';
const currencyOption: Array<{ code: Currency; label: string }> = [
	{ code: 'USD', label: '🇺🇸' },
	{ code: 'EUR', label: '🇪🇺' },
	{ code: 'GBP', label: '🇬🇧' }
];

const CurrencyChoices: FC = () => {
	const { currency, setCurrency } = useStore();
	return (
		<div className='option-row'>
			{currencyOption.map((option) => (
				<button
					onClick={() => setCurrency(option.code)}
					key={option.code}
					type='button'
					className={cn(
						'choice-button',
						currency === option.code && 'choice-button--active'
					)}
				>
					<span className='choice-button-content'>
						<span className='currency-emoji' aria-hidden='true'>
							{option.label}
						</span>
						{option.code}
					</span>
				</button>
			))}
		</div>
	);
};

export default CurrencyChoices;
