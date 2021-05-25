const min = require('../js/min');

describe('min', () => {
    it('min of [1,2,3] is 1', () =>{
        expect(min([1,2,3])).toEqual(1);
    })
})