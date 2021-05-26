const filter = require('../js/filter')

describe('filter', () => {

    it('filter will give all the elements in list greater than 1', () => {
        const list = [1, 2, 3];
        const condition = value => (value > 1);
        const expected = [2, 3];
        expect(filter(list, condition)).toEqual(expected);
    })

    it('filter will give empty list when when empty list is given as input', () => {
        const list = [];
        const condition = value => (true);
        const expected = [];
        expect(filter(list, condition)).toEqual(expected);
    })

    it('filter will give same list when when true is given as condition', () => {
        const list = [1, 2, 3];
        const condition = value => (true);
        const expected = [1, 2, 3];
        expect(filter(list, condition)).toEqual(expected);
    })

    it('filter will give empty list when when false is given as condition', () => {
        const list = [1, 2, 3];
        const condition = value => (false);
        const expected = [];
        expect(filter(list, condition)).toEqual(expected);
    })

    it('filter will give only uppercase letters in list when when filterUppercase is given as condition', () => {
        const list = ['a', 'A', 'b', 'C', 'D'];
        const condition = value => (value >= 'A' && value <= 'Z');
        const expected = ['A', 'C', 'D'];
        expect(filter(list, condition)).toEqual(expected);
    })

})