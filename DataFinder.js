const int_values = [1, 2, 3, 4, 5, 9];

const getValueByRange = (minRange, maxRange, value) => {
    if (minRange > int_values.length - 1 ||maxRange > int_values.length - 1) {
        return console.log("Invalid Range")
    }
    
    for (let i = minRange; i < int_values.length; i++) {
        if (int_values[i] === value) {
            return console.log(int_values[i])
        } else {
            return console.log("Invalid Range")
        }
    }
}

getValueByRange(5, 4, 5)