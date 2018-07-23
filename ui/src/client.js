// @flow
import { ActionTypes } from './actions';
import { GlobalProvider } from './globals';

export const FetchList = () => {
    return async (dispatch: any): Promise<void> => {
        try {
            // const prefix = '';
            const prefix = 'http://localhost:4701'; // for local use
            const response = await GlobalProvider.getWindow().fetch(prefix + '/', {
                method: 'GET'
            });
            if (response.status !== 200) {
                const message = await response.text();
                dispatch({ type: ActionTypes.LIST_FAILED, data: { error: { status: response.status, message } } });
            } else {
                const json = await response.json();
                dispatch({ type: ActionTypes.LIST_SUCCESS, data: json });
            }
        } catch (e) {
            // to get more details, consider using more advanced error handling, see for example
            // https://stackoverflow.com/questions/28556398/how-to-catch-neterr-connection-refused
            dispatch({
                type: ActionTypes.LIST_FAILED,
                data: { error: { message: 'An exception occurred: ' + e.message } }
            });
        }
    };
};
