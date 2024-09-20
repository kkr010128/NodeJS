// 비동기 처리 :
// 시간이 걸리는 함수와 빨리 처리할 수 있는 함수가 뒤섞여 있을 때 함수들을 원하는 처리 순서에 맞게 프로그래밍하는 것
// 함수의 argument로 함수를 넘겨 다른 함수의 매개변수로 사용하는 것

function printA(){
    console.log(`A`);
}
function printB(){
    setTimeout(() => {
        console.log(`B`);
    }, 2000);
}
function printC(){
    console.log(`C`);
}

printA();
printB();
printC();