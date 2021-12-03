const wordSearch = (letters, word) => {

    let horizontalJoin = letters.map(ls => ls.join('')) // horizontal checking
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }

    const letters2 = transpose(letters);
    horizontalJoin = letters2.map(ls => ls.join('')) // horizontal checking
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}


const transpose = (twoArray) => {
    let m = twoArray[0].length;// horizontal length of first array
    let n = twoArray.length; // vertical length of array
    let output = [];
    for (let i = 0; i < m; i++) {
        let outputRow = [];
        for (let j = 0; j < n; j++) {
            outputRow.push(twoArray[j][i]);
        }
        output.push(outputRow);
    }
    return output;
};

module.exports = wordSearch




