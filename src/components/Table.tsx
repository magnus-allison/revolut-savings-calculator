import { CalculatedData } from '@/utils/calculate';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';
import { type FC } from 'react';

interface Props {
	data: CalculatedData;
}

const Table: FC<Props> = ({ data }) => {
	return (
		<div className='results-card'>
			<Row label='Final Balance' value={data.total} main />
			<Row label='Interest Earned' value={data.interest} />
			<Row label='Daily Interest (start)' value={data.day0} />
			<Row label='Daily Interest (end)' value={data.day365} />
			<Row label='Interest including Cost of Plan' value={data.calculated} noBorder />
		</div>
	);
};

interface RowProps {
	label: string;
	value: string;
	main?: boolean;
	noBorder?: boolean;
}

const Row: FC<RowProps> = ({ label, value, noBorder, main }) => {
	const { currencyChar } = useStore();
	return (
		<div
			className={cn(
				'results-row',
				main && 'results-row--main',
				noBorder && 'results-row--last'
			)}
		>
			<div className='results-label'>{label}</div>
			<div className='results-value'>
				{currencyChar}
				{value}
			</div>
		</div>
	);
};

export default Table;
