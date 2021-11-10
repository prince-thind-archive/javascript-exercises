const palindromes = function (str) {
    const filteredStr=str.replace(/[^\w]|_/g,"").toLowerCase();
    const rev=filteredStr.split("").reverse().join("");
    return rev==filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
