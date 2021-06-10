const palindromes = function (str) {
    const filteredStr=str.replace(/[^\w]|_/g,"").toLowerCase();
    const rev=filteredStr.split("").reverse().join("");
    return rev==filteredStr;
};


module.exports = palindromes;
