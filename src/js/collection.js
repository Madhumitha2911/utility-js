const head = (list) =>{
    if (list.length == 0)
        return null;
    return list[0];
}

const tail = (list) => {
    return list.slice(1);
}

module.exports = {
    head,
    tail
};
