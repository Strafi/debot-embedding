import React, { FC } from 'react';

import { CancelIcon } from '/src/components/icons';

import './index.scss';

type TProps = {
	handleCloseModal?: null | (() => unknown);
	containerClassName?: string;
	modalClassName?: string;
}

const Modal: FC<TProps> = ({
	children,
	handleCloseModal,
	containerClassName: containerClassNameFromProps = '',
	modalClassName: modalClassNameFromProps = '',
}) => {
	const modalClassName = `abstract-modal ${modalClassNameFromProps}`;
	const modalContainerClassName = `abstract-modal__container ${containerClassNameFromProps}`;

	return (
		<div className={modalClassName}>
			<div className={modalContainerClassName}>
				{!!handleCloseModal
					&& <div className='abstract-modal__cancel-icon'>
						<CancelIcon onClick={handleCloseModal} />
					</div>
				}
				{children}
			</div>
		</div>
	);
}

export default Modal;
