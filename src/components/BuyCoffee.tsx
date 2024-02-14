import { type FC } from 'react';

interface Props {}

const BuyCoffee: FC<Props> = () => {
	return (
		// eslint-disable-next-line @next/next/no-sync-scripts
		<script
			data-name='BMC-Widget'
			data-cfasync='false'
			src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
			data-id='magnus.allison'
			data-description='Support me on Buy me a coffee!'
			data-color='#030712'
			data-position='Right'
			data-x_margin='18'
			data-y_margin='18'
		></script>
	);
};

export default BuyCoffee;
