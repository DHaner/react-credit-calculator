
const formatMoney = (value : number) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style : "currency",
        currency : "USD"
    })
    return formatter.format(value);
}

const calculateTotal = (amount : number, months : number) : number => {
    let total : number = 0;

    //Si la cantidad es mayor, el interes es menor
    if(amount < 2500) total = amount * 1.3;
    else if(amount >= 2500 && amount < 5000) total = amount * 1.2;
    else if(amount >= 5000 && amount <= 10000) total = amount * 1.1;

    //Si el plazo es mayor, el interes es mayor
    if(months === 3) total *= 1.05;
    else if (months === 6) total *= 1.1
    else if (months === 12) total *= 1.2
    else if (months === 24) total *= 1.4
    
    return total;
}

export {
    formatMoney,
    calculateTotal
}