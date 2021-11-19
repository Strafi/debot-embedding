import React, { FC, useContext, useEffect } from 'react';

import { useSelector } from '/src/store/hooks';
import { COMPONENTS_BINDINGS } from '/src/constants';
import { Loader } from '/src/components';
import { AppComponentRefContext } from '/src/contexts';
import {
	Text,
	Stdout,
	Input,
	AddressInput,
	Textarea,
	AmountInput,
	ConfirmInput,
	TokensInput,
	Menu,
	Media,
	QrCodeScan,
} from './StageComponents';

import './index.scss';

const bindedComponents = {
	[COMPONENTS_BINDINGS.INPUT]: Input,
	[COMPONENTS_BINDINGS.TEXTAREA]: Textarea,
	[COMPONENTS_BINDINGS.AMOUNT_INPUT]: AmountInput,
	[COMPONENTS_BINDINGS.CONFIRM_INPUT]: ConfirmInput,
	[COMPONENTS_BINDINGS.ADDRESS_INPUT]: AddressInput,
	[COMPONENTS_BINDINGS.TOKENS_INPUT]: TokensInput,
	[COMPONENTS_BINDINGS.TEXT]: Text,
	[COMPONENTS_BINDINGS.STDOUT]: Stdout,
	[COMPONENTS_BINDINGS.MENU]: Menu,
	[COMPONENTS_BINDINGS.MEDIA]: Media,
	[COMPONENTS_BINDINGS.QR_CODE.SCAN]: QrCodeScan,
};

type TProps = {
	debotAddress: string;
};

const Stage: FC<TProps> = ({ debotAddress }) => {
	const appElementRef = useContext(AppComponentRefContext);
	const stage = useSelector(store => store.debot.stage);
	const isDebotError = useSelector(store => store.debot.isDebotError);
	const stageLength = stage.length;

	useEffect(() => {
		if (stageLength) {
			if (appElementRef?.current)
				setTimeout(() => appElementRef!.current!.scrollTop = appElementRef!.current!.scrollHeight, 0);
		}
	}, [stageLength]);

	if (!stageLength) {
		return <Loader isFailed={isDebotError} />
	}

	const formStageComponents = () => {
		return stage.map((stageItem, index) => {
			const Component = bindedComponents[stageItem.component];

			return <Component
				key={`${stageItem.functionId}-${index}`}
				params={stageItem}
				debotAddress={debotAddress}
			/>
		});
	}

	const stageComponents = formStageComponents();

	return (
		<div className='stage'>
			<div className='stage__container'>
				{stageComponents}
			</div>
		</div>
	)
}

export default Stage;
