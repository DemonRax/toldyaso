//@flow
import { GlobalProvider } from '../globals';

describe('Global Provider', () => {
    it('any provided window is accessible', () => {
        expect(GlobalProvider.getWindow()).toBe(window);
    });

    it('any provided document is accessible', () => {
        expect(GlobalProvider.getDocument()).toBe(window.document);
    });
});
