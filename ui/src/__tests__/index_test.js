//@flow
import ReactDOM from 'react-dom';
import { init } from '../index';
import { GlobalProvider } from '../globals';
jest.mock('../globals');
jest.mock('react-dom');

describe('index', () => {
    let documentMock = {
        getElementById: jest.fn()
    };
    beforeEach(() => {
        GlobalProvider.getDocument = jest.fn().mockReturnValue(documentMock);
        documentMock.getElementById = jest.fn();
    });

    it('does not render', () => {
        init();
        expect(ReactDOM.render).not.toBeCalled();
    });

    it('does render', () => {
        documentMock.getElementById = jest.fn().mockReturnValue({});
        init();
        expect(ReactDOM.render).toBeCalled();
    });
});
