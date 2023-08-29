const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomValue = randomNum();