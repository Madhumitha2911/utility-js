const head = require('./head');
const tail = require('./tail');

let result = 0;
const reduce = (list, reducer, initialValue = '') => {
    if (list.length === 0) {
        if (initialValue) {
            return initialValue;
        } else {
            return [];
        }
    }
    const headValue = head(list);
    const updatedAccumulator = reducer(initialValue, headValue);

    return reduce(tail(list), reducer, updatedAccumulator);
}

module.exports = reduce;