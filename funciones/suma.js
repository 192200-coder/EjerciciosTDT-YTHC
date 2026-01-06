const suma = (...args) => {
    if (args.length === 0) {
        return 0;
    }

    for (const arg of args) {
        if (typeof arg !== "number") {
            return null;
        }
    }

    return args.reduce((acc, current) => acc + current, 0);
};

module.exports = suma;