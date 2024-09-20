function printA(){
    console.log(`A`);
}
function printB(callback){ //printC를 callback으로 받음
    setTimeout(() => {
        console.log(`B`);
        callback();
    }, 2000);
}
function printC(){
    console.log(`C`);
}

printA();
printB(printC);

// A B C