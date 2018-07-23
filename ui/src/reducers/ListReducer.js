// @flow
import { Order } from '../domain/Order';
import { Article } from '../domain/Article';
import { ActionTypes } from '../actions/ActionTypes';
import type { Action } from '../actions/ActionTypes';

export const initialOrder = new Order().addSubOrder().addArticle(0, new Article());

export const orderReducer = (previousState: List = initialOrder, action: Action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return initialOrder;
        case ActionTypes.SET_COUNTRY:
            return previousState.setCountry(action.data);
        case ActionTypes.SET_CUSTOMER:
            return previousState.setCustomer(action.data);
        case ActionTypes.SET_VOUCHER:
            return previousState.setVoucher(action.data);
        case ActionTypes.ADD_SUBORDER:
            return previousState.addSubOrder();
        case ActionTypes.DEL_SUBORDER:
            return previousState.delSubOrder(action.data.subOrderIndex);
        case ActionTypes.ADD_ARTICLE:
            return previousState.addArticle(action.data.subOrderIndex, new Article());
        case ActionTypes.DEL_ARTICLE:
            return previousState.delArticle(action.data.subOrderIndex, action.data.articleIndex);
        case ActionTypes.UPD_ARTICLE:
            return previousState.updateArticle(
                action.data.subOrderIndex,
                action.data.articleIndex,
                action.data.article
            );
        case ActionTypes.SET_STORE:
            return previousState.setStore(action.data.subOrderIndex, action.data.store);
        case ActionTypes.SET_FT:
            return previousState.setFT(action.data.subOrderIndex, action.data.ft);
        case ActionTypes.SET_DM:
            return previousState.setDM(action.data.subOrderIndex, action.data.dm);
        case ActionTypes.FETCHED_ORDER:
            return previousState.addResultJSON(action.data);
        case ActionTypes.FAILED_ORDER:
            return previousState.addResultJSON(action.data);
        default:
            return previousState;
    }
};
