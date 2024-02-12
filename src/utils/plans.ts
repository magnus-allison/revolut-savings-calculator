import { type Currency } from '@/components/CurrencyChoices';

export interface Plan {
	name: string;
	monthlySub: Record<Currency, number | null>;
	year: number;
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
		year: 540,
		growth: {
			GBP: 0.0475,
			USD: 0.0354,
			EUR: 0.0214
		}
	},
	{
		name: 'Metal',
		monthlySub: {
			GBP: 14.99,
			USD: 16.99,
			EUR: 13.99
		},
		year: 140,
		growth: {
			GBP: 0.04,
			USD: 0.04,
			EUR: 0.04
		}
	},
	{
		name: 'Premium',
		monthlySub: {
			GBP: 7.99,
			USD: 9.99,
			EUR: 7.99
		},
		year: 80,
		growth: {
			GBP: 0.03,
			USD: 0.03,
			EUR: 0.03
		}
	},
	{
		name: 'Plus',
		monthlySub: {
			GBP: 3.99,
			USD: null,
			EUR: 2.99
		},
		year: 40,
		growth: {
			GBP: 0.0239,
			USD: 0.0239,
			EUR: 0.0239
		}
	},
	{
		name: 'Standard',
		monthlySub: {
			GBP: 0,
			USD: 0,
			EUR: 0
		},
		year: 0,
		growth: {
			GBP: 0.0229,
			USD: 0.0229,
			EUR: 0.0229
		}
	}
];

export { plans };
