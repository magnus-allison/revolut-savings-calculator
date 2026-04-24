import { create } from 'zustand';
import type { Currency, CurrencyChar } from '@/components/CurrencyChoices';
import { type Plan } from './plans/revolut';
import { plans } from './plans/revolut';

export interface Store {
	currencyChar: CurrencyChar;
	currency: Currency;
	setCurrency: (currency: Currency) => void;

	plan: Plan['name'] | null;
	setPlan: (plan: Plan['name']) => void;

	balance: string | null;
	setBalance: (balance: string | null) => void;

	billing: 'monthly' | 'annual';
	setBilling: (billing: 'monthly' | 'annual') => void;

	duration: number;
	setDuration: (duration: number) => void;
}

const useStore = create<Store>((set, get) => ({
	currencyChar: '£',
	currency: 'GBP',
	setCurrency: (currency) => {
		let currencyChar = null;
		if (currency === 'GBP') currencyChar = '£';
		if (currency === 'USD') currencyChar = '$';
		if (currency === 'EUR') currencyChar = '€';

		const { plan, billing } = get();
		let nextPlan = plan;
		if (plan) {
			const selectedPlan = plans.find((p) => p.name === plan);
			const isUnavailable =
				billing === 'annual'
					? selectedPlan?.annualSub[currency] === null
					: selectedPlan?.monthlySub[currency] === null;

			if (isUnavailable) {
				nextPlan = null;
			}
		}

		return set({
			currency,
			currencyChar: currencyChar as CurrencyChar,
			plan: nextPlan
		});
	},

	plan: null,
	setPlan: (plan) => set({ plan }),

	balance: '1000',
	setBalance: (balance) => set({ balance }),

	billing: 'monthly',
	setBilling: (billing) => {
		const { plan, currency } = get();
		let nextPlan = plan;
		if (plan) {
			const selectedPlan = plans.find((p) => p.name === plan);
			const isUnavailable =
				billing === 'annual'
					? selectedPlan?.annualSub[currency] === null
					: selectedPlan?.monthlySub[currency] === null;
			if (isUnavailable) {
				nextPlan = null;
			}
		}

		set({ billing, plan: nextPlan });
	},

	duration: 365,
	setDuration: (duration) => set({ duration })
}));

export default useStore;
