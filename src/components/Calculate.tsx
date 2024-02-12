'use client';
import { useMemo, type FC } from 'react';
import { calculateYear } from '@/utils/calculate';
import useStore from '@/utils/store';
import { plans } from '@/utils/plans';
import Chart from './Chart';
import Table from './Table';
import Section from './Section';

const Calculate: FC = () => {
	const { currency, balance, duration, plan } = useStore();
	const result = useMemo(() => {
		if (!plan) return;
		const planObj = plans.filter((p) => p.name === plan)[0];
		return calculateYear(currency, balance, duration, planObj);
	}, [currency, balance, duration, plan]);

	if (!result) return null;

	return (
		<Section title='. Results'>
			<Table data={result} />
			<Chart data={result?.chartData || []} />
		</Section>
	);
};

export default Calculate;
