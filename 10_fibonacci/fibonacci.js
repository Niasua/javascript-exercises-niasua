const fibonacci = n => {
    n = Number(n);

    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

module.exports = fibonacci;



// Do not edit below this line
module.exports = fibonacci;
 