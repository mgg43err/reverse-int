module.exports = function reverse(n) {
        if (n < 0) {
            n = n * (-1);
        }
        n = Number(n.toString().split('').reverse().join(',').replace(/,/g, ''));
        console.log(n);
        return n;
    }
    /* reverse(-192); */