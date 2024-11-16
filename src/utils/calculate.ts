import { type Plan } from './plans/revolut';
import { type Store } from './store';
import { type DataItem } from '@/components/Chart';

export interface CalculatedData {
	total: string;
	interest: string;
	calculated: string;
	day0: string;
	day365: string;
	chartData: DataItem[];
}

type CalculateInput = (
	currency: Store['currency'],
	billing: Store['billing'],
	balance: Store['balance'],
	duration: Store['duration'],
	plan: Plan
) => CalculatedData;

// yyyy-mm-dd
const formatDate = (date: Date) => {
	return date.toISOString().split('T')[0];
};

const calculateYear: CalculateInput = (currency, billing, balance, duration, plan) => {
	if (!balance) balance = '0';

	const contribution = 0;

	let accumulated = parseFloat(balance);
	let day0 = 0;
	let day365 = 0;

	const chartData = [];

	for (let day = 0; day <= duration; ++day) {
		const accumulation = accumulated * (plan.growth[currency] / 365.25);
		accumulated += accumulation;

		if (day % 30 === 0 && day !== 0) {
			accumulated += contribution;
		}

		const today = new Date();
		const date = today.setDate(today.getDate() + day);
		chartData.push({ time: formatDate(new Date(date)), value: accumulated });
		!day && day % 365 === 0 && (day0 = accumulation);
		day && day % 365 === 0 && (day365 = accumulation);
	}

	const interest = accumulated - parseFloat(balance) - contribution * 12;
	const calculated =
		interest - (billing === 'annual' ? plan.annualSub[currency]! : plan.monthlySub[currency]! * 12);

	return {
		total: accumulated.toFixed(2),
		interest: interest.toFixed(2),
		calculated: calculated.toFixed(2),
		day0: day0.toFixed(2),
		day365: day365.toFixed(2),
		chartData: chartData
	};
};

export { calculateYear };
