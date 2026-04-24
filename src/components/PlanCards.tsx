'use client';
import { type FC } from 'react';
import Image from 'next/image';
import { Plan } from '@/utils/plans/revolut';
import useStore from '@/utils/store';
import { cn } from '@/utils/cn';

interface Props {
	plans: Plan[];
}

const PlanCards: FC<Props> = ({ plans }) => {
	const { currency, currencyChar, plan: storePlan, setPlan, billing } = useStore();
	return (
		<div className='plan-grid'>
			{plans.map((plan) => {
				const unavailable =
					billing === 'annual'
						? plan.annualSub[currency] === null
						: plan.monthlySub[currency] === null;

				return (
					<button
						key={plan.name}
						onClick={() => !unavailable && setPlan(plan.name)}
						type='button'
						disabled={unavailable}
						aria-disabled={unavailable}
						className={cn(
							'plan-card',
							unavailable && 'plan-card--disabled',
							plan.name === storePlan && 'plan-card--active'
						)}
					>
						<div className='plan-card-media'>
							<Image
								className='plan-card-image'
								src={`/plans/${plan.name.toLowerCase()}.png`}
								alt={`Revolut ${plan.name} plan`}
								width={830}
								height={415}
							/>
						</div>
						<div className='plan-card-content'>
							<div className='plan-card-name'>{plan.name}</div>
							<div className='plan-card-meta'>
								{billing === 'annual' && plan.annualSub[currency] !== null && (
									<p className='plan-card-meta-line'>
										{currencyChar}
										{plan.annualSub[currency]} / year
									</p>
								)}
								{billing === 'monthly' && plan.monthlySub[currency] !== null && (
									<p className='plan-card-meta-line'>
										{currencyChar}
										{plan.monthlySub[currency]} / month
									</p>
								)}
								{unavailable && (
									<p className='plan-card-meta-unavailable'>Not available in {currency}</p>
								)}
								<p className='plan-card-meta-line'>
									{(plan.growth[currency] * 100).toFixed(2)}% AER
								</p>
							</div>
						</div>
					</button>
				);
			})}
		</div>
	);
};

export default PlanCards;
