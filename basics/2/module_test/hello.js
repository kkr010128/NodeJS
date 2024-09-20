const hello = (name) => {
    console.log(`nice to meet you ${name}`);
};

module.exports = hello;


// 아래처럼 모듈에서 함수을 정의할 때 맨 앞에 exports를 붙여 함수를 직접 내보낼 수도 있음
// 이 경우에는 module.exports를 사용하지 않아도 됨

// exports.hello = (neme) => {
//     console.log(`nice to meet you ${name}`);
// };