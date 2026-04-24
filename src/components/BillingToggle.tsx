'use client';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';
import { type FC } from 'react';

const BillingToggle: FC = () => {
	const { billing, setBilling } = useStore();

	return (
		<button
			type='button'
			className='billing-toggle'
			aria-pressed={billing === 'annual'}
			aria-label={`Billing period: ${billing}`}
			onClick={() => setBilling(billing === 'annual' ? 'monthly' : 'annual')}
		>
			<span
				className={cn(
					'billing-toggle-text',
					billing === 'monthly' && 'billing-toggle-text--active'
				)}
			>
				Monthly
			</span>
			<span
				className={cn(
					'billing-toggle-track',
					billing === 'annual' && 'billing-toggle-track--active'
				)}
			>
				<span
					className={cn(
						'billing-toggle-thumb',
						billing === 'annual' && 'billing-toggle-thumb--active'
					)}
				/>
			</span>
			<span
				className={cn(
					'billing-toggle-text',
					billing === 'annual' && 'billing-toggle-text--active'
				)}
			>
				Annual
			</span>
		</button>
	);
};

export default BillingToggle;
