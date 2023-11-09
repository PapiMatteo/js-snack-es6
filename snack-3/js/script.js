const nameArray = ["pippo", "pluto", "paperino", "topolino", "minnie"];

const min = 1;
const max = 3;
const newArray = subArray(nameArray, min, max);



function subArray(arrayToCHeck, start, end){
    const result = [];
    arrayToCHeck.forEach((elem, index) => {
        if (index >= start && index <= end) {
            result.push(elem);
        }
    })
    return result
}

console.log(newArray);