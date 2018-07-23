// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FetchList } from '../client';
import type { State } from '../reducers/RootReducer';
import { AppState } from '../reducers/RootReducer';
import { Button } from 'react-bootstrap';

type Props = {
    fetchList: () => string
};

export class DisconnectedApp extends React.Component<Props> {
    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={() => this.props.fetchList()}>
                    Submit
                </Button>
            </div>
        );
    }
}

export const mapStateToProps = (state: AppState) => {
    return {
        list: state.list
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchOrder: () => dispatch(FetchList())
    };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp);
