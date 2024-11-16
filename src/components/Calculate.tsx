'use client';
import { useMemo, type FC } from 'react';
import { calculateYear } from '@/utils/calculate';
import useStore from '@/utils/store';
import { plans } from '@/utils/plans/revolut';
import Chart from './Chart';
import Table from './Table';
import Section from './Section';

const Calculate: FC = () => {
	const { currency, balance, duration, plan, billing } = useStore();
	const result = useMemo(() => {
		if (!plan) return;
		const planObj = plans.filter((p) => p.name === plan)[0];
		return calculateYear(currency, billing, balance, duration, planObj);
	}, [currency, balance, duration, plan, billing]);

	if (!result) return null;

	return (
		<Section title='5. Results'>
			<Table data={result} />
			<Chart data={result?.chartData || []} />
		</Section>
	);
};

export default Calculate;
