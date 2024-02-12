import BillingToggle from '@/components/BillingToggle';
import Calculate from '@/components/Calculate';
import Chart from '@/components/Chart';
import CurrencyChoices from '@/components/CurrencyChoices';
import PlanCards from '@/components/PlanCards';
import SavingsInput from '@/components/SavingsInput';
import Section from '@/components/Section';
import TimeDuration from '@/components/TimeDuration';
import { cn } from '@/utils/cn';
import { plans } from '@/utils/plans';

const Home = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between sm:px-8 md:px-24 py-12'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<div className='flex flex-col'>
					<h2 className='text-2xl'>Revolut Savings Calculator</h2>
					<hr className='w-full h-0.5 mt-2 bg-[#ffffff12] opacity-40 border-none outline-none' />
					<Section title='1. Select a currency'>
						<CurrencyChoices />
					</Section>
					<Section
						title={
							<div className='flex flex-row justify-between'>
								<h3 className='text-xs text-gray-200 uppercase'>2. Select a plan</h3>
								<BillingToggle />
							</div>
						}
					>
						<PlanCards plans={plans} />
					</Section>
					<Section title={'3. Enter savings amount'}>
						<SavingsInput />
					</Section>
					<Section title={'4. Term Length'}>
						<TimeDuration />
					</Section>
					<Calculate />
				</div>
			</div>
		</main>
	);
};

export default Home;
