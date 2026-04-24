import { type Currency } from '@/components/CurrencyChoices';

export interface Plan {
	name: string;
	monthlySub: Record<Currency, number | null>;
	annualSub: Record<Currency, number | null>;
	growth: Record<Currency, number>;
}

const plans: Plan[] = [
	{
		name: 'Ultra',
		monthlySub: {
			GBP: 55.0,
			USD: null,
			EUR: 50.0
		},
		annualSub: {
			GBP: 540,
			USD: null,
			EUR: 540
		},
		growth: {
			GBP: 0.04,
			USD: 0.035,
			EUR: 0.025
		}
	},
	{
		name: 'Metal',
		monthlySub: {
			GBP: 14.99,
			USD: 16.99,
			EUR: 15.99
		},
		annualSub: {
			GBP: 140,
			USD: 149.99,
			EUR: 155
		},
		growth: {
			GBP: 0.0351,
			USD: 0.035,
			EUR: 0.02
		}
	},
	{
		name: 'Premium',
		monthlySub: {
			GBP: 7.99,
			USD: 9.99,
			EUR: 9.99
		},
		annualSub: {
			GBP: 80,
			USD: 94.99,
			EUR: 100
		},
		growth: {
			GBP: 0.0325,
			USD: 0.03,
			EUR: 0.015
		}
	},
	{
		name: 'Plus',
		monthlySub: {
			GBP: 3.99,
			USD: null,
			EUR: 3.99
		},
		annualSub: {
			GBP: 40,
			USD: null,
			EUR: 40
		},
		growth: {
			GBP: 0.03,
			USD: 0.025,
			EUR: 0.01
		}
	},
	{
		name: 'Standard',
		monthlySub: {
			GBP: 0,
			USD: 0,
			EUR: 0
		},
		annualSub: {
			GBP: 0,
			USD: 0,
			EUR: 0
		},
		growth: {
			GBP: 0.03,
			USD: 0.025,
			EUR: 0.01
		}
	}
];

export { plans };
