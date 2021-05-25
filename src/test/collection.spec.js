const {head,tail} = require('../js/collection');

describe('collection', () => {

    it('head of [1, 2, 3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    })

    it('head of []',() => {
        expect(head([])).toEqual(null);
    })
    it('tail of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    })
    it('tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    })

})
