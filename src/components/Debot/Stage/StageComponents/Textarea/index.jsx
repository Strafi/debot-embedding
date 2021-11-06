import React from 'react';
import Input from '../Input';

const Textarea = ({ params, type = 'text', debotAddress }) => {
	return <Input
		params={params}
		type={type}
		isMultiline={true}
		debotAddress={debotAddress}
	/>
};

export default Textarea;
