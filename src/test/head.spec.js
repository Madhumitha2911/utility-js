const head = require('../js/head');

describe('head', () => {

    it('head of [1, 2, 3] is 1', () => {
        expect(head([1, 2, 3])).toEqual(1);
    })

    it('head of []', () => {
        expect(head([])).toEqual(null);
    })
})