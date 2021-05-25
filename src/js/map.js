const head = require('./head');
const tail = require('./tail');


let result = [];
const map = (list, condition) => {
    if (list.length === 0) {
        return result;
    }
    const headValue = head(list);
    const functionResult = condition(headValue);
    result.push(functionResult);

    return map(tail(list), condition);

}

module.exports = map;