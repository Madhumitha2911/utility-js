const max = require('../js/max');

describe('max', () => {

    it('max of [1,2,,3] is [1]', () => {
        expect(max([1,2,3])).toEqual(3);
    })
})