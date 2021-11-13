import React, { FC } from 'react';
import { useSelector } from '/src/store/hooks';
import { ConfirmInput } from '/src/components/Debot/Stage/StageComponents';
import { createExplorerUrl } from '/src/helpers';
import Modal from '../Modal';
import './index.scss';

const convertFromNano = (value: number): number => value / 1000000000;

const ApproveWindow: FC = () => {
	const approveWindow = useSelector(state => state.debot.approveWindow!);

	const handleApprove = (isApproved: boolean) => approveWindow.submit(isApproved);

	const { dst, fee, out, setcode, signkey } = approveWindow.params;
	const hasOutgoingTransfers = !!out.length;

	return (
		<Modal containerClassName='approve-window'>
			<div className='approve-window__header'>
				Permission Request 
			</div>
			<div className='approve-window__description'>
				DeBot is going to create an onchain transaction:
			</div>
			<div className='approve-window__details'>
				<div className='approve-window__details-row'>
					<div className='approve-window__details-col approve-window__details-col--title'>
						Account:
					</div>
					<div className='approve-window__details-col'>
						<a href={createExplorerUrl(dst)} target="_blank" rel="noreferrer">{dst}</a>
					</div>
				</div>
				<div className='approve-window__details-row'>
					<div className='approve-window__details-col approve-window__details-col--title'>
						Transaction fees:
					</div>
					<div className='approve-window__details-col'>
						{convertFromNano(fee as unknown as number)} tokens
					</div>
				</div>
				<div className='approve-window__details-row'>
					<div className='approve-window__details-col approve-window__details-col--title'>
						Message signer public key:
					</div>
					<div className='approve-window__details-col'>
						{signkey}
					</div>
				</div>
			</div>
			{hasOutgoingTransfers
				? <div className='approve-window__details-description'>
					Outgoing transfers from account:
				</div>
				: <div className='approve-window__details-description'>
					No outgoing transfers.
				</div>
			}
			{hasOutgoingTransfers
				&& <div className='approve-window__transfers'>
					<div className='approve-window__transfers-row'>
						<div className='approve-window__transfers-col approve-window__transfers-col--title'>
							Recipient
						</div>
						<div className='approve-window__transfers-col approve-window__transfers-col--title'>
							Amount
						</div>
					</div>
					{out.map((spending, index) => {
						//@ts-ignore sdk types error
						const recipient = spending.recipient || spending.dst;

						return (
							<div key={`${recipient}-${index}`} className='approve-window__transfers-row'>
								<div className='approve-window__transfers-col'>
									<a href={createExplorerUrl(recipient)} target="_blank" rel="noreferrer">{recipient}</a>
								</div>
								<div className='approve-window__transfers-col'>
									{convertFromNano(spending.amount as unknown as number)} tokens
								</div>
							</div>
						)
					})}
				</div>
			}
			{!!setcode
				&& <div className='approve-window__details-description approve-window__details-description--warning'>
					Warning: the transaction will change the account smart contract code!
				</div>
			}
			<div className='approve-window__confirm'>
				<ConfirmInput approveCallback={handleApprove} />
			</div>
		</Modal>
	);
}

export default ApproveWindow;
