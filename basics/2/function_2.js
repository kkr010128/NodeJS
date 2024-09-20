// 함수를 상수로 선언함. 재사용성, 함수의 이름을 지정할 필요 없음
const greeting = function(name){
    console.log(name);
}

// 함수 선언과 호출을 동시에 함
(function(a,b){
    console.log(`${a}와 ${b}의 합은 ${a+b}`);
})