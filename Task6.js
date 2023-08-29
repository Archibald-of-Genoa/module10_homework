const arrOne = [
    42,
    'Hello',
    true,
]

const arrTwo = [
    42,
    'Hello',
    true,
]

const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    };

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true
}

if (arraysAreEqual(arrOne, arrTwo)) {
    console.log("Массивы равны");
} else {
    console.log("Массивы не равны");
}

arraysAreEqual(arrOne, arrTwo);