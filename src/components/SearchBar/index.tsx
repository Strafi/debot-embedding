/* eslint-disable camelcase */
import React, { useState, FC, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createDebotUrl, checkIsValidAddress } from '/src/helpers';
import { setDebotsFilterKey } from '/src/store/actions/debot';
import { LensIcon } from '/src/components/icons';
import './index.scss';

type TProps = {
	isDebotOnly?: boolean | null;
}

const SearchBar: FC<TProps> = ({ isDebotOnly }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');

	const searchDebot = async (): Promise<void> => {
		const isValidAddress = await checkIsValidAddress(inputValue);

		if (isValidAddress) {
			const debotUrlSlug = isDebotOnly ? '/' : '/debot';
			const debotUrl = createDebotUrl(inputValue, debotUrlSlug);
			dispatch(setDebotsFilterKey(''));

			return history.push(debotUrl);
		}

		dispatch(setDebotsFilterKey(inputValue));
	}

	const handleKeyPress = (event: KeyboardEvent): void => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldSearch = isEnter && !shiftKey && !altKey;

		if (shouldSearch) {
			event.preventDefault();
			searchDebot();
		}
	}

	return (
		<div className='search-bar-container'>
			<input
				className='search-bar-container__input'
				type='text'
				placeholder='Enter debot address'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<LensIcon onClick={searchDebot} />
		</div>
	);
}

export default SearchBar;
