import React from 'react';
import Input from '../Input';

const Textarea = ({ params, type = 'text' }) => {
	return <Input
		params={params}
		type={type}
		isMultiline={true}
	/>
};

export default Textarea;
