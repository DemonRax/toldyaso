// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../components/App';

describe('App', () => {
    it('[snapshot] should render', () => {
        const c = shallow(<App />);
        expect(c).toMatchSnapshot();
    });
});
