const items = [
    42,
    'Hello',
    true,
    { key: 'value' },
    [1, 2, 3],
    null,
    undefined,
    new Date(),
    /regex/,
    Symbol('foo'),
    function () { },
    BigInt(12345678901234567890),
];

const freeArr = (arr) => {
    console.log(arr.length);
    arr.forEach((e) => {
        console.log(e);
    })
};

freeArr(items)