import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { COMPONENTS_BINDINGS } from '/src/constants';
import { isCustomScrollBar } from '/src/helpers';
import { Loader } from '/src/components';
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
} from './StageComponents';
import { TRootStoreState } from '/src/store/types';

import './index.scss';

type TComponentSelfProps = {
	debotAddress: string;
}

type TReduxConnectReturn = {
	stage: TRootStoreState['debot']['stage'];
	isDebotError: TRootStoreState['debot']['isDebotError'];
}

type TComponentProps = TComponentSelfProps & TReduxConnectReturn;

class Stage extends Component<TComponentProps> {
	stageRef = createRef<HTMLDivElement>();

	stageComponents = {
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
	}

	formStageComponents = () => {
		const { stage, debotAddress } = this.props;

		return stage.map((stageItem, index) => {
			const Component = this.stageComponents[stageItem.component];

			return <Component
				key={`${stageItem.functionId}-${index}`}
				params={stageItem}
				debotAddress={debotAddress}
			/>
		});
	}

	componentDidUpdate(prevProps: TComponentProps) {
		if (prevProps.stage.length !== this.props.stage.length) {
			if (this.stageRef?.current)
				setTimeout(() => this.stageRef!.current!.scrollTop = this.stageRef!.current!.scrollHeight, 0);
		}
	}

	render() {
		const { stage, isDebotError } = this.props;

		if (!stage.length) {
			return <Loader isFailed={isDebotError} />
		}

		const stageComponents = this.formStageComponents();

		const stageClassName = `stage ${isCustomScrollBar() ? 'with-custom-scrollbar' : ''}`;

		return (
			<div ref={this.stageRef} className={stageClassName}>
				<div className='stage__container'>
					{stageComponents}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ debot: { stage, isDebotError } }: TRootStoreState): TReduxConnectReturn => ({ stage, isDebotError });

export default connect(mapStateToProps)(Stage);
