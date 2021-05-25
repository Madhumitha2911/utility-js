const map = require('../js/map');

describe('map', () => {

    it('map will give cube the elements in list when cube is given', () => {
        const list = [1, 2, 3];
        const cube = value => (value ** 3);
        const expected = [1, 8, 27];
        expect(map(list, cube)).toEqual(expected);
    })

    it('map will give the same  elements in list when identity is given', () => {
        const list = [1, 2, 3];
        const identity = value => (value);
        const expected = [1, 8, 27];
        expect(map(list, identity)).toEqual(expected);
    })
    it('map will give the empty list when empty list is given', () => {
        const list = [];
        const cube = value => (value ** 3);
        const expected = [];
        expect(map(list, cube)).toEqual(expected);
    })


})