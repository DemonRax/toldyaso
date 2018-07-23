// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedApp } from '../../components/App';

describe('App', () => {
    it('[snapshot] should render', () => {
        const c = shallow(<DisconnectedApp />);
        expect(c).toMatchSnapshot();
    });
});
