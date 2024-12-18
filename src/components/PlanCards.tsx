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
		<div className='flex flex-row justify-between sm:gap-4 gap-1 mt-4 flex-wrap sm:flex-nowrap'>
			{plans.map((plan) => (
				<div
					key={plan.name}
					onClick={() => setPlan(plan['name'])}
					className={cn(
						'sm:max-w-sm w-[calc(50%-0.25rem)] rounded-md overflow-hidden border border-gray-700 transition duration-300 hover:border-sky-500 group cursor-pointer',
						plan.monthlySub[currency] === null && 'opacity-25 pointer-events-none',
						plan.name === storePlan && 'bg-gray-900 border-gray-400'
					)}
				>
					<div className='relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-gray-900'>
						<Image
							className='w-full px-6 py-4 relative transition duration-300 ease-in-out transform group-hover:scale-105'
							src={`/plans/${plan.name.toLowerCase()}.png`}
							alt={`Revolut ${plan.name} plan`}
							width={830}
							height={415}
						/>
					</div>
					<div className='px-4 py-4'>
						<div className='text'>{plan.name}</div>
						<div className='mt-2'>
							{billing === 'annual' && plan.annualSub[currency] !== null && (
								<p className='text-gray-600 text-xs'>
									{currencyChar}
									{plan.annualSub[currency]} / Year
								</p>
							)}
							{billing === 'monthly' && plan.monthlySub[currency] !== null && (
								<p className='text-gray-600 text-xs'>
									{currencyChar}
									{plan.monthlySub[currency]} / Month
								</p>
							)}
							<p className='text-gray-600 text-xs'>
								{(plan.growth[currency] * 100).toFixed(2)}% AER
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PlanCards;
