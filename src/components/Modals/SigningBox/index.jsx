import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { genKeyPairFromMnemonic } from '/src/helpers';
import './index.scss';

const SigningBox = () => {
	const [inputValue, setInputValue] = useState('');
	const [errorText, setErrorText] = useState('');
	const [isDropable, setIsDropable] = useState(false);
	const [isUploadError, setIsUploadError] = useState(false);
	const signingBox = useSelector(state => state.debot.signingBox);

	const handleChangeInput = e => {
		setInputValue(e.target.value);
		setErrorText('');
	};

	const submitInput = async event => {
		const { shiftKey, key, altKey } = event;
		const isEnter = key === 'Enter';
		const shouldSubmit = isEnter && !shiftKey && !altKey && inputValue;

		if (!shouldSubmit)
			return;

		try {
			const keyPair = await genKeyPairFromMnemonic(inputValue);

			signingBox.submit(keyPair);
		} catch(err) {
			console.error('Error when getting keys from mnemonic: ', err);
			setErrorText('Error when getting keys from secret phrase');
		}
	}

	const preventEvent = e => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragEnter = e => {
		preventEvent(e);
		setIsDropable(true);
	};

	const handleDragLeave = e => {
		preventEvent(e)
		setIsDropable(false);
	};

	const handleDrop = e => {
		preventEvent(e);
		setIsDropable(false);
		setIsUploadError(false);
		const { files } = e.dataTransfer;

		if (files && files.length > 1)
			return setIsUploadError(true);

		const reader = new FileReader();

		reader.onabort = () => setIsUploadError(true);

		reader.onerror = () => setIsUploadError(true);

		reader.onload = e => {
			try {
				const { result } = e.target;
	
				const keyPair = JSON.parse(result);

				signingBox.submit(keyPair);
				setIsUploadError(false);
			} catch(err) {
				setIsUploadError(true);
			}
		};

		reader.readAsText(files[0]);
	};

	return (
		<div className='signing-box'>
			<div className='signing-box__container'>
				<div className='signing-box__header'>
					Signing Box
				</div>
				<div className='signing-box__description'>
					We <b>DON&apos;T</b> store your keys or seed phrase.
				</div>
				<div className='signing-box__input-container'>
					<div className='signing-box__input-label'>Enter seed phrase:</div>
					<textarea
						className={`signing-box__input ${errorText ? 'signing-box__input--error' : ''}`}
						type='text'
						value={inputValue}
						onChange={handleChangeInput}
						onKeyPress={submitInput}
					></textarea>
					{errorText && <span className='signing-box__input-error'>{errorText}</span>}
				</div>
				<div className='signing-box__devider'>
					OR
				</div>
				<div
					className={`signing-box__upload-keys ${isDropable ? 'signing-box__upload-keys--dropable' : ''}`}
					onDragEnter={handleDragEnter}
					onDrop={handleDrop}
					onDragOver={preventEvent}
				>
					<input type="file" id="upload-input" hidden />
					<label htmlFor="upload-input">
						<img
							src='/uploadKeys.jpg'
							alt='Click here to upload'
						/>
						Upload keypair file
					</label>
					<div
						className={`signing-box__upload-keys-dropable-overlay ${isDropable ? 'signing-box__upload-keys-dropable-overlay--active' : ''}`}
						onDragLeave={handleDragLeave}
					></div>
					{isUploadError && <span className='signing-box__upload-keys--error'>Not recognized</span>}
				</div>
			</div>
		</div>
	);
}

export default SigningBox;
