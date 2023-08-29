const freeMap = new Map([
    ['имя', 'Артём'],
    ['возраст', 34],
    ['активен', true],
    ['любимые числа', [7, 14, 21]],
]);

for (let entry of freeMap.entries()) {
    console.log(`Ключ — ${entry[0]}, значение — ${entry[1]}`);
}