const head = require('./head');
const tail = require('./tail');


let result = [];
const filter = (list, condition) => {
    if (list.length === 0) {
        return result;
    }
    const headValue = head(list);
    const functionResult = condition(headValue);
    if (functionResult) {
        result.push(headValue);
    }

    return filter(tail(list), condition);

}

module.exports = filter;