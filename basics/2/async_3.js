const order = (coffee, callback) => {
    console.log(`${coffee}주문이 접수되었습니다.`);
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}

const display = (result) => {
    console.log(`${result} 제조가 완료되었습니다.`);
}

order(`아메리카노`, display);