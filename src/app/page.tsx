import BillingToggle from '@/components/BillingToggle';
import BuyCoffee from '@/components/BuyCoffee';
import Calculate from '@/components/Calculate';
import CurrencyChoices from '@/components/CurrencyChoices';
import PlanCards from '@/components/PlanCards';
import SavingsInput from '@/components/SavingsInput';
import Section from '@/components/Section';
import TimeDuration from '@/components/TimeDuration';
import { plans } from '@/utils/plans/revolut';

const Home = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between sm:px-8 md:px-24 py-12 px-4'>
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
					<BuyCoffee />
				</div>
			</div>
		</main>
	);
};

export default Home;
