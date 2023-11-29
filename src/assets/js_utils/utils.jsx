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

export function formatDate(inputDate) {
    // Array of weekday names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Array of month names
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    // Get the day of the week, month, and year from the Date object
    const dayOfWeek = weekdays[inputDate.getDay()];
    const dayOfMonth = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
  
    // Construct the formatted date string
    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  
    return formattedDate;
}

export function encodeString(inputString) {
    return btoa(inputString); // Using Base64 encoding for simplicity
}
  
export function decodeString(encodedString) {
    return atob(encodedString); // Decode Base64
}

export function getCustomerId(){
    const encoded = sessionStorage.getItem('blackbespokecustomer')
    if(encoded){
        return decodeString(encoded)
    }
    return encoded
}
export function setCustomerId(id){
    if(id){
        sessionStorage.setItem('blackbespokecustomer', encodeString(id))
        return true
    }
    
    return false
}

  