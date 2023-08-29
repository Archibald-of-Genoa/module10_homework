if (!isNaN(x)) {
    console.log(`${x} - число`);
} else if (typeof x === 'string') {
    console.log(`${x} - строка`);
} else if (typeof x === 'boolean') {
    console.log(`${x} - это логическое значение`);

} else {
    console.log(`Тип х не определён`);

}