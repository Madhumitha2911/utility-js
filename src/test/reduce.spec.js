const reduce = require('../js/reduce')

describe('reduce', () => {

    it('reduce will give empty list if the list is empty and initial value is not given', () => {
        const list = [];
        const condition = (x, y) => (x + y);
        const expected = [];
        expect(reduce(list, condition)).toEqual(expected);
    })

    it('reduce will be initial value if the list is empty and initial value is given', () => {
        const list = [];
        const initialValue = 10;
        const condition = (x, y) => (x + y);
        const expected = 10;
        expect(reduce(list, condition, initialValue)).toEqual(expected);
    })

    it('reduce will  add the elements in list', () => {
        const list = ['a', 'b', 'c'];
        const condition = (x, y) => (x + y);
        const expected = 'abc';
        expect(reduce(list, condition)).toEqual(expected);
    })

    it('reduce will  add the elements in list and also the initial value', () => {
        const list = ['a', 'b', 'c'];
        const initialValue = 'z';
        const condition = (x, y) => (x + y);
        const expected = 'zabc';
        expect(reduce(list, condition, initialValue)).toEqual(expected);
    })

})