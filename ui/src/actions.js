// @flow

export type Action = {
    type: string,
    data: any
};

export const ActionTypes = {
    LIST_FAILED: 'LIST_FAILED',
    LIST_SUCCESS: 'LIST_SUCCESS'
};
