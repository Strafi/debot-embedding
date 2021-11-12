import {
	TPushItemToStageAction,
	TClearStageAction,
	TSetSigningBoxAction,
	TSetApproveWindowAction,
	TSetDebotsFilterKeyAction,
	TSetLocalDebotsListAction,
	TSetIsDebotErrorAction
} from "../types";

export const PUSH_ITEM_TO_STAGE = 'debot/PUSH_ITEM_TO_STAGE';
export const CLEAR_STAGE = 'debot/CLEAR_STAGE';
export const SET_SIGNING_BOX = 'debot/SET_SIGNING_BOX';
export const SET_APPROVE_WINDOW = 'debot/SET_APPROVE_WINDOW';
export const SET_DEBOTS_FILTER_KEY = 'debot/SET_DEBOTS_FILTER_KEY';
export const SET_LOCAL_DEBOTS_LIST = 'debot/SET_LOCAL_DEBOTS_LIST';
export const SET_IS_DEBOT_ERROR = 'debot/SET_IS_DEBOT_ERROR';

export const pushItemToStage: TPushItemToStageAction = item => ({
	type: PUSH_ITEM_TO_STAGE,
	payload: item,
})

export const clearStage: TClearStageAction = () => ({ type: CLEAR_STAGE })

export const setSigningBox: TSetSigningBoxAction = signingBoxInfo => ({
	type: SET_SIGNING_BOX,
	payload: signingBoxInfo,
})

export const setApproveWindow: TSetApproveWindowAction = approveWindowInfo => ({
	type: SET_APPROVE_WINDOW,
	payload: approveWindowInfo,
})

export const setDebotsFilterKey: TSetDebotsFilterKeyAction = filterValue => ({
	type: SET_DEBOTS_FILTER_KEY,
	payload: filterValue,
})

export const setLocalDebotsList: TSetLocalDebotsListAction = debotsList => ({
	type: SET_LOCAL_DEBOTS_LIST,
	payload: debotsList,
})

export const setIsDebotError: TSetIsDebotErrorAction = isError => ({
	type: SET_IS_DEBOT_ERROR,
	payload: isError,
})
