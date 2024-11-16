import { create } from 'zustand';
import type { Currency, CurrencyChar } from '@/components/CurrencyChoices';
import { type Plan } from './plans/revolut';

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

const useStore = create<Store>((set) => ({
	currencyChar: '£',
	currency: 'GBP',
	setCurrency: (currency) => {
		let currencyChar = null;
		if (currency === 'GBP') currencyChar = '£';
		if (currency === 'USD') currencyChar = '$';
		if (currency === 'EUR') currencyChar = '€';
		return set({ currency, currencyChar: currencyChar as CurrencyChar });
	},

	plan: null,
	setPlan: (plan) => set({ plan }),

	balance: '1000',
	setBalance: (balance) => set({ balance }),

	billing: 'monthly',
	setBilling: (billing) => set({ billing }),

	duration: 365,
	setDuration: (duration) => set({ duration })
}));

export default useStore;
