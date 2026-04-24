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
		<main className='page'>
			<div className='page-shell'>
				<div className='page-stack'>
					<h1 className='page-title'>Revolut Savings Calculator</h1>
					<p className='page-subtitle'>Estimate how your savings grow across plans.</p>
					<hr className='page-divider' />
					<Section title='1. Select a currency'>
						<CurrencyChoices />
					</Section>
					<Section
						title={
							<div className='section-header-row'>
								<h3 className='section-title'>2. Select a plan</h3>
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
					<p className='page-last-updated'>Last updated: April 2026</p>
				</div>
			</div>
		</main>
	);
};

export default Home;
