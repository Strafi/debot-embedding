import React, { FC } from 'react';
import Input from '../Input';
import { TDebotStageItem } from '/src/types';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
	type?: string;
}

const Textarea: FC<TProps> = ({ params, type = 'text', debotAddress }) => {
	return <Input
		params={params}
		type={type}
		isMultiline={true}
		debotAddress={debotAddress}
	/>
};

export default Textarea;
