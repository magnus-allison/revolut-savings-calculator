import { CalculatedData } from '@/utils/calculate';
import { cn } from '@/utils/cn';
import useStore from '@/utils/store';
import { type FC } from 'react';

interface Props {
	data: CalculatedData;
}

const Table: FC<Props> = ({ data }) => {
	return (
		<div>
			<div className='relative overflow-x-auto shadow-md rounded-md border-[#ffffff12] border mt-4'>
				<table className='w-full text-sm text-left text-white'>
					<tbody className='px-8'>
						<Row label='Final Balance' value={data.total} main />
						<Row label='Interest Earned' value={data.interest} />
						<Row label='Daily Interest (start)' value={data.day0} />
						<Row label='Daily Interest (end)' value={data.day365} />
						<Row label='Interest including Cost of Plan' value={data.calculated} noBorder />
					</tbody>
				</table>
			</div>
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
			<tr
				className={cn(
					'mx-8 flex flex-row justify-between',
					!noBorder && 'border-b border-[#ffffff12]'
				)}
			>
				<th
					scope='row'
					className={cn('py-4 font-medium whitespace-nowrap text-white', main && 'text-sky-500')}
				>
					{label}
				</th>
				<td className={cn('py-4', main && 'text-sky-500')}>
					{currencyChar}
					{value}
				</td>
		</tr>
	);
};

export default Table;
