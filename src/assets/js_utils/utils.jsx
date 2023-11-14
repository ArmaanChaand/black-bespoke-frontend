export function isPureInteger(num) {
    const result =  num % 1 === 0;
    if (result) {
        // console.log(`${number} is a pure integer.`);
        return true
    } else {
        // console.log(`${number} is not a pure integer.`);
        return false
    }
}
export function roundToNearestPositiveInteger(number) {
    return Math.round(Math.abs(number));
}
export function roundToNextPositiveInteger(num) {
    return Math.ceil(num);
  }
  