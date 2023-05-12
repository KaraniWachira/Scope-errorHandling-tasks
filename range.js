
//2. Write a JavaScript program to check whether a given number is in a given range. e.g. 60, rage 50-100 returns true

function inRange (number, min, max) {

    if (number >= min && number <= max) {
        return true;
    } else {
        return false;
    }
}

console.log(inRange(25, 1, 100));




























