let arg = prompt('Введите значение');

switch (arg % 2) {
    case 0:
        console.log("Число чётное");
        break;
    case 1:
    case -1:
        console.log("Число нечётное");
        break;
    case NaN:
    default:
        console.log("Упс, кажется, вы ошиблись");
}
